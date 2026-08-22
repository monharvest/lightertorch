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
   - [x] `/a-gas-lighter-last-how-long/` (2026-08-17) — **highest-value rewrite on the site.** Targets the BIC-lifespan cluster (~1,800/mo, SD 23–31, was pos 56–92). Retitled to the query people actually type ("How Long Does a BIC Lighter Last? (And Do Lighters Expire?)") — the old title "A gas lighter last how long?" contained none of it. Also corrected four wrong/unsafe claims the old post made: that you can refill a BIC and replace its flint (sealed unit), that a Zippo runs on **gasoline, kerosene or diesel** (naphtha only), that lighters should be stored in a **freezer**, and that warmth extends lighter life. Hero image still pending — prompt in `PROMPTS-2026-08-17.md`.
   - [x] `/what-is-the-best-torch-for-camping/` (2026-08-14) — was a thin single-product post that cannibalized the top-10 camping list. Repositioned as the **decision framework** (headlamp vs lantern vs handheld) that feeds the list post rather than competing with it.

## Phase 3 — New content (2–4 posts/month)

Format per post: 1,200–1,800 words, one target keyword, 2–4 tagged Amazon links, 2–3 internal links, comparison table.

### Buying guides (highest earning potential)
- [x] Best EDC flashlights under $50 (2026) → `/best-edc-flashlights-under-50/` (2026-08-07)
- [x] Best headlamps for camping & running → `/best-headlamps-for-camping-and-running/` (2026-08-14)
- [x] Best flashlights for power outages → `/best-flashlights-for-power-outages/` (2026-08-02)
- [x] Best keychain flashlights → `/best-keychain-flashlights/` (2026-08-14)
- [~] ~~Best flashlights for kids (gift intent)~~ — **KILLED 2026-08-17.** Ubersuggest: search volume **0**. The gift-intent logic was fine, the keyword doesn't exist. Validate volume before writing anything else on this list.
- [x] Best arc/plasma lighters for camping → `/best-arc-lighters-for-camping/` (2026-08-01)
- [ ] Best candle lighters for the home — **best remaining buying guide.** "best candle lighter" = 320/mo, transactional, CPC $1.70, and strongly seasonal (210 summer → 480 Nov → **720 Dec**). SD 39 is a stretch at DA 6, so treat as a Q4 bet. Write in September to index before the season. Must differentiate from `/best-arc-lighters-for-camping/` (home/kitchen/candle vs outdoor) to avoid the cannibalization problem just fixed on the camping post.
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

### Hero images for the 2026-08-14 batch — DONE

All three heroes generated, selected, converted to `.webp` and wired into
frontmatter on 2026-08-14. Build passes with the images resolving.

**Note for future batches:** the xAI API route is **blocked — the account has no
credits** (the key in `~/.hermes/.env` is valid, the balance is not). These were
made through grok.com in the browser instead. `PROMPTS-2026-08-14.md` documents
the working retrieval method, including the two automation gotchas that waste the
most time (the download button doesn't complete, and the DOM `<img>` src goes
stale — take the post ID from the tab URL and fetch the public
`imagine-public.x.ai` mirror instead).

## Strategy reset — GSC + Ubersuggest review, 2026-08-17

First real data review. It changed the plan's direction, so the reasoning is
recorded here rather than lost in chat.

**The numbers.** GSC 28 days: 1.45K impressions, **4 clicks**, avg position
**45.4**. Ubersuggest: **domain authority 6**, 40 backlinks, 30 referring
domains, 78 ranking keywords — nearly all at position 47–99.

**What this means.** Authority, not content volume, is the binding constraint.
Every flashlight buying-guide keyword the site targets is maximum commercial
competition (`competition` 0.96–1.00, paid difficulty 96–100) and the site sits
at position 61–98 on all of them: "best flashlights on amazon" (1,600/mo, pos
61), "best torch brand" (1,900/mo, pos 86), "durable flashlight" (3,600/mo, pos
80), "camping torch" (720/mo, pos 93). **More flashlight buying guides go into
the same wall.**

**Where the site can actually win: low-difficulty lighter clusters it already
ranks for.**

| Cluster | Page | Combined vol | SD | Position |
|---|---|---|---|---|
| BIC lighter lifespan | `/a-gas-lighter-last-how-long/` | ~1,800/mo | 23–31 | 56–92 |
| Zippo repair/care | `/zippo-repairs.../` | ~930/mo | 18–35 | 47–54 |

Both are now rewritten (Zippo 08-14, BIC 08-17). SD 18–35 against DA 6 is
genuinely winnable, unlike SD 30–42 at competition 1.00.

**Actions taken:** rewrote `/a-gas-lighter-last-how-long/` (see Phase 2 list);
killed the kids-flashlight post on zero volume.

**The gap nobody has addressed: there is no link-building in this plan.** 30
referring domains is why good pages sit at position 60. Content alone will not
move that. This is the highest-leverage unaddressed item on the whole roadmap.

**Next review:** wait ~4–6 weeks for the August rewrites to re-index, then
re-pull GSC and check whether the two clusters above moved. That measurement
matters more than the next post.

## 2026-08-22 — Ubersuggest check + smallest source fixes

Verified US desktop data: 78 keywords, DA 6, 31 referring domains, 4 official
quick wins, 82 existing-content opportunities on 22 URLs.

**Do not recreate** `/what-is-the-most-powerful-rechargeable-torch/` — it already
301s to `/what-is-the-best-long-range-flashlight/`. Ubersuggest is stale there.

**Source-ready, not deployed** (push `master` only after Batu approves):

- Homepage now has an H1, a short intro, and links into durable / long-range /
  Zippo repair / BIC lifespan. Legal pages no longer appear in the post grid.
- Nav category links use trailing slashes (were causing 308s).
- Durable-flashlight title/description retargeted; related links added.
- Long-range page now answers “powerful rechargeable torch” and links back to
  the durable page. EDC FAQ also links the durable page.

**Next content, in order:**

1. Rewrite `/sunitact-flashlights-high-lumens-review/` — ranks at 33 but the
   body is leftover WP junk and names a ThruNite as the verdict.
2. Full rewrite of the durable-flashlight body (still generic WP HTML). Metadata
   and links are already in place.
3. Do **not** add another flashlight buying guide. Wait for GSC on the Aug 14–17
   BIC and Zippo rewrites (~mid-September).
4. If writing anything new: `best candle lighter` in September (320/mo, seasonal).
5. Link-building is still the highest-leverage item this plan does not execute.

Ubersuggest “4xx / broken link” is Cloudflare email protection on the privacy
page (`mailto:support@lightertorch.com`). Leave it unless a rendered-browser
check shows the mail link is actually dead.

## Ongoing

- Check **Google Search Console** monthly (GA4 = G-ZWE72TWTHB) — impressions data decides what to write/update next
- Watch Amazon Associates dashboard for which links click — double down on those pages
- Strategy decision made: **US English primary** ("flashlight" in titles, "torch" secondary), niche = flashlights + lighters only
