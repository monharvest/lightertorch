// Post helpers shared by the header, footer, home, category and post pages:
// the article list, URLs, reading time, topic membership and related posts.
import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS, type CountedLink, type Entry, type TopicDef } from './topics';

export type Post = CollectionEntry<'blog'>;

/** Posts with at least one category. About, Privacy and Disclosure have none. */
export async function getArticles(): Promise<Post[]> {
	return (await getCollection('blog')).filter((p) => (p.data.categories?.length ?? 0) > 0);
}

export const postHref = (p: Post) => `/${p.id}/`;
export const categoryHref = (category: string) =>
	`/category/${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}/`;
export const newestFirst = (a: Post, b: Post) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

/** Reading time at 230 words a minute, not counting HTML tags or link URLs. */
export function readingMinutes(p: Post): number {
	const text = (p.body ?? '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\]\([^)]*\)/g, ']')
		.replace(/https?:\/\/\S+/g, ' ');
	const words = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
	return Math.max(1, Math.round(words / 230));
}

export type ResolvedLink = { href: string; label: string; description: string };
export type Topic = Omit<TopicDef, 'feat' | 'cols' | 'foot'> & {
	feat: ResolvedLink;
	cols: { heading: string; links: ResolvedLink[]; more?: { href: string; text: string } }[];
	foot: { href: string; title: string; text: string };
	/** Every page the topic links to, for marking the current section. */
	hrefs: string[];
};

export function resolveTopics(posts: Post[]): Topic[] {
	const bySlug = new Map(posts.map((p) => [p.id, p]));
	const link = ([slug, label]: Entry): ResolvedLink => {
		const p = bySlug.get(slug);
		if (!p) throw new Error(`Topic list links a missing post: ${slug}`);
		return { href: postHref(p), label, description: p.data.description };
	};
	const counted = ({ href, text, category }: CountedLink) => ({
		href,
		text: category ? text.replace('{n}', String(posts.filter((p) => p.data.categories?.includes(category)).length)) : text,
	});
	return TOPICS.map((t) => {
		const feat = link(t.feat);
		const cols = t.cols.map((c) => ({ heading: c.heading, links: c.links.map(link), more: c.more && counted(c.more) }));
		const foot = { title: t.foot.title, ...counted(t.foot) };
		const hrefs = [t.href, feat.href, foot.href, ...cols.flatMap((c) => [...c.links.map((l) => l.href), ...(c.more ? [c.more.href] : [])])];
		return { ...t, feat, cols, foot, hrefs };
	});
}

/** The topic a post belongs to: the first topic that lists it, else by its slug. */
export function topicOf(p: Post): TopicDef['id'] {
	const listed = TOPICS.find((t) => [t.feat, ...t.cols.flatMap((c) => c.links)].some(([slug]) => slug === p.id));
	if (listed) return listed.id;
	if (/flashlight|torch|lumen|candela|headlamp|lantern/.test(p.id)) return 'flashlights';
	if (/lighter|zippo|bic|butane/.test(p.id)) return 'lighters';
	return 'safety';
}

// Words in a slug that say nothing about the subject.
const STOP_WORDS = new Set(
	'a an and or the for to of in on is it what how do does you can vs with why should have many best top most under guide comprehensive market today flashlight torch lighter'.split(' '),
);
/** Subject words from the slug, singular ("camping", "zippo", "headlamp"). */
const slugWords = (p: Post) =>
	new Set(
		p.id
			.split('-')
			.map((w) => (w.length > 3 ? w.replace(/s$/, '') : w))
			.filter((w) => !STOP_WORDS.has(w) && !/^\d+$/.test(w)),
	);

/**
 * Posts to read next: same topic, shared subject words in the slug, shared
 * categories and tags, newest on ties. Tags are free-form and mostly brand
 * names, so the slug words carry the subject.
 */
export function relatedPosts(p: Post, posts: Post[], n = 3): Post[] {
	const topic = topicOf(p);
	const words = slugWords(p);
	const categories = new Set(p.data.categories);
	const tags = new Set(p.data.tags);
	const score = (o: Post) =>
		(topicOf(o) === topic ? 3 : 0) +
		2 * [...slugWords(o)].filter((w) => words.has(w)).length +
		2 * (o.data.categories ?? []).filter((c) => categories.has(c)).length +
		(o.data.tags ?? []).filter((t) => tags.has(t)).length;
	return posts
		.filter((o) => o.id !== p.id)
		.map((o) => ({ o, s: score(o) }))
		.sort((a, b) => b.s - a.s || newestFirst(a.o, b.o))
		.slice(0, n)
		.map(({ o }) => o);
}
