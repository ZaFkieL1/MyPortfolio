# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Henry Gonzalez's B2B product-engineering portfolio: Next.js 16.3.4 App Router, React 19.2.8, TypeScript strict, Tailwind CSS 4, pnpm. English-only. Three static routes: `/`, `/work/medisapience`, `/work/cem-nicaragua`. Before writing Next.js code, read the relevant guide under `node_modules/next/dist/docs/` (see AGENTS.md).

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

- **`content/portfolio.ts` is the single source of truth** for all copy and project data (typed `Project` records, `getProject(slug)`, `portfolioContent`). Pages/components render from it; don't hardcode copy in components.
- **Readiness/preview mode** is driven by `content/readiness.json` (`status: "mock" | "verified"`, `indexable`). It feeds `portfolioContent.indexable`, which controls robots metadata in `app/layout.tsx` and `app/robots.ts` (the visible preview banner was removed at the owner's request). `scripts/validate-launch.mjs` scans `app/`, `components/`, `content/` for placeholders (`example.com`, lorem ipsum, `[CONTENT NEEDED]`, sample metrics like `300+`) and blocks launch until readiness is `verified`.
- **Evidence is never faked**: metrics require `approved: true` + a `source`, testimonials are nullable, and `components/content/` (metric/testimonial groups) render nothing for incomplete evidence. Product visuals in `components/product/` are labeled illustrations standing in for pending screenshots.
- **Case studies**: new case studies are composed from the bento kit in `components/case-study/bento.tsx` following the section recipe in DESIGN.md → "Case study (bento)"; `components/work/medisapience-case-study.tsx` is the reference. CEM still uses the older `components/work/case-study.tsx`. Screenshots are WebP in `components/work/media/`, imported statically.
- **Client JS is minimal** — `components/navigation/navbar.tsx` (menu), `components/content/mermaid-diagram.tsx`, `components/home/home-hero.tsx`, and `components/motion/scroll-reveal.tsx`. Motion uses GSAP (`useGSAP` + `gsap.matchMedia` for reduced motion; ScrollTrigger, SplitText) driven by `data-reveal` / `data-reveal-group` / `data-split` / `data-countup` / `data-parallax` attributes — see DESIGN.md → Motion. It must work in Firefox. Everything else is server-rendered. `tests/setup.ts` stubs `matchMedia` for GSAP under jsdom.
- **Styling**: design tokens live as CSS custom properties in `app/globals.css` (bridged into Tailwind via `@theme inline`), with mostly semantic class names in globals plus CSS modules. `tests/design-tokens.test.ts` asserts exact token values — keep it in sync with any token change. `DESIGN.md` / `PORTFOLIO_DESIGN_SYSTEM_SPEC.md` define the approved visual system.

## Tests

- Vitest uses the `@/` alias → repo root, setup in `tests/setup.ts`. Tests cover content contracts, SEO metadata, launch readiness, design tokens, and component semantics.
- `tests/e2e/portfolio.spec.ts` checks every route for Axe violations, horizontal overflow at 320–1920 px, mobile menu keyboard behavior, and reduced motion. Playwright runs with 1 worker.
- `.impeccable/review/` holds full-page 1440 px / 390 px review screenshots for each route; regenerate them after visible layout changes.

## Planning docs

Decisions and scope are recorded in repo docs — consult before changing direction: `DECISIONS.md` (numbered decisions with status), `PRODUCT.md`, `REQUIREMENTS.md`, `CONTENT_REQUIREMENTS.md`, `LAUNCH_READINESS.md`, `IMPLEMENTATION_NOTES.md`, and the active OpenSpec change in `openspec/changes/build-product-engineer-portfolio/` (`tasks.md`, `specs/`).
