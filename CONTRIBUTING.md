# Contributing to Travellers

Thank you for your interest in contributing to **Travellers**! We welcome community contributions, bug reports, and enhancements to help make this travel community website experience even better.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed locally:
- **Node.js:** `v20.x` or `v22.x` (LTS recommended)
- **npm:** `v10.x` or higher
- **Git**

---

## 🚀 Development Workflow

### 1. Fork & Clone
Fork the repository on GitHub and clone your fork locally:
```bash
git clone https://github.com/dmsda/traveller.git
cd traveller
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌿 Branch & Commit Guidelines

- **Branch Naming:**
  - `feature/your-feature-name` (e.g., `feature/event-card-filter`)
  - `fix/issue-description` (e.g., `fix/navbar-mobile-padding`)
  - `docs/documentation-update` (e.g., `docs/update-readme-badges`)

- **Commit Messages:**
  - Write concise, descriptive commit messages in the imperative mood (e.g., `fix: align community route curve waypoints`, `feat: add interactive showcase preview switcher`).

---

## 🎨 Design & Code Standards

1. **Design System & Aesthetics:**
   - Adhere strictly to the established warm cream (`#FFF8F2`), coral orange (`#FF5B3D`), sunshine amber (`#FFC94A`), and espresso (`#251613`) palette documented in [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md).
   - Use `Plus Jakarta Sans` for typography and fluid CSS clamp values for responsive titles.
   - Do not introduce arbitrary neon gradients, stark SaaS templates, or unthemed UI libraries.

2. **Accessibility & Motion Design:**
   - Respect user motion preferences (`prefers-reduced-motion`). Keep animations subtle without causing layout shift or horizontal overflow.
   - All interactive controls (buttons, links, inputs) must include accessible ARIA labels, focus states, and visible touch targets (minimum 44px on mobile).

3. **Code Quality Gates:**
   Always run the local validation scripts before submitting a Pull Request:
   ```bash
   # 1. Run ESLint checks
   npm run lint

   # 2. Run TypeScript type validation
   npm run typecheck

   # 3. Verify production Turbopack build
   npm run build
   ```
   All checks must pass with **0 errors and 0 warnings**.

---

## 📬 Submitting a Pull Request (PR)

1. Ensure your local branch is up to date with `master`.
2. Push your changes to your fork.
3. Open a Pull Request against the `master` branch of `dmsda/traveller`.
4. Provide a clear PR description detailing:
   - What problem is solved or what feature is introduced.
   - Before and after screenshots (especially for visual UI changes).
   - Confirmation that `npm run lint`, `npm run typecheck`, and `npm run build` passed cleanly.
