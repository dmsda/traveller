# Travellers — Implementation Plan

## Phase 1: Environment Inspection & Scaffolding (Completed)
- [x] Inspect directory, runtime versions (Node 22.14, npm 10.9)
- [x] Scaffold Next.js 16 App Router with TypeScript & Tailwind CSS
- [x] Install `lucide-react` for lightweight modern UI icons
- [x] Verify production build pipeline (`next build`)
- [x] Create directory structure for components, data, lib, assets, and docs

## Phase 2: Design Tokens & System Setup
- [x] Draft `docs/PROJECT_OVERVIEW.md` and `docs/DESIGN_SYSTEM.md`
- [ ] Configure `src/app/globals.css` with custom CSS variables, typography classes, and utility tokens
- [ ] Configure layout fonts (Plus Jakarta Sans via `next/font/google`)

## Phase 3: Visual Asset Production & Management
- [ ] Generate/create authentic travel photography:
  - `public/assets/travelers/traveler-orange-backpack.jpg` (Editorial photo of traveler with orange backpack & camera)
  - `public/assets/destinations/sajek-hill-sunset.jpg` (Sunset mountain landscape for Sajek Hill Spot)
  - `public/assets/destinations/lake-valley-green.jpg` (Green mountain lake for Zero Point)
  - `public/assets/avatars/` (Diverse, stylish traveler avatars: Luke James, Alex, Sandy, Smith, Jessica, Julie, Farzan, Sajon, Martina)
- [ ] Create vector/SVG elements:
  - `public/assets/illustrations/world-map-dots.svg` (Clean dotted world map vector)
  - `public/assets/illustrations/organic-blobs.svg` (Coral and gold organic contour paths)
  - `public/assets/illustrations/city-sketch.svg` (Subtle architectural sketch line-art background)
  - `public/assets/brand/travellers-logo.svg`
- [ ] Document all assets in `docs/ASSET_INVENTORY.md`

## Phase 4: Core Component & Section Development
- [ ] Create mock data in `src/data/travelData.ts` (Community travelers, pricing tiers, features, footer links)
- [ ] Build reusable UI primitives:
  - `Button`, `StoreButton`, `SectionEyebrow`, `Modal`
  - Interactive `PhoneMockupHero` (crisp CSS/HTML app interface)
  - Interactive `PhoneMockupPopular` (crisp CSS/HTML popular travelers interface)
  - `TravelerBadgeCard` (interactive community pins)
- [ ] Build 8 main page sections:
  1. `Navbar` (Desktop nav, active states, mobile drawer)
  2. `HeroSection` (Editorial layout, store badges, floating phone & destination card, scroll indicator)
  3. `CommunitySection` (Dotted map, organic coral/yellow shapes, floating traveler badges)
  4. `GetConnectedSection` (Orange backpack traveler photo, quote card, 3 feature rows)
  5. `PopularTravellersSection` (Avatar buddy row, popular travelers phone mockup & profile inspection)
  6. `PricingSection` (Monthly/annual toggle with discount calculation, 3 tier cards, feature checklists)
  7. `DownloadCTASection` (Coral banner, app store buttons, wave decorative lines)
  8. `FooterSection` (Multi-column links, newsletter subscription with client validation, Clutch rating)

## Phase 5: Interaction & Interactivity Features
- [ ] Mobile navigation toggle & drawer
- [ ] Pricing billing toggle state ($29/mo vs $290/yr with annual savings pill)
- [ ] Interactive modal dialog for "Get Started" and "Get the App" store download simulation
- [ ] Profile modal / detail drawer when clicking community traveler badges
- [ ] Newsletter email validation with interactive feedback state
- [ ] Keyboard navigation, aria attributes, and focus rings

## Phase 6: Responsive Refinement & Mobile Optimization
- [ ] Test layout across 320px, 640px, 768px, 1024px, 1280px, 1440px
- [ ] Ensure phone mockups scale gracefully without horizontal scrollbar or clipping
- [ ] Refine line heights and clamp heading sizes

## Phase 7: Visual & Functional QA
- [ ] Compare visual composition with reference images
- [ ] Run `npm run lint` & `npm run build`
- [ ] Verify zero console errors, hydration errors, or broken image paths
- [ ] Generate testing report in `docs/TESTING_REPORT.md`
- [ ] Update `README.md` and `AGENTS.md`
