# Professional Portfolio Implementation Plan

> For agentic workers: implementation requires a new explicit request. When approved, use the OpenSpec apply workflow and execute phases in order with review gates. Do not treat this planning document as authorization to edit application code.

**Goal:** Build an English-first, product-led professional portfolio that converts qualified international visitors through verified MediSapience and CEM Digital case studies.

**Architecture:** A server-first Next.js App Router site composed from typed local content records and focused reusable presentation components. Shared tokens and primitives govern the Home and both case studies; client JavaScript is limited to necessary navigation, progressive motion, and optional approved analytics.

**Tech stack:** Existing Next.js 16.3.4, React 19.2.8, TypeScript, Tailwind CSS 4, pnpm; testing/analytics/motion additions require phase-specific justification.

**Primary specs:** PORTFOLIO_DESIGN_SYSTEM_SPEC.md, REQUIREMENTS.md, CONTENT_REQUIREMENTS.md, DECISIONS.md, and openspec/changes/build-product-engineer-portfolio/specs/professional-portfolio-experience/spec.md.

## Global constraints

- Read the relevant Next.js 16 guides in node_modules/next/dist/docs/ before writing code that uses the affected APIs/conventions.
- Do not invent or publish metrics, testimonials, clients, roles, URLs, screenshots, or technical facts.
- Use [CONTENT NEEDED] only in content preparation; no marker may reach production.
- Keep essential content server-rendered and usable without animation.
- Target WCAG 2.2 AA and the performance budgets in REQUIREMENTS.md.
- Preserve the approved visual direction and token values; no unreviewed aesthetic lane or dark mode.
- Use authentic, privacy-reviewed project media.
- Each implementation task includes relevant lint/build/test/visual checks before merge.
- Prefer focused files with one responsibility; do not create a component abstraction until at least two consumers or a clear semantic boundary justify it.

## Proposed file responsibility map

This map is a planning contract. Confirm exact framework conventions against the repository's Next.js 16 documentation at implementation time.

### Routes and metadata

- app/layout.tsx — root language, font, global metadata defaults, shared page shell.
- app/page.tsx — Home composition only.
- app/work/medisapience/page.tsx — MediSapience case-study composition and metadata.
- app/work/cem-nicaragua/page.tsx — CEM case-study composition and metadata.
- app/sitemap.ts — public route sitemap.
- app/robots.ts — indexing rules.
- app/globals.css — Tailwind import, design tokens, global reset/base/accessibility rules.

### Content

- content/site.ts — identity, navigation, contact, availability, services, process, technology, About, footer.
- content/projects/medisapience.ts — validated project content record.
- content/projects/cem-nicaragua.ts — validated project content record.
- content/projects/types.ts — shared project/case-study content contract.
- content/testimonials.ts — approved testimonials; may export an empty collection.
- content/metrics.ts — verified metric records and display/source metadata.

### UI foundations

- components/layout/container.tsx — max width/insets.
- components/layout/section.tsx — semantic section rhythm/surface.
- components/layout/grid.tsx — responsive grid contract when utility-only composition is insufficient.
- components/ui/button-link.tsx — navigation actions with visual variants.
- components/ui/icon-button.tsx — labeled UI actions.
- components/ui/badge.tsx — status/category.
- components/ui/section-heading.tsx — consistent heading/lead.
- components/ui/divider.tsx — border variants.

### Global navigation and close

- components/navigation/navbar.tsx — server-rendered shell and desktop navigation.
- components/navigation/mobile-menu.tsx — minimal client boundary for dialog/menu behavior.
- components/navigation/nav-link.tsx — active/anchor semantics.
- components/site/final-cta.tsx — contact close.
- components/site/footer.tsx — identity/contact footer.

### Work and evidence

- components/work/featured-project.tsx — Home project chapter variants.
- components/work/project-summary.tsx — project metadata/content.
- components/work/screenshot-frame.tsx — media frame/browser chrome/caption.
- components/work/responsive-screenshot.tsx — art-directed sources and alt contract.
- components/work/metric.tsx — metric variants.
- components/work/metric-group.tsx — responsive metric layout.
- components/work/product-proof-band.tsx — approved early proof.

### Supporting Home sections

