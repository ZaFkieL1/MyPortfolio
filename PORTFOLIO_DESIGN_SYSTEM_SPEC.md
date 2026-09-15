# Portfolio Design System Specification

Status: Draft for review  
Product: Henry Gonzalez — Full-Stack Developer / Product Engineer  
Surface mode: Persuade, with Experience-led project presentation  
Primary visual source: the user-supplied portfolio direction document  
Planning boundary: this document specifies implementation; it does not authorize implementation.

## A. Product Goals

### Primary objective

Convert qualified international visitors into project conversations by proving that Henry can understand, design, build, ship, and maintain real digital products from requirements to production.

### Secondary objectives

- Support evaluation for senior remote Full-Stack Developer / Product Engineer opportunities.
- Demonstrate product thinking, not only implementation breadth.
- Make production experience legible through real interfaces, constraints, decisions, and results.
- Create a durable content and component structure that can grow without becoming a generic project gallery.

### Target audience

1. Founders and operators who need SaaS, portals, internal tools, or workflow-specific software.
2. Product, engineering, or operations leaders selecting a freelance product engineer.
3. Agencies or studios seeking a reliable full-stack collaborator.
4. Hiring teams assessing end-to-end ownership for remote roles.

### Primary visitor actions

1. Understand the offer and relevance.
2. Inspect MediSapience and CEM Digital.
3. Read one detailed case study.
4. Verify capabilities, process, and production depth.
5. Start a project conversation by email or a verified contact channel.

### Time-based comprehension targets

| Time | Visitor must understand |
|---|---|
| 3 seconds | Henry builds complete web products for businesses and organizations. |
| 10 seconds | He has shipped real products; MediSapience and CEM Digital are the proof. |
| 30 seconds | His work spans SaaS, educational/business platforms, frontend, backend, data, and production. |
| 120 seconds | He can own the product lifecycle, explain consequential decisions, and may be a credible partner for the visitor's project. |

### Principal UX risks

- A long Home page can dilute the two projects if every supporting section has equal visual weight.
- Generic service language can weaken otherwise specific proof.
- Unverified metrics, client claims, or testimonials would damage trust.
- Technology can dominate and turn the experience back into a developer résumé.
- Large typography can create poor line breaks, overflow, or slow scanning on smaller viewports.
- Rich motion can delay content, create layout instability, or make the site feel like a creative-coding demo.
- A floating navbar can obscure anchors and reduce mobile viewport space.
- Screenshots can expose personal, medical, educational, or client-confidential data.
- Case studies without a clear role boundary can imply work Henry did not perform.

### Success criteria

The design is successful when:

- A first-time visitor can state the offer accurately after the first viewport.
- Both production projects are visible or clearly signposted before supporting biography or stack content.
- Every prominent claim has adjacent evidence or an explicit [CONTENT NEEDED] state during preparation.
- The primary contact action is visually obvious, keyboard reachable, and never dependent on motion or hover.
- Home has a clear hierarchy: Hero and Featured Work are primary; proof and final CTA are secondary; services/process/about/technology support them.
- Each case study distinguishes context, Henry's role, constraints, solution, engineering decisions, and verified outcomes.
- The design meets WCAG 2.2 AA, remains complete with reduced motion, and supports 320–1920 px without horizontal overflow.
- Mobile preserves the persuasion sequence and evidence, not merely the section order.
- Initial pages meet the performance budgets in REQUIREMENTS.md.
- A developer can implement the interface from this document, REQUIREMENTS.md, CONTENT_REQUIREMENTS.md, IMPLEMENTATION_PLAN.md, and DECISIONS.md without inventing visual rules.

## B. Information Architecture

### MVP sitemap

- / — Home
- /work/medisapience — MediSapience case study
- /work/cem-nicaragua — CEM Nicaragua / CEM Digital case study

### Deferred routes

- /work — P1 only, after a third credible project or a demonstrated need for an index.
- /services — no standalone route in the initial release.
- /about — no standalone route in the initial release.
- /contact — no standalone route in the initial release unless a future structured inquiry form requires it.

### Route decision

Services and About remain anchored sections on Home for MVP. Two standalone pages would add navigation choices without adding enough unique content, split the commercial narrative, and require visitors to leave the evidence-led path. Deep links use /#services and /#about. A dedicated route becomes appropriate only when either subject has enough distinct, maintained content to answer a separate search intent.

The two case studies receive routes immediately because they are the core proof, benefit from direct sharing and indexing, and need much more depth than Home can support.

### Primary navigation

Desktop order: Work, Services, Process, About, Contact CTA.  
Tablet order: Work, Services, About, Contact CTA; Process remains available through Home and mobile menu if width is constrained.  
Mobile trigger: HG/H.G mark, Menu button, then a modal navigation panel.

### Navbar behavior

- Sticky rather than permanently fixed: top 16–24 px, with safe-area awareness.
- Does not auto-hide; predictable access is more valuable than reclaimed pixels.
- On scroll, background opacity may increase and shadow may appear, but height does not shrink.
- Home links use anchors with scroll-margin-top equal to navbar height plus 24 px.
- Case-study pages show Home, Work, About, and Contact; the current case study sets Work active.
- Active state uses font weight plus an underline/indicator; color alone is insufficient.
- Primary CTA label: “Start a project”.
- On mobile, Menu remains a labeled text control; no unlabeled hamburger-only interaction.

## C. Page Structure

### Shared section rules

- Content container: maximum 1440 px, centered.
- Standard section padding: 128 px desktop, 96 px tablet, 72 px mobile.
- Compact proof/metric strips: 48–64 px desktop, 32–48 px mobile.
- Default reading measure: 62–72 characters; supporting text does not stretch across the full grid.
- Each section requires one dominant message and one commercial purpose.
- Entrance animation is progressive enhancement; content is visible before animation code loads.

### 1. Navbar

- Objective: persistent orientation and a short path to work or contact.
- Content: mark, primary links, Start a project CTA.
- Hierarchy: brand and CTA primary; section links secondary.
- Layout: floating capsule within page padding, one horizontal row.
- Width: min(calc(100% - 32 px), 1408 px).
- Columns: mark spans 2–3; links auto; CTA auto-aligned right.
- Size: 64 px desktop/tablet; 56 px mobile.
- Responsive: links collapse below 768 px; CTA moves into menu.
- Interaction: active, hover, focus-visible, menu open/close, Escape, outside click.
- Allowed motion: 160–240 ms background, border, indicator, and menu opacity/translate.
- Forbidden motion: elastic resizing, scroll-linked horizontal drift, auto-hiding, delayed menu controls.

### 2. Hero

- Objective: state the offer and immediately demonstrate real product work.
- Content: availability badge, one strong statement, concise description, primary/secondary CTA, real product proof.
- Hierarchy: statement → product visual → CTA/description → availability.
- Layout: asymmetric 7/5 desktop grid; text left, product proof right; minimum first-viewport height of approximately 760 px but never forced beyond available content.
- Width: full container; text maximum 760 px.
- Spacing: navbar-to-hero content 96–128 px desktop, 72–96 px tablet, 56–72 px mobile.
- Responsive: two columns at 1024 px and above; stacked below; on mobile statement, description/CTA, then product proof.
- Interaction: case-study preview links, no drag or hover-only access.
- Allowed motion: one staged reveal, 20 px maximum translation, 0.98→1 product scale, restrained 80 ms stagger.
- Forbidden motion: continuous tilt, aggressive pointer tracking, particles, parallax, hidden headline before hydration.

### 3. Client / Product Proof

