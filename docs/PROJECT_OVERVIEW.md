# Travellers — Project Overview & Architecture (V4 Multi-Page)

## 1. Product Context & Vision
**Travellers** is a modern, community-driven travel platform designed to connect adventurous spirits, solo travelers, backpackers, and digital nomads worldwide.

**Core Philosophy:**
> *"Don't listen to what they say, Go see."*

### Key Value Propositions
- **Curated Destination Discovery:** Discover scenic gems, viewpoints, and hidden local spots (such as Sajek Valley, Zero Point).
- **Social Connection & Travel Buddies:** Find like-minded companions heading to the same destinations with profile matching.
- **Community Events:** Create and join travel excursions, road trips, and cultural meetups.
- **Visual Memory Sharing:** Share photos, stories, and travel logs with an active global travel network.
- **Localized & Interest-Based Traveler Profiles:** Connect with solo travelers and community organizers categorized by travel style and origins.

---

## 2. Target Audience & Personas
- **Solo Adventurers:** Travelers seeking safety, company, and authentic recommendations on the road.
- **Backpackers & Nomads:** Budget-conscious yet experience-driven globetrotters looking for flexible travel buddies.
- **Community Organizers:** Group trip leaders and local ambassadors curating group activities.

---

## 3. Brand Identity & Visual Language
- **Brand Archetype:** Explorer & Companion (Adventurous, warm, editorial, modern, community-centric).
- **Color Identity:**
  - Primary Coral Orange: `#FF5B3D`
  - Secondary Sunset Tangerine: `#FF7A45`
  - Accent Golden Sunshine: `#FFC94A`
  - Warm Canvas Surface: `#FFF8F2` & `#FFF9F5`
  - Crisp White: `#FFFFFF`
  - Deep Text Contrast: `#251613` (warm espresso/coffee)
  - Muted Charcoal: `#6E6462`
  - Border: `#EDE7E2`
- **Typography:** Plus Jakarta Sans with sharp editorial hierarchy, high legibility, and geometric cleanliness.

---

## 4. Architectural Stack
- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with CSS Custom Properties tokenization (`@theme`)
- **Animation & Motion:** Framer Motion (`motion/react`)
- **Icons:** Lucide React & Custom SVG Brand Marks
- **Responsive Targets:** 320px (Mobile S), 390px (Mobile M), 768px (Tablet), 1024px (Laptop), 1440px+ (Ultra-wide Desktop)

---

## 5. Site Map & Multi-Page Routes

### 1. Primary Landing Page — `/`
The flagship conversion hub with zero visual regressions:
- Global Navigation Bar (root-relative anchor support)
- Hero Section (editorial headline, store buttons, phone mockup)
- Traveller Community Section (world map, 6 traveler waypoints, glowing nodes, staggered reveal)
- Get Connected Section (`#experience`, Luke James feedback card `#feedbacks`, 3 feature cards)
- Popular Travellers Section (`#popular`, buddy row, interactive phone mockup)
- Pricing Section (`#pricing`, spring switch slider toggle, single 3-card grid)
- Download CTA Banner (`#download`, App Store/Google Play modals)
- Comprehensive Footer (5 columns, beta indicator, transparent demo newsletter)

### 2. About Us — `/about`
- Editorial hero: *"Travel is better when shared."*
- Brand Story: *"More than destinations. It's about connections."*
- Mission & Vision: *"Make every journey more connected"* & *"A world where travellers never have to explore alone"*
- 4 Guiding Principles: Connection, Exploration, Authenticity, Community
- Trust & Transparency notice
- Closing dual-action CTA

### 3. Features — `/features`
- Hero: *"Everything you need for a more connected journey."*
- 5 Core Detailed Feature Breakdowns:
  1. Discover Destinations (visual card, check-in metrics, trail tags)
  2. Meet Fellow Travellers (traveler cards, bios, origin badges)
  3. Create & Join Events (demonstration event card, departure notes, attendee row)
  4. Share Memories (two-photo split collage, cheers/saves counters)
  5. Build Your Travel Community (world map network, floating traveler waypoints)
- 3-Step Conceptual Workflow: 01 Discover, 02 Connect, 03 Explore Together
- Closing CTA

### 4. Privacy Policy — `/privacy` (Draft for Review)
- Reusable `LegalLayout` with sticky Table of Contents and status alert
- 12 comprehensive sections based on factual engineering audit
- Distinction between current prototype capabilities and planned backend databases
- Zero-tracking-cookies audit verification

### 5. Terms of Service — `/terms` (Draft for Review)
- Reusable `LegalLayout` with sticky Table of Contents and status alert
- 15 comprehensive legal sections
- Critical outdoor activity & hiking disclaimer
- Community safety principles and intellectual property protections

### 6. Intentionally Deferred Routes
Per product specification, no empty placeholder pages are created. Planned routes (Careers, Enterprise, Blog, Podcast, Shop, Developers) are marked with transparent status badges (`Planned`, `Roadmap`, `Beta`, `Upcoming`) in the footer.
