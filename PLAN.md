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

## Phase 2 — Upgrade the money pages (mostly DONE 2026-08-01)

1. ~~Fix "Top 10 Best Selling Flashlights"~~ — all 9 CTAs pointed at a generic best-sellers page; now each links its specific product; title bumped to 2026
2. ~~"Top Zippo Best Sellers"~~ — links were already per-product; added sponsored rel
3. ~~Retitle/refresh camping torches~~ → 2026 (slug still says 2024 — changing it would need a redirect; optional later)
4. ~~Add affiliate links to link-less posts~~ — 31 links added on natural product mentions across 18 posts; USB-C guide's 8 manufacturer product links converted to Amazon searches. Site-wide: 120 tagged links. (gas-stove post left unlinked — no natural anchor)
5. ~~`rel="sponsored nofollow noopener"`~~ — on ALL Amazon links: legacy HTML anchors fixed in source; markdown links handled by rehype plugin in `astro.config.mjs` (automatic for future posts)
6. ~~Hand-tune titles + meta for top pages~~ — done 2026-08-02 for the 6 highest-visibility pages, driven by GSC top query "amazon best flashlight"; revisit monthly as GSC data grows
7. ~~**Language pass on legacy posts**~~ — **DONE 2026-08-14.** Non-native English ("youre", "it's ability") on 2021/2024 posts; all six identified offenders rewritten. Every rewrite kept its slug, so no redirects were needed.
   - [x] `/lighter-cause-a-shock/` (2026-08-07) — GSC pos. 16.9, 55 impr, 0 clicks. Full rewrite: new title/meta, clean markdown, **corrected the physics** (post claimed 800 V; a 3–4 mm spark gap needs 10–20 kV at air's ~3 kV/mm breakdown), added the mains-powered-stove-igniter safety distinction, 5 internal links, FAQ.
   - [x] `/voltage-in-a-gas-lighter/` (2026-08-07) — same wrong-voltage fix (said 7 kV), new title/meta targeting "how many volts is a gas lighter"
   - [x] `/zippo-repairs.../` (2026-08-14) — was generic filler that never mentioned the thing that matters. Rebuilt around **Zippo's free lifetime repair guarantee** and a diagnose-before-you-disassemble table; clear split between DIY parts (flint/wick/fuel) and send-it-back faults (hinge/cam/case). 3 internal links, 7-question FAQ.
   - [x] `/fixing-a-lighter/` (2026-08-14) — leads on the **air-lock** (bleed before refill), which is the actual cause of most "dead" butane lighters and was absent from the old post. Added a lighter-type triage table, cold-weather butane physics (BP ≈ −0.5 °C), arc-lighter faults, and two bin-it-now safety rules.
   - [x] `/manually-lighting-a-gas-stove/` (2026-08-14) — old version had the safety sequence **backwards** (turn gas on, then light). Corrected to flame-first, plus the point no competing article makes: **never manually light a modern gas oven** (glow-bar igniter wired to a safety valve). Repositioned toward the power-outage query.
   - [x] `/what-is-the-best-torch-for-camping/` (2026-08-14) — was a thin single-product post that cannibalized the top-10 camping list. Repositioned as the **decision framework** (headlamp vs lantern vs handheld) that feeds the list post rather than competing with it.

## Phase 3 — New content (2–4 posts/month)

Format per post: 1,200–1,800 words, one target keyword, 2–4 tagged Amazon links, 2–3 internal links, comparison table.

### Buying guides (highest earning potential)
- [x] Best EDC flashlights under $50 (2026) → `/best-edc-flashlights-under-50/` (2026-08-07)
- [x] Best headlamps for camping & running → `/best-headlamps-for-camping-and-running/` (2026-08-14)
- [x] Best flashlights for power outages → `/best-flashlights-for-power-outages/` (2026-08-02)
- [x] Best keychain flashlights → `/best-keychain-flashlights/` (2026-08-14)
- [ ] Best flashlights for kids (gift intent)
- [x] Best arc/plasma lighters for camping → `/best-arc-lighters-for-camping/` (2026-08-01)
- [ ] Best candle lighters for the home
- [x] Zippo gift guide by budget → `/zippo-gift-guide/` (2026-08-02)

### Question posts (easy rankings, feed internal links)
- [x] Lumens vs candela vs beam distance explained → `/lumens-vs-candela-vs-beam-distance/` (2026-08-14) — best internal-link hub on the site; already linked from the long-range, lumens, EDC and camping posts
- [ ] Are rechargeable batteries worth it? (18650 vs AA)
- [ ] Why does my rechargeable flashlight die so fast?
- [x] Can you bring a lighter/flashlight on a plane? → `/can-you-bring-a-lighter-on-a-plane/` (2026-08-01)
- [ ] Butane vs lighter fluid: which Zippo insert?
- [ ] How to store lighters and fuel safely
- [ ] IP ratings explained (IPX7 etc.)

### Comparison posts (near-purchase intent)
- [x] Olight vs Fenix vs Streamlight → `/olight-vs-fenix-vs-streamlight/` (published 2026-08-01; use as the template for future comparison posts)
- [x] Zippo vs BIC vs arc lighter → `/zippo-vs-bic-vs-arc-lighter/` (2026-08-01)
- [x] $20 vs $100 flashlight → `/20-vs-100-dollar-flashlight/` (2026-08-02)

### Open item — hero images for the 2026-08-14 batch

The three new posts shipped **without `heroImage`** (the layout hides the image
block when the field is absent, so listings degrade gracefully rather than
breaking). Prompts are written and waiting in
`lightertorch-images/PROMPTS-2026-08-14.md` — generate, convert to `.webp` into
`public/uploads/2026/08/`, then add the `heroImage` line to each of the three
files. The prompt file lists the exact filenames and frontmatter values.

## Ongoing

- Check **Google Search Console** monthly (GA4 = G-ZWE72TWTHB) — impressions data decides what to write/update next
- Watch Amazon Associates dashboard for which links click — double down on those pages
- Strategy decision made: **US English primary** ("flashlight" in titles, "torch" secondary), niche = flashlights + lighters only
