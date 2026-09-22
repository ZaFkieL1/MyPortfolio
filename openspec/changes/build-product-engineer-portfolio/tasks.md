## 1. Content and approval gate

Tasks 1.1–1.9 remain production-launch blockers. By explicit user direction, they do not block a non-indexable local/preview implementation that completes tasks 1.10–1.11.

- [x] 1.1 Complete the Personal/Brand REQUIRED rows in CONTENT_REQUIREMENTS.md and verify name, title, email, location, availability, LinkedIn, and GitHub have explicit approved values.
- [ ] 1.2 Complete MediSapience core facts and narrative records and verify the public name, product category, audience, exact role, team boundary, dates, status, confidentiality constraints, challenge, solution, features, engineering decisions, architecture, results, and stack are internally consistent.
- [ ] 1.3 Complete CEM core facts and narrative records and verify the public CEM Nicaragua/CEM Digital naming, site/application boundary, exact role, dates, status, confidentiality constraints, features, engineering decisions, architecture, results, and stack are internally consistent.
- [ ] 1.4 Build provenance records for every candidate metric and verify each has a value, unit, definition, period/as-of date, source, rounding/display rule, and publication permission; exclude incomplete metrics.
- [ ] 1.5 *(MediSapience: two approved captures shipped. CEM: pending.)* Capture and prepare project media and verify every shipped candidate has an authentic master, responsive crop plan, intrinsic dimensions, caption/alt intent, redaction review, and publication permission.
- [ ] 1.6 *(MediSapience: approved and published. CEM: omitted by decision until a quote is approved.)* Collect zero to three exact testimonial records and verify attribution and permission; record an explicit launch decision to omit the section if none qualify.
- [ ] 1.7 Approve final English Home/CTA/case-study copy and verify it follows the editorial rules, contains no unsupported absolute, and distinguishes Henry's work from team/client work.
- [ ] 1.8 Resolve final contact destination, domain/deployment target, indexing policy, and analytics include/omit decision; verify unresolved analytics defaults to omitted rather than selecting a provider implicitly.
- [ ] 1.9 Run the CONTENT_REQUIREMENTS.md launch content gate and verify no REQUIRED item remains unresolved before high-fidelity page work starts.
- [x] 1.10 Create restrained mock content records and original illustrative product UI for preview only; verify every record/asset is marked mock and contains no fabricated metric, testimonial, endorsement, production URL, or claim of screenshot authenticity.
- [x] 1.11 Enforce non-production mock mode and verify any route using mock content emits noindex/nofollow, robots excludes the site, the manifest identifies mock sources, and launch validation fails until all rendered records are verified or removed.

## 2. Framework and quality foundation

- [x] 2.1 Read the relevant Next.js 16.3.4 guides under node_modules/next/dist/docs for App Router routes, metadata, fonts, images, sitemap, robots, and route typing; record the exact guidance paths used in the implementation notes.
- [x] 2.2 Run the unmodified baseline lint and production build and record their results so new failures can be distinguished from the starter state.
- [x] 2.3 Define the route/content/component directory boundaries from IMPLEMENTATION_PLAN.md and verify each planned file has one documented responsibility before creating it.
- [x] 2.4 Add the minimum browser/accessibility test dependencies needed for the specified route, interaction, responsive, and WCAG checks; verify installation succeeds and document why each new dependency is necessary.
- [x] 2.5 Create route smoke tests for /, /work/medisapience, and /work/cem-nicaragua and verify they fail against the starter before route implementation.
- [x] 2.6 Add launch-content scans for Create Next App starter copy, lorem ipsum, dead placeholder destinations, sample 300+/19K+/500+ values, [CONTENT NEEDED], mock readiness, and illustrative placeholder assets; verify the scan detects seeded test fixtures and ignores approved documentation.

## 3. Typed content architecture

- [x] 3.1 Define shared project, screenshot, metric, testimonial, navigation, and contact content contracts and verify the type checker rejects missing required public fields.
- [x] 3.2 Implement site identity/navigation/services/process/technology/About/Footer content modules from approved records and verify no factual copy is embedded in layout primitives.
- [x] 3.3 Implement MediSapience and CEM project content modules and verify required sections are present while optional testimonial/architecture/live-link fields can be absent safely.
- [x] 3.4 Implement metric validation that excludes records without provenance/approval and verify an incomplete metric cannot reach the rendered display collection.
- [x] 3.5 Implement conditional testimonial content as an approved zero-to-three collection and verify zero, one, two, and three records produce the intended layout inputs without filler.
- [x] 3.6 Run type checks and content validation and verify all production content records pass without placeholders or confidential fixture data.

