# Changelog

All notable changes to the **Travellers** website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased] - 2026-10-12

### Added
- **Digital Product Showcase (`/showcase`):**
  - Realistic desktop browser mockup frame with traffic light controls and address bar.
  - Smartphone mockup with Dynamic Island and overlapping desktop composition.
  - Interactive screen tab switcher for Homepage Hero, Community Map, Pricing, and Features.
  - Design System foundation snapshot featuring interactive click-to-copy color palette tokens and typography hierarchy.
  - Responsive engineering breakdown comparing 1440px desktop vs 390px mobile viewports.
  - Audited technology specifications and local quick-start terminal box.
- **Open-Source Community Standards:**
  - Added `CONTRIBUTING.md` with guidelines for branching, PRs, and quality gates.
  - Added `SECURITY.md` detailing responsible vulnerability disclosure.
  - Added `CODE_OF_CONDUCT.md` based on Contributor Covenant 2.1.
  - Added `.env.example` template with clean documentation.
  - Added `npm run typecheck` script for fast TypeScript validation (`tsc --noEmit`).

### Fixed
- **Newsletter Subscription Input:**
  - Removed browser user-agent borders, outlines, and rogue vertical divider lines from the footer email input.
  - Unified input and submit button into a single seamless pill container with `-webkit-autofill` background smoothing.
- **Hero Scroll Indicator Pill:**
  - Resolved clipping issue on the bottom-centered scroll indicator button by removing container `overflow-hidden` constraints.
- **Community Route Map:**
  - Reduced dead space padding across the community section.
  - Aligned sinuous SVG Bezier route line to seamlessly connect all 6 traveler waypoints.
- **Accessibility & Motion Design:**
  - Implemented `<MotionConfig reducedMotion="user">` globally in `src/app/layout.tsx`.
  - Added CSS fallback in `globals.css` ensuring zero duration transitions when `prefers-reduced-motion: reduce` is enabled.

---

## [0.1.0] - Initial Multi-Page Platform Release

### Added
- Multi-page Next.js App Router architecture with 5 core static pages:
  - Homepage (`/`) with Hero, Community, Experience, Popular Travellers, Pricing, and Download CTA.
  - About Us (`/about`) with brand story, mission, vision, and core principles.
  - Platform Features (`/features`) with 5 feature modules and conceptual workflows.
  - Privacy Policy (`/privacy`) with sticky Table of Contents and audit transparency draft.
  - Terms of Service (`/terms`) with safety guidelines and outdoor risk notices.
- Full responsive support from 320px mobile to 1440px+ ultra-wide screens.
- Comprehensive technical documentation in `docs/`.