- Objective: establish early that the work serves real products/organizations.
- Content: “Built for real products” label plus cleared MediSapience and CEM names/logos.
- Hierarchy: quiet proof band; it must not compete with Featured Work.
- Layout: horizontal rule/band, 12-column alignment, 2–4 proof items maximum.
- Width: full container.
- Size: 96–128 px desktop, content-wrapped mobile.
- Responsive: names wrap into two rows; never marquee by default.
- Interaction: optional links to case studies with meaningful labels.
- Allowed motion: fade once; subtle underline on hover.
- Forbidden motion: infinite logo ticker, grayscale-to-color gimmick, logos without publication permission.

### 4. Selected Work — MediSapience

- Objective: present the strongest SaaS proof and invite case-study depth.
- Content: index, category, name, one-sentence value, 0–3 verified metrics, dominant screenshot, case-study CTA, concise role/technology summary if verified.
- Hierarchy: screenshot and project name co-dominant; evidence precedes technology.
- Layout: media-right Featured Project, text 4 columns and media 8 columns.
- Width: full container; media may reach container edge but not viewport bleed by default.
- Size: 760–920 px visual block desktop; content-defined mobile.
- Responsive: image first only if it clarifies the project faster; otherwise title and one-line context precede image. Full text follows.
- Interaction: entire media area may link, but CTA remains a visible semantic link.
- Allowed motion: image scale up to 1.015, CTA icon translate up to 3 px.
- Forbidden motion: autoplay product video with sound, cursor-only CTA, invented dashboard animation.

### 5. Selected Work — CEM Digital

- Objective: demonstrate organizational, educational, and administrative platform breadth.
- Content/hierarchy: same contract as MediSapience with project-specific verified evidence.
- Layout: media-left Featured Project to create rhythm; media 7–8 columns, text 4–5 columns.
- Width/size: same visual authority as MediSapience; never rendered as the “smaller second project”.
- Responsive: same mobile order and spacing logic as the first project for predictability.
- Interaction/motion: same tokens and limits as the first project.

### 6. Metrics / Impact

- Objective: summarize verified impact without vanity.
- Content: 2–4 metrics or factual qualitative outcomes.
- Hierarchy: number/result dominant, label and source context secondary.
- Layout: full-width strip, 2–4 equal columns; optional dark background when it separates the long page.
- Size: 280–420 px desktop, content-defined mobile.
- Responsive: 2×2 at tablet/mobile when four; vertical list when labels need more room.
- Interaction: none required; source/context may be a link.
- Allowed motion: count-up only if final number is in DOM and duration ≤600 ms; static is preferred.
- Forbidden motion: odometers, repeated counting on scroll, unsourced numbers.

### 7. Services

- Objective: map proven capability to buyer needs.
- Content: four services only: Custom Web Applications, SaaS Products, Business Platforms, Existing Product Development.
- Hierarchy: section proposition, then service title, then buyer-oriented description.
- Layout: two-column grid of large horizontal service panels or a vertical editorial list; not four identical icon cards.
- Width: full container; text measure 38–50 characters per card.
- Size: 220–280 px per panel desktop, 180–240 px mobile depending on content.
- Responsive: 2 columns above 1024 px, 1 below.
- Interaction: hover/focus may invert dark, but the same information remains visible without hover.
- Allowed motion: 160–240 ms color change, optional visual reveal with opacity/translate ≤8 px.
- Forbidden motion: hidden descriptions, fake outbound arrows, decorative tech icons.

### 8. Process

- Objective: reduce perceived delivery risk by showing an end-to-end, understandable workflow.
- Content: Understand, Design, Build, Ship & Improve, each with concrete output.
- Hierarchy: sequence and deliverables; avoid generic methodology claims.
- Layout: four-step grid or ordered horizontal track; step numbers remain explicit.
- Width: full container.
- Size: 420–560 px desktop.
- Responsive: 2×2 tablet; ordered vertical steps mobile.
- Interaction: none required; optional focusable disclosure only if additional real detail exists.
- Allowed motion: sequential rule/step reveal ≤480 ms total.
- Forbidden motion: scroll-jacked timeline, pinning that traps content, auto-advancing steps.

### 9. Technology

- Objective: confirm technical fit after product value is established.
- Content: curated groups—Frontend, Backend, Data, Infrastructure, Quality—containing only technologies Henry can substantiate.
- Hierarchy: capability group labels over logos; product outcomes remain more prominent elsewhere.
- Layout: editorial columns/list with text; maximum 4 items per group in the initial view.
- Width: 10–12 columns; compact section.
- Size: 360–520 px desktop.
- Responsive: 2 columns tablet, 1 column mobile.
- Interaction: none; no tooltip required for recognizable names.
- Allowed motion: small group reveal.
- Forbidden motion: logo cloud, marquee, proficiency bars, percentages, orbiting icons.

### 10. About

- Objective: humanize the proof and clarify collaboration context.
- Content: portrait, short introduction, location, worldwide/remote availability, lifecycle ownership, LinkedIn/GitHub.
- Hierarchy: short statement and portrait balanced; products have already led.
- Layout: 5/7 or 4/8 split; portrait 4–5 columns; copy 6–7 columns.
- Width: full container; body measure 55–65 characters.
- Size: 560–760 px desktop.
- Responsive: section label and intro before portrait if the image does not add immediate proof; otherwise image first after the heading.
- Interaction: social links, optional email.
- Allowed motion: subtle portrait reveal/scale to 1.
- Forbidden motion: floating portrait, biography timeline, decorative location map.

### 11. Testimonials

- Objective: add third-party confidence without interrupting reading.
- Content: verified quote, name, role, organization, optional cleared logo/photo.
- Hierarchy: quote dominant; attribution precise and adjacent.
- Layout: one full-width quote when only one exists; two balanced columns for two; editorial grid for three.
- Width: 10–12 columns.
- Size: minimum 320 px per quote block.
- Responsive: one column; no horizontal swipe required.
- Interaction: none; links only when meaningful.
- Allowed motion: simple reveal.
- Forbidden motion: autoplay carousel, truncated quote behind “read more”, fake rating stars.
- Empty rule: if no verified testimonial exists, omit the entire section and close spacing cleanly; never show a placeholder publicly.

### 12. Final CTA

- Objective: convert accumulated trust into a low-friction conversation.
- Content: short prompt, large statement, Start a project action, visible email, optional LinkedIn.
- Hierarchy: statement → primary action → alternate contact.
- Layout: full-width dark section, content aligned to main grid; accent applied to one word or control only.
- Width: edge-to-edge background, inner 1440 px container.
- Size: 560–720 px desktop, 420–560 px mobile.
- Responsive: headline wraps to 2–4 lines; actions stack at mobile.
- Interaction: email and external link states; copy-email only if implemented accessibly and with feedback.
- Allowed motion: headline/CTA reveal and modest arrow shift.
- Forbidden motion: magnetic buttons that fight pointer control, background video, flashing accent.

### 13. Footer

- Objective: provide authorship, location/availability, and durable contact links.
- Content: Henry Gonzalez, current copyright year, Nicaragua / available worldwide, LinkedIn, GitHub, email.
- Hierarchy: minimal, secondary to CTA.
- Layout: 3–4 aligned zones separated by a rule.
- Size: 128–180 px desktop, content-wrapped mobile.
- Responsive: stacked groups with 16–24 px gaps.
- Interaction: visible link states and external-link semantics.
- Motion: none beyond standard hover/focus.

## D. Design Principles

