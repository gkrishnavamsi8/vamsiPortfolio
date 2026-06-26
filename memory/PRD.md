# Krishna Vamsi — Portfolio Site (PRD)

## Original Problem Statement
> Build a landing page: a static portfolio web page that can be hosted via GitHub Pages.
> User applies to SDE and AI/ML / Gen AI roles. Currently working as SDE. Portfolio should
> align mainly with SDE with Gen AI as an added strong skill.

## User Choices
- **Positioning:** SDE-first with GenAI as a strong secondary.
- **Hosting:** Pure static React site (GitHub Pages compatible — no backend in use).
- **Design vibe:** Decided by the design agent → Modified Swiss/Brutalist + Terminal/Editorial dark theme with amber (#FFB800) accent, Outfit + Manrope + JetBrains Mono fonts.
- **Hero tagline:** "Software Engineer building scalable systems & shipping GenAI features."
- **GitHub:** https://github.com/gkrishnavamsi8
- **LinkedIn:** linkedin.com/in/gkrishnavamsi8
- **Resume:** single SDE resume PDF download.

## Architecture
- **Stack:** React 19 + Tailwind CSS + lucide-react + framer-motion + sonner. **No backend used.**
- **Single Page** at `/` composed of sections — no routing.
- **Data layer:** All copy lives in `/app/frontend/src/data/portfolio.js` — single source of truth.
- **Static asset:** Resume PDF at `/app/frontend/public/Krishna_Vamsi_Resume.pdf`.
- **GitHub Pages deploy path:** run `yarn build` → push `frontend/build/` contents to a `gh-pages` branch (or use GitHub Actions). Site is dark-themed, fully static.

## Sections Implemented (✅ Dec 2025)
1. **Sticky Nav** — brand monogram, 5 anchored links with smooth scroll + active highlighting, resume CTA, mobile hamburger.
2. **Hero** — status pill ("Open to senior SDE + GenAI roles"), giant headline "Krishna Vamsi.", tagline, side meta (current role, location, stack, GitHub handle), 4 CTAs (Resume, Get in touch, GitHub, LinkedIn) and metrics strip (1M+ requests, 99.9% uptime, 60% faster releases, 3+ years).
3. **About** — two-paragraph positioning + a 4-tile meta strip.
4. **Experience** — single Amdocs card with 9 tagged bullets covering BACKEND, EVENTS, PERFORMANCE, PLATFORM, CI/CD, CLOUD, AGENTIC AI, DEVTOOLS, OBSERVABILITY.
5. **Projects** — bento grid of 4 cards: Distributed Payment Orchestration (SDE flagship, wide), AskMiPaaS (GenAI flagship), Build a Plan (ML pipeline), Grocery Recommendation (IEEE OCIT 2022, wide).
6. **Skills** — two columns side-by-side: SDE Stack (primary, amber-accented) vs GenAI Stack with 6 groups each.
7. **Education** — VIT Chennai card with CGPA + specialization + IEEE publication card.
8. **Contact** — copy-to-clipboard email block, mailto CTA, GitHub/LinkedIn/location grid.
9. **Footer** — monogram, copyright, social links.

## Testing
- Iteration 1: 100% pass on all 14 acceptance items across desktop / tablet / mobile.
- PDF endpoint returns 200 + `application/pdf`.
- No console errors. No horizontal scroll at any breakpoint. Responsive bento + skills correctly stack.

## P1 / P2 Backlog (Deferred)
- **P1 — GitHub Pages deploy script.** Add `gh-pages` package + `homepage` field + GitHub Actions workflow for one-click deploy.
- **P1 — Profile photo.** User mentioned they'd upload one but didn't attach; using monogram avatar in the meantime.
- **P2 — HashRouter or 404.html fallback** if multiple routes are introduced (today there's only `/`).
- **P2 — Bundle hero background image locally** instead of fetching from Unsplash at runtime, for offline / strict-CSP environments.
- **P2 — Optional dual resume.** A second downloadable AI/ML version of the resume.
- **P2 — OG image / favicon.** Custom social-share preview & favicon.
- **P2 — Visitor analytics, view-counter, or contact form via Formspree.**
- **P2 — Subtle scroll-reveal animations** with framer-motion (currently uses static layout).

## Next Action Items
- Deploy to GitHub Pages: `cd /app/frontend && yarn build` and push `build/` to `gh-pages` branch under github.com/gkrishnavamsi8 (or wire up a GitHub Actions workflow).
- Decide on profile photo (upload or keep monogram).
- Add a second AI-focused resume PDF if you want a dual-download CTA.
