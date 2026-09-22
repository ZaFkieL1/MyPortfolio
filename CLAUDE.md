# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Henry Gonzalez's B2B product-engineering portfolio: Next.js 16.3.4 App Router, React 19.2.8, TypeScript strict, Tailwind CSS 4, pnpm. Published in English and Spanish. Five routes, each prerendered per language under `app/[lang]/`: `/`, `/work/medisapience`, `/work/cem-nicaragua`, `/work/credora`, `/work/kiseki-no-oto` — ten static pages in all. Before writing Next.js code, read the relevant guide under `node_modules/next/dist/docs/` (see AGENTS.md).

## Commands

The global `pnpm` shim on this machine is broken; run scripts through the pinned version:

```bash
npm exec --yes pnpm@10.28.2 -- run <script>
```

| Script | Purpose |
|---|---|
| `dev` | Dev server on http://localhost:3000 |
| `check` | Full gate: eslint → `tsc --noEmit` → vitest → `next build` |
| `test` / `test:watch` | Vitest (jsdom), excludes `tests/e2e/` |
| `test:e2e` | Playwright, desktop + mobile Chromium, Axe WCAG A/AA; starts/reuses the dev server |
| `validate:content` | Content-contract tests only (`tests/content.test.ts`) |
| `validate:launch` | Release gate — **intentionally exits non-zero** while content is mock |

Single test: `npm exec --yes pnpm@10.28.2 -- exec vitest run tests/home.test.tsx -t "<name>"`; single e2e: `... exec playwright test -g "<name>" --project=desktop-chromium`.

## Architecture