## 4. Design tokens and global behavior

- [x] 4.1 Encode the color, type, spacing, radius, border, shadow, motion, breakpoint, container, and z-index values from PORTFOLIO_DESIGN_SYSTEM_SPEC.md and verify there is one canonical definition for each token.
- [x] 4.2 Configure Geist through the Next.js 16-supported optimized font API and verify no unnecessary display/body font request or unused weight ships.
- [x] 4.3 Implement global background, text, selection, link, focus-visible, skip-link, scroll-margin, image, and reduced-motion rules and verify a keyboard focus indicator is visible on light, dark, and accent test surfaces.
- [x] 4.4 Map semantic tokens into the Tailwind theme layer and verify composed components can use semantic names without duplicating raw visual values.
- [x] 4.5 Measure actual text/control color combinations and verify normal text is at least 4.5:1, qualifying large text at least 3:1, and white text is never used on #C6F63D.
- [x] 4.6 Run lint, type checks, and the production build and verify the token foundation introduces no warnings, route regressions, or starter theme leakage.

## 5. Foundations, actions, and navigation

- [ ] 5.1 Implement Container, Section, Grid/Stack/Cluster where justified, Divider, Badge, SectionHeading, and prose primitives; verify each uses documented tokens and semantic elements.
- [x] 5.2 Implement ButtonLink, Button, TextLink, and IconButton states and verify navigation uses anchors, UI actions use buttons, focus-visible works, and every touch target is at least 44×44 px.
- [x] 5.3 Implement SkipLink and the sticky desktop/tablet Navbar and verify Home/Work/Services/Process/About/Contact destinations and active indicators are meaningful without color alone.
- [x] 5.4 Implement the labeled mobile Menu/Close interaction and verify focus entry/trap/return, Escape, background inertness, scroll lock, and expanded state in browser tests.
- [x] 5.5 Verify sticky navigation does not hide anchored headings at 320, 390, 768, 1024, and 1440 px.
- [x] 5.6 Implement FinalCTA and Footer with the verified contact record and verify every primary/secondary email/social link resolves to the approved destination.

## 6. Evidence and media components

- [ ] 6.1 Implement ScreenshotFrame raw/browser/dark-UI/light-UI variants and verify browser chrome is optional, neutral, and contains no fake URL.
- [ ] 6.2 Implement responsive screenshot art direction with intrinsic dimensions and verify desktop interfaces use readable mobile crops when required and do not cause layout shift.
- [x] 6.3 Implement Metric inline/large/result variants and MetricGroup and verify values remain associated with labels/context across responsive layouts.
- [x] 6.4 Implement ProductProofBand and verify it renders only approved product names/logos, wraps without a required marquee, and uses descriptive internal links.
- [x] 6.5 Implement FeaturedProject media-left/media-right variants and verify both preserve one semantic DOM order, expose visible project-specific case-study links, and render no nested links.
- [ ] 6.6 Run the screenshot asset manifest review against all referenced media and verify every file is approved, redacted, and used at a legible size.

## 7. Home experience

- [ ] 7.1 Implement the Hero with the approved availability/neutral badge, final statement, description, Start a project action, View selected work action, and real HeroProductProof; verify the 1440 px first viewport contains offer, proof/signpost, and action.
- [ ] 7.2 Implement the MediSapience featured chapter and verify only approved summary, role, metrics, technology, screenshots, and case-study destination are rendered.
- [ ] 7.3 Implement the CEM featured chapter with comparable authority and verify only approved summary, role, metrics, technology, screenshots, and destination are rendered.
- [x] 7.4 Implement the impact section conditionally and verify approved metrics/factual outcomes render while an empty approved collection removes the section without a visual gap.
- [x] 7.5 Implement the four Services panels and verify descriptions are buyer-oriented, no panel implies a link when static, and no decorative technology icon grid is introduced.
- [x] 7.6 Implement the four-step Process and verify reading/keyboard order remains Understand, Design, Build, Ship & Improve at every viewport.
- [x] 7.7 Implement the curated Technology section and verify it appears after Work/Process, contains only approved grouped names, and has no logos, ratings, bars, or marquee.
- [x] 7.8 Implement About and verify approved location/social content is concise and appears after product evidence. *(Portrait dropped at the owner’s request: About is open canvas — a note plus standing facts in a margin — with no image slot to fill. Availability stays in the hero pill and footer rather than repeating here.)*
- [x] 7.9 Implement testimonials for zero/one/two/three approved records and verify no automatic carousel, filler, or empty shell exists.
- [x] 7.10 Compose Home in the required narrative order and verify headings, landmarks, anchors, featured-project links, Final CTA, and Footer through browser tests.
- [x] 7.11 Conduct the 3/10/30-second comprehension review with the built Home and verify offer, real-product proof, and end-to-end capability are understood in that order; record any copy/hierarchy correction.

