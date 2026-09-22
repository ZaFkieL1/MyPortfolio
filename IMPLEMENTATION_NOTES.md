# Portfolio implementation notes

## Working context

- Implementation was explicitly authorized directly on `main`.
- Active OpenSpec change: `build-product-engineer-portfolio`.
- Next.js version: 16.3.4, App Router, React 19.2.8, TypeScript strict mode.
- The global pnpm shim was broken; all verification uses the pinned package manager through `npm exec --yes pnpm@10.28.2 -- …`.

## Next.js guidance consulted

- `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/font.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/layout.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/05-config/02-typescript.md`

## Baseline

- The unmodified starter lint completed with no errors.
- The initial direct `pnpm` lint/build attempts failed before Next.js ran because the user-level pnpm shim points at a missing installation.
- The pinned pnpm version was recovered through npm exec. The implemented project subsequently completes lint, type checking, and a Next.js production build.

## Boundaries

- `content/`: typed product truth, mock readiness, and replacement-friendly project records.
- `components/navigation/`: the only interactive application shell; owns mobile menu state and focus behavior.
- `components/product/`: original illustrative UI used only while screenshots are pending.
- `components/work/`: reusable featured-project and case-study composition.
- `components/content/`: conditional metrics/testimonials that reject incomplete evidence.
- `components/layout/`: preview status and footer.
- `app/`: routes, route metadata, discovery files, OG image, and global tokens/styles.
- `tests/`: content/component contracts plus browser-level route, overflow, metadata, navigation, and Axe coverage.

## Test dependencies

- Vitest: fast TypeScript unit and content-contract tests.
- Testing Library + jest-dom + jsdom: semantic component and interaction assertions.
- Playwright: real-browser route, responsive overflow, and keyboard-menu checks.
- axe-core Playwright: automated WCAG A/AA checks on every route and target device class.

## Preview policy

The current content is intentionally provisional. The preview uses `noindex, nofollow`, disallows all crawlers in `robots.txt`, labels every product illustration, omits metrics/testimonials/live URLs, and exposes `validate:launch` as a deliberately failing release gate. Real email, social URLs, domain, project dates, approved screenshots, verified results, attribution, and client permissions remain launch blockers.

## Comprehension review

- 3 seconds: the hero states that Henry builds dependable digital products.
- 10 seconds: the first product interface and early proof band establish real production work.
- 30 seconds: MediSapience and CEM Digital communicate SaaS, education, operations, and full-stack scope.
- 120 seconds: services, process, grouped technology, concise About, and case-study depth support a higher-value client decision.

## Deferred measurement

Chrome DevTools MCP is not configured in this environment, so an instrumented Core Web Vitals trace could not be recorded. The implementation avoids raster hero assets, ships one optimized font family, server-renders editorial content, and keeps client JavaScript limited to navigation; measured LCP/INP/CLS remains a release gate rather than an assumed pass.

## Implemented preview verification

- `npm exec --yes pnpm@10.28.2 -- run check`: lint, TypeScript, 23 unit/content tests, and the optimized Next.js build.
- `npm exec --yes pnpm@10.28.2 -- run test:e2e`: all three routes in desktop and mobile Chromium, Axe WCAG A/AA, mobile-menu focus/Escape behavior, reduced motion, and overflow checks at 320, 390, 480, 768, 1024, 1280, 1440, 1536, and 1920 px.
- `.impeccable/review/`: full-page 1440 px and 390 px evidence for Home, MediSapience, and CEM Digital.
- `npm exec --yes pnpm@10.28.2 -- run validate:launch`: intentionally exits non-zero while mock readiness, the placeholder email domain, and illustrative media remain.

## Content layer consolidation (2026-09-21)

The bento redesign had left the two case studies owning their own copy: headings, decision cards,
diagrams, metrics and the client quote were literals inside `components/work/*-case-study.tsx`, while
`content/portfolio.ts` still carried the earlier provisional records for the same projects. Home and
the case studies therefore told two different stories, and the launch validator could only see the
stale one.

