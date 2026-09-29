# Performance & Lighthouse Audit Report

This document records the performance, accessibility, best practices, and SEO benchmarks for the **Crack The Campus** landing page recreation.

---

## 📊 Benchmark Summary

| Metric | Status / Value |
| :--- | :--- |
| **Deployed URL** | `[Pending Deployment]` |
| **Audit Date** | `2026-09-29` |
| **Environment** | Next.js Production Build (`npm run build`) |
| **Target Audience** | Engineering Students on Mobile & Desktop |

---

## 📱 Mobile Lighthouse Results

> **Status**: `Pending deployment` *(Perform after live hosting setup)*

| Category | Score Target | Actual Score |
| :--- | :--- | :--- |
| **Performance** | `90 - 100` | `Pending deployment` |
| **Accessibility** | `95 - 100` | `Pending deployment` |
| **Best Practices** | `95 - 100` | `Pending deployment` |
| **SEO** | `95 - 100` | `Pending deployment` |

### Key Mobile Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: `< 2.5s`
- **First Input Delay / INP**: `< 200ms`
- **Cumulative Layout Shift (CLS)**: `0.00`
- **Total Blocking Time (TBT)**: `< 150ms`

---

## 💻 Desktop Lighthouse Results

> **Status**: `Pending deployment` *(Perform after live hosting setup)*

| Category | Score Target | Actual Score |
| :--- | :--- | :--- |
| **Performance** | `95 - 100` | `Pending deployment` |
| **Accessibility** | `98 - 100` | `Pending deployment` |
| **Best Practices** | `98 - 100` | `Pending deployment` |
| **SEO** | `98 - 100` | `Pending deployment` |

---

## 🔍 Steps to Collect Real Lighthouse Scores Post-Deployment

1. Deploy the project to Vercel, Netlify, or AWS Amplify:
   ```bash
   npx vercel --prod
   ```
2. Open Google Chrome in Incognito mode.
3. Open DevTools (`F12` or `Ctrl + Shift + I`) and select the **Lighthouse** tab.
4. Select **Mobile** mode, choose **Navigation**, check all categories, and click **Analyze page load**.
5. Record the actual scores in the Mobile section above.
6. Repeat the audit selecting **Desktop** mode and record the Desktop scores.
7. Alternatively, run PageSpeed Insights: [https://pagespeed.web.dev/](https://pagespeed.web.dev/) with your deployed live URL.

---

## ⚡ Architectural Optimization Summary

1. **Asset Compression**:
   - Hero background image compressed by ~86% (1.5MB to ~211KB).
2. **Server-Side Prerendering (SSG)**:
   - 100% of landing page sections are statically generated into pure HTML at build time.
3. **Zero Animation Library Weight**:
   - Marquee and interactive transitions run on native CSS keyframes and hardware-accelerated transforms.
4. **Font Optimization**:
   - Google Geist fonts loaded via `next/font` with `font-display: swap` to prevent FOIT (Flash of Unstyled Text).