## 8. Reusable case-study system

- [ ] 8.1 Implement CaseStudyHero and Product Image patterns and verify project name/category/summary/role/facts and flagship media use approved content and sequential headings.
- [ ] 8.2 Implement Overview, Client/Context, Challenge, and Solution section variants and verify readable line lengths, honest scope, and graceful absence of optional media.
- [ ] 8.3 Implement FeatureChapter alternating media variants and verify 3–6 approved workflows can render with consistent semantic order and responsive crops.
- [x] 8.4 Implement EngineeringDecision and verify every entry supports context, constraint, decision, trade-off, and outcome without requiring a card.
- [x] 8.5 Implement ArchitectureDiagram with equivalent text and verify the diagram remains understandable at 320 px, zoom/reflow, print/static, and reduced motion.
- [x] 8.6 Implement ResultsSection, Technology, conditional Testimonial, live-product/contact fallback CTA, and NextCaseStudy and verify optional omissions never render blank sections.
- [x] 8.7 Add shared case-study accessibility/navigation/content-completeness tests and verify both project records satisfy required fields and cross-links.

## 9. MediSapience case study

- [ ] 9.1 Compose MediSapience Hero, flagship image, Overview, Context, Challenge, and Solution from the approved record and verify no unapproved medical/client detail is exposed.
- [ ] 9.2 Add approved MediSapience feature chapters and verify each screenshot/caption/alt communicates a real workflow and uses the correct responsive crop.
- [x] 9.3 Add approved engineering decisions and architecture and verify every system boundary/technology/claim is publishable and consistent with Henry's role.
- [ ] 9.4 Add verified MediSapience results, technology/quality notes, optional testimonial, and live/contact CTA and verify every metric/link/quote passes provenance checks.
- [ ] 9.5 Add unique MediSapience title, description, canonical, and social image and verify metadata contains no unverified metric or sensitive UI.
- [ ] 9.6 Run MediSapience route, content, privacy, link, responsive, reduced-motion, keyboard, and automated accessibility checks and verify all P0 scenarios pass.

## 10. CEM case study

- [ ] 10.1 Compose CEM Hero, flagship image, Overview, Context, Challenge, and Solution from the approved naming/scope record and verify institutional site and application boundaries are clear.
- [ ] 10.2 Add approved CEM feature chapters and verify each screenshot/caption/alt communicates a real workflow without exposing learner/staff data.
- [x] 10.3 Add approved engineering decisions and architecture and verify every system boundary/technology/claim is publishable and consistent with Henry's role.
- [ ] 10.4 Add verified CEM results, technology/quality notes, optional testimonial, and public/contact CTA and verify every metric/link/quote passes provenance checks.
- [ ] 10.5 Add unique CEM title, description, canonical, and social image and verify metadata uses the approved CEM Nicaragua/CEM Digital naming.
- [ ] 10.6 Run CEM route, content, privacy, link, responsive, reduced-motion, keyboard, and automated accessibility checks and verify all P0 scenarios pass.

## 11. Responsive and accessibility hardening

- [x] 11.1 Validate all three routes at 320, 390, 480, 768, 1024, 1280, 1440, 1536, and 1920 px and verify no horizontal overflow, clipped focus, or hidden action.
- [x] 11.2 Verify Hero, featured projects, bento, services, metrics, process, technology, About, testimonials, CTA, Footer, and all case-study patterns follow the structural rules in Spec Z.
- [x] 11.3 Verify display typography line breaks and approved minimum/maximum content ranges at all target widths without exceeding token maxima or using fragile hidden text.
- [x] 11.4 Run automated WCAG scans on every route and mobile-menu state and verify no serious or critical issue remains.
- [x] 11.5 Complete keyboard-only traversal on every route and verify skip link, focus order, link purpose, mobile menu behavior, media controls, and Footer.
- [x] 11.6 Test 200% zoom and 400% reflow and verify no essential content/action is lost, overlapped, or clipped.
- [x] 11.7 Test prefers-reduced-motion and verify transforms, clip reveals, smooth scroll, count-ups, autoplay motion, and pointer-followers are absent while content/order remain complete.
- [x] 11.8 Measure focus/control/text contrast on actual rendered surfaces and verify WCAG 2.2 AA requirements, including non-color active states.
- [ ] 11.9 Complete a manual screen-reader pass when environment access permits and record/respect headings, landmarks, dialog semantics, link purpose, image alternatives, and diagram equivalents.

