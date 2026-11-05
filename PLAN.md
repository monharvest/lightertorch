# LighterTorch.com — Improvement Plan

Site: https://lightertorch.com · Repo: github.com/monharvest/lightertorch (push to `master` = auto-deploy via Cloudflare Workers Builds; Pages until 2026-11-04)
Amazon Associates tag: `lightertorch-20` (signed up 2026-08-01 — **application approved 2026-10-01** after the 3-qualifying-sale review, so the 2027-01-28 deadline is cleared; first sales: Aug 28 $1.04, Sep $0.33, plus a third in Sep)

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
- [x] Best candle lighters for the home → `/best-candle-lighters/` (2026-08-24) — "best candle lighter" 320/mo, transactional, seasonal (210 summer → 480 Nov → 720 Dec); published ahead of the peak. Compares electric arc vs refillable butane vs disposable long-reach, differentiated from the arc guide (which covers arc tech for camping). Backlinks added from the arc guide, the Zippo/BIC/arc comparison, and the gas stove post. ~~Hero image outstanding~~ — **DONE 2026-08-31**, `candle-lighter-flexible-neck-jar-candle.webp` wired into frontmatter.
- [x] Zippo gift guide by budget → `/zippo-gift-guide/` (2026-08-02)

### Question posts (easy rankings, feed internal links)
- [x] Lumens vs candela vs beam distance explained → `/lumens-vs-candela-vs-beam-distance/` (2026-08-14) — best internal-link hub on the site; already linked from the long-range, lumens, EDC and camping posts
- [ ] Are rechargeable batteries worth it? (18650 vs AA)
- [ ] Why does my rechargeable flashlight die so fast?
- [x] Can you bring a lighter/flashlight on a plane? → `/can-you-bring-a-lighter-on-a-plane/` (2026-08-01)
- [x] Butane vs lighter fluid: which Zippo insert? → `/butane-vs-lighter-fluid-zippo-insert/` (2026-08-31) — 1,683 words. Leads on the two things no page in the top 20 states plainly: the butane insert carries a **two-year warranty, not the lifetime guarantee**, and it **does not fit Slim®, Armor® or 1935 Replica cases** (both verified on Zippo's own product page). Includes the vapor-lock purge procedure to catch the 0.00-competition troubleshooting queries. Backlinks added from the Zippo repair post (2) and Zippo vs BIC vs arc (2). ~~Hero image outstanding~~ — **DONE 2026-08-31**, `zippo-insert-swap-workbench.webp` (candidate 3, 1280×720) installed and verified against the brief: two inserts, unbranded case, no text or logos.
- [~] ~~How to store lighters and fuel safely~~ — **KILLED 2026-08-31.** Ubersuggest: 10/mo.
- [ ] IP ratings explained (IPX7 etc.) — **check for cannibalization first.** The
  2026-08-30 durable-flashlight rewrite now carries a full IPX4/IPX7/IPX8/IP68
  table plus the ANSI FL1 drop test and the MIL-STD-810 debunk. A standalone page
  would compete with it; if written, it should go deeper on IEC 60529 itself and
  link back rather than repeat.

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

1. Rewrite `/sunitact-flashlights-high-lumens-review/` — **DONE 2026-08-22.**
   Ranks at 33. Replaced WP junk / ThruNite verdict with an honest ST1476
   review: current Amazon claims, Cree XHP70.2 ceiling, and what to buy instead.
   Slug unchanged.
2. Full rewrite of the durable-flashlight body — **DONE 2026-08-30.** Slug,
   title and meta unchanged (retargeted 08-22, left alone). Replaced ~750
   words of generic WP HTML with ~2,150 words of markdown built around the two
   ratings that are actually tested (ANSI/PLATO FL 1 six-drop impact test, IEC
   60529 IP codes), why MIL-STD-810 is not a certification, the parts that
   actually fail (O-rings, switch boots, zoom heads, charge ports, alkaline
   leakage), and the warranty exclusion lists. Deliberately **not** a new buying
   guide — the product table is five lights whose numbers were verified against
   the manufacturer, kept as evidence for the argument rather than as picks.
   Killed three fabrications the old table carried: a **Gerber
   Applegate-Fairbairn (a knife, not a flashlight)** with invented lumen/beam
   figures, garbled price cells (`90–90–100`), and a discontinued Olight Warrior
   X Pro.
3. **Dead affiliate ASIN fixed sitewide, 2026-08-30.** The Fenix PD36R link
   (`B081NQXZJF`) 404s — Fenix discontinued the original in favor of the
   PD36R V2.0. It appeared **17 times across 10 posts** and was our most-used
   product link. All 17 now point at `amazon.com/s?k=fenix+pd36r` (model-
   agnostic, keeps working). **Still outstanding:** those pages still quote the
   *original's* specs (1,600 lm / 283 m). The V2.0 is 1,700 lm / 396 m / IP68 /
   1.5 m drop, ASIN `B0H73HZH2Y`. Worth a spec sweep across
   long-range, police, $20-vs-$100, Olight-vs-Fenix-vs-Streamlight and Sunitact.
   Lesson: **probe ASINs before trusting an old link** — `curl -o /dev/null -w
   '%{http_code}' https://www.amazon.com/dp/<ASIN>` returns 404 on dead ones and
   200 on live ones.
4. Do **not** add another flashlight buying guide. Wait for GSC on the Aug 14–17
   BIC and Zippo rewrites (~mid-September).
5. If writing anything new: `best candle lighter` in September (320/mo, seasonal).
6. Link-building is still the highest-leverage item this plan does not execute.

Ubersuggest “4xx / broken link” is Cloudflare email protection on the privacy
page (`mailto:support@lightertorch.com`). Leave it unless a rendered-browser
check shows the mail link is actually dead.

## Ongoing

- Check **Google Search Console** monthly (GA4 = G-ZWE72TWTHB) — impressions data decides what to write/update next
- Watch Amazon Associates dashboard for which links click — double down on those pages
- Strategy decision made: **US English primary** ("flashlight" in titles, "torch" secondary), niche = flashlights + lighters only

## 2026-08-31 — Ubersuggest pass: the Zippo insert cluster

Ran the required pre-write keyword pass on the two remaining lighter-cluster
candidates. Result: **one clear winner, one kill.**

| Keyword | Vol/mo | SD | Competition | Intent |
|---|---|---|---|---|
| zippo butane insert | 5,400 | 19 | 0.95 | Transactional |
| butane zippo insert | 5,400 | 24 | 0.93 | Transactional |
| zippo insert butane | 4,400 | 31 | 0.94 | Transactional |
| zippo insert | 1,900 | 28 | 1.00 | Transactional |
| **butane vs lighter fluid** | **480** | **18** | **0.07** | **Informational** |
| zippo insert torch | 880 | 28 | 1.00 | Transactional |
| slim zippo butane insert | 320 | 19 | 0.87 | Transactional |
| zippo insert replacement | 210 | 23 | 0.94 | Transactional |
| best zippo insert | 110 | 27 | 0.91 | Transactional |
| zippo butane insert not working | 110 | 33 | **0.00** | Navigational/fix |
| zippo butane insert refill | 90 | 19 | 0.53 | Fix + buy |
| how to fill zippo butane insert | 50 | 22 | **0.00** | Informational |
| zippo butane insert won't light | 30 | 22 | **0.00** | Fix |

**KILLED: "how to store lighters safely" — 10/mo.** Same zero-volume trap as the
kids-flashlight post. Removed from the Phase 3 list below the line.

**Read the SD number carefully — it is misleading here.** SERP for the 5,400/mo
head term: zippo.com holds **four** organic slots (#1, #4, #13, #18), Reddit #2
(DA 92), Amazon #11, YouTube #12 and #14. That is a brand-navigational SERP and
a DA 6 affiliate site is not taking the top of it. SD 19 does not capture "the
manufacturer owns the page."

**But there is a real foothold.** thyrm.com ranks #10 at **DA 32**, a forum
ranks #17 at DA 40 — non-brand sites do get in. And there is **no independent
comparison or decision guide anywhere in the top 20.** Zippo's own pages sell
inserts; they don't tell you which one to pick or admit the trade-offs.

**Therefore: target the decision layer, not the head term.** The post the plan
already had queued — *"Butane vs lighter fluid: which Zippo insert?"* — is
exactly right, and now validated. Realistic addressable set is the ~700–900/mo
of low-competition informational and troubleshooting terms (`butane vs lighter
fluid` at competition 0.07, plus the four 0.00-competition fix queries), with
the 5,400/mo head term as long-tail upside rather than the goal.

**Cannibalization: clear.** `/zippo-repairs.../` mentions inserts (lines 31, 42,
83, 109) but only to say "don't put butane in a standard insert." That is a seed,
not the article. The new post takes the decision; the repair post links to it.

**WRITTEN 2026-08-31** → `/butane-vs-lighter-fluid-zippo-insert/`, 1,683 words,
3 tagged Amazon links, 7 internal links. Build passes at 51 pages. **Not
deployed** — awaiting Batu.

**What the research turned up that changed the article.** Pulled from Zippo's own
product page and knowledge base, not from competitors:

- The Single Torch insert is "backed by a **two-year Zippo warranty**." The
  famous lifetime guarantee does **not** extend to it. Swapping to butane trades
  away the single best reason to own a Zippo — and no page in the top 20 says so.
- It "does not fit **Slim®, Armor® or 1935 Replica** cases." Inserts date-stamped
  J20–L22 may not fit Armor even where later ones do.
- Rated "up to 100 5-second ignitions per fill" from 0.9 g (the category page
  claims up to 125 — both figures given, attributed).
- **Vapor lock** is the cause behind nearly all "won't light" complaints. Zippo's
  purge procedure (5–6 second fill bursts, 2-minute wait) is reproduced in full,
  which is what targets the four 0.00-competition fix queries.
- Full insert range priced: Yellow Flame ~$24, Single Torch ~$21, Double Torch
  ~$24, Yellow Flame Pipe ~$24, Pipe ~$18, Double Arc Rechargeable ~$27 (sold
  out when checked), Bit Safe Screwdriver ~$20. Given as bands per the
  2026-08-31 hardcoded-price fix.

**ASINs probed before linking** (the 08-30 lesson): `B0DJW8L8HN` 200,
`B0D33ZGNFD` 200, `B000MT8Y98` 200. All live.


## 2026-08-31 — Site-wide image audit

Audited every post for hero presence, hero file existence, in-body image
resolution, and hotlinking.

**Heroes: 40/41 articles have one, all resolving.** Zero heroes point at a
missing file. The only articles without the field are `about`,
`affiliate-disclosure` and `privacy-policy` (legal pages, correctly excluded from
the post grid). Both previously outstanding heroes — `/best-candle-lighters/`
and `/butane-vs-lighter-fluid-zippo-insert/` — were generated and installed on
2026-08-31. **The hero backlog is empty.**

**FIXED: 8 in-body images were 404 on the live site.** Four posts still
referenced absolute WordPress URLs (`https://lightertorch.com/wp-content/...`).
WordPress is gone, so these have been broken since the Astro migration —
probed and confirmed 404. **The files already existed in `public/uploads/`**;
the migration copied the images but left the old absolute URLs in the markdown.
All 8 rewritten to local paths:

| Post | Images |
|---|---|
| `top-10-best-camping-torches-of-2024...` | 4 |
| `top-10-best-selling-flashlights-on-amazon...` | 2 |
| `top-zippo-best-sellers-on-amazon...` | 1 |
| `voltage-in-a-gas-lighter` | 1 |

Verified after the fix: **every `<img src>` in `dist/` resolves to a real file.**

**FIXED: 8 koala.sh hotlinks replaced 2026-08-31.**
`how-many-lumens-should-flashlight-have-2` (6) and
`brightest-and-affordable-torches-in-the-market-today` (2) hotlinked in-body
images from an AI-writing-service CDN — a `CLAUDE.md` violation and the same
risk class as the purged `manuscdn.com` links. Decision was to **replace rather
than delete**. Eight 1280×720 WebPs generated, installed with per-image
descriptive alt text (the old alt was repetitive), and the hotlinks removed.
Prompts and manifest in
`lightertorch-images/PROMPTS-2026-08-31-koala-replacements.md`.

Two constraints drove the prompts and both held up on review: **no branded
product portraits** (image 2 sits under an *FMU LED Tactical Flashlight* heading
and image 7 follows an *Anker Bolder LC90* mention — a render reading as that
exact product would be a fake product shot next to affiliate links), and **no
rendered text** (both posts discuss lumen figures). The focused-room winner
needed a crop to remove an otherwise visible torch body.

**Site-wide result: zero external hotlinked images remain in `src/content/blog/`.**
Verified after install: clean 51-page build, 8/8 new images rendering, all 94
unique local image references in `dist/` resolve, zero broken.

**Note for future image work:** `BlogPost.astro:78` renders heroes with
`alt={title}`, so per-image alt text only applies to in-body images. Not changed
— it is a site-wide pattern and out of scope here.

## 2026-09-02 — Forward image batch queued

Hero backlog is empty, so this batch is ahead of the content rather than behind
it. 7 stems in `lightertorch-images/PROMPTS-2026-09-02.md`, ordered by certainty:

- **Tier 1 (certain).** `olight-vs-fenix-vs-streamlight.md` still carries **two
  manufacturer renders in-body**, both under brand headings next to tagged
  Amazon links: the same Streamlight ProTac catalog sheet the durability batch
  replaced as a hero (line 29), and an **Olight S1R Baton render with the OLIGHT
  wordmark on the body** (line 63). The 08-31 note said "separate batch" — this
  is it. Replacements are use-case scenes (duty belt; magnetic tail under a car
  hood), not product portraits.
- **Tier 2 (queued posts).** Heroes for the three unwritten question posts
  (18650 vs AA, why-it-dies-fast, IP ratings). **Not Ubersuggest-validated yet** —
  each stem was written to double as an in-body image for an existing post so a
  kill doesn't waste the run.
- **Tier 3 (Q4 seasonal).** Blackout candle-lighting and cold-weather lighter
  scenes, for posts that already exist. Install before the Nov–Dec peak.

**Installed 2026-09-27, after a cross-model review.** The Sep 2 run produced
all 7 stems in five models (Krea, Grok, Z-Image, Flux, Ideogram), but only the
Krea set was ever compared, so the Krea picks went in by default. Batu reviewed
all five side by side (`lightertorch-images/review/2026-09-27-model-compare/`).
The final picks are mixed-model; the per-stem reasons are in `selections.txt`.

- **Live in posts:** belt (Grok) in `olight-vs-fenix-vs-streamlight.md` under
  Streamlight; blackout candle (Grok) under "Fire, Candles, and the Old Ways" in
  `/best-flashlights-for-power-outages/`; cold lighter (Grok) under "Problem 4:
  … in the cold" in `/fixing-a-lighter/`. One placement each: the
  candle-lighter hero already shows a lighter on a candle, and the BIC post's
  cold note is a bullet, not a section.
- **Olight section has no image for now.** The Olight S1R render is gone, and
  every model's magnetic-tail version was rejected.
- **Held, untracked in `public/uploads/2026/09/`:** fading beams (Z-Image) and
  underwater (Krea), for the unwritten question posts.
- **Rejected in all five models, re-briefed** in
  `lightertorch-images/PROMPTS-2026-09-27.md` for Hermes:
  - magnetic tail: standing a light upright never shows a magnet. New concept:
    stuck sideways on vertical steel.
  - 18650 vs AA: every model got the size ratio or the trade dress wrong. New
    concept: two cells upright at eye level.
- Every image and its alt text was checked at full resolution for text, logos
  and insignia.

Build: 51 pages, every image ref in `dist/` resolves, zero external.

**Not decided:** every image on the site is 16:9, but `PinOverlay.astro` pins
whatever the reader hovers and Pinterest favours 2:3. The candle-lighter and
Zippo gift posts likely want dedicated 1000×1500 verticals before December.

## 2026-09-27 — AI-search audit

**Why now:** GA4's AI Assistant channel went from ~3 to 30 sessions in 28 days
(+900%), against 52 from Google organic. AI referrals land on our pages, so our
tagged Amazon links can earn from them. An AI answer that links straight to
Amazon earns nothing.

**Already in place:**
- AI crawlers can get in. Tested live as GPTBot, OAI-SearchBot, ChatGPT-User,
  PerplexityBot and ClaudeBot: all 200. robots.txt allows all. Leave
  Cloudflare's AI-crawler block off.
- 24 posts open with a **Quick answer** block. 22 have an FAQ section and 25
  have a comparison table. That is the extractable structure AI engines quote.
- Article JSON-LD with datePublished/dateModified.

**Gaps, in priority order:**
1. **Sources are never linked. 39 of 44 posts have zero external links.** The
   rewrites state TSA/FAA rules, BIC's 3,000-light figure, Zippo's lifetime
   guarantee and the insert's 2-year warranty, ANSI FL1 and IEC 60529, but link
   none of them. Citing sources is the top-ranked factor in the GEO research, and
   it matters more for low-authority sites. Add 2–4 primary-source links per
   post, verified live, starting with the plane, BIC-lifespan, Zippo-repair,
   Zippo-insert, can-a-Zippo-explode, fixing-a-lighter and durable-flashlight
   posts.
2. **No author anywhere.** The Article schema has a publisher only, and there is
   no byline. This needs a real person and a truthful bio; do not invent
   credentials. Waiting on Batu.
3. **FAQ sections aren't marked up.** 22 posts have `**Question?**` FAQs in
   markdown but no FAQPage JSON-LD. It can be generated at build time from the
   existing format, with no content change. Google mostly ignores it; ChatGPT
   and Perplexity use it.
4. **Freshness.** Only 9 posts set `updatedDate`. Set it on every substantive
   content update (not on image swaps) so dateModified and "Last updated" are
   true.
5. **High-traffic pages missing structure.** `/can-a-zippo-explode/` (3rd most
   viewed, 26 views/28d) has no FAQ or table. `/zippo-gift-guide/` (Q4) has no
   FAQ.
6. **19 legacy WordPress posts** have no quick answer, FAQ or table. Five are
   lighter questions in the cluster that is working: `filling-up-a-gas-lighter`,
   `inside-of-a-gas-lighter`, `voltage-in-a-gas-lighter` (still WP format,
   566 words), `gas-stove-that-doesnt-ignite` and `make-a-gas-lighter-at-home`.
   Upgrade them the way the Aug rewrites were done.
7. **Presence off-site.** AI engines lean heavily on Reddit and YouTube.
   Authentic participation (r/flashlight, r/zippo) doubles as the link-building
   this plan has never executed. No spam.
8. `llms.txt`: optional and cheap. Google ignores it. Lowest priority.

**Measure:** in GA4, open Traffic acquisition → AI Assistant → landing page +
session source monthly, and `click` events to amazon.com by channel. Manually
check ~20 target queries in ChatGPT/Perplexity monthly and log who gets cited.

### GA4 findings, pulled 2026-09-27 (last 28 days, Aug 30 – Sep 26)

| Channel | Sessions | Avg engagement | Outbound clicks |
|---|---|---|---|
| Direct | 571 | **1s** (bots) | 0 |
| Organic Search | 52 | 2m 22s | **8** |
| AI Assistant | 30 | 23s | 1 |

- **AI sources:** chatgpt.com 28, copilot.com 2.
- **Where ChatGPT sends people:** buying guides, not the lighter question posts.
  `/best-keychain-flashlights/` 9, `/best-headlamps-for-camping-and-running/` 7,
  `/olight-vs-fenix-vs-streamlight/` 7, `/best-edc-flashlights-under-50/` 2, and
  1 each to arc lighters, candle lighters, plane rules and inside-of-a-gas-lighter.
- **Who clicks out (mostly to Amazon):** 9 outbound clicks in total.
  `/top-10-best-selling-flashlights-on-amazon.../` 5 (Google), then 1 each from
  arc lighters (ChatGPT), lighter-cause-a-shock, police flashlights and Zippo
  repair (all Google). The Zippo repair page's Google visitors average **6m 11s**,
  so the rewrite is being read.

**What this changes:**
- ChatGPT cites exactly the flashlight buying guides that Google won't rank at
  DA 6. The "don't add another flashlight buying guide" rule (08-22) was about
  Google; revisit it with AI traffic in mind.
- **ChatGPT visitors stay ~14s.** On the pages it sends them to, the top pick and
  its Amazon link must be visible in the first screen, or those visits can't
  earn.
- **The Olight/Fenix/Streamlight page gets 7 ChatGPT visits and still recommends
  the replaced Baton 3 Pro.** Updating it to Baton 4 Pro / Baton Ultra is now the
  top content fix.
- **The Google buyers land on `top-10-best-selling-flashlights`.** It's still
  legacy WordPress with no quick answer or FAQ, and it's the highest-value
  upgrade on the site.
- Amazon reports 26 clicks against GA4's 9. The gap is visitors blocking GA4 plus
  bots hitting tagged links, so sales can't be attributed to a channel
  precisely.

**Done 2026-09-27 (same day):**
1. `/olight-vs-fenix-vs-streamlight/`: picks updated to Baton 4 Pro / Baton Ultra
   / Javelot Turbo 2 (US-sourced specs); the quick answer now links each brand's
   flagship; `updatedDate` set. The Olight section image is now Olight's own
   Baton-series product photo (`olight-baton-series-three-colors.webp`, from
   olight.com per Batu, credited "Image: Olight"). If we join Olight's affiliate
   program, swap it for the program's official asset. The Hermes candidate
   `magnetic-tail-flashlight-stuck-sideways-candidate-2` also passes the brief;
   it's held as a spare in-body image.
2. Post layout: the hero now matches the 720px text column and is capped at
   34vh; the title uses a clamped smaller size; the hero loads eagerly. The first
   Amazon link moved from 1,107px to 639–778px on a 1440×800 screen and is in the
   first screen on phones.
3. `/top-10-best-selling-flashlights.../`: quick answer added (PD36R Pro /
   Acebeam TAC 2AA / Nitecore EDC27). Two "our team tested" claims are reworded
   to "compared". The hero with garbled baked-in text ("Top 10 Best Best") is
   swapped for `brightest-torch-lineup-bench.webp`; a dedicated hero prompt is
   stem 3 in `PROMPTS-2026-09-27.md`.
4. GA4 now loads only in production builds.

**Still outstanding from the audit:** source links (gap 1), author byline (gap
2), FAQ schema (gap 3), and a spec sweep of `/what-is-the-best-long-range-flashlight/`,
which still features the S1R Baton II and the Javelot Turbo (and says "145 feet"
where its table says 145 m).

**Gap 1 (source links), first pass done 2026-09-27.** Each source was checked
live and against the exact claim before linking:
- Plane: TSA (disposable/Zippo, torch, arc lighters) and FAA PackSafe (lighters,
  lithium batteries). Also corrected the FAQ: "one lighter" is FAA's rule
  (49 CFR 175.10), not TSA's.
- BIC lifespan: BIC Europe's page ("lights up to 3,000 flames"). **us.bic.com and
  bic.com consumer sites have closed**, so BIC's US product pages are dead. The
  unverifiable "BIC's own safety guidance" attribution was removed and the
  advice kept.
- Zippo insert / Zippo repair / can-a-Zippo-explode: Zippo KB warranty page,
  the Single Torch product page (two-year warranty; doesn't fit Slim/Armor/1935;
  100 × 5-second ignitions, all verified verbatim) and the Zippo KB butane-insert
  page (vapor-lock purge, 5–6 s bursts, 2-minute wait).
- Fixing a lighter: Zippo KB purge procedure; PubChem for butane's −0.5 °C.
  Softened "arc lighter works the same at −20 °C" (lithium cells lose charge in
  the cold).
- Durable flashlights: ANSI/PLATO FL 1 (2025 revision), IEC's IP-ratings page,
  MIL-STD-810H.

**Open accuracy issue, not yet changed:** BIC's (now-dead) product pages said
BIC uses **pure isobutane**, which boils at about −12 °C (11 °F), not n-butane's
−0.5 °C. If that's right, the BIC-lifespan and fixing-a-lighter posts
overstate how early a *BIC* fails in the cold ("below roughly 40 °F"). Fix once
the fuel is confirmed from a live or archived BIC source (the Wayback Machine
was rate-limiting on 2026-09-27). Also unsourced: "China bans lighters on
flights entirely" in the plane post.

**Brand photos, 2026-09-27.** All three sections of `/olight-vs-fenix-vs-streamlight/`
now use the maker's own photo, credited: Olight (olight.com), Streamlight PolyTac
(streamlight.com), Fenix PD36R V2.0 (fenixlighting.com). The two new ones had
only white space trimmed or padded (PolyTac padded to 4:3, Fenix cropped to
16:9), with the product untouched. Specs corrected against the maker pages:
PolyTac is **600 lm / 214 m / 2×CR123A / IPX7 / 3 m impact** (the post said
"~1,000 lumens" and "survives being run over"); PD36R V2.0 is **1,700 lm / 396 m /
up to 482 h / IP68 / 21700 5,000 mAh / USB-C** (the post said 1,600 lm, 115 h,
"submersible to 2 m"; Fenix's page gives no depth). The Grok belt image
(`duty-flashlight-work-belt-night.webp`) is no longer used; it's kept for reuse.

**PD36R spec sweep still outstanding** on the other posts that quote the original
PD36R (long-range, police, $20-vs-$100, Sunitact, plane). The verified V2.0 numbers
are above.

**Gap 3 (FAQ schema) DONE 2026-09-27.** `rehypeFaqSchema` in `astro.config.mjs`
builds FAQPage JSON-LD at build time from each post's visible FAQ section, so the
markup can't drift from the page. **27 posts, 147 questions**: 22 markdown
(`**Question?** answer` / `### Question?`) and 5 legacy WordPress HTML
(`<h3>Question?</h3>` + answer). It reads a parsed copy of the tree and adds one
`<script>` per page. A full before/after diff of `dist/` showed no other change
except tie-ordering on listing pages. `hast-util-raw` is now a direct dependency.

Found on the way:
- **Live rendering bug, fixed:** `/top-zippo-best-sellers.../` had 4-space
  indented HTML, which markdown turned into a **code block showing raw
  `<div class="faq-item">` markup to readers**. The body was de-indented (HTML
  whitespace only); it was the only `<pre>` on the site, and now there are none.
- The same page's airplane FAQ had TSA's rule backwards (it said an *unfueled*
  Zippo needs a DOT case in checked bags). Corrected to match TSA/FAA, with links.
- Local builds cache rendered posts in `.astro/data-store.json`. After changing a
  markdown plugin, delete it or unchanged posts keep the old output. Cloudflare
  builds fresh, so production isn't affected.

**Closed 2026-09-27 (evening):**
- **Gap 2 (author):** posts show "By LighterTorch Team" (links /about/), and
  the Article JSON-LD has an Organization author, which clears the Rich Results
  Test's only warning. Swap for a named person later if Batu wants the extra
  E-E-A-T weight.
- **PD36R sweep done:** the power-outage, $20-vs-$100 and police posts now use the
  V2.0 figures. The camping list's PD36R Pro button searches for the Pro. The
  only remaining "1,600 lm / 283 m" is the durability guide's deliberate note
  about the discontinued original.
- **BIC fuel settled:** BIC's archived US product page (Web Archive, 2026-01-14)
  says "pure isobutane fuel, with up to 3,000 lights". Isobutane boils at
  −11.7 °C / 11 °F (PubChem). The BIC-lifespan, fixing-a-lighter and camping-torch
  posts now separate n-butane (fails below ~40 °F) from BIC's isobutane (holds
  out to ~11 °F).
- **China line sourced:** CAAC bans lighters and matches for flights departing or
  connecting through mainland China (EVA Air's summary).

**Gaps 5 and 6 closed 2026-09-27 (late):**

- **Gap 5, Zippo pages.** `/can-a-zippo-explode/` now has a lighter-type risk
  table and a 6-question FAQ, sourced to Zippo's fill guide and BIC's US FAQ
  (`nam.bic.com`, live again: "Do not leave a lighter in a hot vehicle").
  `/zippo-gift-guide/`'s FAQ heading was renamed so the schema picks it up, and
  it gained Zippo sources (guarantee, Armor thickness, ships unfueled, finish not
  covered) plus a USPS answer on mailing a lighter. The archived BIC link on two
  posts was swapped for the live `nam.bic.com` FAQ.
- **Gap 6, the five legacy lighter posts, rewritten** as clean markdown with a
  quick answer, table, FAQ and outside sources. The slugs are unchanged, so no
  redirects are needed. Ubersuggest targets (US):

  | Post | Target | Vol | SD |
  |---|---|---|---|
  | `filling-up-a-gas-lighter` | how to refill a butane lighter (retargeted 2026-10-10; see the 2026-10-11 entry for the three 9.9K variants) | 9,900 | 37 |
  | `inside-of-a-gas-lighter` | how does a lighter work / parts of a lighter | 880 / 720 | 20 / 38 |
  | `gas-stove-that-doesnt-ignite` | gas stove won't light (+ "but smell gas" 390) | 590 | 28 |
  | `make-a-gas-lighter-at-home` | how to make a lighter / homemade lighter | 880 / 320 | 32 |
  | `voltage-in-a-gas-lighter` | piezo lighter voltage | 30 | 24 |

  Watch these in GSC from mid-October. The fill guide is the biggest opportunity
  on the site by search volume.
- **Unused high-volume questions found on the way:** "how to make a lighter flame
  bigger (bic)" (480 + 320) and "how to make a lighter work again" (480). BIC says
  its flames are fixed. It is answered in the how-a-lighter-works FAQ; worth a
  line in `fixing-a-lighter` too.
- **Site-wide mobile fix:** wide tables pushed pages sideways on phones (the
  Olight vs Fenix page was 490px wide on a 390px phone, the top-10 Amazon page
  547px). Markdown tables are now wrapped in a scroll box (`rehypeTableScroll`),
  and legacy `table.responsive-table` scrolls itself. All 50 pages fit at 390px.
- **FAQ schema now covers 34 pages, 189 questions.**
- **Build gotcha:** a markdown error doesn't fail `npm run build`. The log shows
  `[ERROR] [glob-loader]` and the page ships with an empty body, then the build
  still says "Complete!". Check the log for `ERROR` after a plugin change.
- **Hero images still needed:** prompts for the fill guide, the DIY lighter post
  and (optional) the voltage post are in
  `lightertorch-images/PROMPTS-2026-09-27-legacy-lighter-heroes.md`.
- **Gap 1 remaining:** 23 pages still link no outside source (was 29), 20 of them real posts (the other 3 are About, Privacy and Disclosure). 14 posts are still legacy WordPress HTML.

## 2026-09-28 — Triage of the last legacy WordPress pages

Search Console (URL-prefix property, last 3 months: 23 clicks, 5.94K impressions)
plus Ubersuggest (US). The `sc-domain:` property still says "processing data".

| Page | GSC clicks / impr / pos | Target (vol / SD) | Decision |
|---|---|---|---|
| `brightest-and-affordable-torches-in-the-market-today` | 0 / 130 / 63.6 | brightest flashlight (18,100 / 34); on amazon 1,300; in the world 2,400 | **Rewrite: biggest opportunity on the site** |
| `what-is-the-best-torch-brand` | 0 / 108 / 70.4 | best flashlight brand 1,900 / 38; best torch brand 1,900 / 28 | Rewrite as a multi-brand guide (links to Olight vs Fenix) |
| `top-zippo-best-sellers-...` | **10** / 334 / 28.4 | best zippo lighter 260 / 32 | Careful upgrade: top page by clicks |
| `top-10-best-selling-flashlights-on-amazon-...` | 0 / 190 / 41.9 | best flashlight on amazon 1,300 / 33 | Careful upgrade: top page for Amazon clicks (GA4) |
| `usb-c-rechargeable-flashlights_-...` | 0 / 4 / 40.5 | usb c rechargeable flashlight 1,000 / 25 | Rewrite, tighten 4,490 words |
| `top-10-best-camping-torches-of-2024-...` | 0 / 85 / 63.0 | best camping flashlight 320 / 34 | Overlaps `what-is-the-best-torch-for-camping` (0 / 122 / 73.7): keep one, merge the other |
| `how-many-lumens-should-flashlight-have-2` | 0 / 0 | how many lumens flashlight 140 / 18; do I need 90 / 17 | Rewrite |
| `things-to-look-for-in-a-good-led-flashlights` | 0 / 0 | no measurable volume | Fold into the lumens guide |
| `about` | 0 / 14 | — | Rewrite (the byline links here) |

**Merged 2026-09-28 (301s, both slash variants):** `latest-led-torch` (0 impr)
and `fmu-led-tactical-flashlight` (8) → the Amazon best-sellers list;
`best-torches-bright-torch-long-baterry-life-2` (0) → the brightest-flashlight
page; `zippo-lighter-torch-brightest-torch-in-the-market` (13) → the Zippo
insert post, which gained a "Does Zippo make a torch lighter?" FAQ for "zippo
torch lighter" (1,900 / 25). All four claimed hands-on testing that never
happened. Also fixed a 404: `/category/zippo-lighter-care/` → the Zippo care guide.

**Legacy upgrade finished 2026-09-28.** Written in parallel, then checked against
sources and the build before commit. Every legacy WordPress post is now either
rewritten or merged; only `privacy-policy` keeps its old format.

- **Rewritten:** brightest flashlights (Imalent MS32 as record holder, with 1Lumen's
  measurements), best flashlight brands (9 brands, maker warranty pages), best
  flashlights on Amazon (retitled "7 Picks Compared": the old "Best Sellers Ranked"
  wasn't true, since only one pick is in Amazon's flashlight top 100), USB-C guide
  (4,490 → ~2,000 words), camping list ("Tested Picks" removed; it's now the product
  list and `what-is-the-best-torch-for-camping` is the type guide), lumens guide,
  Zippo best-sellers (all 5 ASINs kept), About.
- **Merged:** `things-to-look-for-in-a-good-led-flashlights` → lumens guide (301);
  its 7 inbound links now point at `#what-else-to-look-for-besides-lumens`.
- **Removed across these pages:** invented review scores and star ratings, "tested"
  claims, a false "butane insert fits any case", wrong IP ratings, and 15 AI images
  with garbled fake logos.
- **Corrected elsewhere:** Maglite's warranty is now ten years (durability guide);
  Fenix's US lifetime cover only applies to authorized-dealer purchases
  (Olight/Fenix/Streamlight comparison); the broken Amazon Zippo store link (gift guide).
- **FAQ schema now covers 36 pages, 205 questions.**
- **Follow-ups:**
  - Three Amazon-list picks are discontinued by their makers (Nitecore EDC27 and
    EDC33, Olight Javelot Mini). They're flagged on the page; replace them next
    (EDC27 UHi, EDC31/EDC35).
  - `/dp/` links for the PD36R Pro and PD36 TAC would convert better than searches.
  - Five heroes need replacing: prompts in
    `lightertorch-images/PROMPTS-2026-09-28-rewrite-heroes.md`.

**2026-09-28 (late): year-free slugs, new heroes, IndexNow.**

- **Slugs without a year** (the year belongs in the title, updated each January; the
  URL never changes again): `top-10-best-camping-torches-of-2024-...` →
  `/best-camping-flashlights/`, `top-10-best-selling-flashlights-on-amazon-...-2025` →
  `/best-flashlights-on-amazon/`, `usb-c-rechargeable-flashlights_-the-complete-2025-...` →
  `/best-usb-c-rechargeable-flashlights/`. 301s for both slash variants; older redirects
  repointed so there are no chains; all internal links point at the final URLs.
  **Request indexing for the three new URLs in GSC.**
- **Heroes installed** for brightest, Zippo best-sellers (cropped), brands, camping list and
  camping type guide (picks in `lightertorch-images/selections.txt`).
- **IndexNow:** `.github/workflows/indexnow.yml` runs on every push that touches
  `src/content/blog/`, waits for the Pages deploy, and submits the changed post URLs
  (renames submit both old and new) to api.indexnow.org, which shares with Bing, Yandex,
  Seznam and Naver. Key file: `public/f2c1a8eb38150eb949af10b8312c64d4.txt`. Bing Webmaster
  Tools was imported from GSC on 2026-09-28 (48 h to populate). Check a run under the
  repo's Actions tab after the first push.

## 2026-10-11 — Holiday prep log, SEO pass, sources

**Oct 10 (commits `ad6bff8`, `5d61306`, deployed):** holiday prep. Refill guide
retargeted from "fill" to "refill a butane lighter"; titles and metas sharpened on
the refill guide, `/lighter-cause-a-shock/` and `/a-gas-lighter-last-how-long/`;
Zippo FAQs added (`/can-a-zippo-explode/`, Zippo repair guide, gift guide); the three
discontinued Amazon-list picks replaced (EDC27 → EDC27 UHi, EDC33 → EDC31, Javelot
Mini → Javelot) with maker sources (EDC31 manual, Olight spec table); hardcoded
prices removed from `/zippo-gift-guide/` and `/best-flashlights-on-amazon/`.

**Refill keyword, reconciled (Ubersuggest US, 2026-10-11).** All three phrasings
share the same 9.9K volume, so they're one cluster:

| Keyword | Vol | SD |
|---|---|---|
| how to refill a butane lighter (primary, in the title) | 9,900 | 37 (flagged outdated) |
| how to fill a butane lighter (in the meta + FAQ) | 9,900 | 31 |
| how do you fill a butane lighter (FAQ question) | 9,900 | 22 |
| how to refill a lighter | 3,600 | 39 |
| how to refill a butane lighter torch | 1,600 | 50 |
| how to refill a zippo lighter with fluid | 720 | 6 |
| how to refill a djeep lighter | 390 | — |
| how to fill gas in lighter | 260 | 7 |
| how to refill a scripto lighter | 260 | — |

Bing had the guide at position 8, 666 impressions, 0 clicks (pre-Oct 10 title).
Watch CTR from late October. "zippo fluid refill" (720, SD 6) has no page of its
own; it's answered in `/can-a-zippo-explode/#how-to-refill-a-zippo-safely`. A
standalone post is a cheap candidate.

**Oct 11, branch `seo-pass-2026-10-11` (local, not pushed):**
- Refill guide: title "How to Refill a Butane Lighter: 8 Steps + Won't-Light
  Fixes", meta leads with "How to fill a butane lighter", new FAQs "How do you fill
  a butane lighter?" and "How do you refill a butane torch lighter?", link to the
  Zippo fluid steps.
- Title pass (Ubersuggest audit: 12 long, 3 short): 16 titles over 60 chars cut to
  52–61, 3 legal/About titles lengthened, 2 CTR rewrites (Zippo explode, lighter
  shock). 9 metas over 160 chars trimmed. Still over 60: gas stove (62), lumens vs
  candela (62), how many lumens (61), left as they are.
- Internal links: 24 contextual links across the voltage, shock, BIC lifespan,
  Zippo explode, gift guide, Amazon roundup and brightest pages, mostly into the
  candle-lighter, Zippo insert, gift, camping, power-outage and police pages. The
  "$15" Street Chrome price on the Zippo explode post was removed.
- PD36R Pro links → `/dp/B0H7DDGK7V` (5 links, Amazon-verified model "pd36r
  pro"). **PD36 TAC left as a search link:** `B096YJZG81` is the right model but
  Amazon shows it "Currently unavailable"; swap once it's back in stock.
- Gap 1 closed for real posts: sources added to the 11 that had none (CPSC lighter
  rules, NFPA candle data, TSA/FAA, Red Cross, National Candle Association, GE
  Appliances, CPSC CO, CT PURA, Streamlight ANSI FL1, Keystone IPX7, Energizer,
  PubChem, Zippo warranty, Streamlight product pages). Only About, Privacy and
  Disclosure link no outside source now.
- Correction: the police post said the PolyTac makes ~1,000 lumens. Streamlight
  rates it at 600 lm / 214 m.
- Build: 46 pages, no errors, no broken internal links.

## 2026-10-19 — Monday session log

**Branch `session-2026-10-19` (local only, not pushed), 4 commits on top of `34b72af`:**

- `ae13c50` Amazon roundup: the TAC 2AA, EDC27 UHi, EDC31 and P20iX search links
  are now direct `/dp/` links (11 links). ASINs: TAC 2AA `B0DCMHQBKQ` (Black,
  181 m = the 1,600 lm version; same parent as the 1,400 lm SFT-25R), EDC27 UHi
  `B0DDWGGGTX`, EDC31 `B0DSCGY287`, P20iX `B0H7FRH1KZ`. All in stock, shipped by
  Amazon.
- `541ecd6` Zippo gift guide: the Black Matte link moved to the plain Black Matte
  `B004BATWE0` (in stock). The red-border listing `B001E5FLWW` is down to "Only 2
  left" from a third-party seller, so it's now the fallback link and the old
  "the red-bordered version is the one that stays in stock" line is gone. Fluid →
  Zippo 4 oz `B071LFFN5V`, flints + wicks → Zippo 3-flint/3-wick co-pack
  `B01G2IUJX6`, and "A few dollars" is gone. New FAQ "When should I order a Zippo
  for Christmas?" with USPS's 2026 send-by dates for the lower 48 (Ground
  Advantage Dec 17, Priority Dec 18, Express Dec 19; Hanukkah starts Dec 4),
  sourced to usps.com. `updatedDate` 2026-10-19. Title and meta unchanged (title
  already says 2026).
- `0189cf2` Zippo best-sellers page: removed the "Typical price" column ("About
  $20/$30") and the price note, so the page has no prices now. Black Matte pick →
  plain `B004BATWE0`, red border kept as the fallback. Fluid and flint table links
  are now direct. `updatedDate` 2026-10-19.
- `284ac22` Site-wide direct links: the Zippo fluid search link → `B071LFFN5V` in
  6 more posts (make-a-gas-lighter, zippo-vs-bic, can-a-zippo-explode, refill
  guide, Zippo repair guide, insert guide). Repair guide "worn flint" →
  `B000EAEAHK`, and the brand guide's 2 P20iX links → `B0H7FRH1KZ`.

**Amazon checks (US view, NY 10001, ~20:35–20:47 Berlin):** In stock: PD36R Pro
`B0H7DDGK7V` (Lumen Tactical, ships from Amazon), Street Chrome `B000MT8Y98`
(third party), Brushed Chrome `B001E5FLT0` (Amazon), Armor Brushed Brass
`B0007RX59O` (third party), butane insert `B0D33ZGNFD` (Amazon). Black Matte Red
Border `B001E5FLWW`: only 2 left. High Polish Chrome `B001E57S96` (best-sellers
page): only 6 left, third party.

**Still open:**
- **PD36 TAC `B096YJZG81` is still "Currently unavailable"** ("We don't know when
  or if this item will be back in stock"). The 2 search links on the roundup stay.
  Amazon's "fenix pd36 tac" search now returns no PD36 TAC at all, only other
  Fenix lights. If it hasn't come back by early November, consider replacing the
  tactical pick.
- **Olight Javelot isn't sold on Amazon US.** Searches for "olight javelot" and
  "javelot" return no Javelot listing, so the roundup's 2 Javelot links land on
  other Olight lights. That needs a decision: keep it, or swap in a long-throw
  light that Amazon actually sells. The same may apply to the 5 "olight javelot
  turbo 2" links elsewhere (not checked).
- **Amazon product images: blocked on eligibility and on how the site is built.**
  SiteStripe offers only "Get Link: Text" now (official Associates help page). The
  Image and Text+Image options were removed Nov 1, 2023 and old image links stopped
  working Dec 31, 2023. PA-API 5.0 was deprecated and shut off on May 15, 2026
  (calls get 403 AccessDenied). The only route left is the **Creators API**, which
  requires final acceptance, **at least 10 qualifying sales in the past 30 days**,
  and registration by the primary account owner (Associates Central → Tools →
  Creators API → Create Application → credentials). The IP License bans storing or
  caching images and allows storing an image *link* for 24 hours at most. A static
  Astro build would need a rebuild at least daily, or a Cloudflare Worker / Pages
  Function that fetches from the API at request time. The repo has no API config or
  env vars (only `.env` and `.env.production` are in `.gitignore`; neither exists).
  Nothing implemented.
- **Prices elsewhere on the site** (not touched tonight): the insert guide's price
  column (~$18–$27), zippo-vs-bic cost table, the brand guide's price ranges and
  maker-store prices, the camping guide's Acebeam/Fenix store prices, the olight
  vs fenix "typical price range" row, the Sunitact review's "$22", the arc
  lighters "$10–$30". Some are maker list prices, not Amazon prices. Batu to decide
  whether "no prices" applies to those too.
- 28 `fenix+pd36r` search links site-wide: the PD36R V2.0 shows up as `B0H73HZH2Y`
  (already used on the durable-flashlight page). Verify the model each post means
  before swapping.
- Q&A pages (shock, voltage, Zippo explode, BIC lifespan, Zippo best-sellers):
  no title or meta changes. All of them were rewritten on Oct 10–11, and the 28-day
  GSC window (Sep 19–Oct 16) is almost all pre-change. The dashboard has no
  per-page queries. Recheck in early November.
- Post candidates (no draft): "zippo fluid refill" (720, SD 6, from Oct 11), and
  the keychain flashlights and headlamps pages, which get impressions (150 and 226)
  but rank at pos 37 and 60. Run Ubersuggest before drafting anything.

Build: `npm run build` passes, 46 pages, no `ERROR`. On the first run, Astro's
content cache warned "Duplicate id" for the 10 changed posts. A second build was
clean, and the new links and the FAQ schema are in `dist/`. All 300 Amazon links
in `dist/` carry `tag=lightertorch-20`.

### 2026-10-19 — Draft: how to refill a Zippo lighter (local branch only)
- Branch `draft-zippo-refill-2026-10-19`, new post `/how-to-refill-a-zippo-lighter/`
  (primary "how do you refill a zippo lighter" 9.9K/SD 8). Schema has no `draft` field,
  so it stays unpublished by staying off master. Reciprocal links from can-a-zippo-explode,
  butane-vs-lighter-fluid-zippo-insert, zippo-repairs. Build passes, 47 pages. Not pushed.

### 2026-10-26 — Monday session
**Branch `session-2026-10-26` (local only, not pushed).**

**Ubersuggest (lightertorch.com, US):** On-Page SEO score 96 (7 issues), 338
organic keywords, est. traffic 54, DA 6. Tracked keywords: "best cheap torches"
pos 37 (+38), "best distance flashlight" pos 52 (+10); average position 74.75.

**Holiday pages:** all Zippo picks verified in stock with a US ZIP. The gift guide's
USPS 2026 send-by FAQ is still correct.

**PD36 TAC replaced (Batu approved).** The TAC `B096YJZG81` is "Currently
unavailable" on Amazon US (NY 10001) and marked Closeout on fenixlighting.com. The
roundup's "Best Tactical" pick is now the **PD36R ACE** `B0FQLGPBRH` (in stock, ships
from Amazon, sold by Lumen Tactical, Amazon's Choice). Specs from Fenix's product page:
3,000 lm / 415 m / 63 h 25 min, ARB-L21-5000 V2.0 21700, hidden USB-C, IP68, SET button
with three output groups. Table row, section, battery paragraph and tactical FAQ
updated; the 2 search links are now direct `/dp/` links. `updatedDate` 2026-10-26.
The PD36R Pro stays best overall (dual tail switches), and the section says why.

**New draft: `/zippo-flint-replacement/`** (commit `7727a13`). Primary "zippo flint
replacement" 1K/SD 29; also "zippo replacement flint" 590/SD 33, "zippo lighter flint
replacement" 210/SD 27, "zippo flint wheel replacement" 70/SD 27, "zippo flint spring
replacement" 30/SD 26, "zippo flint and wick replacement" 20/SD 19. Overlap check: the
repair guide (flint section) and the refill guide (one flint paragraph) only cover it
as sub-sections, and no page targets the query, so it's a new post, not a retarget.
~2,000 words, steps, signs, how often, genuine vs generic, wheel/spring
troubleshooting, 11-question FAQ (schema builds). Sources: Zippo KB flint and
not-lighting pages, the zippo.com flint guide and product guide, the Zippo AU FAQ and
getting-started pages, the Zippo KB butane insert and warranty pages. Links:
`B000EAEAHK` (flints) and `B01G2IUJX6` (flint + wick pack). Hero reuses
`zippo-insert-swap-workbench.webp` (also the insert guide's hero), so a dedicated hero
is still needed. Reciprocal links from the refill guide, the repair guide and the
best-sellers flint row. Both flint ASINs re-checked in stock (US view) on 2026-10-26.
Pushed live 2026-10-26 with Batu's go-ahead. Build passes, 48 pages; all 307 Amazon links in `dist/` carry
`tag=lightertorch-20`.

**Next candidate:** Zippo wick replacement ("zippo wick replacement" 1.3K/SD 27,
"zippo lighter wick replacement" 320/SD 30). Run Keyword Ideas before drafting.

### 2026-10-29 — Thursday session
**Branch `session-2026-10-29` (local only, not pushed).**

**Ubersuggest (lightertorch.com, US):** On-Page SEO score 96 (7 issues), 338
organic keywords (+118%), est. traffic 54, DA 6, 96 backlinks. Tracked keywords:
"best cheap torches" pos 37 (+38), "best distance flashlight" 52 (+10), "what is
inside lighters" 71 (-4), "best cheap torch" 82 (-5), "brightest budget flashlight"
85 (0), "best powerful torch" not ranked; average position 74.75.

**GSC, 28 days (Sep 29–Oct 26):** 14 clicks, 2,165 impressions, CTR 0.65%, average
position 30.4.

**Holiday pages:** all gift guide and roundup ASINs in stock on Amazon US except
**`B004BATWE0` (Zippo Classic Black Matte)**: no Add to Cart, only other sellers. Not
changed yet, waiting on Batu's decision. It's used twice on the gift guide (the quick
answer's "Brushed Chrome or Black Matte with engraving" upgrade pick, and the Black
Matte bullet in "The Classics", which already names the red-bordered `B001E5FLWW` as
the sold-out fallback) and three times on the best-sellers page (quick answer, table
row, "Check price" button).

**New draft: `/zippo-wick-replacement/`.** Primary "zippo wick replacement" 1.3K/SD 27;
also "zippo lighter wick replacement" 320/SD 30, "zippo wick near me" 170/SD 26,
"zippo wick replacement instructions" 10/SD 7, "can you replace the wick in a zippo"
10/SD 9, "zippo hand warmer wick replacement" 10, plus low-volume when/how-often
questions. Overlap check: the refill guide (one wick paragraph), the repair guide
(wick maintenance section), the flint post (flint + wick section) and the best-sellers
wick row only cover it as sub-sections, and no page targets the query, so it's a new
post. ~2,050 words: signs, trim vs replace, tools, 11 steps, how often, genuine vs
generic, where to buy (incl. near me: Zippo store locator, tobacco shops, Ace,
Walmart, zippo.com, Amazon), butane insert and hand warmer notes (neither has a wick;
refillable hand warmers use a replaceable catalytic burner), troubleshooting table,
10-question FAQ (schema builds). Sources: Zippo KB wick, not-lighting, butane insert,
refillable hand warmer and warranty pages; the zippo.com wick guide, wick product,
co-pack, hand warmer burner and store locator pages; the Zippo AU FAQ and
getting-started pages; Ace Hardware's Zippo page and Walmart's Zippo wicks listing.
Links: `B005QH6RHW` (5 wicks), `B01IAM6JN6` (wick set), `B01G2IUJX6` (flint + wick
co-pack), `B071LFFN5V` (4 oz fluid). Hero reuses
`/uploads/2026/10/zippo-refill-fluid-into-cotton.webp` (the refill guide's hero), so
a dedicated hero is still needed. Reciprocal links from the flint post, the refill
guide, the repair guide and the best-sellers wick row. Build passes, 49 pages; all
315 Amazon links in `dist/` carry `tag=lightertorch-20`; no prices in the new post.

Pushed live 2026-10-31 with Batu's go-ahead (`fe81565..016ff0f`), together with the
Red Border Zippo `B001E5FLWW` replacing `B004BATWE0` on the gift guide and best-sellers.

### 2026-11-02 — Monday session
**Branch `session-2026-11-02` (local only, not pushed).** Synced with origin/master
first (Batu's Nov 1–2 commits: category pages, AdSense script, ads.txt).

**Blocked:** the local dashboard (localhost:3000) wasn't running, so no GSC/GA4 check
and no recheck of the Oct 10–11 rewrites yet. Ubersuggest showed signed out in the box
browser, so no project numbers and no Keyword Ideas; no new post drafted.

**Holiday pages (Amazon US, ZIP 10001):** all gift guide and roundup picks in stock
except **`B071LFFN5V` (Zippo 4 oz fluid): "Currently unavailable", no other sellers.**
No in-stock Zippo-brand fluid on Amazon (the 12 oz `B002CENQPS` is third-party only).
It's linked from 10 posts (11 links). Not changed yet, waiting on Batu's decision.
USPS 2026 send-by FAQ re-checked against usps.com: still correct (Dec 17/18/19).

**Best-sellers:** heading now "Black Matte with Red Border". The photo's alt text
stays as is, because the image shows a plain black matte case (no border); a photo of
the red-border model would be needed to change it. `updatedDate` 2026-11-02.

**`/best-flashlights-for-power-outages/` optimized** (#59, high impact). New title
"Best Flashlights for Power Outages: Blackout Kit (2026)", winter-storm angle, an
at-a-glance picks table, and direct `/dp/` links replacing the 5 search links: Coleman
LED lantern `B07HF226B4` (4 D), Fenix CL28R `B0BSB4BNNG` (USB-C), Black Diamond Spot
400 `B0H1R7P6L2` (AAA), Fenix PD36R V2.0 `B0H73HZH2Y`, Streamlight PolyTac
`B001S0IN46`; all in stock 2026-11-02. Sources added: Ready.gov power outages and
winter weather, the Fenix PD36R V2.0 manual and product page. Added CO safety, car
flashlight, 3 new FAQs (7 total). Removed the unsourced Ida claim. ~1,600 words.
Build passes, 49 pages; all 322 Amazon links in `dist/` carry `tag=lightertorch-20`.

## 2026-11-03 — Quick site audit + fixes

**Audit (49 built pages):** every page has a title, description, canonical and one H1;
no duplicate titles/descriptions, no broken internal links or images, all Amazon links
tagged, disclosure on every page with Amazon links. Card thumbnails use `alt=""` (decorative, fine).

**Fixed:**
- `/make-a-gas-lighter-at-home/` had zero inbound links. Now linked from the gas stove,
  fixing-a-lighter and voltage posts.
- `/what-is-the-best-torch-brand/` had one inbound link. Now also linked from best
  flashlights on Amazon and the police flashlights post.
- Brand guide: removed maker list prices ($419.90, $99.90, $44.99, $24.99) next to Amazon
  links; the at-a-glance table keeps approximate price ranges.
- Zippo pages (earlier today): repair guide wick steps, fuel table, US spellings; gift
  guide links the wick guide; best-sellers wick row links the 5-pack. Indexing requested
  in GSC for the wick post, gift guide, best-sellers and repair guide.

**Open:**
- Three hero images are shared by two posts each. Prompts for the replacements are in
  `lightertorch-images/PROMPTS-2026-11-03-duplicate-heroes.md` (wick replacement, flint
  replacement, lighter shock). Not generated yet.
- Five August buying guides have no `updatedDate` (arc lighters, Zippo vs BIC, EDC,
  headlamps, keychain): refresh before the holidays.
- `public/uploads/2026/09/fading-flashlight-beam-dark-garage.webp` and
  `flashlight-submerged-water-tank-beam.webp` are untracked on purpose: heroes for the
  planned "rechargeable flashlight dies fast" and "IP ratings" posts.
- Keychain flashlights and the Sunitact review still have only 2 inbound links each.

### 2026-11-03 — Ubersuggest pre-write: camping lantern (next post candidate)

Trigger: GSC flagged the old `/top-10-best-camping-torches-of-2024-...` URL (301 to
`/best-camping-flashlights/`) with +1,183% impressions: 92 impressions, 0 clicks, pos 17.5,
almost all "best [unbreakable|scratch resistant|longest lasting|waterproof] lantern 2024".
Requested reindex of the old URL so Google sees the 301. No current post targets lanterns.

Ubersuggest (en/US):

| Phrase | Vol | SD |
|---|---|---|
| **rechargeable lantern for camping** (primary) | 1,600 | **25** |
| rechargeable camping lantern | 1,900 | 35 |
| best camping lantern | 1,000 | 41 |
| best rechargeable camping lantern | 590 | 40 |
| best rechargeable lantern | 390 | 42 |
| camping lantern (head term) | 8,100 | 40 |
| rechargeable lantern for power outage | 140 | 23 |
| fenix cl28r rechargeable lantern | 70 | 18 |

SERP for the primary: two product carousels and an AI Overview on top; organic led by
switchbacktravel (DA 55), Travel + Leisure (DA 88), Goal Zero and Lepro shop pages. Winnable
as a long-tail, not as "camping lantern".

**Proposed post:** "Best Rechargeable Camping Lanterns (2026)", slug
`best-rechargeable-camping-lanterns`, categories Buying Guides. Picks from makers that publish
FL1 specs (Fenix CL28R/CL26R, Goal Zero Lighthouse, Black Diamond, Coleman rechargeable).
Sections: lumens vs runtime, USB-C/power-bank output, warm light and red mode, hanging
options, power-outage use. No overlap: `/what-is-the-best-torch-for-camping/` is the
headlamp-vs-lantern framework, `/best-camping-flashlights/` covers handhelds. Link both ways,
plus from the power-outage guide. Needs a hero prompt and a stock check (ZIP 10001).

**Draft written 2026-11-03** on branch `draft-lantern-2026-11-03`:
`/best-rechargeable-camping-lanterns/` (~1,900 words incl. table, 4 picks, 7 FAQs). Specs from
fenixlighting.com and goalzero.com product pages. Amazon stock check (US view, NY 10001, 2026-11-03):
- Fenix CL28R `B0BSB4BNNG`: In Stock, ships from Amazon, sold by Lumen Tactical.
- Fenix CL26R Pro `B0CJDXV51G`: "Only 5 left", ships from Amazon, sold by EdisonBright (bundle with cable).
- Goal Zero Lighthouse 600 `B08HRM4J8Y`: orderable, sold by Goal Zero, but delivery quoted Nov 21 to Dec 16. Recheck before publishing.
- Goal Zero Lighthouse Micro Charge `B075MGL7R8`: In Stock, ships from Amazon, sold by Goal Zero.
Dropped: Black Diamond Moji R+ (Micro-USB, maker page gives both 150 and 200 lm); Coleman Classic
Recharge 400 (coleman.com blocks with a bot check, specs unverifiable from the maker).
Hero: `2026/11/rechargeable-lantern-camp-table.webp` (generated from
`lightertorch-images/PROMPTS-2026-11-03-rechargeable-lantern.md`, installed 2026-11-03, passes the checklist). Linked from the camping torch
framework, camping flashlights and power-outage posts. Not published.

### 2026-11-03 — Zippo fluid link swap
**Branch `session-2026-11-03` (local, not pushed).** Batu's decision on the Nov 2 open item:
replace the unavailable Zippo 4 oz fluid `B071LFFN5V` with the **Zippo Classic Lighter Gift
Set `B001E5FLWC`** in all 10 posts (11 links). Amazon US (NY 10001, 2026-11-03): In Stock,
ships from and sold by Amazon.com. Contents per zippo.com (SKU 50R): a 4 oz can of Zippo
lighter fuel, a 6-flint dispenser and a gift box, lighter not included. Standalone Zippo
fluid is still out: 4 oz "Currently unavailable", 12 oz `B002CENQPS` third-party only, no
buy box. Anchors changed where they implied a standalone can: gift guide add-on row, the
best-sellers fluid row and the refill guide's supplies list. If `B071LFFN5V` comes back in
stock, consider switching the generic "lighter fluid" links back. Build passes, 50 pages.

### 2026-11-04 — Header mega menu
**Branch `menu-2026-11-04`.** Batu asked for a menu like meister-mit-ki.de. The header
now has three dropdown panels (Flashlights, Lighters, Safety & How-To) plus a Brands link,
modelled on Meister's `MegaNav.astro`: a "Start here" guide, three columns of guides (short
label + the post's own description), a side box and a footer link to the category page.
Hover or click on desktop, Escape or an outside click closes; phones get a "Menu" button
with an accordion. Menu entries live in `src/components/Header.astro`; the build fails if
one points at a missing post. The header stays white (the logo is dark text) and uses the
logo coral `#f0715a` as the accent, with `#b8432f` for coral text. Side-box points only
repeat claims already on the site (About page, Zippo guides, power-outage guide).
`HeaderLink.astro` removed (unused); `Icon.astro` holds the Lucide icons.

### 2026-11-04 — Browsing redesign (keep readers on the site)
**Branch `engagement-2026-11-04`.** Batu asked for a design that keeps visitors reading.
No analytics were available for this pass, so watch GA4 engagement time and pages per
session from here.
- **Posts:** category chips and "N min read" above the title; "On this page" contents (sticky
  sidebar with the current section highlighted at 1240px+, a closed fold-out box below that,
  so the quick answer stays in the first screen); "Keep reading" with 3 related guides and
  "More in {category}" under every article.
- **Home:** three topic tiles, the 6 latest guides as cards, then every guide grouped by topic
  (all 40 still one click from home). Page height ~10,900px → ~3,400px on desktop.
- **Category pages:** the same `PostCard` grid. **Footer:** link columns per topic + site pages.
- One topic list, `src/lib/topics.ts`, now feeds the menu, home tiles, footer and related
  posts; `src/lib/posts.ts` has reading time, `topicOf()` and `relatedPosts()` (same topic,
  shared slug words, categories, tags). The build fails on a slug that no longer exists.
- Checked: 4,453 internal links resolve, contents anchors match headings, all Amazon links tagged.
- Open: the Zippo wick and refill posts share a hero image (shows twice in "Latest guides");
  the Zippo repair hero is a 4,640px JPG.

### 2026-11-04 — Front-page images: no repeats, more variety
**Branch `images-2026-11-04`.** Batu: too many similar images on the front page.
- **No hero is shared any more.** New heroes (Hermes / grok-imagine, prompts and picks in
  `lightertorch-images/PROMPTS-2026-11-03-duplicate-heroes.md`):
  wick replacement → `2026/11/zippo-wick-simple-linen.webp` (bright linen),
  flint replacement → `2026/11/zippo-flint-simple-camp.webp` (golden-hour campsite),
  lighter shock → `2026/11/lighter-static-zap-fingertip.webp` (blue spark, night kitchen).
- **Zippo repair hero** was an 8.2 MB 4640x6960 JPG loaded by the post and every card; now a
  16:9 crop at 1280x720 WebP (69 KB), `2024/03/a-lighter-with-a-picture-of-a-bicycle-on-it-1280x720.webp`.
  The original file stays for any outside links.
- **"Latest guides" takes at most 2 posts per topic**, so recent Zippo posts can't fill the row.
- Draw Things CLI (Krea 2 Turbo) only produced noise locally; see the prompts file.

### 2026-11-05 — Thursday session: TSA lighter post for holiday travel
**Branch `session-2026-11-05` (local, not pushed).** Dashboard (GSC 28d to Nov 2): 14 clicks,
2,669 impressions, avg position 28.5. Top next action from Bing: `/can-you-bring-a-lighter-on-a-plane/`
ranks 6.1 with 989 impressions but only 3 clicks, so this pass is title/meta plus a holiday angle.
- Title now "Can You Bring a Lighter on a Plane? Zippo, BIC & Torch (TSA 2026)"; new
  description leads with the yes; `updatedDate` 2026-11-05.
- New section "Flying Home With a Lighter as a Gift": a never-filled Zippo is allowed in checked
  bags (TSA lighter page, updated Jul 14, 2026); lighter fluid is banned from both bags (TSA
  lighter-fluid page), so gift sets with a fluid can don't fly. Links to the gift guide (which
  already links back). New FAQ: new Zippo in checked luggage.
- Build passes, 50 pages.
