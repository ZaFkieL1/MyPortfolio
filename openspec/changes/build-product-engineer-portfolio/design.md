## Context

See proposal.md for motivation and specs/professional-portfolio-experience/spec.md for observable behavior.

The repository is an untouched Create Next App scaffold using Next.js 16.3.4 App Router, React 19.2.8, TypeScript, Tailwind CSS 4, pnpm, and Geist through next/font. There is no incumbent product UI or content architecture to preserve. The user-supplied reference document is the primary visual/conceptual authority, and PRODUCT.md records durable product truth.

The site has three required public routes, two content-heavy case studies, mostly editorial interactions, and no backend requirement. Its highest implementation risks are incomplete/unverified content, screenshot privacy, visual drift, oversized client JavaScript, responsive typography/media, and accessible modal navigation.

The detailed implementation authorities are:

- PORTFOLIO_DESIGN_SYSTEM_SPEC.md — visual, layout, component, case-study, motion, responsive, and quality specification.
- REQUIREMENTS.md — P0/P1/P2 scope and acceptance constraints.
- CONTENT_REQUIREMENTS.md — required evidence and content formats.
- IMPLEMENTATION_PLAN.md — phase sequence, file responsibilities, dependencies, and definitions of done.
- DECISIONS.md — rationale, rejected alternatives, status, and review points.

## Goals / Non-Goals

**Goals:**

- Create a server-first, content-driven Next.js architecture for Home and two case studies.
- Encode one portable design-token system shared across routes.
- Keep facts separate from presentation so evidence can be reviewed without editing page composition.
- Provide a reusable case-study structure that supports project-specific truth and conditional evidence.
- Limit client behavior to accessible mobile navigation, restrained progressive motion, and optional approved analytics.
- Make accessibility, responsive media, metadata, content integrity, and performance verifiable.

**Non-Goals:**

- Implementing a CMS, database, authentication, client portal, blog, or backend contact service.
- Adding standalone Services/About routes or a Work index in MVP.
- Adding dark mode, generic 3D device renders, hacker/developer-demo motifs, or a custom cursor in MVP.
- Filling missing commercial evidence with sample data.
- Making both case studies visually or textually identical merely to satisfy a template.

## Decisions

### 1. Server-first route composition

Use App Router server components for route composition and content rendering. Client components are isolated around behavior that requires browser state, initially the mobile menu and any approved reveal orchestration.

**Rationale:** The experience is primarily static/editorial. Server rendering improves resilience, SEO, initial content visibility, and JavaScript cost.

**Alternatives considered:** one client-rendered portfolio application; client wrappers around every animated section.

**Rejected because:** both increase hydration and failure surface without improving the core product-evaluation task.

### 2. Typed local content records

Store identity, navigation, project facts, metrics, services, process, technology, and testimonials in focused typed local content modules. Page components consume those records rather than embedding claims in JSX.

**Rationale:** Three routes and low expected update frequency do not justify a CMS. Typed records make conditional sections, required fields, source governance, and review easier.

**Alternatives considered:** hard-coded page copy; MDX; headless CMS.

**Rejected because:** hard-coded copy couples evidence to layout; MDX adds authoring complexity before a long-form publishing workflow exists; a CMS adds operations, schema, preview, access, and dependency scope.

### 3. Content provenance outside public output

Metric/testimonial/screenshot records must have internal provenance and approval information. Public components receive only display-safe fields. Launch validation checks that no working marker or unapproved record is rendered.

**Rationale:** The primary trust model depends on verifiable evidence and privacy-safe media.

**Alternatives considered:** manual editorial memory; comments inside page components.

**Rejected because:** both are easy to lose and difficult to validate systematically.

### 4. Shared components by semantic responsibility

Organize components into layout primitives, UI actions, navigation, evidence/work, Home sections, and case-study patterns. Abstract repeated semantic contracts such as FeaturedProject, ScreenshotFrame, Metric, EngineeringDecision, and CaseStudySection; do not abstract one-off composition merely to reduce file length.

**Rationale:** Shared boundaries reduce token/behavior drift without flattening project-specific art direction.

**Alternatives considered:** one large page per route; generic Card component for most sections; a universal section schema renderer.

**Rejected because:** large pages entangle concerns; generic cards encourage the template look explicitly prohibited; a universal renderer makes nuanced editorial layout harder and pushes behavior into configuration.

### 5. One design-token authority

Define approved color, type, space, radius, border, shadow, motion, breakpoints, container, and z-index values in global CSS/theme semantics. Components consume semantic tokens and do not introduce arbitrary look-and-feel values.

**Rationale:** The system must translate cleanly to CSS variables, Tailwind, and typed constants while remaining inspectable.

**Alternatives considered:** utility values per component; a JavaScript-only theme object.

**Rejected because:** component values drift; JavaScript theme ownership is unnecessary for server-first CSS and complicates non-JS fallback.

### 6. CSS-first layout and interaction

