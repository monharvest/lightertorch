# LighterTorch.com

Affiliate content site about flashlights/torches and lighters. Astro 5 static site (converted from WordPress in 2026), deployed on **Cloudflare Pages — pushing to `master` deploys automatically**.

**Read [PLAN.md](PLAN.md) first** — it tracks what's done and what's next (Phase 2: upgrade money pages, Phase 3: new content ideas).

## Key facts

- **Amazon Associates tag: `lightertorch-20`** — every Amazon link must carry `?tag=lightertorch-20` (or `&tag=` if the URL already has a query string). Account created Aug 2026; needs 3 qualifying sales within 180 days (~Jan 2028) or it closes.
- Site URL: https://lightertorch.com · GA4: G-ZWE72TWTHB
- Content = markdown in `src/content/blog/` (one file per post, slug = filename). Legacy posts contain raw WordPress HTML blocks — that's fine, they render; new posts should be clean markdown.
- Frontmatter: `title`, `description` (~155 chars, plain text — never HTML), `pubDate`, `heroImage` (path under `/uploads/`), `categories`, `tags`.
- **Categories: use ONLY these 5** (they generate `/category/*` pages and the nav): `Buying Guides`, `Torch Lighter Reviews`, `Safety Tips`, `How-to Guides`, `Brands`. 1–2 per post.
- Redirects live in `public/_redirects` (Cloudflare Pages format). **Always add both slash variants** (`/old` and `/old/`) — Pages matches exactly.
- When deleting/merging a post, always 301 its URL.
- Images: use existing files under `public/uploads/`. Never hotlink external/signed CDN URLs (a previous post used expiring manuscdn.com links — they were removed).
- AI-generated images live in `~/Documents/Obsidian/Projects/websites/active/LighterTorch/lightertorch-images/` (not in this site repo).
- Do not deploy unless Batu asks.
- Style decision: US English primary ("flashlight" in titles; "torch" as secondary keyword). Niche is flashlights + lighters only — no off-topic posts.
- Site identity (title/description) is in `src/consts.ts`.

## Commands

- `npm run build` — build to `dist/` (verify before pushing)
- `npm run dev` — dev server
- Deploy = `git push origin master`