- Published case-study copy now lives in `content/case-studies/medisapience.ts` and
  `content/case-studies/cem-nicaragua.ts` as plain data (no JSX), with shared shapes in `types.ts`.
  Both are re-exported from `content/portfolio.ts`, which stays the single entry point.
- The `Project` records were reconciled with what is actually published: real years, live URLs,
  MediSapience's four approved metrics (each with `approved: true` and a source), the attributed
  founder testimonial, and screenshot-vs-illustration media kinds.
- The home hero figures and `ProjectCard`'s screenshot choice are derived from those records instead
  of hardcoded to a slug.
- CEM Digital's lorem-ipsum testimonial was removed. Both case studies now render the section only
  when `project.testimonial` exists, and the `note` prop that captioned a placeholder quote was
  dropped from the bento kit.

## One shelf of work (2026-09-21)

The Home work section now ranks four projects instead of listing two. MediSapience and CEM
Digital keep the wide media-led cards and gained the live product’s hostname beside the
case-study link, so the card carries proof as well as a route inward. Credora and Kiseki no
Oto follow as 03 and 04.

The first attempt gave the second pair a different container entirely — no card, hairline-topped
text columns under an "Also built." heading. It read as two unrelated sections, and it also broke
the system’s own rule that projects are objects that earn a card. The shelf is now one run of four
cards sharing one grammar (meta row, name, summary, muted chips, hairline action row); 03 and 04
are the same bento card at half width with the name on the documented **title** step. Scale carries
the rank, the numbering runs 01–04 unbroken, and the section lead sets the expectation for all four
so no mid-section heading has to. The parallax media stays with the two that have product evidence
— that asymmetry is the emphasis, and it needed no new effect.

Both descriptions were written from the repositories rather than from memory — Credora from
its module map and permission model, Kiseki no Oto from its README and Wrangler/Astro config.
Facts that would otherwise have been guessed were checked: `kiseki-no-oto.com` resolves, its
GitHub repository is public, and both Credora repositories return 404 unauthenticated, so the
entry states that they are private instead of linking to them.

## Described-project pages (2026-09-21)

Credora and Kiseki no Oto now have their own routes, reached from the shelf through a
**View screenshots** action in the same link treatment the case-study cards use. They are not
case studies and do not borrow the case-study hero: an open header, the captures, a short
"how it is built" statement, and a CTA whose next card reads "Next project" rather than
"Next case study" (`CaseCta` gained an optional `next.label` for this).

Captures gate themselves. `availableScreenshots()` checks each declared path against `public/`
on disk while the route is prerendered, so a manifest entry whose file has not arrived renders
nothing and the action stays hidden — no broken frames, no link into an empty page. Two real
captures of `kiseki-no-oto.com` (the boot sequence and the identity view) are in place and
verified the gate in both directions; Credora's five slots are declared and waiting.

Kiseki no Oto's live site moved into the meta row beside its category rather than replacing it,
and the Bandcamp/Instagram group was removed at the owner's request.

## SEO wiring

`content/site.ts` centralizes the public origin (`NEXT_PUBLIC_SITE_URL`) and the route list.
`metadataBase`, per-route `alternates.canonical`, OpenGraph `url`, the sitemap and robots all read
from it, so pointing the site at its real domain is a one-variable change. `components/seo/structured-data.tsx`
emits `Person` and `WebSite` JSON-LD built only from verified identity records — no organization,
rating or review fields, because none are verified.

## Test-runner scope

`vitest.config.mts` excluded `node_modules/**`, which did not cover nested installs, and
`eslint.config.mjs` ignored only `.next/**` at the root. A git worktree under `.claude/` therefore
pulled ~870 vendor test files into every `vitest` run (7 minutes, 33 unrelated failures) and ~36,000
findings into every `eslint` run. Vitest now uses `include: ["tests/**/*.test.{ts,tsx}"]` with
`**/node_modules/**` excluded; ESLint additionally ignores `**/node_modules/**` and `.claude/**`.
`pnpm check` went from failing in ~7 minutes to passing in seconds (8 files, 33 tests).