1. **Evidence before assertion.** Real interfaces, roles, constraints, and verified outcomes carry more weight than adjectives.
2. **Product first, person in context.** The work earns attention before biography; About explains the operator behind the proof.
3. **One commercial job per section.** Every section must clarify fit, reduce risk, demonstrate proof, or enable contact.
4. **Editorial scale, product discipline.** Large type and asymmetric composition create distinction while grids, tokens, and predictable controls preserve usability.
5. **Hierarchy through type and space.** Cards, shadows, and color are supporting tools, not the default way to separate every idea.
6. **Real UI is the visual asset.** Authentic, privacy-reviewed screenshots outperform generic device renders or decorative illustrations.
7. **Motion explains state.** Animation establishes sequence, feedback, or continuity; it never withholds information or becomes the subject.
8. **Constraints are part of the craft.** Mobile, reduced motion, keyboard use, contrast, content length, and slow networks are design inputs.
9. **Specificity compounds trust.** Copy names real workflows, responsibilities, and consequences; vague “innovation” language is removed.
10. **Restraint makes the accent valuable.** Lime is reserved for availability, focal actions, selected data, and rare emphasis.

## E. Color System

### Core tokens

| Token | Value | Use |
|---|---:|---|
| --color-bg-primary | #F3F3F0 | Main warm page background |
| --color-bg-secondary | #EAEAE5 | Alternating quiet sections |
| --color-surface | #FFFFFF | Cards, media frames, floating navbar |
| --color-text-primary | #0A0A0A | Headlines, primary body, controls |
| --color-text-secondary | #4F4F4B | Supporting body and descriptions |
| --color-text-muted | #6B6B67 | Metadata and captions |
| --color-border | #DADAD5 | Decorative dividers and passive boundaries |
| --color-border-strong | #8A8A84 | Essential control outlines |
| --color-accent | #C6F63D | Limited focal accent |
| --color-accent-hover | #B5E72F | Darker accent hover/active fill |
| --color-accent-soft | #ECF9C9 | Quiet badge or selected background |
| --color-dark | #0A0A0A | Final CTA / optional metric band |
| --color-dark-surface | #171717 | Raised surfaces on dark sections |
| --color-dark-text | #F3F3F0 | Primary text on dark |
| --color-focus | #0A0A0A | Primary focus ring on light |
| --color-focus-inverse | #C6F63D | Focus ring on dark |
| --color-disabled-bg | #E4E4DF | Disabled fill |
| --color-disabled-text | #85857F | Disabled text |
| --color-success | #287A43 | Form/system success only |
| --color-error | #B42318 | Form/system error only |

Success/error tokens are reserved for actual feedback states. They do not appear as decorative palette colors.

### State rules

- Primary button: dark background → accent hover → accent-hover active; text stays #0A0A0A on accent.
- Secondary button: transparent → dark hover; border uses --color-border-strong when the boundary is required to perceive the control.
- Text link: underline offset 0.2 em on hover/focus; active uses primary text and a 1 px downward translate at most.
- Selected/active navigation: primary text plus visible indicator.
- Disabled controls: no hover transformation, reduced contrast, aria-disabled/disabled semantics as appropriate.
- Focus: 2 px solid focus color with 3 px offset. On mixed imagery, use a two-layer ring: 2 px surface plus 4 px focus.

### Contrast measurements

| Pair | Ratio | Rule |
|---|---:|---|
| #0A0A0A on #F3F3F0 | 17.81:1 | Passes AAA body/large |
| #4F4F4B on #F3F3F0 | 7.40:1 | Passes AAA body |
| #6B6B67 on #F3F3F0 | 4.81:1 | Passes AA body |
| #6B6B67 on #FFFFFF | 5.35:1 | Passes AA body |
| #0A0A0A on #C6F63D | 15.70:1 | Passes AAA |
| #FFFFFF on #C6F63D | 1.26:1 | Fails; forbidden |
| #F3F3F0 on #0A0A0A | 17.81:1 | Passes AAA |
| #DADAD5 on #F3F3F0 | 1.26:1 | Decorative only; cannot define an essential control alone |

Before implementation sign-off, all actual foreground/background combinations must be measured again, including screenshot overlays and focus rings.

## F. Typography System

### Font decision

Use Geist Sans as the single family for display, interface, and body text. It is already integrated through the existing Next.js scaffold, has strong variable-font support, broad UI legibility, and avoids an unnecessary licensing or loading dependency. A second serif family is rejected for MVP because the reference only treats it as optional and it risks becoming decorative emphasis without semantic value.

Fallback: "Geist", "Inter", "Segoe UI", sans-serif.  
Numerals: tabular numbers for metrics only.  
Maximum normal body width: 68 ch.  
Uppercase is limited to short labels, categories, and metadata.

### Type scale

| Style | Desktop | Tablet | Mobile | Weight | Line height | Tracking | Transform |
|---|---:|---:|---:|---:|---:|---:|---|
| Display XL | 112 px | 88 px | 54 px | 600 | 0.90 | -0.055 em | none |
| Display L | 80 px | 64 px | 46 px | 600 | 0.94 | -0.045 em | none |
| H1 | 64 px | 54 px | 40 px | 600 | 0.98 | -0.04 em | none |
| H2 | 56 px | 48 px | 36 px | 600 | 1.00 | -0.035 em | none |
| H3 | 36 px | 32 px | 28 px | 600 | 1.08 | -0.025 em | none |
| H4 | 24 px | 22 px | 20 px | 600 | 1.18 | -0.015 em | none |
| Body L | 21 px | 20 px | 18 px | 400 | 1.50 | -0.01 em | none |
| Body | 17 px | 17 px | 16 px | 400 | 1.55 | -0.005 em | none |
| Body S | 15 px | 15 px | 14 px | 400 | 1.50 | 0 | none |
| Caption | 13 px | 13 px | 12 px | 500 | 1.40 | 0.01 em | none |
| Label | 13 px | 13 px | 12 px | 600 | 1.20 | 0.08 em | uppercase |
| Nav | 15 px | 15 px | 15 px | 500 | 1.20 | -0.005 em | none |
| Button | 15 px | 15 px | 15 px | 600 | 1.00 | -0.005 em | none |

Display styles should use fluid interpolation between breakpoints, clamped to the values above. Manual line breaks are allowed only when tested at 1280, 1440, 1536, 768, 390, and 320 px.

## G. Spacing System

### Tokens

| Token | Value |
|---|---:|
| --space-0 | 0 |
| --space-1 | 4 px |
| --space-2 | 8 px |
| --space-3 | 12 px |
| --space-4 | 16 px |
| --space-5 | 20 px |
| --space-6 | 24 px |
| --space-8 | 32 px |
| --space-10 | 40 px |
| --space-12 | 48 px |
| --space-16 | 64 px |
| --space-20 | 80 px |
| --space-24 | 96 px |
| --space-32 | 128 px |
| --space-40 | 160 px |

### Application rules

- Standard section block padding: 128 px desktop, 96 px tablet, 72 px mobile.
- Hero top padding accounts for sticky navbar: 144–176 px desktop, 120–144 px tablet, 104–120 px mobile.
- Container inline padding: 48 px wide desktop, 32 px tablet/small desktop, 20 px mobile, 16 px at 359 px and below.
- Card/panel padding: 32–48 px desktop, 24–32 px tablet, 20–24 px mobile.
- Same-component internal gaps use 8, 12, 16, or 24 px.
- Content-group gaps use 24, 32, or 48 px.
- Section-heading-to-body gap is smaller than previous-section-to-heading gap.
- Avoid consecutive 128+ px gaps; large space must create a deliberate chapter break.

