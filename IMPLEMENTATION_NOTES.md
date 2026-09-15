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
