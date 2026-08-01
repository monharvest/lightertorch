# LighterTorch.com — Improvement Plan

Site: https://lightertorch.com · Repo: github.com/monharvest/lightertorch (push to `master` = auto-deploy via Cloudflare Pages)
Amazon Associates tag: `lightertorch-20` (signed up 2026-08-01 — needs **3 qualifying sales by ~Jan 2028** or the account closes)

## ✅ Done (Aug 1, 2026)

- Added `tag=lightertorch-20` to all Amazon links
- Fixed site title/description (was "Astro Blog" template defaults)
- Regenerated all meta descriptions (were raw WordPress markup)
- Amazon Associates disclosure in footer + rewritten /affiliate-disclosure/ page
- Deleted WP junk pages (/home/, /sample-page/) and plugin leftovers in public/uploads
- **Phase 1 content consolidation:**
  - Merged 4 police posts → `/what-flashlights-do-police-use/`
  - Merged 3 Zippo-explosion posts → `/can-a-zippo-explode/`
  - Merged 4 long-range/brightest posts → `/what-is-the-best-long-range-flashlight/`
  - All old URLs 301-redirect (see `public/_redirects`; Cloudflare Pages needs both slash variants)
  - Deleted off-topic backpack post
  - Fixed USB-C guide: title typo, removed 7 expiring manuscdn.com images, added heroImage
  - Categories reduced to 5 canonical: Buying Guides, Torch Lighter Reviews, Safety Tips, How-to Guides, Brands (nav updated)

## Phase 2 — Upgrade the money pages (NEXT)

Priority: the account needs 3 real Amazon sales — the listicles are the best converters.

1. **Rewrite "Top 10 Best Selling Flashlights on Amazon"** — verify products still exist, add comparison table, pros/cons, prominent "Check price on Amazon" links
2. **Rewrite "Top Zippo Best Sellers"** — same treatment
3. **Retitle/refresh "Top 10 Camping Torches of 2024"** → 2026, update picks
4. **Add affiliate links to posts that have none** (~25 posts earn nothing; every "best X"/review post should link 3–5 products)
5. **Add `rel="sponsored nofollow"` to all affiliate links** (Google requirement — scriptable)
6. **Hand-write titles + meta descriptions for top 10 pages** (current ones are auto-generated from opening text — correct but not optimized)
7. **Language pass on 2021 posts** — noticeably non-native English ("youre", "it's ability"); rewrite worst offenders

## Phase 3 — New content (2–4 posts/month)

Format per post: 1,200–1,800 words, one target keyword, 2–4 tagged Amazon links, 2–3 internal links, comparison table.

### Buying guides (highest earning potential)
- [ ] Best EDC flashlights under $50 (2026)
- [ ] Best headlamps for camping & running
- [ ] Best flashlights for power outages / hurricane season
- [ ] Best keychain flashlights
- [ ] Best flashlights for kids (gift intent)
- [ ] Best arc/plasma lighters for camping ← trending, zero site coverage
- [ ] Best candle lighters for the home
- [ ] Zippo gift guide by budget

### Question posts (easy rankings, feed internal links)
- [ ] Lumens vs candela vs beam distance explained
- [ ] Are rechargeable batteries worth it? (18650 vs AA)
- [ ] Why does my rechargeable flashlight die so fast?
- [ ] Can you bring a lighter/flashlight on a plane? (TSA — high volume, evergreen)
- [ ] Butane vs lighter fluid: which Zippo insert?
- [ ] How to store lighters and fuel safely
- [ ] IP ratings explained (IPX7 etc.)

### Comparison posts (near-purchase intent)
- [x] Olight vs Fenix vs Streamlight → `/olight-vs-fenix-vs-streamlight/` (published 2026-08-01; use as the template for future comparison posts)
- [ ] Zippo vs BIC vs arc lighter: cost per year
- [ ] $20 vs $100 flashlight: what you actually get

## Ongoing

- Check **Google Search Console** monthly (GA4 = G-ZWE72TWTHB) — impressions data decides what to write/update next
- Watch Amazon Associates dashboard for which links click — double down on those pages
- Strategy decision made: **US English primary** ("flashlight" in titles, "torch" secondary), niche = flashlights + lighters only