## H. Grid System

| Range | Columns | Max width | Gutter | Outer padding |
|---|---:|---:|---:|---:|
| Wide ≥1536 px | 12 | 1440 px | 24 px | 48 px minimum |
| Desktop 1280–1535 px | 12 | 100% | 24 px | 40 px |
| Small desktop 1024–1279 px | 12 | 100% | 20 px | 32 px |
| Tablet 768–1023 px | 8 | 100% | 20 px | 32 px |
| Large mobile 480–767 px | 4 | 100% | 16 px | 20 px |
| Mobile <480 px | 4 | 100% | 12 px | 16–20 px |

Grid lines align navbar, hero, featured projects, metrics, About, CTA content, and footer. Full-bleed backgrounds may escape the container; readable content does not. Nested bento grids use the parent columns rather than creating unrelated widths.

## I. Border Radius System

| Token | Value | Use |
|---|---:|---|
| --radius-sm | 10 px | badges, small media, compact controls |
| --radius-md | 16 px | navbar, small panels, menus |
| --radius-lg | 24 px | service panels, screenshots, testimonial surfaces |
| --radius-xl | 32 px | featured media and major dark/white surfaces |
| --radius-pill | 999 px | buttons, availability badges, cursor label if enabled |

Do not apply radii to plain editorial text blocks or every section. Nested radii decrease by one token so inner surfaces never look rounder than their parent.

## J. Border + Shadow System

### Borders

- --border-subtle: 1 px solid rgba(10,10,10,0.08); decorative separation.
- --border-default: 1 px solid #DADAD5; surfaces and screenshot frames.
- --border-strong: 1 px solid #8A8A84; controls where the boundary is necessary.
- --border-inverse: 1 px solid rgba(243,243,240,0.20); dark surfaces.

### Shadows

- --shadow-sm: 0 1px 2px rgba(10,10,10,0.05).
- --shadow-md: 0 1px 2px rgba(10,10,10,0.04), 0 12px 32px rgba(10,10,10,0.06).
- --shadow-focus: 0 0 0 2px current background, 0 0 0 4px focus color.

Only floating navigation, menus, and elevated media may use --shadow-md. Service/testimonial cards rely on border, contrast, and spacing.

## K. Button System

Shared rules: visible label, 44 px minimum touch target, icon after label with 8 px gap, ArrowUpRight/ArrowDown only when semantic, no layout shift between states.

| Variant | Height | Horizontal padding | Radius | Default | Hover | Active | Disabled |
|---|---:|---:|---|---|---|---|---|
| Primary | 52 px desktop, 48 px mobile | 24 px | pill | dark / white text | accent / dark text | accent-hover, translateY 1 px | disabled bg/text |
| Secondary | 52/48 px | 24 px | pill | transparent, strong border, dark text | dark / white text | #171717, translateY 1 px | muted border/text |
| Tertiary/Text | 44 px min | 4–8 px | sm | dark text, underline optional | underline visible, icon +3 px | opacity 0.8 | disabled text |
| Icon | 48 px | 0; 48 px square | pill or md | surface + border | bg-secondary | translateY 1 px | disabled |

Focus-visible uses the focus system and remains visible in every state. Mobile full-width buttons are allowed only where stacking improves action clarity; otherwise content width is preferred.

## L. Navbar System

- Desktop height: 64 px; tablet 60 px; mobile 56 px.
- Page inset: 24 px wide desktop, 16 px small desktop/tablet/mobile; respects env(safe-area-inset-*).
- Maximum width: 1408 px.
- Surface: rgba(255,255,255,0.92), backdrop-filter blur(12 px) saturate(120%); fallback solid white.
- Border: --border-default; radius: --radius-md; shadow: none at top, --shadow-sm after 24 px scroll.
- Mark: “HG” preferred as provisional text mark; minimum 44×44 px link target.
- Desktop gap: 28–32 px between links; CTA 16 px after final link.
- Active indicator: 2 px line or compact dot plus weight change.
- Scroll: sticky, never auto-hidden, no shrink.
- Mobile menu: fixed modal panel below/in place of navbar, opaque warm background, large labeled links, visible Close control, focus trap, Escape close, return focus to trigger, body scroll lock, current page marker.
- Mobile panel animation: opacity plus translateY(-8→0), 240 ms; reduced motion is immediate.
- If JavaScript fails, core navigation and contact links remain available through server-rendered content or a non-modal fallback.

## M. Hero System

### Content contract

1. Availability badge: use only when availability is true and maintained. Otherwise replace with a neutral role/location eyebrow.
2. Statement: one proposition, maximum 4 desktop lines and 5 mobile lines.
3. Description: 1–2 sentences, maximum 180 characters.
4. Primary CTA: Start a project.
5. Secondary CTA: View selected work.
6. Product proof: authentic MediSapience/CEM screenshots or privacy-safe crops, with labels and real links.

### Copy directions to validate

1. Recommended: “I build software businesses can run on.”
2. “I design and build digital products for real business workflows.”
3. “From product requirements to production software.”
4. “Full-stack products, built around how your business works.”
5. “I turn complex workflows into reliable web products.”

These are direction candidates, not final approved copy. Avoid “actually use” if it cannot be supported by adjacent usage evidence.

### Layout

- Desktop ≥1024 px: 7-column statement/content, 5-column product proof; align proof to lower headline rhythm rather than arbitrary vertical center.
- Tablet 768–1023 px: statement spans 7–8 columns; product proof becomes a wide composition below.
- Mobile: single stack; badge → statement → description → CTAs → product proof.
- Text maximum width: 820 px display, 620 px description.
- Proof composition: one dominant 16:10 product screenshot plus at most two smaller modules for the second product and verified capability/context.
- Small modules may show a project label, one verified metric, or a short stack group. Never combine all three into dense résumé cards.
- Hero proof must remain meaningful when hover and animation are absent.

### Interaction

- Screenshot links include visible project names and accessible names.
- Optional pointer tilt is rejected for MVP because it adds input-dependent decoration without improving comprehension.
- Image zoom is clipped within the media frame and never exceeds 1.015.

## N. Project Card / Featured Project System

### Pattern

FeaturedProject is a large editorial chapter, not a reusable thumbnail card. Each instance includes:

- Project index: 01 or 02.
- Verified category.
- Project name.
- 1–2 sentence product/value description.
- 0–3 verified metrics or outcomes.
- One dominant screenshot or short muted video fallback.
- Visible “View case study” link.
- Optional compact role/technology summary when it strengthens relevance.

### Variants

**Media right**

- Text: columns 1–4.
- Media: columns 5–12.
- Best for MediSapience, the first and strongest SaaS proof.

**Media left**

- Media: columns 1–7/8.
- Text: columns 8/9–12.
- Best for CEM Digital to introduce rhythm without reducing importance.

At 1023 px and below both variants become a predictable stack. The DOM order follows reading order and may use CSS placement at wide widths; it must remain logical for screen readers and keyboard users.

### Home content

- Category, project name, one concise product description.
- Henry's role in one line if verified.
- Maximum three metrics, only when verified.
- One principal screenshot and at most one supporting crop.
- One case-study CTA.
- Maximum six technology names, preferably grouped rather than displayed as badges.

### Case-study-only content

- Client/context detail, challenge, constraints, full role boundary.
- Feature walkthroughs and multiple screenshots.
- Engineering decisions, alternatives, architecture, testing/operations.
- Detailed results, testimonial, live product CTA, confidentiality notes.

### Interaction