Use CSS grid/flex/container-aware composition, native sticky behavior, media queries/user preferences, and CSS transitions where sufficient. Introduce an animation package only for a named behavior whose sequencing cannot be achieved cleanly and accessibly otherwise.

**Rationale:** Approved motion is limited; dependency cost and client boundaries should match actual behavior.

**Alternatives considered:** install GSAP or Motion by default; no motion.

**Rejected because:** default libraries are premature; no motion would remove helpful hierarchy and feedback.

### 7. Responsive art direction for product media

Content records associate screenshot masters with approved responsive crops/sources, intrinsic dimensions, alt/caption, UI theme, browser-frame choice, and redaction/permission metadata. ScreenshotFrame owns presentation; media content owns factual description.

**Rationale:** A desktop dashboard shrunk to mobile is technically responsive but functionally unreadable.

**Alternatives considered:** one image source at all widths; CSS background images; device mockups.

**Rejected because:** one source loses detail, backgrounds weaken image semantics/optimization, and mockups consume space without adding proof.

### 8. Conditional sections from validated collections

Metrics, testimonials, public architecture, and live-product actions render only when approved content exists. Empty collections remove their section cleanly. An unavailable live URL resolves to an explicit contact alternative.

**Rationale:** Honest omission is better than visual placeholders or unverified symmetry.

**Alternatives considered:** filler content; disabled cards; always render all template sections.

**Rejected because:** they expose incompleteness and conflict with evidence governance.

### 9. Accessible mobile menu as the main client boundary

Implement Menu as a labeled modal navigation panel with explicit open state, focus movement/trap/return, Escape close, inert/background protection, and scroll lock. Desktop navigation remains ordinary links.

**Rationale:** This is the only essential interaction with meaningful state and accessibility requirements.

**Alternatives considered:** CSS-only checkbox menu; unlabeled hamburger; third-party drawer package.

**Rejected because:** checkbox patterns have weak dialog/focus semantics; icon-only triggers are less clear; a package is unnecessary unless native/dialog behavior proves insufficient after documentation review.

### 10. Email-first contact

Use verified mailto or an approved direct contact URL for primary CTAs. Do not create a form/backend until inquiry fields, delivery, privacy, retention, spam mitigation, errors, and monitoring are approved.

**Rationale:** This provides the conversion action without inventing operational scope.

**Alternatives considered:** contact form at launch; calendar; chat widget.

**Rejected because:** each adds data handling, monitoring, or third-party cost before the workflow is defined.

### 11. Route-specific metadata and static discovery

Each route owns accurate title, description, canonical, and social data derived from approved content. Sitemap and robots are generated according to final domain/environment decisions. Structured data is optional and only added from verified identity fields.

**Rationale:** Case studies are intended to be shared and indexed independently.

**Alternatives considered:** global generic metadata only; SEO plugin dependency.

**Rejected because:** generic metadata wastes route intent; the framework can cover the small surface without a plugin.

### 12. Test strategy mirrors risk

Use layered verification:

- Type/content validation for required/conditional records.
- Route and link smoke checks.
- Browser tests for navbar, anchors, mobile menu, keyboard, conditional sections, and metadata.
- Automated accessibility scans plus manual keyboard, zoom/reflow, focus, reduced-motion, and screen-reader checks.
- Visual captures at 1440 and 390 px for each route, plus targeted widths.
- Production build and performance measurement using the agreed profile.
- Static scans for starter text, [CONTENT NEEDED], sample metrics, and dead destinations.

**Rationale:** Unit tests alone cannot validate editorial hierarchy, privacy, focus, responsive media, or social metadata.

**Alternatives considered:** manual QA only; snapshot-heavy component tests.

**Rejected because:** manual-only checks regress easily; broad snapshots create noise without proving outcomes.

### 13. Explicit non-production mock mode

Content records carry a readiness state of mock or verified. Mock mode may supply restrained English copy and original illustrative UI panels so layout, responsive behavior, and interaction can be implemented before authentic material arrives. It never supplies metrics, testimonials, endorsements, production URLs, or claims that the illustration is a real product capture.

When any rendered record is mock, route metadata is noindex/nofollow, robots disallows indexing, the asset/content manifest identifies the mock source, and launch validation fails. Replacing mock records with verified records is a content operation that does not require restructuring page components.

**Rationale:** The user explicitly authorized provisional mock information so implementation can proceed, while the original production integrity requirement remains intact.

**Alternatives considered:** stop all implementation until real content arrives; silently treat mock content as publishable.

**Rejected because:** stopping prevents safe structural progress; publishing mock claims would violate the portfolio's trust model.

## Content and data flow

1. Phase 0 produces approved factual content and asset manifests; until then, the user-authorized preview may use records explicitly marked mock.
2. Content modules encode readiness, display fields, and internal validation/provenance fields where safe to keep in the repository.
3. Route compositions select the approved record and pass it to semantic section components.
4. Components render server-first HTML, optimized media, and ordinary links.
5. Optional client behaviors enhance already-visible output.
6. Launch validation rejects incomplete markers, missing required fields, unapproved public metrics/testimonials/media, and broken destinations.
7. Optional analytics observes approved link actions but never gates them.

