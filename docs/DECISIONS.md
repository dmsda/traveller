# Travellers — Architectural & Design Decisions

## 1. Framework Choice: Next.js 16 (App Router) + React 19 + TypeScript
- **Rationale:** Next.js provides first-class font optimization (`next/font/google`), optimized static image handling (`next/image`), seamless SSR/SSG rendering, and standard React 19 support.
- **Result:** Lightning-fast First Contentful Paint (FCP) and zero layout shift.

## 2. Styling: Tailwind CSS 4 + CSS Custom Properties Design Tokens
- **Rationale:** The prompt emphasizes tailored, harmonious HSL palettes, warm organic cream tones, and pixel-precise control. Combining Tailwind CSS 4 utility classes with explicit design tokens (`--color-primary: #FF5B3D`, `--color-surface-warm: #FFF8F2`, etc.) ensures exact fidelity to the four reference designs while retaining maintainability.
- **Avoided:** Heavy UI libraries (MUI, Chakra) that introduce generic SaaS looks inconsistent with the editorial, warm travel branding.

## 3. Phone Mockup Architecture: Pure HTML/CSS UI over Static Raster Graphics
- **Rationale:** The reference images show rich, legible, ultra-sharp phone mockups ("Travelers" header, "Search your destination Sajek", destination photo cards, avatars, and "Popular Travelers" profile cards). Rendering these screens via HTML/CSS components guarantees:
  1. Crisp vector-quality typography on all retina and high-DPI displays (no blurry compressed screenshot text).
  2. Fluid responsiveness and scaling without pixelation.
  3. Interactive elements (hover cards, clickable profile previews, smooth tooltips).

## 4. Visual Asset Generation Strategy
- **Photography:** Utilizing Google's high-fidelity image generation for authentic travel photography:
  - Solo traveler wearing an orange backpack with camera/binoculars in editorial outdoor daylight.
  - Sajek Hill sunset mountain ridges with warm golden hour colors.
  - Scenic green valley & mountain lake landscape.
  - Realistic traveler portrait avatars matching the names/nationalities in the reference.
- **Vectors/Illustrations:** Dotted world map, warm organic blobs, architectural sketch background, and brand marks created as high-performance SVGs to ensure minimal download footprint and sharp rendering.

## 5. Demonstration Interactivity Strategy
- As specified in the product guidelines, backend transactions (e.g. actual Stripe payments or live database auth) are intentionally avoided on this landing page.
- All interactive affordances (Pricing Plan modal, Store App modal, Newsletter subscription validation, Traveler Profile modal) provide rich, authentic client-side feedback clearly labeled as demo experiences with proper error handling and keyboard dismissability.