The media, title link, and explicit CTA may all lead to the case study, but nested links are forbidden. Hover image zoom and a small CTA indicator are optional; focus receives equivalent emphasis. The layout remains fully understandable without the proposed custom cursor.

## O. Bento System

### Use bento when

- Different but related proof items need simultaneous comparison.
- Content density benefits from size hierarchy.
- A module has a distinct semantic unit and a clear span.
- The layout collapses into a logical order without losing relationships.

### Do not use bento when

- A section is a linear narrative, such as a case-study challenge or solution.
- Large screenshots need uninterrupted space.
- Cards exist only to decorate short labels.
- Equal information is forced into unequal tiles.
- The same content would be clearer as a list or typographic strip.

### Approved uses

- Hero product proof: one 8/12-equivalent dominant tile plus one or two supporting tiles.
- Process: four ordered modules only if each includes a concrete output.
- Selected product metrics: one dominant outcome plus supporting facts.
- Capabilities: optional, only if the four services have meaningfully different supporting visuals.

### Card types and spans

| Type | Desktop span | Minimum height | Purpose |
|---|---:|---:|---|
| Dominant media | 8×2 grid units | 420 px | Real product screenshot |
| Supporting media | 4×1 | 200 px | Second product/crop |
| Metric | 4×1 | 200 px | One verified result |
| Text proof | 4×1 | 200 px | Role, capability, or context |
| Process | 3×1 or 6×1 | 240 px | Ordered delivery stage |

Desktop gaps use 24 px; tablet 20 px; mobile 16 px. Below 768 px, bento becomes a single reading-order column except pairs that pass at 320 px with ≥160 px usable width each. No masonry reordering.

## P. Service Card System

### Shared anatomy

- Two-digit index.
- Service title.
- Buyer-oriented description of 120–180 characters.
- Optional authentic UI crop or restrained abstract structural diagram.
- No arrow unless the card links somewhere.

### Services

1. **Custom Web Applications** — purpose-built portals, internal tools, management systems, and workflow software.
2. **SaaS Products** — product foundations and production features such as accounts, permissions, billing/integrations, and analytics only where Henry can verify experience.
3. **Business Platforms** — centralized systems that replace fragmented forms, spreadsheets, and manual coordination.
4. **Existing Product Development** — scoped feature work, integrations, architecture improvements, maintenance, and iteration on existing products.

### Dimensions and states

- Desktop: two columns, 220–280 px min-height, 32–40 px padding.
- Tablet/mobile: one column, min-height 180 px, 24 px padding.
- Radius: --radius-lg; border: --border-default.
- Default: surface background, dark text.
- Hover/focus-within: dark background, dark text becomes dark-text, optional visual enters by ≤8 px.
- Active: no scale; 1 px translate is allowed only for a link/button inside.
- Non-interactive service panels do not receive pointer cursor or hover transformations.

## Q. Metric System

### Rules

- Every number requires a source and an “as of” date in content records, even if the source is not shown publicly.
- Do not add “+” unless the measurement genuinely means at least that value.
- Do not combine unlike quantities into a single impressive total.
- Labels use plain outcomes: “assessment responses recorded”, not “engagement”.
- Qualitative results such as “Production system” are allowed only when more meaningful than a weak number.
- Public rounding must be conservative and documented.

### Variants

**Inline project metric**

- 48–64 px number desktop, 36–44 px mobile.
- 1–3 metrics, aligned with project copy.
- Label 12–14 px; optional context line.

**Large metric strip**

- 80–112 px number desktop, 52–72 px mobile.
- 2–4 equal or intentionally weighted columns.
- May use dark background; accent limited to one datum or rule.

**Case-study result**

- Outcome title, value or factual status, one sentence explaining why it matters.
- May pair a metric with a screenshot or operational consequence.
- Requires context, period, and attribution in source content.

## R. About System

- Section eyebrow: About.
- Heading: concise first-person introduction; avoid “passionate”.
- Portrait: current, professional, authentic, 4:5 or 3:4 crop, neutral/working context, descriptive alt only when the image conveys more than identity.
- Copy: 80–140 words maximum across 2–3 short paragraphs.
- Facts: based in Nicaragua; remote/worldwide availability only if current.
- Lifecycle summary: requirements, architecture, frontend, backend, data, deployment, maintenance—trimmed to verified responsibilities.
- Links: LinkedIn, GitHub, and optional résumé only if maintained.
- Layout: portrait 4–5 columns and copy 6–7 columns with 1-column breathing space where possible.
- No long biography, chronological timeline, personal hobbies grid, or skill ratings in MVP.

## S. Testimonial System

### Content anatomy

- Quote: 35–80 words preferred; 120 maximum.
- Attribution: full name, role, organization.
- Optional: approved organization logo or portrait.
- Source/permission record is required but not public.

### Layout

- One quote: single 10-column editorial block; do not place it in a narrow orphan card.
- Two quotes: two 6-column blocks.
- Three quotes: one dominant 7-column quote plus two 5-column stacked quotes only if quote lengths support it; otherwise equal vertical list.
- Quote size: H3 or 28–40 px fluid, never smaller than Body L.
- Attribution separated by 24–32 px; logo no larger than needed for recognition.

No automatic carousel. If no verified quote exists, omit the section. If one exists, give it deliberate full-width treatment rather than fabricating balance. If two exist, both remain visible without tabs or swiping.

## T. Final CTA

### Copy structure

1. Optional eyebrow: “Have a project in mind?”
2. Large action-oriented statement, maximum 3 desktop lines and 4 mobile lines.
3. One-sentence invitation that sets expectation for the conversation.
4. Primary email/project link.
5. Secondary visible email and optional LinkedIn.

Direction example, not final copy:

- “Let's build the product your workflow needs.”
- “Tell me what you're building.”

### Layout

- Edge-to-edge --color-dark background.
- Inner container on 12/8/4-column grid.
- Headline spans 9–11 desktop columns.
- Action row sits below with 32–48 px gap.
- Accent appears on one keyword or the primary button, never as a full-section fill.
- Mobile actions stack; email wraps safely and stays selectable.

## U. Footer

Footer content:

- Henry Gonzalez © current year.
- Nicaragua / Available worldwide, only while true.
- LinkedIn, GitHub, Email.

“Built with Next.js” is excluded from MVP. It speaks to implementers rather than buyers, duplicates the technology section, and gives framework choice undue commercial prominence. It may return as low-priority source-code documentation, not footer messaging.

## V. Case Study Template

The template is shared structurally, but each case study must have project-specific copy, screenshots, engineering decisions, and result evidence. Empty sections are not published merely to preserve symmetry.

### 1. Case Study Hero

- Purpose: identify product, category, value, and Henry's verified role immediately.
- Content: index, project name, category, 1–2 sentence summary, role, year/date range, status, platform, live link if public.
- Layout: 8-column title/summary with 4-column fact rail; full container.
- Text: 60–120 words plus compact metadata.
- Image: none required inside hero; next section carries dominant image.
- Responsive: metadata becomes 2×2 grid or vertical list below summary.
- Animation: one reveal sequence ≤600 ms; metadata never waits to become readable.

### 2. Product Image

- Purpose: prove the product exists and establish visual context.
- Content: one flagship authentic screenshot.
- Layout: 12-column, 16:10 preferred, up to 1440 px wide.
- Text: optional caption ≤18 words.
- Responsive: use responsive source/crop; do not shrink unreadable desktop UI into a phone-sized image.
- Animation: fade/scale 0.99→1; no perspective device entrance.

### 3. Overview

