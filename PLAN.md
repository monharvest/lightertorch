# LighterTorch.com — Improvement Plan

Site: https://lightertorch.com · Repo: github.com/monharvest/lightertorch (push to `master` = auto-deploy via Cloudflare Pages)
Amazon Associates tag: `lightertorch-20` (signed up 2026-08-01 — needs **3 qualifying sales by 2027-01-28** (180 days) or the account closes; as of 2026-09-27: 2 shipped (Aug 28 $1.04, Sep $0.33) + 1 ordered in Sep, not yet shipped)

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
  | `filling-up-a-gas-lighter` | how to fill a butane lighter (+ refill with butane 9,900; Zippo 9,900; BIC 2,900; torch 1,600) | 9,900 | 31 |
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
