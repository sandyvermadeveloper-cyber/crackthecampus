# Crack The Campus — Landing Page Recreation

A responsive landing page recreation for **Crack The Campus (CTC)** — India's campus-to-career assessment and placement preparation platform.

- **Reference Website**: [https://www.crackthecampus.com/](https://www.crackthecampus.com/)
- **GitHub Profile**: [https://github.com/sandeepverma9525](https://github.com/sandeepverma9525)
- **Live Website**: [https://crackthecampus-indol.vercel.app/](https://crackthecampus-indol.vercel.app/)
- **Performance Benchmark Guide**: [PERFORMANCE.md](./PERFORMANCE.md)

Built with **Next.js App Router**, **JavaScript (JSX)**, and **Tailwind CSS v4**. Optimized for static server prerendering, responsive layout across mobile and desktop devices, keyboard navigation, and CSS animations.

---

## 🚀 Quick Setup & Commands

### Prerequisites
- **Node.js**: `v20.9.0` or higher (required by Next.js 16).
- **Package Manager**: `npm` (v9+) or equivalent (`yarn`, `pnpm`, `bun`).

### Installation
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Code Linting
Run ESLint to check for syntax and formatting rules:
```bash
npm run lint
```

### Production Build & Launch
Create an optimized production build and launch the production server:
```bash
npm run build
npm run start
```

---

## 🛠️ Technology Stack & Selection Rationale

1. **Framework: Next.js 16 (App Router)**
   - Selected for Server Component architecture. Static layout sections generate static HTML during the build process, serving pre-rendered markup on initial page load. Interactive modules hydrate selectively in the browser.
2. **Language: JavaScript & JSX**
   - JavaScript/JSX was chosen for familiarity and faster delivery within the assessment time box.
3. **Styling: Tailwind CSS v4**
   - Utility-first styling with native CSS variable theme tokens (`--font-sans`, `--background`) and zero JavaScript runtime styling overhead.
4. **Icons: Lucide React (`lucide-react`)**
   - Provides lightweight SVG icons (`Sparkles`, `X`, `Menu`, `ArrowRight`) for interactive micro-components.

---

## 📁 Project Architecture & Folder Structure

Content is driven by structured data files ([`siteContent.js`](./src/data/siteContent.js) and [`links.js`](./src/lib/links.js)), keeping UI components modular and clean.

```
crack-the-campus/
├── public/
│   ├── lightlogo.png               # Header brand logo
│   └── hero-promo-office.jpg       # Compressed hero background image (~211KB)
├── src/
│   ├── app/
│   │   ├── favicon.ico             # App router favicon
│   │   ├── globals.css             # Tailwind v4 directives, keyframe marquees, theme tokens
│   │   ├── layout.jsx              # Root layout with Geist font loading and SEO metadata
│   │   └── page.jsx                # Server Component assembling main landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx # Interactive dismissible promo banner ("use client")
│   │   │   ├── Header.jsx          # Sticky navbar with floating mobile menu ("use client")
│   │   │   └── Footer.jsx          # Footer with contact details & map link
│   │   ├── sections/
│   │   │   ├── Hero.jsx            # Value proposition & primary CTAs
│   │   │   ├── SocialProof.jsx     # Bi-directional infinite logo marquee (B&W to color hover)
│   │   │   ├── Ecosystem.jsx       # Dual-Core structure: Web Hub vs Pro-Suite
│   │   │   ├── CTCScore.jsx        # Composite CTC placement score credential
│   │   │   ├── Contests.jsx        # Monthly Performance Series leaderboard preview
│   │   │   ├── Infrastructure.jsx  # Institutional scale stats (1,300+ drives, 99.9% uptime)
│   │   │   ├── FAQ.jsx             # Accessible accordion Q&A ("use client")
│   │   │   └── FinalCTA.jsx        # Bottom conversion banner
│   │   └── ui/
│   │       ├── ButtonLink.jsx      # Standardized CTA button/anchor component
│   │       ├── Container.jsx       # Responsive max-width wrapper
│   │       └── SectionHeading.jsx  # Section badge and title component
│   ├── data/
│   │   └── siteContent.js          # Centralized copy, FAQ items, and company logo SVG paths
│   └── lib/
│       └── links.js                # Centralized URLs and section anchor identifiers
├── package.json                    # Project dependencies and npm scripts
├── eslint.config.mjs               # ESLint configuration
├── README.md                       # Setup and architecture documentation
└── PERFORMANCE.md                  # Audit guide and performance benchmark template
```

---

## 📦 Dependencies & Purpose

| Package | Type | Purpose |
| :--- | :--- | :--- |
| `next` (`16.3.7`) | Dependency | Core React framework for App Router, SSG, and asset optimization. |
| `react` (`19.2.8`) | Dependency | UI component rendering engine. |
| `react-dom` (`19.2.8`) | Dependency | DOM rendering for React 19. |
| `lucide-react` (`^1.48.0`) | Dependency | SVG icons (`Sparkles`, `X`, `Menu`, `ArrowRight`). |
| `tailwindcss` (`^4`) | Dev Dependency | Utility-first CSS engine. |
| `@tailwindcss/postcss` (`^4`)| Dev Dependency | PostCSS plugin for Tailwind CSS v4. |
| `eslint` (`^9`) | Dev Dependency | Linter for JavaScript code quality. |
| `eslint-config-next` (`16.3.7`) | Dev Dependency | Next.js linting rules and recommended settings. |

---

## ⚡ Technical Optimizations

### 1. Server Components vs. Client Hydration
Static sections (`Hero`, `SocialProof`, `Ecosystem`, `CTCScore`, `Contests`, `Infrastructure`, `FinalCTA`, `Footer`) are static Server Components pre-rendered to HTML at build time. Client JavaScript is loaded only for interactive components marked with `"use client"` (`AnnouncementBar`, `Header`, `FAQ`), keeping the initial client JavaScript bundle lean.

### 2. Image Optimization
- The hero section background image ([`hero-promo-office.jpg`](./public/hero-promo-office.jpg)) was compressed from **1.5MB** to **~211KB** (~86% file size reduction).
- Above-the-fold images (`hero-promo-office.jpg` and `lightlogo.png`) use Next.js `<Image priority />` to trigger early preloading.

### 3. Font Loading & `font-display: swap`
- `Geist` (sans) and `Geist Mono` are loaded using `next/font/google` with `display: 'swap'`.
- **How `swap` works**: The browser renders text immediately using system fallback fonts while custom web fonts download in the background, avoiding FOIT (**Flash of Invisible Text**). Note that font swapping can produce a brief FOUT (**Flash of Unstyled Text**) if fallback font metrics differ slightly before the custom font renders.

### 4. CSS Keyframe Marquee Animations
- The bi-directional `SocialProof` logo marquee runs using CSS `@keyframes` with `transform: translateX()`, avoiding JavaScript scroll listeners.

---

## ♿ Accessibility Implementation

- **Semantic Layout**: HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) with descriptive `aria-labelledby` IDs.
- **Accessible Motion & Repetition**: Marquee animation respects `prefers-reduced-motion`, and duplicate visual logo sets are hidden from assistive technology.
- **Keyboard & Focus State**: Distinct focus indicators (`focus-visible:ring-2 focus-visible:ring-[#7C3AED]`) on interactive buttons and navigation links.
- **Accessible Drawer & Accordion**:
  - The mobile menu drawer includes a document-level listener to close on `Escape` key press or clicking outside.
  - The `FAQ` accordion buttons use dynamic `aria-expanded` and `aria-controls` attributes linking buttons to content panels.

*Note: While accessibility best practices have been implemented, a formal third-party WCAG audit has not been conducted.*

---

## 📝 Design Decisions & Known Limitations

### Design Decisions
- **Data-Driven Architecture**: Section copy, FAQ items, and company logo SVG paths are stored in [`siteContent.js`](./src/data/siteContent.js) for clean maintainability.
- **Verifiable Content**: Company logos shown on the reference website (Google, Accenture, TCS, Infosys, Wipro, Tata, SAP) and statistics (1,300+ placement drives, 99.9% uptime) align with reference site content.
- **Floating Mobile Drawer**: The mobile navigation floats over the page with an overlay backdrop rather than displacing page layout.

### Known Limitations
1. **Static & Mock Content**: Platform statistics, contest schedules, and leaderboards rely on static mock data defined in [`siteContent.js`](./src/data/siteContent.js).
2. **No Live Backend / API**: There are no database models or server-side API endpoints connected for user authentication or contest submissions.
3. **External CTA Destinations**: Action buttons and navigation links route to external target URLs (e.g. `crackthecampus.com`) or section anchor hashes (`#features`, `#contests`).

### Realistic Future Improvements
1. **Interactive Placement Score Calculator**: Build a client-side slider component to calculate custom placement readiness scores dynamically.
2. **Interactive Code Editor Sandbox**: Add a simulated coding editor component within the Pro-Suite section.
3. **Automated E2E Testing**: Add Playwright / Cypress integration tests for automated CI pipelines.

---

## 🌐 Deployment Instructions (Vercel)

1. Push the project repository to GitHub, GitLab, or Bitbucket.
2. Import the project in the [Vercel Dashboard](https://vercel.com/).
3. Select the **Next.js** framework preset. Vercel automatically detects default build settings:
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel handles static output generation and deployment automatically.

- **Live Deployment**: [https://crackthecampus-indol.vercel.app/](https://crackthecampus-indol.vercel.app/)
- **GitHub Profile**: [https://github.com/sandeepverma9525](https://github.com/sandeepverma9525)