- Purpose: summarize what the product is, who uses it, and what Henry contributed.
- Content: 120–220 words, plus 3–5 factual project attributes.
- Layout: heading 4 columns, body 6 columns, fact rail 2 columns where space permits.
- Image: optional supporting context image.
- Responsive: single column with facts after body.
- Animation: simple section reveal.

### 4. Client / Context

- Purpose: explain organization, operating environment, users, and constraints without exposing confidential detail.
- Content: 100–180 words; client naming/description must be approved.
- Layout: 5/7 split or body plus metadata rail.
- Image: approved logo or contextual screenshot only.
- Responsive: body then facts.
- Animation: none beyond fade.

### 5. Challenge

- Purpose: define the business/user problem and why it was consequential.
- Content: 120–220 words; 2–4 concrete constraints.
- Layout: large statement followed by narrow readable body; avoid card grid.
- Image: optional “before” artifact only if cleared and explanatory.
- Responsive: statement and text stack.
- Animation: restrained clip reveal for statement; static under reduced motion.

### 6. Solution

- Purpose: explain the product strategy and system response at a high level.
- Content: 150–260 words; identify scope and Henry's decisions without feature dumping.
- Layout: 5-column text with 7-column screenshot or diagram.
- Image: real workflow image or semantic architecture/product diagram.
- Responsive: text precedes image.
- Animation: image reveal and short text fade; no animated pseudo-demo.

### 7. Key Features

- Purpose: demonstrate 3–6 meaningful workflows.
- Content per feature: title, 45–90 words, user/business consequence.
- Layout: alternating full-width feature chapters, not small cards.
- Image: one large screenshot per feature, optional detail crop.
- Responsive: title/description before screenshot; provide mobile-specific crops.
- Animation: optional image zoom ≤1.015 and reveal; no slideshow requirement.

### 8. Engineering Challenges

- Purpose: demonstrate technical judgment through 3–5 consequential problems.
- Content per challenge: context, constraint, decision, trade-off, outcome; 90–160 words.
- Layout: numbered editorial list or 4/8 split; dividers, not cards.
- Image: code-free diagram or data flow only when it clarifies.
- Responsive: ordered vertical list.
- Animation: sequential reveal; all content remains visible without JavaScript.

### 9. Architecture

- Purpose: communicate system boundaries and responsibilities at an honest level.
- Content: short narrative plus architecture diagram, technologies, data/external-service boundaries, reliability/security notes when publishable.
- Layout: optional dark 12-column section; diagram 8–9 columns, explanatory rail 3–4.
- Text: 100–180 words plus concise node labels.
- Image: semantic SVG/HTML diagram preferred; no fake infrastructure complexity.
- Responsive: diagram reorganizes vertically; labels remain ≥14 px and connections understandable.
- Animation: optional line/node reveal ≤600 ms; static complete diagram for reduced motion and print.

### 10. Results

- Purpose: connect the build to verified impact.
- Content: 1–4 metrics or factual outcomes with definitions, period, and context.
- Layout: large metric strip plus 1–2 explanatory paragraphs.
- Text: 40–100 words plus labels.
- Image: optional after-state screenshot.
- Responsive: 2×2 or vertical.
- Animation: static preferred; count-up optional under metric rules.

### 11. Technology

- Purpose: document the relevant stack and why major choices mattered.
- Content: curated groups and 1–3 decision notes, not an exhaustive dependency list.
- Layout: compact columns/list.
- Text: 4–12 technology names plus up to 120 words.
- Image: none required.
- Responsive: 2 columns then 1.
- Animation: none or group fade.

### 12. Testimonial

- Purpose: add verified client/user validation.
- Content: one approved quote and precise attribution.
- Layout: 8–10-column centered editorial quote.
- Text: 35–120 words.
- Image: optional approved portrait/logo.
- Responsive: full-width readable block.
- Animation: fade only.
- Missing state: omit section cleanly.

### 13. Live Product CTA

- Purpose: let visitors inspect the product or contact Henry when the product is private.
- Content: verified URL and clear expectation; otherwise “Discuss a similar project”.
- Layout: dark or accent-contained band, visible action.
- Text: 20–50 words.
- Image: optional thumbnail.
- Responsive: stacked action.
- Animation: standard CTA states only.

### 14. Next Case Study

- Purpose: sustain exploration between the two core projects.
- Content: next project name, category, preview, meaningful link.
- Layout: large media-linked chapter; not a tiny footer card.
- Text: title plus one line.
- Image: authentic preview.
- Responsive: image and text stack.
- Animation: image zoom ≤1.015 and arrow shift.

## W. Screenshot System

### Capture and privacy rules

- Use production or production-equivalent authentic UI.
- Remove or replace personal, medical, educational, financial, credential, token, and confidential client data before capture.
- Maintain a source record: product, route/state, capture date, permission, redaction status, owner.
- Never imply a feature, platform, device, or metric not shown by the real product.
- Use synthetic data only inside the real interface and label it in internal asset records.

### Presentation rules

- Preferred desktop ratio: 16:10; secondary acceptable ratios: 4:3 and 3:2.
- Mobile UI: native portrait ratio or isolated vertical crop; do not place tiny full-height phone UI beside unreadable text.
- Browser frame: minimal optional 36–44 px top bar, neutral controls, no fake URL unless real and safe.
- Use frame when browser context clarifies that it is a web product; omit when it adds chrome without meaning.
- Border: --border-default or inverse on dark.
- Radius: --radius-lg for image, --radius-xl for outer media surface.
- Background: surface/quiet neutral chosen for contrast with the product UI.
- Max width: 1440 px; render raster assets at ≥2× intended CSS width when practical.
- Caption: product area/state and why it matters, 8–18 words; never “Screenshot of...”.
- Crop: preserve task context and main action; do not crop labels or states needed to understand the feature.
- Dark UI: place on a slightly lighter/darker neutral surface with clear edge.
- Light UI: use border or quiet background, not a heavy shadow.
- Responsive art direction: provide desktop and mobile/detail crops rather than relying on one shrinking source.
- 3D laptop/phone renders are rejected for MVP.

## X. Motion System

### Tokens

| Token | Value | Use |
|---|---:|---|
| --duration-fast | 160 ms | hover, focus-adjacent feedback |
| --duration-default | 320 ms | menu/panel transitions |
| --duration-slow | 600 ms | one-time section/hero reveal |
| --easing-standard | cubic-bezier(0.2, 0, 0, 1) | state changes |
| --easing-enter | cubic-bezier(0.16, 1, 0.3, 1) | content entering |
| --easing-exit | cubic-bezier(0.4, 0, 1, 1) | content leaving |

### Permitted patterns

- Opacity 0→1 only when content is not left hidden if scripts fail.
- TranslateY up to 20 px for section/hero entry; up to 8 px for controls.
- Clip reveal for major display text, once per page, with a readable fallback.
- Scale 0.98→1 for initial media; hover image zoom ≤1.015.
- Stagger 60–100 ms, maximum six items and ≤600 ms total.
- Color, border, underline, and arrow-position feedback.

### Limits

- No scroll hijacking, aggressive parallax, physics-driven pointer chase, continuous tilt, marquee required for reading, or animations longer than 800 ms.
- No repeated reveal when scrolling back.
- No layout-affecting properties for routine animation.
- No animation may delay interaction or create cumulative layout shift.
- Autoplay video is muted, paused offscreen, and has accessible controls when content-bearing.

### Reduced motion

