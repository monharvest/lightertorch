// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

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

// https://astro.build/config
export default defineConfig({
	site: 'https://lightertorch.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [rehypeAffiliateLinks],
	},
});
