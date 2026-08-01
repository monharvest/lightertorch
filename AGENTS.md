# Agent context — LighterTorch.com

(For Hermes and any other agent working in this folder.)

This is an Astro static site for lightertorch.com, an Amazon-affiliate blog about flashlights and lighters. Full project rules are in [CLAUDE.md](CLAUDE.md) and the work roadmap is in [PLAN.md](PLAN.md) — read both before making changes.

Non-negotiables:

- Amazon links must include the affiliate tag `lightertorch-20`.
- Posts live in `src/content/blog/*.md`; only use the 5 categories listed in CLAUDE.md.
- Deleted/renamed posts need 301s in `public/_redirects` (both `/slug` and `/slug/` forms).
- `npm run build` must pass before pushing; pushing to `master` deploys the live site.