Under prefers-reduced-motion: reduce, remove transforms, clip reveals, count-ups, smooth scrolling, cursor follower, and nonessential video autoplay. State changes may use ≤100 ms opacity. Content and focus order remain identical.

## Y. Cursor Interaction

Decision: do not include the “VIEW CASE” follower in MVP. It is eligible as P2 polish only after the core interaction passes accessibility and performance QA.

If enabled later:

- Desktop fine-pointer environments only: hover: hover and pointer: fine.
- The system cursor remains visible; the follower is an additional label, not a replacement.
- It appears only over the featured project media/link region.
- Diameter 72–88 px, dark text on accent, no blend modes required.
- It never covers the visible CTA or essential product content.
- It is aria-hidden, ignores pointer events, and disappears on keyboard focus, touch, reduced motion, window blur, or pointer exit.
- The explicit “View case study” link remains visible.

The enhancement is worthwhile only if it improves affordance without measurable input lag or visual obstruction.

## Z. Responsive System

### Breakpoints

- Mobile: 0–479 px.
- Large mobile: 480–767 px.
- Tablet: 768–1023 px.
- Small desktop: 1024–1279 px.
- Desktop: 1280–1535 px.
- Wide: ≥1536 px.

Breakpoints mark structural changes; typography and spacing interpolate fluidly. Components also respond to available container width, content length, pointer capability, and user preferences.

### Structural behavior

- Navbar: full links ≥768 px when they fit; labeled Menu below. Never squeeze links into two lines.
- Hero: 7/5 split ≥1024 px; wide stacked composition below; CTAs stack below 480 px when needed.
- Bento: 12-column spans ≥1024; simplified 8-column/tablet; logical 1-column mobile.
- Featured projects: alternating 4/8 layouts ≥1024; consistent stack below; DOM reading order preserved.
- Services: 2 columns ≥1024; 1 below.
- Metrics: 4 or weighted columns desktop; 2×2 tablet/mobile; 1 column when labels wrap poorly.
- About: 5/7 split ≥1024; 3/5 tablet; single column mobile.
- Testimonials: 2 columns only when two readable blocks fit; always one column mobile.
- Footer: horizontal zones ≥768; vertical groups below.
- Case studies: metadata rails move below primary narrative; diagrams reflow vertically; screenshots use responsive crops.
- At 320 px: no horizontal scrolling, 16 px minimum page inset, 44 px targets, full contact labels remain readable.
- At ≥1536 px: content stops at 1440 px; type does not grow beyond token maxima.

## AA. Accessibility

- Target WCAG 2.2 AA; AAA contrast is preferred for primary copy.
- One logical H1 per page; headings do not skip levels for visual styling.
- Landmarks: header/nav/main/section/footer used semantically; sections have accessible names where useful.
- Skip link is first focusable element and clears the sticky navbar.
- Keyboard access covers navbar, mobile menu, all links, CTA states, optional disclosures, and any media controls.
- Focus-visible is never removed and remains visible over images/dark sections.
- Link labels describe destination: “View the MediSapience case study”, not repeated “Learn more”.
- External links are not forced into a new tab unless necessary; if they are, behavior is communicated.
- Mobile menu traps focus, supports Escape, restores focus, and prevents background interaction.
- Text contrast and non-text control boundaries meet WCAG requirements; color is never the sole active/error indicator.
- Touch targets are at least 44×44 px with adequate separation.
- Images use empty alt when decorative; product screenshots describe the workflow/result, not every visible label; adjacent captions prevent duplication.
- No meaningful text is embedded only in raster images.
- Videos require captions/transcripts when speech-bearing, pause controls when autoplaying, and no audio autoplay.
- Reduced motion behavior follows section X.
- Zoom to 200% and reflow at 400% must preserve content and actions.
- Page language is en; foreign phrases receive lang attributes only when needed.
- Forms, if introduced, have visible labels, programmatic errors, summaries where useful, and no placeholder-only instruction.

## AB. Content Rules

### Voice

Direct, professional, confident, B2B, simple, and human. Prefer concrete nouns and active verbs. Explain business relevance before implementation detail. Confidence comes from specificity, not superlatives.

### Editorial rules

- Site copy is English-first in MVP.
- Headings: sentence case except short uppercase labels.
- Use “I” for Henry's role and “the product/team/client” for shared work.
- Distinguish “designed”, “built”, “led”, “contributed”, and “maintained” accurately.
- Every metric includes internal source, period, definition, and permission.
- Avoid unsupported absolutes such as “entire”, “all”, “best”, or “complete”.
- Service descriptions begin with the buyer problem or deliverable, not a technology.
- Case-study paragraphs average 2–4 sentences; use lists only for real groups.
- CTA copy states the next action and does not manufacture urgency.

### Good vs bad

| Good | Bad |
|---|---|
| “I build software businesses can run on.” | “I craft innovative digital experiences.” |
| “A platform for managing courses, schedules, resources, and assessments.” | “A cutting-edge ecosystem for education.” |
| “I owned the frontend, backend, data model, and deployment.” | “I did everything.” |
| “Reduced [verified workflow/time/error].” | “Delivered game-changing results.” |
| “Tell me what you're building.” | “Let's turn your dreams into reality.” |
| “Built for real client workflows.” | “Passionate developer and lifelong learner.” |

Forbidden clichés include “passionate developer”, “innovative experiences”, “crafting digital experiences”, “coding dreams into reality”, “pixel-perfect magic”, and “disruptive solutions”.

## AC. Component Inventory

Conceptual props describe contracts, not implementation signatures.

### Foundations

- **Container** — constrains width/insets. Variants: default, narrow, full-bleed inner. Props: as, size.
- **Section** — semantic chapter and vertical rhythm. Variants: default, compact, dark, no-top/no-bottom only by exception. Depends on Container.
- **Grid** — 12/8/4-column layout. Props: as, columns, gap, alignment.
- **Stack** — vertical rhythm utility. Props: gap, align.
- **Cluster** — wrapping horizontal group. Props: gap, justify.
- **Divider** — decorative/semantic separation. Variants: subtle, default, inverse.

### Navigation

- **Navbar** — sticky navigation shell. Props: currentRoute, links, contactHref.
- **BrandMark** — accessible home link using approved HG/H.G wordmark. Props: label, href.
- **NavLink** — route/anchor link with active state. Props: href, label, active.
- **MobileMenu** — modal navigation behavior. Props: open, onClose, links. Depends on NavLink/Button.
- **SkipLink** — jumps to main content.

### Actions

- **ButtonLink** — semantic anchor styled as button. Variants: primary, secondary, tertiary. Props: href, icon, external, fullWidth.
- **Button** — actual button for UI actions only. Same visual variants; never used for navigation.
- **IconButton** — labeled icon action. Props: label, icon, pressed/expanded where relevant.
- **TextLink** — inline/editorial link. Props: href, external.

### Content primitives

- **Badge** — availability/category/status. Variants: accent, neutral, inverse.
- **Eyebrow** — short section/project label.
- **SectionHeading** — heading plus optional lead. Props: level, title, lead, align.
- **RichText** — constrained prose styles.
- **MetadataList** — term/value facts for cases.
- **TechList** — grouped technology names; no logo cloud.

### Proof and work

- **ProductProofBand** — early approved client/product names/logos.
- **HeroProductProof** — dominant product media plus up to two support modules.
- **FeaturedProject** — large Home project chapter. Variants: mediaLeft, mediaRight.
- **ProjectSummary** — project name/category/description/role.
- **Metric** — value, label, optional context. Variants: inline, large, result.
- **MetricGroup** — lays out verified Metric items.
- **ScreenshotFrame** — media, optional browser chrome/caption. Variants: raw, browser, darkUi, lightUi.
- **ResponsiveScreenshot** — art-directed sources/crops and accessible description.

