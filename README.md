# Crack The Campus — Landing Page Recreation

An engineering student landing page recreation for **Crack The Campus (CTC)** — India's campus-to-career assessment and placement preparation platform.

Built with **Next.js App Router**, **JavaScript (JSX)**, and **Tailwind CSS**. Optimized for ultra-fast load times, responsive mobile experience, keyboard accessibility, and zero-dependency animation performance.

---

## 🚀 Quick Setup & Commands

### Prerequisites
- Node.js 18+ or 20+
- npm (or yarn / pnpm / bun)

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ Technology Stack & Decisions

1. **Framework**: Next.js 16 (App Router)
   - Selected for server component architecture, automatic route prerendering, static HTML optimization, and zero-JS overhead for static sections.
2. **Language**: JavaScript & JSX ONLY
   - Enforced strict compliance with project constraints. No TypeScript or TSX was introduced.
3. **Styling**: Tailwind CSS v4
   - High-performance utility classes and native CSS variables. Zero runtime styling overhead.
4. **Icons & Assets**: Native inline SVGs
   - Avoided heavy third-party icon libraries to keep initial JavaScript bundle size minimal (~0 KB icon runtime weight).

---

## 📁 Architecture & Folder Structure

```
crack-the-campus/
├── public/
│   ├── lightlogo.png               # Brand logo
│   └── hero-promo-office.jpg       # Compressed & optimized hero background (~211KB)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css            # Design tokens, marquee animations, smooth scroll
│   │   ├── layout.jsx             # Root layout with SEO meta & Geist font optimization
│   │   └── page.jsx               # Main landing page (Server Component)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx # Dismissible promo banner ("use client")
│   │   │   ├── Header.jsx          # Sticky navbar with mobile menu ("use client")
│   │   │   └── Footer.jsx          # Comprehensive footer with contact & maps link
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Value proposition & key CTAs
│   │   │   ├── SocialProof.jsx     # Infinite marquee with verified company logos
│   │   │   ├── Ecosystem.jsx       # Dual-Core structure: Web Hub vs Pro-Suite
│   │   │   ├── CTCScore.jsx        # Verified placement readiness score credential
│   │   │   ├── Contests.jsx        # Monthly Performance series & leaderboard preview
│   │   │   ├── Infrastructure.jsx  # Enterprise stats (1,300+ drives, 99.9% uptime)
│   │   │   ├── FAQ.jsx             # Accessible 10-item accordion ("use client")
│   │   │   └── FinalCTA.jsx        # High-conversion bottom call to action
│   │   └── ui/
│   │       ├── ButtonLink.jsx      # Standardized button/anchor UI component
│   │       ├── Container.jsx       # Layout width wrapper
│   │       └── SectionHeading.jsx  # Standardized heading & badge component
│   ├── data/
│   │   └── siteContent.js          # Centralized data arrays for text & content
│   └── lib/
│       └── links.js                # Verified URLs and internal section anchors
├── README.md                       # Architecture & setup guide
├── PERFORMANCE.md                  # Performance benchmark report template
├── package.json
└── eslint.config.mjs
```

---

## 📦 Dependencies & Justifications

- `next`: Core framework for SSG and routing.
- `react`, `react-dom`: React 19 UI rendering.
- `lucide-react`: Lightweight SVG icon set for UI micro-components.
- `tailwindcss`, `@tailwindcss/postcss`: Utility-first CSS processing.
- `eslint`, `eslint-config-next`: Code quality and linting.

---

## ⚡ Performance & Optimization Decisions

1. **Hero Image Optimization**:
   - The hero background image was compressed from **1.5MB** down to **~211KB** (~86% reduction) while preserving crisp 1280px resolution.
   - Preloaded above the fold using Next.js `<Image priority fetchPriority="high" />`.
2. **Font Loading**:
   - `next/font/google` with `display: 'swap'` for `Geist` and `Geist Mono` fonts to prevent render-blocking layout shifts (CLS = 0).
3. **Pure CSS Motion**:
   - Marquee animation and accordion transitions run purely in CSS using `transform` and `opacity`, avoiding main-thread JS animation frame lag.
4. **Reduced Motion**:
   - Respects `prefers-reduced-motion: reduce` by disabling non-essential animations for users with motion sensitivity.
5. **Server Components First**:
   - All static sections (`Hero`, `SocialProof`, `Ecosystem`, `CTCScore`, `Contests`, `Infrastructure`, `FinalCTA`, `Footer`) render as Server Components with **zero client-side JS burden**.
   - Client Component directive (`"use client"`) is strictly isolated to interactive elements (`AnnouncementBar`, `Header` mobile menu, `FAQ` accordion).

---

## ♿ Accessibility Considerations

- **Semantic HTML**: Utilized `<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, and `<footer>` with explicit `aria-labelledby` IDs.
- **Keyboard Navigation**: Visible focus rings (`focus-visible:ring-2 focus-visible:ring-[#7C3AED]`) on all buttons, links, and mobile menu toggles.
- **Accordion Accessibility**: FAQ accordions utilize `aria-expanded` and `aria-controls` attributes connected to corresponding content regions.
- **Color Contrast**: Dark background (`#0B0B0E`) paired with high-contrast text (`#FAFAFA` and `#A1A1AA`) meeting WCAG AA requirements.

---

## 📝 Assumptions & Truthful Content Claims

- **Zero Fake Claims**: Only company names, statistics, and claims verified on `crackthecampus.com` were included (Google, Accenture, TCS, Infosys, Wipro, Tata, SAP; 1,300+ drives; 99.9% uptime).
- **Navigation Links**: Real destinations are wired up (`/explore`, `/institution`, `/pricing`, `/download`, `/signup`, `/login`, `mailto:info@crackthecampus.com`, Google Maps location) or jump to on-page section anchors (`#ecosystem`, `#ctc-score`, `#contests`, `#infrastructure`, `#faq`, `#contact`).

---

## 🔮 Future Improvements with More Time

1. Add live interactive score calculation slider for the CTC Score component.
2. Add interactive code snippet simulation in the Pro-Suite section.
3. Integrate automated Playwright / Cypress E2E test suite for automated CI runs.

---

## 🌐 Deployment Steps (Vercel / Netlify / Cloudflare)

1. Push code to GitHub / GitLab repository.
2. Import project into Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `.next` (Vercel automatic).
