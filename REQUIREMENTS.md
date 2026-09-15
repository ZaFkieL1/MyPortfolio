# Portfolio Requirements

Status: Draft for review  
Priority model: P0 = required for MVP; P1 = important after MVP; P2 = polish/nice-to-have.  
Normative language: MUST/SHALL is mandatory at the stated priority; SHOULD is a strong recommendation.

## Global product constraints

- The public site is English-first for MVP.
- MediSapience and CEM Nicaragua / CEM Digital are the dominant project evidence.
- No client, metric, role, testimonial, URL, logo, status, or technical claim may be invented.
- Missing inputs remain [CONTENT NEEDED] during preparation and are omitted or replaced with honest neutral copy before production.
- The implementation must follow PORTFOLIO_DESIGN_SYSTEM_SPEC.md.
- The project remains planning-only until these documents are reviewed and implementation is explicitly requested.

## P0 — MVP

### Functional requirements

- The site MUST provide /, /work/medisapience, and /work/cem-nicaragua.
- Home MUST include navigation, Hero, product proof, both featured projects, verified impact when available, Services, Process, Technology, About, Testimonials when available, Final CTA, and Footer.
- Each featured project MUST link to its matching case study through a visible, descriptive link.
- The navbar MUST support Home anchors for Work, Services, Process, About, and Contact.
- Case-study navigation MUST provide a route back to Home/Work and a Next Case Study link.
- The mobile menu MUST open and close through a labeled control, close with Escape, restore focus, lock background scroll, and prevent background interaction while open.
- All email, LinkedIn, GitHub, and live-product links MUST use final verified URLs.
- If a live product is private or unavailable, its CTA MUST be replaced by an honest project/contact action, not a dead link.
- The copyright year MUST not require a yearly content edit or MUST be explicitly maintained.
- Essential content and navigation MUST remain readable if animation is unavailable.

### Visual requirements

- The visual system MUST use the approved warm-neutral foundation, dark text, restricted lime accent, Geist typography, spacing scale, grid, radii, borders, shadows, and motion tokens.
- Accent usage SHOULD remain approximately 5–10% of visible page area and MUST not become the default section background.
- White text MUST NOT be placed on #C6F63D.
- Home MUST give Featured Work more visual weight than Services, Technology, About, or Footer.
- Featured projects MUST use large-format editorial compositions; small equal project cards are not acceptable.
- The site MUST NOT use terminal simulations, hacker/cyberpunk motifs, matrix/particle backgrounds, skill bars, proficiency percentages, floating technology logos, excessive glassmorphism, generic 3D device mockups, or decorative 3D.
- Borders, background contrast, typography, and spacing MUST provide most visual separation; strong shadows are prohibited.
- Screenshots MUST be authentic, privacy-safe, and readable at their rendered size.
- The final CTA MUST use a dark high-contrast treatment with limited accent.

### UX requirements

- The first viewport MUST communicate what Henry builds, provide visible real-product proof/signposting, and expose a clear next action.
- A visitor MUST be able to reach either case study and the primary contact action from the navbar and Home.
- The page sequence MUST prioritize proof before biography and technology.
- Every section MUST have a distinct commercial purpose: clarify fit, prove capability, reduce delivery risk, or enable contact.
- CTA labels MUST describe the destination/action; repeated generic “Learn more” links are prohibited.
- The contact path MUST require no account, sign-in, or multi-step funnel.
- Testimonials MUST be omitted if no verified, permission-cleared quote exists.
- Empty optional content MUST collapse cleanly without placeholder panels or visual holes.
- The mobile experience MUST preserve content and conversion priority rather than hide major sections.
- Availability messaging MUST be easy to update or omit when not current.

### Responsive requirements

- The site MUST render without horizontal overflow from 320 to 1920 px.
- Structural behavior MUST be validated at 320, 390, 480, 768, 1024, 1280, 1440, 1536, and 1920 px.
- Desktop MUST use a 12-column system; tablet 8 columns; mobile 4 columns.
- Content MUST stop growing at a 1440 px max width.
- The Hero and featured projects MUST switch from two-column/asymmetric layouts to logical single-column layouts below 1024 px.
- Services MUST use two columns only when each panel retains its content measure; otherwise one.
- Metrics MUST reflow without splitting values from labels.
- Case-study fact rails MUST move below the primary narrative on narrow viewports.
- Screenshots MUST use responsive sources or crops so UI remains legible on mobile.
- Touch controls MUST remain at least 44×44 px.
- Sticky navigation and anchor offsets MUST account for safe areas and prevent covered headings.

### Accessibility requirements