### Services and process

- **ServicePanel** — index/title/description/optional visual. Variants: interactive only when linked, static.
- **ProcessStep** — index/name/output/description.
- **ProcessSequence** — ordered layout for ProcessStep.
- **CapabilityGroup** — technology/capability category and curated list.

### Personal and social proof

- **AboutProfile** — portrait, concise biography, location/availability, links.
- **SocialLinks** — LinkedIn/GitHub/email list.
- **Testimonial** — quote and verified attribution.
- **TestimonialGroup** — 1/2/3-item adaptive layout.

### Case study

- **CaseStudyHero** — title, summary, metadata, optional live CTA.
- **CaseStudySection** — semantic chapter with controlled prose/media layout.
- **FeatureChapter** — title, consequence, screenshot(s), alternating media position.
- **EngineeringDecision** — problem, constraint, decision, trade-off, result.
- **ArchitectureDiagram** — semantic system diagram with text alternative.
- **ResultsSection** — metrics/outcomes plus context.
- **NextCaseStudy** — large cross-link to next project.

### Global close

- **FinalCTA** — dark conversion chapter with primary and alternate contact.
- **Footer** — identity, location/availability, social/contact links.

### Behavior

- **Reveal** — progressive-enhancement wrapper respecting reduced motion; content visible by default.
- **FocusTrap** — reusable modal-menu focus behavior if needed.
- **AnalyticsLink** — optional event wrapper that never blocks navigation or changes semantics.

Dependencies flow from foundations → content/actions → composed sections → pages. Composed components consume plain content records; they do not own factual project data.

## AD. Design Tokens

### Consolidated token table

| Category | Tokens |
|---|---|
| Color | bg-primary #F3F3F0; bg-secondary #EAEAE5; surface #FFFFFF; text-primary #0A0A0A; text-secondary #4F4F4B; text-muted #6B6B67; border #DADAD5; border-strong #8A8A84; accent #C6F63D; accent-hover #B5E72F; accent-soft #ECF9C9; dark #0A0A0A; dark-surface #171717; dark-text #F3F3F0; focus #0A0A0A; focus-inverse #C6F63D |
| Typography family | font-sans Geist, Inter, Segoe UI, sans-serif |
| Typography sizes | display-xl 112/88/54; display-l 80/64/46; h1 64/54/40; h2 56/48/36; h3 36/32/28; h4 24/22/20; body-l 21/20/18; body 17/17/16; body-s 15/15/14; caption 13/13/12; label 13/13/12; nav/button 15 |
| Spacing | 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160 px |
| Radius | sm 10; md 16; lg 24; xl 32; pill 999 px |
| Border | subtle rgba(10,10,10,.08); default #DADAD5; strong #8A8A84; inverse rgba(243,243,240,.20) |
| Shadow | sm 0 1px 2px rgba(10,10,10,.05); md 0 1px 2px rgba(10,10,10,.04), 0 12px 32px rgba(10,10,10,.06) |
| Motion duration | fast 160 ms; default 320 ms; slow 600 ms |
| Motion easing | standard cubic-bezier(.2,0,0,1); enter cubic-bezier(.16,1,.3,1); exit cubic-bezier(.4,0,1,1) |
| Breakpoints | mobile 0; large-mobile 480; tablet 768; small-desktop 1024; desktop 1280; wide 1536 px |
| Container | max 1440 px; insets 48/40/32/20/16 by range |
| Z-index | base 0; media-overlay 10; sticky-nav 40; modal-backdrop 50; mobile-menu 60; toast 70 |

Token names must remain semantic and portable to CSS variables, a Tailwind theme layer, and typed constants. Components must not introduce one-off color, spacing, radius, shadow, duration, or z-index values without adding and justifying a token.

## AE. Quality Checklist

### Layout and hierarchy

- [ ] The page has one clear primary message and action.
- [ ] The first viewport explains offer, proof, and next action without scrolling on common desktop widths.
- [ ] MediSapience and CEM Digital receive greater visual weight than personal/technology content.
- [ ] Content aligns to the documented grid and max width.
- [ ] No section uses a card when typography, spacing, or a divider would communicate structure better.
- [ ] Long and short real content ranges have been tested.

### Responsive

- [ ] Tested at 320, 390, 480, 768, 1024, 1280, 1440, 1536, and 1920 px.
- [ ] No horizontal overflow or clipped focus ring.
- [ ] Mobile order matches semantic/DOM order and preserves the persuasion sequence.
- [ ] Screenshots use readable art-directed crops.
- [ ] Touch targets are ≥44×44 px.
- [ ] Sticky navigation does not cover anchors or content.

### Typography and copy

- [ ] Type styles use documented tokens and line lengths.
- [ ] Display line breaks are tested, not accidental.
- [ ] Heading hierarchy is semantic.
- [ ] Copy is English-first, concrete, B2B, and free of forbidden clichés.
- [ ] Every claim states accurate role and scope.
- [ ] No [CONTENT NEEDED] marker reaches production.

### Evidence and imagery

- [ ] Each screenshot is authentic, permission-cleared, privacy-reviewed, and recorded.
- [ ] No sensitive/personal data is visible.
- [ ] Metrics have definition, source, period, rounding rule, and approval.
- [ ] Logos and testimonials have publication permission.
- [ ] Alt text/captions explain purpose without duplication.
- [ ] Responsive image dimensions prevent layout shift.

### Accessibility and keyboard

- [ ] Automated accessibility checks pass with no serious/critical issues.
- [ ] Manual keyboard route covers skip link, navbar, menu, links, controls, and footer.
- [ ] Focus is always visible and restored after mobile menu close.
- [ ] Contrast is measured for all text/control states.
- [ ] 200% zoom and 400% reflow retain all content/actions.
- [ ] Screen-reader landmarks, names, headings, and link purposes are coherent.
- [ ] Reduced-motion mode removes nonessential transforms, smooth scroll, count-up, and cursor follower.

### Motion and interaction

- [ ] Content is visible and usable before motion code loads.
- [ ] Motion uses only documented duration/easing/transform limits.
- [ ] Hover has an equivalent focus state; essential behavior is not hover-only.
- [ ] No autoplay audio, scroll hijacking, aggressive parallax, or delayed interaction.
- [ ] Mobile menu supports Escape, focus trap, background lock, and focus return.

### Performance

- [ ] Production build passes.
- [ ] LCP, CLS, and INP meet budgets in REQUIREMENTS.md under the agreed test profile.
- [ ] Font loading, image formats/sizes, and priority hints are intentional.
- [ ] Motion/analytics dependencies are justified and do not dominate client JavaScript.
- [ ] Third-party scripts fail without breaking navigation or contact.

### SEO and metadata

- [ ] Unique title/description/canonical for every indexable route.
- [ ] OpenGraph/Twitter images use verified content and render correctly.
- [ ] Sitemap and robots include/exclude intended routes.
- [ ] Social/profile structured data is accurate and contains no fabricated facts.
- [ ] Case-study headings and internal links are descriptive.

### Final content and conversion

- [ ] Primary email/contact destination is correct and tested.
- [ ] External product/social links are current and safe.
- [ ] Availability language is current.
- [ ] Testimonials and results remain accurate as of their displayed context.
- [ ] The final CTA states what happens next without manufactured urgency.
- [ ] Analytics, if enabled, records only approved minimal events and respects privacy requirements.