- components/home/hero.tsx — Hero composition.
- components/home/hero-product-proof.tsx — product media bento.
- components/home/services.tsx and service-panel.tsx — service section/panel.
- components/home/process.tsx and process-step.tsx — ordered process.
- components/home/technology.tsx — curated capability groups.
- components/home/about.tsx — portrait/bio/contact context.
- components/home/testimonials.tsx and testimonial.tsx — adaptive verified quote layout.

### Case studies

- components/case-study/case-study-hero.tsx — title/summary/fact rail.
- components/case-study/case-study-section.tsx — semantic section layouts.
- components/case-study/feature-chapter.tsx — large workflow chapters.
- components/case-study/engineering-decision.tsx — problem/constraint/decision/trade-off/result.
- components/case-study/architecture-diagram.tsx — semantic responsive diagram.
- components/case-study/results-section.tsx — outcomes/context.
- components/case-study/next-case-study.tsx — cross-project navigation.

### Behavior and quality

- components/motion/reveal.tsx — progressive, reduced-motion-aware reveal only if needed.
- lib/analytics.ts — optional typed minimal event dispatcher, added only if analytics is approved.
- tests/e2e/navigation.spec.ts — route, anchors, menu, keyboard navigation.
- tests/e2e/content.spec.ts — headings, links, placeholder absence, conditional sections.
- tests/e2e/accessibility.spec.ts — automated accessibility checks plus documented manual coverage.
- tests/e2e/responsive.spec.ts — overflow/layout assertions at representative viewports.
- tests/e2e/metadata.spec.ts — titles, descriptions, canonical/social basics, sitemap/robots.

## Phase 0 — Content gathering

### Objectives

- Assemble launch-safe evidence before UI composition creates pressure to invent or decorate.
- Resolve all REQUIRED items in CONTENT_REQUIREMENTS.md.
- Produce an approved content/asset manifest for both case studies.

### Tasks

1. Confirm public name, title, email, social URLs, location, remote availability, and project availability.
2. Select the Hero copy direction and write final English copy for Home.
3. Record official display names and public-naming permission for MediSapience and CEM.
4. Complete project fact sheets: audience, context, exact role, dates, status, platform, team boundary, confidentiality.
5. Draft and review Overview, Challenge, Solution, 3–6 Key Features, 3–5 Engineering Challenges, Architecture, Results, Technology, and quality/operations notes for each case.
6. Build metric records with source, definition, period, rounding, display, and permission.
7. Obtain testimonial quote records or explicitly decide to omit testimonials at launch.
8. Capture screenshot masters; redact sensitive data; create approval and crop notes.
9. Confirm public/live URLs and correct fallback CTA for private products.
10. Confirm final domain, deployment target, analytics decision, and privacy/consent implications.
11. Run the content gate and identify any launch-blocking gap.

### Dependencies

- User/client access to facts, screenshots, permissions, and contact details.
- No application implementation dependency.

### Definition of done

- Every REQUIRED content row is complete or has an approved truthful alternative.
- No metric or testimonial lacks provenance/permission.
- Every screenshot has a safe master and intended desktop/mobile crop.
- Final Home and case-study copy is reviewable without placeholders.

## Phase 1 — Foundation

### Objectives

- Replace starter assumptions with the correct route, content, testing, and metadata foundation.
- Establish framework-conformant server/client boundaries.

### Tasks

1. Read node_modules/next/dist/docs guidance for App Router routing, metadata, fonts, images, sitemap, robots, and any route typing used by Next.js 16.
2. Confirm pnpm scripts and current lint/build behavior before edits.
3. Remove only starter-specific copy/assets/imports that the new pages no longer consume.
4. Create the route and content directory boundaries from the file map.
5. Define typed project, metric, testimonial, navigation, and contact content contracts.
6. Populate content modules exclusively from Phase 0 approved material.
7. Add the minimum test stack needed for route/interaction/accessibility checks; document why each dependency is necessary.
8. Establish test fixtures that contain no confidential production data.
9. Add initial route smoke tests and placeholder/default-starter absence checks.

### Dependencies

- Phase 0 approved core content.
- Relevant Next.js 16 documentation.

### Definition of done

- Three required routes resolve from typed, approved content.
- Starter content is removed from the target surfaces.
- Server/client boundaries are documented and minimal.
- Baseline lint, tests, and production build pass before visual work.