## 12. Purposeful motion

- [x] 12.1 Identify only the approved Hero, section-heading, featured-media, menu, and control-feedback motion and verify each has a comprehension/feedback purpose.
- [x] 12.2 Implement motion with CSS and shared tokens where sufficient; if a dependency is proposed, document the unmet behavior, bundle impact, and accessible fallback before installation.
- [x] 12.3 Verify content is visible before initialization, reveals do not replay, transitions do not exceed 800 ms, image zoom does not exceed 1.015, and no layout-affecting animation causes CLS.
- [x] 12.4 Verify hover/focus parity on all interactive motion and run the complete reduced-motion checks after final motion is present.
- [x] 12.5 Confirm the custom “VIEW CASE” cursor and pointer tilt are absent from MVP.

## 13. SEO, performance, and optional analytics

- [ ] 13.1 Implement route-specific title, description, canonical, OpenGraph/Twitter metadata, and approved social images and verify each public route produces unique accurate output. *(Canonical URLs and per-route OpenGraph `url` now derive from `content/site.ts`; blocked only on the final domain and per-route social images.)*
- [x] 13.2 Implement sitemap and robots behavior from the final domain/environment decision and verify public routes are included while designated preview/private routes are not indexable.
- [x] 13.3 Add only fully verified Person/WebSite structured data if approved and verify it contains no fake reviews, ratings, organization, or profile fields.
- [ ] 13.4 Audit image intrinsic sizes, responsive sizes/formats, loading, and priority and verify only justified Hero media is eager/priority and CLS remains ≤0.1.
- [x] 13.5 Audit font and client JavaScript output and verify one font family ships and essential editorial content remains server-rendered.
- [ ] 13.6 Measure the agreed representative mobile profile and verify LCP ≤2.5 s, INP ≤200 ms, and CLS ≤0.1 or block release with the measured failing evidence.
- [ ] 13.7 If analytics is approved, implement only contact_cta_click, case_study_open, live_product_click, and social_link_click with route/placement/project identifiers; verify tracking failure cannot block navigation and no free-form personal data is sent.
- [x] 13.8 If analytics is not approved, verify no analytics or session-replay script is present in the production build.
- [ ] 13.9 Run broken-link, email-link, metadata, sitemap, robots, social-preview, and optional analytics tests and verify all destinations/output match approved records.

## 14. Final QA and release readiness

- [x] 14.1 Run pnpm lint, the complete test suite, type/content validation, and pnpm build from a clean working state and verify all exit successfully.
- [x] 14.2 Capture and inspect full-page 1440 px desktop and 390 px mobile evidence for all three routes and verify each image is complete, loaded, correctly named, and matches the approved hierarchy.
- [ ] 14.3 Complete every applicable item in PORTFOLIO_DESIGN_SYSTEM_SPEC.md section AE and verify each check has a test, capture, content record, or manual note.
- [ ] 14.4 Trace every P0 item in REQUIREMENTS.md and every OpenSpec scenario to evidence and verify no mandatory requirement is unaccounted for.
- [ ] 14.5 Re-run the shipped-asset privacy/permission manifest and verify no unapproved, unredacted, orphaned, or sensitive media remains.
- [ ] 14.6 Search production source/output for starter copy, lorem ipsum, [CONTENT NEEDED], unverified sample metrics, dead links, forbidden clichés, and excluded visual patterns; verify zero findings.
- [ ] 14.7 Verify final contact destinations, availability wording, project status, year, domain, and social URLs immediately before release.
- [x] 14.8 Perform one bounded material-fix batch from the final review, recapture affected viewports, rerun relevant checks, and verify each recorded issue is resolved or explicitly blocks release.
- [x] 14.9 Produce the launch report with passed gates, measured performance, accessibility coverage, content/asset approval status, and deferred P1/P2 work; verify the report is ready for final user approval.
