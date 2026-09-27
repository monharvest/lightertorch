// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { raw } from 'hast-util-raw';

// Adds rel="sponsored nofollow noopener" + target="_blank" to Amazon affiliate
// links written in markdown syntax (raw-HTML anchors in legacy posts carry the
// attributes in the source itself).
function rehypeAffiliateLinks() {
	const visit = (node) => {
		if (node.type === 'element' && node.tagName === 'a') {
			const href = node.properties?.href ?? '';
			if (typeof href === 'string' && (href.includes('amazon.com') || href.includes('amzn.to'))) {
				node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
				node.properties.target = '_blank';
			}
		}
		for (const child of node.children ?? []) visit(child);
	};
	return (tree) => visit(tree);
}

// Builds FAQPage JSON-LD from a post's visible FAQ section, so the markup can
// never drift from what readers see. Handles both markdown FAQs
// (`**Question?** answer`, or `### Question?` + paragraphs) and the legacy
// WordPress HTML FAQs (`<h3>Question?</h3><p>answer</p>`). Raw HTML only turns
// into elements after user plugins run, so the FAQ is read from a parsed copy
// of the tree; the page itself is left untouched apart from the added script.
function rehypeFaqSchema() {
	const textOf = (node) =>
		node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('');
	const clean = (s) => s.replace(/\s+/g, ' ').trim();

	const isHeading = (n) => n.type === 'element' && /^(h[1-4]|hr)$/.test(n.tagName);

	return (tree) => {
		const flat = [];
		const walk = (node, parent) => {
			if (node.type === 'element') flat.push({ node, parent });
			for (const child of node.children ?? []) walk(child, node);
		};
		walk(raw(structuredClone(tree)), null);

		const start = flat.findIndex(
			({ node }) => node.tagName === 'h2' && /\b(FAQ|Frequently Asked|Common questions)\b/i.test(textOf(node)),
		);
		if (start === -1) return;

		const faqs = [];
		let current = null;
		for (const { node, parent } of flat.slice(start + 1)) {
			if (node.tagName === 'h2' || node.tagName === 'hr') break;
			if (node.tagName === 'h3' || node.tagName === 'h4') {
				// Heading-style question: the answer is everything after the heading
				// in the same parent, up to the next heading (covers <p> answers,
				// wrapper divs, and bare text lines in legacy HTML).
				const question = clean(textOf(node));
				current = null;
				if (question.endsWith('?')) {
					const siblings = parent.children.slice(parent.children.indexOf(node) + 1);
					const end = siblings.findIndex(isHeading);
					const text = clean((end === -1 ? siblings : siblings.slice(0, end)).map(textOf).join(' '));
					faqs.push({ question, answer: [text] });
				}
			} else if (node.tagName === 'p') {
				const lead = node.children.find((c) => !(c.type === 'text' && !c.value.trim()));
				const leadText = lead?.type === 'element' && ['strong', 'b'].includes(lead.tagName) ? clean(textOf(lead)) : '';
				if (leadText.endsWith('?')) {
					// Markdown-style question: **Question?** answer, plus any plain
					// paragraphs that follow it.
					current = { question: leadText, answer: [clean(clean(textOf(node)).slice(leadText.length))] };
					faqs.push(current);
				} else if (current) {
					current.answer.push(clean(textOf(node)));
				}
			}
		}

		const mainEntity = faqs
			.map(({ question, answer }) => ({ question, text: answer.filter(Boolean).join(' ') }))
			.filter(({ text }) => text)
			.map(({ question, text }) => ({
				'@type': 'Question',
				name: question,
				acceptedAnswer: { '@type': 'Answer', text },
			}));
		if (mainEntity.length === 0) return;

		const json = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity });
		tree.children.push({
			type: 'element',
			tagName: 'script',
			properties: { type: 'application/ld+json' },
			children: [{ type: 'text', value: json.replace(/</g, '\\u003c') }],
		});
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://lightertorch.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeAffiliateLinks, rehypeFaqSchema],
	},
});