- **Every page is published in two languages.** `content/i18n.ts` owns the contract: `locales` (`en`, `es`), `defaultLocale` (`en`), `matchLocale()` for `Accept-Language`, and `localePath()` / `stripLocale()` for building links. Routes live under `app/[lang]/` with `generateStaticParams`, so both languages are prerendered — nothing is negotiated at request time except the redirect. `proxy.ts` (Next 16's renamed middleware; there is no `i18n` block in `next.config.ts`, that option is Pages Router only) sends an unprefixed URL to the `NEXT_LOCALE` cookie's language, else the best `Accept-Language` match, else English. `components/navigation/language-switcher.tsx` is two real links that keep the current path and write that cookie.
- **`content/portfolio.ts` is the single source of truth** for all copy and project data, resolved by locale: `getPortfolioContent(locale)`, `getProject(locale, slug)`, `getSideProject(locale, slug)`, `getMedisapienceCaseStudy(locale)`, `getCemCaseStudy(locale)`, plus locale-independent `contentReadiness`. There is deliberately no locale-free `portfolioContent` export — a component that can reach copy without naming a language will eventually print English on the Spanish page. The data itself lives in `content/portfolio.en.ts` / `content/portfolio.es.ts` against the shapes in `content/types.ts`, and long-form case-study copy in `content/case-studies/<slug>.{en,es}.ts` (plain data, no JSX; the English module exports the type the Spanish one must satisfy, so a missing translation is a type error). Interface chrome — navigation, buttons, accessible names, the words inside the two product illustrations — lives in `content/ui.ts`, with both languages in one file so a forgotten key fails to compile. Don't hardcode copy in components. Public origin, canonical URLs, `hreflang` alternates and the route list come from `content/site.ts` (`NEXT_PUBLIC_SITE_URL`).
- **Readiness/preview mode** is driven by `content/readiness.json` (`status: "mock" | "verified"`, `indexable`). It feeds `contentReadiness.indexable`, which controls robots metadata in `app/[lang]/layout.tsx` and `app/robots.ts` (the visible preview banner was removed at the owner's request). `scripts/validate-launch.mjs` scans `app/`, `components/`, `content/` for placeholders (`example.com`, lorem ipsum, `[CONTENT NEEDED]`, sample metrics like `300+`) and blocks launch until readiness is `verified`.
- **Evidence is never faked**: metrics require `approved: true` + a `source`, testimonials are nullable, and `components/content/` (metric/testimonial groups) render nothing for incomplete evidence. Product visuals in `components/product/` are labeled illustrations standing in for pending screenshots.
- **One shelf of work**: the Home `#work` section is a single run of four cards numbered 01–04, not two sections. `components/home/project-card.tsx` renders 01–02 (the case studies, full width, media + internal route); `components/home/other-projects.tsx` renders `portfolioContent.otherProjects` (typed `SideProject`) as 03–04 — the same bento card at half width, no media, outbound links or an explicit reason there are none. Both share one grammar: meta row, name, summary, muted chips, hairline action row. Rank comes from scale, never from a different container. 03–04 link out to their own pages (`/work/credora`, `/work/kiseki-no-oto`, rendered by `components/work/side-project-page.tsx`) — screenshot pages, not case studies.
- **Captures gate themselves**: `availableScreenshots()` in `components/work/side-project-page.tsx` checks each declared `screenshots` path against `public/` on disk while the route prerenders. A declared-but-missing file renders nothing and hides the "View screenshots" action, so adding a capture to `public/work/` is the whole change — see `public/work/README.md` for the expected filenames.
- **Case studies**: new case studies are composed from the bento kit in `components/case-study/bento.tsx` following the section recipe in DESIGN.md → "Case study (bento)"; `components/work/medisapience-case-study.tsx` is the reference; `components/work/cem-case-study.tsx` follows the same recipe. MediSapience's hero is still a CSS-only product loop (`session-setup-animation.tsx`); CEM's is real phone captures via the kit's `PhoneShots`. Screenshots are WebP in `components/work/media/`, imported statically — MediSapience's desktop captures at 2× (1648×890 or 1904×890 CSS), CEM's phone captures at 3× (412×915 CSS), with the shared frame declared once as `phoneFrame` in the content module.
- **Client JS is minimal** — `components/navigation/navbar.tsx` (menu), `components/navigation/language-switcher.tsx`, `components/content/mermaid-diagram.tsx`, `components/home/home-hero.tsx`, `components/layout/footer-flow.tsx`, and `components/motion/scroll-reveal.tsx`. Motion uses GSAP (`useGSAP` + `gsap.matchMedia` for reduced motion; ScrollTrigger, SplitText) driven by `data-reveal` / `data-reveal-group` / `data-split` / `data-countup` / `data-parallax` attributes — see DESIGN.md → Motion. It must work in Firefox. Everything else is server-rendered. `tests/setup.ts` stubs `matchMedia` for GSAP under jsdom.
- **Styling**: design tokens live as CSS custom properties in `app/globals.css` (bridged into Tailwind via `@theme inline`), with mostly semantic class names in globals plus CSS modules. `tests/design-tokens.test.ts` asserts exact token values — keep it in sync with any token change. `DESIGN.md` / `PORTFOLIO_DESIGN_SYSTEM_SPEC.md` define the approved visual system.

## Tests

- Vitest uses the `@/` alias → repo root, setup in `tests/setup.ts` (which stubs `matchMedia` for GSAP and `next/font/google`, whose loaders are a build-time transform). Tests cover content contracts in both languages, translation parity, locale negotiation (`tests/i18n.test.ts`), SEO metadata and `hreflang`, launch readiness, design tokens, and component semantics.
- Pages are async server components taking `params`, so a test awaits one before rendering it: `render(await Home({ params: Promise.resolve({ lang: "en" }), searchParams: Promise.resolve({}) }))`.
- `tests/e2e/portfolio.spec.ts` checks all ten pages (five routes × two languages) for Axe violations and horizontal overflow at 320–1920 px — Spanish runs longer than English, so it is the one that finds the overflow — plus mobile menu keyboard behavior, reduced motion, language negotiation, and the switcher's path-preserving, cookie-remembering behaviour. Playwright runs with 1 worker.
- `reuseExistingServer` will attach to whatever is already on the port, including a dev server from another checkout, which silently runs the suite against the wrong code. Set `PORT` to take a port of your own: `PORT=3137 npm exec --yes pnpm@10.28.2 -- run test:e2e`.
- `.impeccable/review/` holds full-page 1440 px / 390 px review screenshots for each route, with the Spanish page alongside each one as `*-es.png`; regenerate them after visible layout changes.

## Planning docs

Decisions and scope are recorded in repo docs — consult before changing direction: `DECISIONS.md` (numbered decisions with status), `PRODUCT.md`, `REQUIREMENTS.md`, `CONTENT_REQUIREMENTS.md`, `LAUNCH_READINESS.md`, `IMPLEMENTATION_NOTES.md`, and the active OpenSpec change in `openspec/changes/build-product-engineer-portfolio/` (`tasks.md`, `specs/`).