## Phase 2 — Design tokens

### Objectives

- Encode the complete visual grammar once.
- Make token drift detectable.

### Tasks

1. Add all color, typography, spacing, radius, border, shadow, motion, breakpoint, container, and z-index tokens from Spec AD.
2. Configure Geist through the framework-supported optimized font path.
3. Implement global background, foreground, selection, focus-visible, reduced-motion, body, heading, link, image, and scroll-margin base rules.
4. Map tokens into Tailwind theme semantics without duplicating raw values.
5. Add development documentation or tests that reject one-off visual values in composed components.
6. Verify measured contrast for actual token combinations.
7. Render a temporary internal token specimen or test page only if it accelerates validation; it must not ship as a public route.

### Dependencies

- Phase 1 foundation.
- Approved Spec E–J, X, Z, AD.

### Definition of done

- Every approved token has one canonical definition.
- Common text/control combinations meet contrast requirements.
- Reduced motion and visible focus have global defaults.
- No public component uses starter palette or arbitrary visual values.

## Phase 3 — Global components

### Objectives

- Build stable foundations, actions, navigation, media, and global close components before page composition.

### Tasks

1. Implement Container, Section, Stack/Cluster/Grid where justified, Divider, Badge, SectionHeading, and prose styles.
2. Implement semantic ButtonLink, Button, IconButton, and TextLink variants with all states and 44 px targets.
3. Implement Navbar, NavLink, SkipLink, and minimal client-side MobileMenu behavior.
4. Verify focus trap, Escape, scroll lock, focus return, active states, anchor offsets, and no-JavaScript fallback.
5. Implement ScreenshotFrame and ResponsiveScreenshot with intrinsic dimensions, art direction, captions, and raw/browser variants.
6. Implement Metric and MetricGroup with tabular numerals and source-safe content contract.
7. Implement FinalCTA and Footer with verified contact data.
8. Add component-level behavior/semantic tests where they protect an observable requirement.

### Dependencies

- Phases 1–2.
- Final contact and identity content.

### Definition of done

- Foundations cover all planned page compositions without one-off primitives.
- All global controls pass keyboard, focus, touch-target, and state tests.
- Screenshot/media components prevent layout shift and support mobile crops.
- Navbar and contact paths work before Home sections are composed.

## Phase 4 — Home

### Objectives

- Deliver the complete conversion narrative in the approved section order.
- Make real product evidence dominate.

### Tasks

1. Compose Navbar and Hero with approved headline, description, CTAs, availability state, and Hero product proof.
2. Add ProductProofBand using only cleared names/logos.
3. Implement MediSapience FeaturedProject with media-right layout and verified evidence.
4. Implement CEM FeaturedProject with media-left layout and equal authority.
5. Implement the verified Metrics/Impact strip or an approved factual-outcome alternative.
6. Implement four Services panels with buyer-oriented copy.
7. Implement the four-step Process with tangible outputs.
8. Implement the curated Technology section after product/process proof.
9. Implement About with approved portrait or a graceful text-led alternative.
10. Implement Testimonials conditionally for zero, one, two, or three approved quotes.
11. Close with FinalCTA and Footer.
12. Add section-anchor and case-study navigation tests.
13. Validate 3/10/30-second content sequence through an internal review.

### Dependencies

- Phases 0–3.
- Approved Home content and media.

### Definition of done

- Home contains every required section or documented conditional omission.
- Both projects are more prominent than support sections.
- All claims and links trace to approved content.
- Desktop/tablet/mobile layouts are structurally ready for Phase 8, with no known content overflow.

## Phase 5 — Case study template

### Objectives

- Create one reusable editorial system that supports both projects without making them visually identical.

### Tasks

1. Implement CaseStudyHero with role/date/status/platform/live-action facts.
2. Implement full-width Product Image and caption treatment.
3. Implement CaseStudySection variants for Overview, Client/Context, Challenge, and Solution.
4. Implement FeatureChapter media-left/media-right variants.
5. Implement EngineeringDecision list pattern.
6. Implement responsive semantic ArchitectureDiagram with text alternative.
7. Implement ResultsSection, Technology treatment, optional Testimonial, Live Product CTA, and NextCaseStudy.
8. Define section inclusion rules for missing optional content.
9. Create a content completeness assertion for required case-study fields.
10. Test heading order, landmark/section naming, internal links, and next-project navigation.

