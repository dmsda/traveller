# Travellers — Design System

## 1. Color Palette Tokens

The color palette is derived directly from the reference imagery, balancing warm organic earth tones with high-energy coral orange and soft cream backgrounds:

### Core Palette
| Token Name | Hex Code | HSL Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#FF5B3D` | `hsl(10, 100%, 62%)` | Primary CTAs, active indicators, brand accent bars |
| `--color-secondary` | `#FF7A45` | `hsl(17, 100%, 64%)` | Secondary buttons, gradients, hero glows |
| `--color-accent` | `#FFC94A` | `hsl(42, 100%, 65%)` | Yellow organic blobs, highlight tags, avatar borders |
| `--color-surface-warm` | `#FFF8F2` | `hsl(28, 100%, 97%)` | Hero container background, pricing container, subpage headers |
| `--color-surface-subtle` | `#FFFBF8` | `hsl(27, 100%, 99%)` | Subtle card background |
| `--color-surface-card` | `#FAF8F5` | `hsl(30, 25%, 97%)` | Legal TOC container, feature showcase containers |
| `--color-white` | `#FFFFFF` | `hsl(0, 0%, 100%)` | Base canvas, white card surfaces |
| `--color-text-primary` | `#251613` | `hsl(10, 31%, 11%)` | High-contrast editorial headlines & titles (deep espresso) |
| `--color-text-secondary` | `#6E6462` | `hsl(10, 6%, 41%)` | Body copy, descriptions, subheadings |
| `--color-text-muted` | `#9B918F` | `hsl(10, 7%, 59%)` | Category labels, small metadata |
| `--color-border-subtle` | `#EDE7E2` | `hsl(30, 20%, 91%)` | Hairline dividers, card outlines |
| `--color-border-card` | `#F2ECE7` | `hsl(26, 26%, 93%)` | Card borders, search bar borders |

---

## 2. Typography Scale

- **Primary Font Family:** `Plus Jakarta Sans`, system fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Headings Tracking:** Tight (`-0.02em` to `-0.03em`)
- **Category Eyebrows:** Uppercase, tracking wide (`+0.08em` to `+0.12em`), font-weight 700, font-size 11px - 13px

### Scale Matrix
- **Hero Title (`h1`):** `clamp(2.5rem, 5vw, 4.25rem)` (40px - 68px), font-weight 800, line-height 1.12
- **Section Title (`h2`):** `clamp(1.85rem, 3.5vw, 2.75rem)` (30px - 44px), font-weight 800, line-height 1.2
- **Card Title (`h3`):** `1.15rem - 1.35rem` (18px - 22px), font-weight 700
- **Body Large:** `1.125rem` (18px), line-height 1.6
- **Body Base:** `0.95rem` (15px), line-height 1.55
- **Body Small:** `0.85rem` (13.5px), line-height 1.5
- **Microcopy:** `0.75rem` (12px), line-height 1.4

---

## 3. Elevation & Shadows

Soft, diffused warm ambient shadows prevent visual heaviness and replicate Figma/editorial finesse:

- **Elevation Low (Cards):** `0 4px 20px -2px rgba(37, 22, 19, 0.05), 0 2px 6px -1px rgba(37, 22, 19, 0.02)`
- **Elevation Medium (Floating Mockups / Badges):** `0 12px 32px -4px rgba(37, 22, 19, 0.08), 0 4px 12px -2px rgba(37, 22, 19, 0.04)`
- **Elevation High (Featured Card / Dropdowns):** `0 20px 48px -6px rgba(255, 91, 61, 0.16), 0 8px 20px -4px rgba(37, 22, 19, 0.06)`
- **Orange CTA Glow:** `0 8px 24px -2px rgba(255, 91, 61, 0.35)`

---

## 4. Reusable Layout Components
1. **`Navbar` (`src/components/layout/Navbar.tsx`):**
   - Brand wordmark logo linking to `/`
   - Active route highlighting using `usePathname()`
   - Root-relative anchors (`/#experience`, `/#community`, `/#popular`, `/#feedbacks`, `/#pricing`, `/#download`)
   - Mobile hamburger drawer with secondary legal links
2. **`Footer` (`src/components/layout/Footer.tsx`):**
   - 5 desktop columns (Company, Travellers, Resources, Extras & Legal, Subscribe)
   - Status badge indicators for upcoming/planned features (`Planned`, `Roadmap`, `Beta`, `Upcoming`)
   - Verified community status indicator (`Community Beta v3.2 • Active Network`)
   - Transparent client-side newsletter simulation
3. **`LegalLayout` (`src/components/layout/LegalLayout.tsx`):**
   - Breadcrumb navigation
   - Sticky Table of Contents on desktop with active scroll spy
   - Prominent amber `DRAFT FOR REVIEW` status notice banner
   - Clean reading width (`max-w-none` with hierarchical headings)