- The site MUST target WCAG 2.2 AA.
- Text contrast MUST be ≥4.5:1 for normal text and ≥3:1 for qualifying large text.
- Interactive boundaries and focus indicators MUST meet non-text contrast requirements.
- The document MUST provide a skip link, one logical H1, sequential headings, and semantic landmarks.
- All functionality MUST be keyboard operable.
- Focus MUST be visible in every theme/surface state.
- The mobile menu MUST trap focus, close with Escape, restore focus, and expose expanded state programmatically.
- Links and controls MUST have unique, meaningful accessible names.
- Information MUST NOT depend on color, hover, pointer precision, motion, or an image alone.
- prefers-reduced-motion MUST remove nonessential transform/clip/count/cursor behavior.
- Product screenshots MUST have purposeful alt text or be marked decorative when adjacent content fully covers their meaning.
- Meaningful text MUST NOT exist only inside images.
- The site MUST support 200% zoom and 400% reflow without lost content or actions.
- Animated/video content MUST comply with pause, motion, caption, and autoplay requirements.

### SEO requirements

- Every indexable route MUST have a unique, accurate title and description.
- Metadata MUST use Henry Gonzalez and the approved Full-Stack Developer / Product Engineer positioning.
- Every route MUST declare the correct canonical URL after the final domain is known.
- OpenGraph and social preview metadata MUST exist for Home and both case studies.
- Social preview imagery MUST use approved branding/project imagery and no sensitive data.
- The site MUST generate a sitemap containing only intended public routes.
- robots directives MUST allow intended public routes and exclude preview/private/staging routes where appropriate.
- Internal links MUST use descriptive anchor text.
- The root HTML language MUST be en.
- Structured data MAY be added only when every field is accurate; fake ratings, organizations, or reviews are prohibited.

### Performance requirements

- The production build MUST complete without errors.
- On the agreed representative mobile profile, public pages SHOULD achieve Core Web Vitals targets: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at the 75th percentile.
- Static QA MUST confirm no layout shift from fonts, screenshots, or media frames.
- Images MUST include intrinsic dimensions, responsive sizes, suitable formats, and appropriate loading priority.
- The primary Hero image MUST be the only media candidate for eager/priority loading unless evidence justifies another.
- Geist MUST load through the framework-supported optimized path; no unnecessary second font family may ship in MVP.
- Client-side JavaScript MUST be limited to interactions that require it: mobile menu, optional reveal orchestration, and approved analytics.
- Content MUST render server-first; essential copy/links MUST not wait for client hydration.
- Third-party scripts MUST not block rendering or contact navigation.
- A motion library MUST not be added if CSS and IntersectionObserver-level behavior satisfy the approved system.

### Content requirements

- All REQUIRED items in CONTENT_REQUIREMENTS.md MUST be supplied or explicitly resolved before launch.
- The Hero MUST have approved final copy, current availability language, and verified contact destination.
- Each project MUST have an approved name, category, summary, exact role, case-study narrative, authentic screenshots, and publication permission.
- Each metric MUST have value, unit, definition, period/as-of date, source, rounding rule, and approval.
- Each testimonial MUST have exact quote, attribution, role, organization, and publication permission.
- All copy MUST follow the B2B editorial guide and forbidden-cliché list.
- Case studies MUST distinguish client/team work from Henry's individual contribution.
- Confidentiality or redaction constraints MUST be documented before assets are prepared.
- No [CONTENT NEEDED], lorem ipsum, template copy, dead link, or default starter content may ship.

### Analytics requirements

- MVP MAY launch without analytics.
- If analytics is included, it MUST be privacy-respecting, non-blocking, and limited to approved events.
- Minimum approved event vocabulary: contact_cta_click, case_study_open, live_product_click, social_link_click.
- Events MUST include only route, project identifier where relevant, and CTA placement; no free-form personal data may be captured.
- Analytics failure MUST NOT prevent navigation or contact.
- Consent behavior MUST match the provider, data collected, final hosting jurisdiction, and applicable privacy obligations.
- Tracking MUST be documented and testable in preview without polluting production data.

### Contact requirements

- A visible verified email link MUST be the P0 contact mechanism.
- “Start a project” MUST resolve to that email or an approved dedicated contact destination.
- The email subject/body template, if used, MUST remain editable and MUST NOT contain sensitive data.
- The email must also appear as selectable text in the Final CTA or Footer.
- Contact links MUST work with keyboard, touch, and common mail clients.
- If a contact form is not included, the site MUST not imply that a form exists.
- Spam protection, server processing, and form data retention are out of MVP unless a form is explicitly approved.

### P0 acceptance gate

- All three routes exist and their navigation paths work.
- Both case studies use verified content and responsive authentic media.
- All P0 accessibility checks pass manually and in automated tooling.
- Production build, lint, route metadata, sitemap, robots, link checks, responsive captures, and performance checks pass.
- No placeholder, invented fact, sensitive screenshot data, or default Next.js starter content remains.

