# Travellers — Routes and Navigation Architecture

This document outlines the routing hierarchy, navigation behaviors, root-relative anchor mappings, and deferred route policies implemented across the Travellers website.

---

## 1. Active Route Map

| Route | Page Name | Status | Rendering Mode | Layout Component | Primary CTA Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Home Landing Page | Active | Prerendered Static | Default Layout + Modals | `/#download` |
| `/about` | About Us | Active | Prerendered Static | Standard Layout | `/features` & `/#community` |
| `/features` | Platform Features | Active | Prerendered Static | Standard Layout | `/#community` & `/#download` |
| `/privacy` | Privacy Policy | Active (Draft) | Prerendered Static | `LegalLayout` with TOC | `privacy@travellers.community` |
| `/terms` | Terms of Service | Active (Draft) | Prerendered Static | `LegalLayout` with TOC | `legal@travellers.community` |

---

## 2. Navigation Architecture & Root-Relative Linking

### The Subpage Anchor Trapping Problem
On single-page apps, simple hash links like `<a href="#pricing">` work only when the user is already on the homepage (`/`). When browsing subpages such as `/about` or `/features`, clicking `#pricing` causes the browser to search for an anchor on the current page (e.g. `/about#pricing`), leading to silent failures or broken links.

### Solution Implemented
All landing page section anchors are prefixed with a root slash (`/#...`), enabling universal cross-page routing:
- **Reviews:** `/#experience`
- **People:** `/#community`
- **Partners:** `/#popular`
- **Feedbacks:** `/#feedbacks` (mapped directly to Luke James' quote card)
- **Pricing:** `/#pricing`
- **Get the App / Download:** `/#download`

When on `/`, Next.js and browser smooth scrolling jump directly to the target element. When on `/about`, `/features`, `/privacy`, or `/terms`, Next.js routes back to the root page and scrolls to the specified anchor smoothly.

---

## 3. Navbar Navigation Implementation

### Desktop Navbar Items
- `Reviews` &rarr; `/#experience`
- `People` &rarr; `/#community`
- `Partners` &rarr; `/#popular`
- `Feedbacks` &rarr; `/#feedbacks`
- `Features` &rarr; `/features`
- `About` &rarr; `/about`
- `Pricing` &rarr; `/#pricing`
- `Get the App` (Button) &rarr; Opens App Store modal when on `/`; redirects to `/#download` when on subpages.

### Mobile Navigation Drawer
- Full list of primary links with active indicator based on `usePathname()`
- Direct quick links to `Privacy Policy` and `Terms of Service`
- Full-width `Get the App` CTA button
- Keyboard accessible with `aria-expanded` and clean focus states

---

## 4. Footer 5-Column Link Mapping

### Column 1: Company
- **About Us:** `/about` (Active)
- **Features:** `/features` (Active)
- **Careers:** `/about#values` (Badge: `Planned`)
- **Blog:** `/about#story` (Badge: `Planned`)
- **Press Info:** `/about` (Badge: `Media kit`)
- **Successes:** `/#experience` (Active)

### Column 2: Travellers
- **Why Travellers:** `/about` (Active)
- **Pricing:** `/#pricing` (Active)
- **Customer Stories:** `/#feedbacks` (Active)
- **Enterprise:** `/about#values` (Badge: `Roadmap`)
- **Security & Privacy:** `/privacy#security` (Active)

### Column 3: Resources
- **Download App:** `/#download` (Active)
- **Events & Meetups:** `/#experience` (Active)
- **Partners:** `/#popular` (Active)
- **Feature Guides:** `/features` (Active)
- **Help Center:** `/privacy#contact` (Badge: `Beta`)
- **Developers:** `/features` (Badge: `Roadmap`)
- **App Directory:** `/#download` (Active)

### Column 4: Extras & Legal
- **Privacy Policy:** `/privacy` (Active)
- **Terms of Service:** `/terms` (Active)
- **Podcast:** `/about` (Badge: `Upcoming`)
- **Travellers Shop:** `/about` (Badge: `Upcoming`)
- **Travellers at Work:** `/about#values` (Badge: `Community`)
- **Travellers Fund:** `/about#values` (Badge: `Community`)
- **Integrations:** `/features` (Badge: `Roadmap`)

### Column 5: Subscribe & Brand Status
- Honest client-side demonstration newsletter simulation (does not claim live backend email dispatch)
- Verified platform indicator: `Community Beta v3.2 • Active Network` (replaces unverified external Clutch metrics)

### Footer Bottom Row
- Wordmark &rarr; `/`
- Quick Nav &rarr; `Reviews`, `People`, `Partners`, `Feedbacks`, `Pricing`, `Features`, `About Us`, `Privacy`, `Terms`
- Social Icons &rarr; Valid external links with `target="_blank" rel="noopener noreferrer"` and accessible SVG aria labels.

---

## 5. Policy on Deferred Routes
In strict adherence to project specifications:
- No empty "lorem ipsum" or dummy placeholder pages are created.
- Routes requiring commercial or editorial infrastructure (e.g. `/blog`, `/careers`, `/enterprise`, `/podcast`) are deferred until actual production assets exist.
- Each deferred link is rendered with clear status pill badges (`Planned`, `Roadmap`, `Beta`, `Upcoming`) so users and stakeholders understand product milestones transparently.
