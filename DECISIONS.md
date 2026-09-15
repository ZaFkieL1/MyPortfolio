# Portfolio Decision Log

Status definitions:

- Confirmed — explicitly established by the user/reference or repository evidence.
- Proposed — professional decision made to close a non-blocking gap; pending document review.
- Deferred — intentionally postponed until its stated trigger is met.
- Rejected — outside the approved direction.

## D-001 — Product-led commercial positioning

**Decision:** The site is a B2B product-engineering portfolio, not an interactive résumé.  
**Rationale:** The primary goal is higher-value international freelance work; real systems and product ownership are the strongest differentiators.  
**Alternatives considered:** résumé-first portfolio; personal-brand story first; creative-developer showcase.  
**Why rejected:** Each centers credentials/personality/effects before evidence and weakens commercial clarity.  
**Status:** Confirmed.

## D-002 — English-first MVP

**Decision:** All public MVP copy and metadata are in English.  
**Rationale:** The reference explicitly selects English and the primary audience is international. One maintained language prevents partial or stale translations.  
**Alternatives considered:** Spanish-only; bilingual routes at launch.  
**Why rejected:** Spanish-only misaligns with acquisition; bilingual launch doubles content, metadata, QA, and maintenance before demand is proven.  
**Status:** Confirmed. Spanish localization is P1 with a complete localization plan.

## D-003 — MVP sitemap

**Decision:** Ship /, /work/medisapience, and /work/cem-nicaragua.  
**Rationale:** Home carries the commercial sequence; the two case studies need shareable/indexable depth.  
**Alternatives considered:** single-page only; full /work, /services, /about, /contact route set.  
**Why rejected:** Single-page cannot support case depth. The larger route set adds choices and duplicate thin content.  
**Status:** Proposed.

## D-004 — Services and About remain on Home

**Decision:** Services and About are anchored Home sections in MVP.  
**Rationale:** Their job is to support the proof-led conversion path; current content does not justify distinct search intents or pages.  
**Alternatives considered:** standalone /services and /about pages.  
**Why rejected:** They would fragment the journey and create thin/duplicated content.  
**Status:** Proposed. Revisit when either topic has substantial unique content.

## D-005 — Work index deferred

**Decision:** Do not ship /work initially.  
**Rationale:** With exactly two principal projects, direct links are clearer and avoid an unnecessary intermediate page.  
**Alternatives considered:** mandatory project index at launch.  
**Why rejected:** It adds a click without improving selection.  
**Status:** Deferred to P1 after a third credible project or evidence of navigation/search need.

## D-006 — Home section hierarchy

**Decision:** Hero → proof → MediSapience → CEM → impact → services → process → technology → About → testimonials (conditional) → Final CTA → Footer.  
**Rationale:** This matches the visitor's confidence sequence and keeps products ahead of biography/stack.  
**Alternatives considered:** About immediately after Hero; Services before Work; Technology near Hero.  
**Why rejected:** They lead with claims/identity rather than proof.  
**Status:** Confirmed.

## D-007 — Single font family

**Decision:** Use Geist Sans for display, body, and interface.  
**Rationale:** It is legible, variable, already optimized in the scaffold, and capable of the requested editorial scale.  
**Alternatives considered:** Inter Tight, General Sans, Neue Montreal, Satoshi; Geist plus editorial serif.  
**Why rejected:** Some alternatives add licensing/hosting effort; a second family currently has no durable semantic role and risks decorative inconsistency.  
**Status:** Proposed.

## D-008 — Accent color

**Decision:** Use #C6F63D as the restricted accent with dark text; use #B5E72F for hover/active.  
**Rationale:** It preserves the approved lime direction while maintaining excellent dark-text contrast.  
**Alternatives considered:** original #C7FF32; warm orange #FFAE35; darker green.  
**Why rejected:** #C7FF32 is harsher; orange changes the selected direction; darker green loses the distinctive signal.  
**Status:** Proposed from confirmed lime direction.

## D-009 — Neutral and text adjustments

**Decision:** Keep #F3F3F0, #FFFFFF, and #0A0A0A; use #4F4F4B secondary and #6B6B67 muted.  
**Rationale:** #4F4F4B provides 7.40:1 contrast and #6B6B67 provides 4.81:1 on the warm background.  
**Alternatives considered:** use #6B6B67 for all secondary content; lighter gray body copy.  
**Why rejected:** One gray for all hierarchy is weak; lighter gray risks failing AA.  
**Status:** Proposed.

## D-010 — No global dark mode

**Decision:** Ship one light visual world with intentional dark sections only.  
**Rationale:** The brief does not request theming; a second theme doubles token/media/QA complexity and can fragment the identity.  
**Alternatives considered:** system dark mode; user theme toggle.  
**Why rejected:** Neither improves the primary conversion task enough to justify scope.  
**Status:** Proposed.