## P1 — Important after MVP

### Functional

- Add /work only when a third credible project, alternate project type, or search/navigation need justifies an index.
- Add a structured contact route/form only after required inquiry fields, delivery owner, privacy policy, retention, spam mitigation, success/error states, and monitoring are approved.
- Add case-study image lightbox/zoom only if screenshots remain difficult to inspect and the experience is fully keyboard/screen-reader accessible.
- Add copy-email feedback if user testing shows it reduces friction.
- Add print-friendly case-study styles if case studies are frequently shared as review documents.

### Visual and UX

- Refine the HG/H.G text mark after testing recognition at navbar/favicon/social sizes.
- Add a second editorial type family only if a named content role cannot be achieved with Geist and licensing/performance are accepted.
- Add subtle section-specific art direction to each case study while preserving shared components and tokens.
- Add one additional supporting screenshot in Hero only if it improves immediate proof rather than density.
- Conduct a short comprehension/usability test with 3–5 target-like reviewers for 3/10/30-second understanding.

### Responsive and accessibility

- Test additional real devices and browser/OS combinations based on analytics.
- Add enhanced high-contrast/forced-colors adjustments where native styles need refinement.
- Test screen-reader output in NVDA/Chrome and VoiceOver/Safari when device access is available.

### SEO and content

- Add a Work index with descriptive project summaries and metadata when justified.
- Add structured Person/WebSite data when the final domain, profiles, and identity fields are stable.
- Add Spanish localization only after translated final content, locale routes, hreflang, navigation, metadata, and maintenance ownership are approved.
- Add downloadable résumé only if it is current, accessible, privacy-reviewed, and maintained.

### Performance and analytics

- Establish real-user monitoring for Core Web Vitals after traffic volume justifies it.
- Add privacy-respecting analytics dashboards and conversion funnels for approved events.
- Record CTA placement and project identifier consistently to compare meaningful paths, not vanity page views.
- Create image-processing automation for approved screenshot sources if the content update cadence warrants it.

### Contact

- If a form is approved: include name, email, project summary, optional budget/timeline ranges only when commercially useful; provide visible labels, validation, success/error recovery, privacy notice, spam mitigation, and monitored delivery.
- Add calendar booking only when Henry wants time-slot self-service and can maintain availability; it must remain secondary to project context.

## P2 — Polish / nice-to-have

### Interaction

- Add the “VIEW CASE” follower only for fine-pointer desktop environments, with the system cursor preserved and all constraints in PORTFOLIO_DESIGN_SYSTEM_SPEC.md.
- Add restrained case-study diagram animation with a complete static and reduced-motion state.
- Add optional muted short product clips when they demonstrate a workflow more clearly than screenshots and remain performant.
- Add view transitions only if they preserve focus, history, reduced motion, and fast navigation.

### Visual

- Add a carefully authored social preview variant per case study.
- Add subtle project-specific accent adaptations only if they do not fragment the core identity.
- Add a favicon/monogram suite after the HG/H.G mark is approved.
- Add very limited hover media details to services only when authentic assets exist.

### Content and growth

- Add a third featured project only when its evidence quality matches the two core case studies.
- Add selected writing/notes only if maintained and relevant to buyer confidence.
- Add testimonials beyond three only through a dedicated proof pattern, not a carousel.
- Add deeper architecture/engineering appendices when confidentiality permits and target visitors use them.

### Explicit non-requirements

- Dark mode is not planned.
- A CMS is not required for the initial content volume.
- Authentication, accounts, database, comments, blog, newsletter, pricing calculator, client portal, downloadable source archive, and real-time features are not part of this portfolio.
- GitHub contribution graphs, certificate galleries, full career timelines, project carousels, auto-playing testimonials, technology marquees, and skill ratings are not candidates.

## Requirements traceability

| Area | Design source | Implementation phase |
|---|---|---|
| Product/IA | Spec A–C | Phases 0, 4–7 |
| Visual tokens | Spec D–J, AD | Phases 2–3 |
| Navigation/actions | Spec K–L | Phases 3–4, 8–9 |
| Home sections | Spec M–U | Phase 4 |
| Case studies | Spec V | Phases 5–7 |
| Screenshots | Spec W | Phases 0, 4–7, 11 |
| Motion | Spec X–Y | Phase 10 |
| Responsive | Spec Z | Phase 8 |
| Accessibility | Spec AA | Phase 9 |
| Content | Spec AB + CONTENT_REQUIREMENTS.md | Phase 0 and all page phases |
| Components/tokens | Spec AC–AD | Phases 2–5 |
| QA | Spec AE | Phases 8–12 |