### Dependencies

- Phases 1–3.
- Both project content contracts from Phase 0.

### Definition of done

- The template renders complete approved data for either project.
- Optional omissions do not create empty shells.
- DOM order remains logical across alternating desktop layouts.
- Architecture and screenshots remain understandable without motion.

## Phase 6 — MediSapience

### Objectives

- Publish the strongest production SaaS narrative with exact role and evidence.

### Tasks

1. Populate Hero and flagship screenshot from approved MediSapience content.
2. Compose Overview, Context, Challenge, and Solution with correct scope boundary.
3. Add 3–6 feature chapters and responsive screenshot crops.
4. Add 3–5 engineering decisions with explicit trade-offs.
5. Render the verified architecture only to the level approved for public release.
6. Add verified results/metrics with context and period.
7. Add project-specific Technology/quality notes.
8. Add testimonial only if approved.
9. Configure live-product or contact fallback CTA.
10. Configure unique metadata/social image.
11. Run content, link, privacy, accessibility, and route tests.

### Dependencies

- Phase 5.
- Complete MediSapience content/asset approval.

### Definition of done

- The case accurately explains what the product does and what Henry did.
- Every media asset is redacted, cleared, responsive, and captioned/labelled.
- Every result is verified.
- Metadata and cross-navigation work.

## Phase 7 — CEM

### Objectives

- Publish an equally credible but distinct education/administration platform narrative.

### Tasks

1. Resolve final public naming between CEM Nicaragua and CEM Digital.
2. Populate Hero and flagship screenshot.
3. Explain institutional-site and application boundaries.
4. Compose Overview, Context, Challenge, and Solution.
5. Add 3–6 feature chapters for only verified workflows.
6. Add 3–5 engineering decisions and approved architecture.
7. Add verified results/metrics or factual outcome statements.
8. Add Technology/quality notes and optional approved testimonial.
9. Configure public-site/app link or contact fallback.
10. Configure unique metadata/social image.
11. Run content, link, privacy, accessibility, and route tests.

### Dependencies

- Phase 5.
- Complete CEM content/asset approval.

### Definition of done

- The case clearly distinguishes public site, application, administration, and Henry's role.
- Evidence quality and visual prominence match MediSapience.
- All content, media, metadata, and navigation gates pass.

## Phase 8 — Responsive

### Objectives

- Treat each viewport as a designed composition.
- Eliminate overflow, unreadable screenshots, and semantic reorder.

### Tasks

1. Validate all pages at the nine specified viewport widths.
2. Tune fluid display typography and line breaks within token limits.
3. Confirm Hero 7/5→stack transition and action wrapping.
4. Confirm FeaturedProject alternation collapses to consistent semantic order.
5. Confirm bento, services, metrics, process, About, testimonials, CTA, and footer rules.
6. Verify case-study rails, features, architecture, results, and Next Case layouts.
7. Apply art-directed image crops where shrinking loses meaning.
8. Validate 320 px, browser zoom, long names, long URLs, and maximum approved copy lengths.
9. Capture desktop 1440×full-page and mobile 390×full-page visual evidence for each route.
10. Add regression assertions for horizontal overflow and covered anchor headings.

### Dependencies

- Phases 4, 6, and 7.

### Definition of done

- No horizontal overflow or clipped controls at target widths.
- Content order is logical and complete.
- Screenshots remain legible.
- Captures match the approved hierarchy and token system.

## Phase 9 — Accessibility

### Objectives

- Meet WCAG 2.2 AA through automated and manual validation.

### Tasks

1. Run automated accessibility scans on all routes and mobile-menu states.
2. Complete keyboard-only navigation from skip link through footer.
3. Verify focus visibility on light, dark, accent, and image-adjacent surfaces.
4. Verify mobile-menu dialog semantics, focus trap, Escape, return, and background inertness.
5. Audit headings, landmarks, link purpose, external links, alt text, captions, and diagram alternatives.
6. Measure all foreground/background/control-boundary contrast combinations.
7. Test 200% zoom and 400% reflow.
8. Test reduced motion with all content/actions present.
9. Test forced-colors/high-contrast behavior where available.
10. Complete at least one manual screen-reader pass when environment access permits and record residual risks.