## D-011 — Sticky floating navbar

**Decision:** Use a sticky, floating capsule navbar that does not auto-hide or shrink.  
**Rationale:** It preserves the reference's recognizable element while keeping location and contact predictable.  
**Alternatives considered:** fixed overlay; static navbar; auto-hide/shrink on scroll.  
**Why rejected:** Fixed overlay complicates long content and anchors; static loses persistent conversion access; auto-hide/shrink reduces predictability.  
**Status:** Proposed.

## D-012 — Mobile navigation

**Decision:** Use an opaque modal panel with labeled Menu/Close controls, focus trap, Escape, background inertness, and focus return.  
**Rationale:** A labeled, accessible control remains clear; an opaque panel avoids readability problems from excessive blur/glass.  
**Alternatives considered:** unlabeled hamburger; accordion inside navbar; translucent fullscreen overlay.  
**Why rejected:** Hamburger-only is less explicit; navbar accordion can create cramped layout; translucent overlays compromise contrast.  
**Status:** Proposed.

## D-013 — Contact mechanism

**Decision:** Direct verified email is the P0 contact path.  
**Rationale:** It is reliable, low friction, accessible, and avoids backend/privacy/spam scope.  
**Alternatives considered:** contact form; booking calendar; chat widget.  
**Why rejected:** Each adds data handling, monitoring, third-party/performance concerns, or premature process assumptions.  
**Status:** Proposed. Form is P1 only after its operational requirements are approved.

## D-014 — Featured project treatment

**Decision:** Use two large alternating editorial project chapters, never a grid of small project cards.  
**Rationale:** The two real products are the credibility core and need space for readable interfaces and evidence.  
**Alternatives considered:** equal card grid; carousel; compact gallery.  
**Why rejected:** All reduce authority, detail, and scanability.  
**Status:** Confirmed.

## D-015 — Screenshot authenticity and browser chrome

**Decision:** Use authentic privacy-reviewed screenshots; browser chrome is minimal and optional per image.  
**Rationale:** Real UI proves the work. Chrome should clarify web context, not simulate devices.  
**Alternatives considered:** browser frame everywhere; raw screenshots everywhere; 3D laptop/phone renders.  
**Why rejected:** Mandatory chrome is repetitive; raw edges can disappear on similar backgrounds; 3D renders feel generic and reduce legibility.  
**Status:** Proposed.

## D-016 — Bento scope

**Decision:** Restrict bento to Hero proof, selected metrics/capabilities, or process when density benefits.  
**Rationale:** Local bento provides hierarchy without turning the entire site into a template of rounded tiles.  
**Alternatives considered:** bento as global layout grammar; no bento.  
**Why rejected:** Global bento creates sameness and card overload; zero bento discards a useful proof-composition tool.  
**Status:** Proposed.

## D-017 — Metrics governance

**Decision:** Publish only verified meaningful metrics with source, period, definition, rounding, and permission. Qualitative production outcomes are acceptable when stronger than weak numbers.  
**Rationale:** Trust is more valuable than visual impact; examples like 300+, 19K+, and 500+ are not treated as facts.  
**Alternatives considered:** use sample metrics until final content; vanity totals; omit all outcomes.  
**Why rejected:** Samples/vanity figures are deceptive; omitting all outcomes wastes valid evidence.  
**Status:** Confirmed.

## D-018 — Testimonials are conditional

**Decision:** Show zero to three verified testimonials with adaptive layouts; never autoplay a carousel.  
**Rationale:** One real quote is useful; fake symmetry or moving text damages trust and reading.  
**Alternatives considered:** placeholder quotes; auto-carousel; hide until exactly three exist.  
**Why rejected:** Placeholders are dishonest; carousels interrupt; requiring three delays valid proof.  
**Status:** Confirmed direction, proposed fallback.

## D-019 — Technology remains subordinate

**Decision:** Show a compact grouped text list after process, with no logo cloud, marquee, or proficiency indicators.  
**Rationale:** Buyers need fit confirmation after understanding product capability; technology is not the primary story.  
**Alternatives considered:** Hero stack chips; large logo wall; omit technology.  
**Why rejected:** Early/logo-heavy versions feel résumé-like; total omission can frustrate technical evaluators.  
**Status:** Proposed.

## D-020 — Motion implementation philosophy

**Decision:** Use progressive, tokenized motion with CSS preferred; add a library only if a named interaction cannot be achieved cleanly.  
**Rationale:** The approved motion is subtle and must not inflate client JavaScript or hide content.  
**Alternatives considered:** GSAP/Motion by default; no motion.  
**Why rejected:** Default libraries are premature; zero motion would discard useful hierarchy/feedback.  
**Status:** Proposed.

## D-021 — Custom cursor