## Layout and visual architecture

- Global grid: 12 columns desktop, 8 tablet, 4 mobile, 1440 px maximum.
- Home is a sequence of composed sections; dark surfaces are limited to an impact band and/or Final CTA.
- Featured projects alternate media side only at ≥1024 px; semantic DOM order remains consistent.
- Case-study routes reuse section contracts but allow project-specific media rhythm.
- Geist carries all type roles. The lime accent is a focal state, not a general background.
- Borders, spacing, and surface contrast separate content; shadows are reserved for navigation/menu/elevated media.
- Design system values and component contracts are fully specified in PORTFOLIO_DESIGN_SYSTEM_SPEC.md.

## Accessibility architecture

- Root layout establishes language, skip-link target, font, and global focus/reduced-motion rules.
- Navigation uses native links; controls are buttons only for stateful UI.
- Mobile menu owns focus behavior within a narrow client boundary.
- Alternating visual layouts never reorder semantic DOM.
- Screenshot alt/caption contracts are content decisions, not generated from filenames.
- Architecture diagrams include equivalent text; motion does not carry unique information.
- Analytics wrappers preserve native link semantics and cannot cancel navigation on failure.

## Performance architecture

- Static/local content avoids runtime data fetching for core pages.
- Server-first rendering minimizes hydration.
- Image dimensions and responsive sizes prevent CLS; only the strongest Hero media receives priority.
- One font family and constrained weights reduce font transfer.
- CSS-first motion prevents a default animation dependency.
- Optional third-party analytics loads non-blocking and failure-isolated.
- Route-level measurement and asset audits enforce the stated Core Web Vitals budgets.

## Risks / Trade-offs

- **[Content arrives late or incomplete]** → Complete Phase 0 before high-fidelity composition; conditional sections omit unverified material; launch scan blocks markers.
- **[Mock preview is mistaken for publishable work]** → Mark readiness in content records, force noindex/nofollow and robots exclusion, omit fabricated proof, and block launch while any mock remains.
- **[Real screenshots expose sensitive data]** → Maintain asset manifest, redact at source/capture, review at full resolution, and re-check shipped derivatives.
- **[Long Home loses momentum]** → Keep Work visually dominant, use compact supporting sections, vary density, and test comprehension at 3/10/30 seconds.
- **[Typed content becomes a hidden CMS]** → Keep schemas limited to actual page needs; do not build editors, runtime fetching, or generic renderer infrastructure.
- **[Case-study reuse creates sameness]** → Share semantic components/tokens while allowing project-specific section/media composition.
- **[Large type breaks localization/content changes]** → Clamp type, test documented content ranges and target widths, and avoid fragile manual breaks.
- **[Mobile menu client code expands]** → Keep it isolated; prefer native platform primitives after checking Next/React guidance; reject unrelated state in Navbar.
- **[Motion harms performance or accessibility]** → CSS-first, progressive, reduced-motion complete, and added after layout/accessibility stabilize.
- **[Metrics become stale]** → Store as-of/period/source and review availability/status/results at launch.
- **[No form reduces structured inquiries]** → Use clear email prompt initially; evaluate a form only with evidence and full operational requirements.
- **[No CMS slows future updates]** → Typed local content is proportionate now; revisit only when update cadence/nontechnical authors justify migration.
- **[Visual documentation diverges from implementation]** → QA traces components/tokens/captures to the approved spec and rejects arbitrary values.

## Migration Plan

1. Preserve the repository and OpenSpec planning artifacts.
2. Complete and approve all launch-critical content/assets.
3. Establish tests and content contracts while starter UI still provides a baseline.
4. Add tokens/foundations and replace starter Home in a reviewable checkpoint.
5. Add the shared case-study template, then populate MediSapience and CEM separately.
6. Complete responsive, accessibility, motion, metadata, performance, and launch QA phases.
7. Deploy to a preview environment with non-indexing rules.
8. Obtain final user/content approval, verify production domain/links/analytics policy, then promote.

Rollback is static-site deployment rollback to the last known good release. Content or link defects can be corrected and redeployed without data migration. No database migration exists.

## Open Questions

These questions are deferrable within the chosen architecture but must be answered at their named gate:

- Which final Hero copy and HG/H.G mark are approved? Resolve before Home visual sign-off.
- What email/contact destination and availability wording are current? Resolve before Phase 3/4 completion.
- What is the final domain and deployment target? Resolve before SEO/performance completion.
- Which exact client names, roles, screenshots, metrics, architecture details, testimonials, and live URLs have publication approval? Resolve in Phase 0 before their pages.
- Will analytics ship, and if so which provider/consent policy? Resolve before Phase 11; omission is the default.
- Is a third project or Spanish localization planned soon enough to affect route/content structure? Current scope says no; revisit as P1 without blocking MVP.
