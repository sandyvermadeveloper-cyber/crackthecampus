# Performance & Lighthouse Audit Report

This document outlines the performance strategy, target benchmarks, Core Web Vitals definitions, architectural optimizations, and standard operating procedures for auditing the **Crack The Campus** Next.js landing page.

- **Project Setup & Architecture**: [README.md](./README.md)
- **Reference Website**: [https://www.crackthecampus.com/](https://www.crackthecampus.com/)

---

## 📌 Audit Metadata & Environment Status

| Parameter | Configuration / Value |
| :--- | :--- |
| **Deployed URL** | `Pending deployment` *(update after publishing)* |
| **Local Audit URL** | `http://localhost:3102` *(temporary production server)* |
| **Audit Date** | September 30, 2026 |
| **Audit Tool** | Lighthouse `13.5.0` with headless Chrome |
| **Hosting Platform** | [Vercel](https://vercel.com/) planned (Next.js Preset) |
| **Environment** | Local Next.js production build (`npm run build && npm run start`) |
| **Test Conditions** | Mobile and desktop runs executed sequentially with Lighthouse default throttling |

---

## 🎯 Target Benchmarks vs. Measured Audit Results

Target thresholds represent standards for frontend performance assessments. The measurements below are local production-build lab results; they must be rerun against the deployed URL before final submission.

### 1. Lighthouse Category Scores

| Category | Target Score Range | Mobile (Measured) | Desktop (Measured) |
| :--- | :---: | :---: | :---: |
| **Performance** | `90 - 100` | `90` | `100` |
| **Accessibility** | `95 - 100` | `100` | `100` |
| **Best Practices** | `95 - 100` | `100` | `100` |
| **SEO** | `95 - 100` | `100` | `100` |

### 2. Core Web Vitals (Real-User Field Metrics)

> [!NOTE]
> Core Web Vitals quantify real-user experience (CrUX field data). Automated Lighthouse lab navigation audits measure lab proxies rather than true field INP.

| Metric | Full Name | Good Threshold | Measured Field Value | Classification |
| :--- | :--- | :---: | :---: | :--- |
| **LCP** | Largest Contentful Paint | `≤ 2.5 s` | `Not available`* | Core Web Vital |
| **INP** | Interaction to Next Paint | `≤ 200 ms` | `Not available`* | Core Web Vital |
| **CLS** | Cumulative Layout Shift | `≤ 0.10` | `Not available`* | Core Web Vital |

*\* **Field Data Note**: Real-user Core Web Vitals are collected via the Chrome User Experience Report (CrUX). They remain `Not available` until a live production deployment accumulates sufficient real user traffic.*

### 3. Lab Diagnostic Metrics (Synthetic Audits)

> [!NOTE]
> Lab metrics are measured synthetically under simulated CPU and network throttling. Total Blocking Time (TBT) serves as a lab proxy for main-thread responsiveness.

| Metric | Full Name | Recommended Target | Measured Value (Mobile) | Measured Value (Desktop) | Metric Type |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **FCP** | First Contentful Paint | `≤ 1.8 s` | `1.0 s` | `0.3 s` | Synthetic Lab Metric |
| **LCP** | Largest Contentful Paint | `≤ 2.5 s` | `3.1 s` | `0.6 s` | Synthetic Lab Metric |
| **CLS** | Cumulative Layout Shift | `≤ 0.10` | `0` | `0` | Synthetic Lab Metric |
| **TBT** | Total Blocking Time | `≤ 200 ms` | `170 ms` | `0 ms` | Synthetic Lab Metric |

The mobile LCP is the only measured lab metric above its target. The hero image is the LCP element; its production CDN delivery and cache behavior should be validated after deployment.

---

## ⚡ Architectural Optimizations Implemented

1. **Static Server-Side Prerendering (SSG)**:
   - Next.js App Router statically pre-renders page structure into HTML at build time (`npm run build`).
   - On page load, pre-rendered static HTML is served before client JavaScript hydrates interactive components (`AnnouncementBar`, `Header`, `FAQ`).

2. **Image Asset Optimization**:
   - The hero section background image (`hero-promo-office.jpg`) was re-encoded and compressed by ~86% (from 1.5MB down to ~211KB), reducing network payload size during initial load.
   - Core hero assets use Next.js `<Image priority />` to trigger early asset preloading.

3. **CSS Keyframe Marquee Animations**:
   - The bi-directional `SocialProof` logo marquee utilizes native CSS `@keyframes` with `transform: translate3d(...)`, avoiding main-thread JavaScript animation loops.

4. **Font Delivery & FOIT Prevention**:
   - `Geist` and `Geist Mono` web fonts are loaded using `next/font/google` with CSS `font-display: swap`.
   - **FOIT Prevention**: `font-display: swap` instructs the browser to display text immediately using system fallback fonts while custom fonts download, preventing **Flash of Invisible Text (FOIT)**. Swap behavior may produce a brief Flash of Unstyled Text (FOUT) prior to font load.

5. **Modular Icon Imports**:
   - UI icons are imported modularly from `lucide-react`, ensuring only referenced SVG icons are included in client JavaScript bundles.

---

## 📋 Procedure for Collecting Audit Results

The local measurements above are a development baseline. To record official audit metrics post-deployment:

### Method 1: Google Chrome DevTools (Lighthouse)
1. Open Google Chrome in **Incognito Mode** (to avoid extension interference).
2. Navigate to your deployed production URL.
3. Open Chrome DevTools (`F12` or `Ctrl + Shift + I`) and select the **Lighthouse** tab.
4. Select configuration settings:
   - **Mode**: Navigation
   - **Device**: Audit **Mobile** mode first, then repeat for **Desktop**.
   - **Categories**: Select *Performance*, *Accessibility*, *Best Practices*, and *SEO*.
5. Click **Analyze page load**.
6. **Best Practice**: Execute **three consecutive audit runs** per mode and record the **median score**.
7. Save HTML/JSON reports or take screenshots to include with your submission.

### Method 2: PageSpeed Insights
1. Visit [PageSpeed Insights](https://pagespeed.web.dev/).
2. Enter the deployed production URL and click **Analyze**.
3. View results across **Mobile** and **Desktop** tabs.
4. Record lab metrics in the summary tables above.

---

## 🛠️ Summary of Optimizations & Future Improvements

- **Applied Optimizations**:
  - Compressed heavy hero background asset from 1.5MB to ~211KB.
  - Implemented multi-row CSS marquee animations with pause-on-hover interaction.
  - Configured font loading via `next/font/google` with `font-display: swap`.

- **Future Performance Enhancements**:
  - Implement dynamic imports (`next/dynamic`) for heavy off-screen client components if bundle size increases in future updates.
  - Fine-tune responsive `sizes` attribute parameters on secondary image assets for specific viewport breakpoints.
