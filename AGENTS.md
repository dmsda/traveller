<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Travellers — Project Operational Guidelines

## 1. Single Source of Truth
- Design Reference: 4 UI reference images provided by the user.
- Documentation:
  - `docs/PROJECT_OVERVIEW.md`
  - `docs/DESIGN_SYSTEM.md`
  - `docs/ASSET_INVENTORY.md`
  - `docs/IMPLEMENTATION_PLAN.md`
  - `docs/TESTING_REPORT.md`
  - `docs/DECISIONS.md`

## 2. Core Constraints
- Maintain visual fidelity to the 4 reference designs at all times.
- Avoid generic SaaS templates or dark/neon color schemes.
- Use warm cream background (`#FFF8F2`), coral orange primary (`#FF5B3D`), deep brown-black text (`#251613`).
- All interactive controls (buttons, links, pricing toggle, newsletter) must have working client-side feedback.
- Preserve semantic accessibility, responsive flow (320px - 1440px+), and clean Next.js App Router conventions.