**Decision:** Exclude the “VIEW CASE” follower from MVP; permit it as P2 only with the system cursor preserved and strict input/accessibility conditions.  
**Rationale:** It can add editorial character but is not necessary for comprehension and can obstruct content or lag.  
**Alternatives considered:** ship in MVP; replace system cursor; reject permanently.  
**Why rejected:** MVP inclusion prioritizes polish over core proof; replacement harms familiarity; permanent rejection removes a potentially safe enhancement.  
**Status:** Deferred.

## D-022 — No pointer tilt in Hero

**Decision:** Do not use continuous 3D tilt for Hero proof.  
**Rationale:** It reads as demo behavior, depends on pointer input, and does not improve product understanding.  
**Alternatives considered:** ±2° pointer tilt; static screenshots with restrained entry/hover zoom.  
**Why rejected:** Tilt has higher complexity and distraction than value.  
**Status:** Proposed.

## D-023 — Case-study architecture

**Decision:** Share a 14-section structural template, but conditionally omit unverified optional sections and allow project-specific composition.  
**Rationale:** Shared structure improves consistency while project truth must determine content depth.  
**Alternatives considered:** identical rigid pages; completely custom pages.  
**Why rejected:** Rigidity creates empty/generic sections; fully custom pages duplicate logic and drift.  
**Status:** Proposed.

## D-024 — Architecture diagrams

**Decision:** Use semantic responsive diagrams only when verified system boundaries can be published; provide text alternatives.  
**Rationale:** Diagrams can prove judgment but must not invent complexity or become unreadable art.  
**Alternatives considered:** generic architecture diagram for every project; no diagrams.  
**Why rejected:** Generic diagrams mislead; none would lose valid engineering evidence.  
**Status:** Proposed.

## D-025 — Analytics

**Decision:** Analytics is optional for MVP; if enabled, collect only approved minimal events and no free-form personal data.  
**Rationale:** Conversion learning is useful, but privacy, consent, performance, and maintenance must be known first.  
**Alternatives considered:** full behavioral analytics/session replay; page views only; no analytics ever.  
**Why rejected:** Session replay is disproportionate; page views alone do not answer conversion questions; permanent exclusion blocks useful later learning.  
**Status:** Deferred pending provider/domain/privacy decision.

## D-026 — Content storage

**Decision:** Use typed local content modules for MVP, not a CMS.  
**Rationale:** The site has three routes and low update frequency; local reviewed content keeps facts close to validation and avoids an operational dependency.  
**Alternatives considered:** headless CMS; MDX; hard-code all copy in page components.  
**Why rejected:** CMS is excessive; MDX is useful only if long-form editing grows; page-local copy couples facts to layout and encourages duplication.  
**Status:** Proposed.

## D-027 — Server-first rendering

**Decision:** Render pages/content server-first and isolate client components to behavior that requires them.  
**Rationale:** This supports performance, SEO, resilience, and the largely editorial interaction model.  
**Alternatives considered:** single client-rendered page; animation-led client shell.  
**Why rejected:** Both add hydration cost and make essential content dependent on JavaScript.  
**Status:** Proposed.

## D-028 — “Built with Next.js” footer line

**Decision:** Omit it.  
**Rationale:** It addresses developers rather than buyers and gives one tool undue prominence.  
**Alternatives considered:** include as a small footer note.  
**Why rejected:** The Technology section already provides fit context.  
**Status:** Proposed.

## D-029 — Accessibility target

**Decision:** Target WCAG 2.2 AA, including keyboard, reflow, visible focus, reduced motion, touch targets, meaningful alternatives, and semantic structure.  
**Rationale:** Accessibility is part of production quality and required by the user brief.  
**Alternatives considered:** automated checks only; WCAG 2.1 AA.  
**Why rejected:** Automation misses material interaction/content issues; 2.2 adds current focus/touch expectations.  
**Status:** Confirmed direction; version level proposed.

## D-030 — Visual source hierarchy

**Decision:** Source priority is: user-supplied direction → approved planning documents → verified content/assets → implementation. Existing starter UI has no brand authority.  
**Rationale:** The user explicitly names the reference as primary truth, and the repository is untouched starter content.  
**Alternatives considered:** preserve starter visuals; let implementation improvise from examples.  
**Why rejected:** Starter visuals are irrelevant; improvisation would recreate inconsistency the planning phase exists to prevent.  
**Status:** Confirmed.

## Decisions still requiring content/user approval before implementation

- Final Hero headline and supporting copy.
- HG versus H.G mark and final favicon treatment.
- Final email/contact destination and optional mail template.
- Whether current availability can be displayed.
- Final domain, deployment target, and indexing behavior.
- MediSapience/CEM public naming, exact role, screenshots, metrics, architecture detail, testimonial, and URL permissions.
- Analytics provider/consent decision, if analytics is included.
- Whether any P1/P2 enhancement enters the approved implementation scope.

