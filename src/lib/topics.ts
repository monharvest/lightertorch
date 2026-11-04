// The three topic groups behind the header menu, the home page tiles, the
// footer and "Keep reading". Entries are [post slug, short label]; resolveTopics()
// in posts.ts adds hrefs and descriptions and fails the build on a missing slug.
// "{n}" in a text is replaced with the post count of the named category.
import type { IconName } from '../components/Icon.astro';

export type Entry = [slug: string, label: string];
export type CountedLink = { href: string; text: string; category?: string };

export interface TopicDef {
	id: 'flashlights' | 'lighters' | 'safety';
	label: string;
	/** One line for the home page tile. */
	blurb: string;
	/** Fits "All 18 ___ guides". */
	noun: string;
	/** Category page the top item links to without JS. */
	href: string;
	icon: IconName;
	feat: Entry;
	cols: { heading: string; links: Entry[]; more?: CountedLink }[];
	side: { pill: string; title: string; points: string[]; cta: { href: string; label: string } };
	foot: CountedLink & { title: string };
}

export const TOPICS: TopicDef[] = [
	{
		id: 'flashlights',
		label: 'Flashlights',
		blurb: 'Buying guides by type and use, plus what lumens, candela and price really get you.',
		noun: 'flashlight',
		href: '/category/buying-guides/',
		icon: 'flashlight',
		feat: ['best-flashlights-on-amazon', 'The best flashlights on Amazon'],
		cols: [
			{
				heading: 'By type',
				links: [
					['best-edc-flashlights-under-50', 'EDC under $50'],
					['best-usb-c-rechargeable-flashlights', 'USB-C rechargeable'],
					['what-is-the-best-long-range-flashlight', 'Long range'],
					['best-keychain-flashlights', 'Keychain'],
				],
			},
			{
				heading: 'By use',
				links: [
					['best-camping-flashlights', 'Camping'],
					['best-headlamps-for-camping-and-running', 'Headlamps'],
					['best-rechargeable-camping-lanterns', 'Rechargeable lanterns'],
					['what-flashlights-do-police-use', 'Police and duty'],
				],
			},
			{
				heading: 'Specs and brands',
				links: [
					['how-many-lumens-should-flashlight-have-2', 'How many lumens?'],
					['lumens-vs-candela-vs-beam-distance', 'Lumens vs candela'],
					['what-is-the-best-torch-brand', 'Best flashlight brands'],
					['olight-vs-fenix-vs-streamlight', 'Olight vs Fenix vs Streamlight'],
				],
			},
		],
		side: {
			pill: 'How we research',
			title: 'Maker specs, not hype.',
			points: [
				'Specs come from the maker, linked in the guide',
				'Manufacturer claims are labeled as claims',
				'Inflated lumen ratings get called out',
			],
			cta: { href: '/about/#how-we-research', label: 'How we research' },
		},
		foot: { href: '/category/buying-guides/', title: 'Buying Guides', text: 'All {n} flashlight and lighter buying guides', category: 'Buying Guides' },
	},
	{
		id: 'lighters',
		label: 'Lighters',
		blurb: 'Zippo, BIC, arc and butane: what to buy, how to refill them and how to fix them.',
		noun: 'lighter',
		href: '/category/torch-lighter-reviews/',
		icon: 'flame',
		feat: ['zippo-vs-bic-vs-arc-lighter', 'Zippo vs BIC vs arc lighter'],
		cols: [
			{
				heading: 'Buying guides',
				links: [
					['top-zippo-best-sellers-on-amazon-lighters-collectibles-more', 'Best Zippo lighters'],
					['zippo-gift-guide', 'Zippo gift guide'],
					['best-arc-lighters-for-camping', 'Arc lighters'],
					['best-candle-lighters', 'Candle lighters'],
				],
			},
			{
				heading: 'Refill and repair',
				links: [
					['how-to-refill-a-zippo-lighter', 'Refill a Zippo'],
					['filling-up-a-gas-lighter', 'Refill a butane lighter'],
					['fixing-a-lighter', "Lighter won't light"],
					['zippo-repairs-how-to-take-care-of-your-zippo-lighter-and-find-replacement-parts', 'Zippo repair guide'],
				],
			},
			{
				heading: 'Zippo parts',
				links: [
					['zippo-flint-replacement', 'Change a Zippo flint'],
					['zippo-wick-replacement', 'Change a Zippo wick'],
					['butane-vs-lighter-fluid-zippo-insert', 'Butane or fluid insert?'],
				],
			},
		],
		side: {
			pill: 'Zippo basics',
			title: 'Every Zippo arrives dry.',
			points: [
				'Zippo ships every lighter without fuel',
				'Fill until the fluid reaches the top of the cotton',
				'Never put butane in a fluid insert',
			],
			cta: { href: '/top-zippo-best-sellers-on-amazon-lighters-collectibles-more/#best-zippo-lighter-fluid-flints-and-wicks', label: 'Fluid, flints and wicks' },
		},
		foot: { href: '/category/torch-lighter-reviews/', title: 'Reviews', text: 'Torch lighter reviews and comparisons' },
	},
	{
		id: 'safety',
		label: 'Safety & How-To',
		blurb: 'Power outages, gas stoves, flying with a lighter, and how lighters actually work.',
		noun: 'safety and how-to',
		href: '/category/how-to-guides/',
		icon: 'shield-check',
		feat: ['best-flashlights-for-power-outages', 'Flashlights for power outages'],
		cols: [
			{
				heading: 'At home',
				links: [
					['manually-lighting-a-gas-stove', 'Light a gas stove by hand'],
					['gas-stove-that-doesnt-ignite', "Gas stove won't light"],
					['make-a-gas-lighter-at-home', 'Make a lighter at home'],
				],
			},
			{
				heading: 'Lighter safety',
				links: [
					['can-a-zippo-explode', 'Can a Zippo explode?'],
					['can-you-bring-a-lighter-on-a-plane', 'Lighters on a plane'],
					['lighter-cause-a-shock', 'Why a lighter shocks you'],
				],
				more: { href: '/category/safety-tips/', text: 'All {n} safety tips', category: 'Safety Tips' },
			},
			{
				heading: 'How it works',
				links: [
					['inside-of-a-gas-lighter', 'How a lighter works'],
					['voltage-in-a-gas-lighter', 'Volts in a gas lighter'],
					['a-gas-lighter-last-how-long', 'How long a BIC lasts'],
				],
			},
		],
		side: {
			pill: 'Storm season',
			title: 'Build the kit before the forecast turns.',
			points: [
				'A lantern per room, a headlamp per person',
				'Never heat your home with a gas stove or oven',
				'A battery-backed CO detector on every level',
			],
			cta: { href: '/best-flashlights-for-power-outages/#the-10-minute-storm-kit-checklist', label: 'The storm-kit checklist' },
		},
		foot: { href: '/category/how-to-guides/', title: 'How-To', text: 'All {n} how-to guides', category: 'How-to Guides' },
	},
];