### Dependencies

- Phase 8.

### Definition of done

- No serious/critical automated issue.
- All P0 manual requirements pass or have a documented blocking defect.
- Keyboard, zoom, reflow, reduced motion, and menu behavior are verified on every route.

## Phase 10 — Motion

### Objectives

- Add only motion that improves sequence, feedback, or continuity.

### Tasks

1. Identify the minimum set of reveals justified by the design: Hero, major section headings, featured media, menu.
2. Prefer CSS; justify any animation dependency against bundle and behavior needs.
3. Ensure content is visible before initialization and when scripts fail.
4. Apply shared duration/easing/translation/scale limits.
5. Add hover/focus parity for project media, buttons, and service links.
6. Implement reduced-motion replacements.
7. Verify no layout shift, input blocking, repeated reveal, or long animation.
8. Defer custom cursor to P2 and only implement through a separately approved task.

### Dependencies

- Phases 8–9; stable layout must precede motion.

### Definition of done

- Motion uses documented tokens and stays below limits.
- Reduced-motion experience is complete.
- Performance/interaction metrics do not regress beyond budgets.
- No essential content depends on animation.

## Phase 11 — SEO / performance

### Objectives

- Make each public route discoverable, shareable, fast, and stable.

### Tasks

1. Add unique route metadata, canonical URLs, OpenGraph/Twitter values, and approved images.
2. Add sitemap and robots behavior; validate production/staging indexing policy.
3. Add accurate Person/WebSite structured data only if final fields are verified.
4. Audit image dimensions, formats, sizes, loading, priority, and responsive selection.
5. Audit fonts and eliminate unnecessary weights/families.
6. Inspect server/client component boundaries and reduce avoidable client JavaScript.
7. Measure LCP, INP proxy/lab responsiveness, CLS, request count, and transferred bytes on agreed desktop/mobile profiles.
8. Remove or defer nonessential third-party and motion code that threatens budgets.
9. Add analytics only if approved; verify event schema, privacy, consent, failure isolation, and preview/production separation.
10. Run broken-link, metadata, sitemap, robots, and social-preview checks.

### Dependencies

- Phases 4, 6–10.
- Final domain/hosting/analytics decisions.

### Definition of done

- All route metadata and discovery files are correct.
- Approved performance targets are met or the release is blocked with measured evidence.
- Analytics, if present, captures only approved events and never blocks core behavior.

## Phase 12 — QA

### Objectives

- Verify the complete experience against every P0 requirement and the quality checklist.

### Tasks

1. Trace each P0 requirement to a passing test, capture, content record, or manual check.
2. Run lint, full test suite, and production build from a clean state.
3. Validate all internal/external/email links.
4. Review every page at target widths in one desktop/mobile capture batch.
5. Review visual hierarchy against PORTFOLIO_DESIGN_SYSTEM_SPEC.md.
6. Re-run the asset privacy/permission manifest against shipped files.
7. Search shipped output/source for [CONTENT NEEDED], starter copy, lorem ipsum, unverified sample metrics, and dead destinations.
8. Run accessibility, reduced-motion, keyboard, zoom/reflow, metadata, SEO, and performance gates.
9. Review contact behavior and availability language.
10. Complete one bounded fix batch for material defects, recapture affected views, and rerun relevant tests.
11. Produce a launch report listing passed gates, consciously deferred P1/P2 items, and any operational owner.

### Dependencies

- Phases 0–11.

### Definition of done

- Every P0 requirement is evidenced as passed.
- Every item in Spec AE is checked or explicitly documented as not applicable.
- Production build and launch routes are clean.
- No confidential/unverified/placeholder content ships.
- The release is ready for the user's final approval and deployment action.

## Suggested implementation checkpoints

1. Foundation + tokens.
2. Global components + Navbar/contact.
3. Home content-complete.
4. Reusable case-study template.
5. MediSapience content-complete.
6. CEM content-complete.
7. Responsive + accessibility.
8. Motion + SEO/performance.
9. Final QA.

Each checkpoint should be reviewable and independently testable. Do not batch all visual and content risk into a single final review.

