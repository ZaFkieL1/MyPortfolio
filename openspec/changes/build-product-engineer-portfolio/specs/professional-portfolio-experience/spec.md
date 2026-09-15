## Purpose

Defines the public, product-led portfolio experience that demonstrates verified production work, supports accessible evaluation across devices, and converts qualified visitors into project conversations.

## ADDED Requirements

### Requirement: Public route architecture

The portfolio SHALL provide a Home route at / and dedicated case-study routes at /work/medisapience and /work/cem-nicaragua. Services and About SHALL be addressable sections on Home for MVP and SHALL NOT require standalone routes.

#### Scenario: Visitor opens required routes

- **WHEN** a visitor requests any of the three required public routes
- **THEN** the system renders the intended Home or case-study content without redirecting through an intermediate Work index

#### Scenario: Visitor deep-links to a Home section

- **WHEN** a visitor follows a Services or About navigation link
- **THEN** the corresponding Home section becomes the destination and its heading is not obscured by sticky navigation

### Requirement: Immediate offer and proof

Home SHALL communicate that Henry builds complete digital products for businesses or organizations, SHALL expose a primary project/contact action, and SHALL show or clearly signpost authentic evidence from MediSapience or CEM Digital in the first viewport on common desktop sizes.

#### Scenario: First desktop viewport

- **WHEN** a first-time visitor opens Home at a 1440 px-wide viewport
- **THEN** the visible content identifies the offer, presents real-product proof or a clearly labeled project preview, and exposes a Work or Start a project action

#### Scenario: First mobile viewport

- **WHEN** a first-time visitor opens Home at a 390 px-wide viewport
- **THEN** the offer and at least one primary action are visible before supporting biography or technology content, and product proof follows in the initial reading sequence

### Requirement: Evidence-led Home narrative

Home SHALL present content in the following persuasion order: navigation, Hero, early product proof, MediSapience featured work, CEM featured work, verified impact when available, Services, Process, Technology, About, verified Testimonials when available, Final CTA, and Footer. Featured Work SHALL have greater visual prominence than Technology or About.

#### Scenario: Visitor scans Home

- **WHEN** a visitor follows the document reading order
- **THEN** the visitor encounters both core products before Technology, About, or testimonial content

#### Scenario: Optional proof is unavailable

- **WHEN** no verified metrics or testimonials are available
- **THEN** the corresponding optional public section is omitted or replaced by an approved factual outcome without leaving empty placeholder UI or changing the core work-first sequence

### Requirement: Featured project presentation

Home SHALL present MediSapience and CEM Digital as large-format featured project chapters with project name, category, concise verified description, authentic media, visible case-study link, and only verified metrics/role/technology details. The two projects SHALL receive comparable authority and MAY alternate media position on wide screens.

#### Scenario: Visitor opens a featured project

- **WHEN** a visitor activates the visible MediSapience or CEM case-study link
- **THEN** the matching dedicated case-study route opens and the link purpose identifies the project

#### Scenario: Alternating layout collapses

- **WHEN** the viewport is below the wide two-column project layout threshold
- **THEN** both projects use a consistent logical reading order without CSS visual placement changing keyboard or screen-reader order

### Requirement: Reusable case-study narrative

Each case study SHALL identify product, category, context, Henry's exact role, date/status/platform where verified, and SHALL provide sections for Overview, Client/Context, Challenge, Solution, Key Features, Engineering Challenges, Architecture when publishable, Results, Technology, Testimonial when verified, a live-product or honest alternate CTA, and Next Case Study navigation.

#### Scenario: Visitor evaluates a complete case study

- **WHEN** all required and optional approved content exists for a project
- **THEN** the route presents a coherent narrative from product identity and challenge through solution, engineering decisions, results, and next action

#### Scenario: Optional case-study evidence is absent

- **WHEN** a testimonial, public architecture detail, live URL, or numeric metric is not verified or publishable
- **THEN** the page omits that item or uses the documented truthful alternate without fabricating content or rendering an empty section

### Requirement: Verifiable content integrity

The portfolio MUST NOT publish invented or unverified clients, product statuses, roles, team ownership, metrics, testimonials, URLs, technologies, or outcomes. Every published metric SHALL have a maintained source record containing definition, period/as-of date, source, display rounding, and permission.

#### Scenario: Metric lacks provenance

- **WHEN** a candidate metric lacks any required provenance or approval field
- **THEN** the metric is excluded from public rendering

#### Scenario: Role includes shared work

- **WHEN** a project outcome was produced with a client or team
- **THEN** public copy distinguishes Henry's individual responsibilities from team/client contributions

#### Scenario: Preparation content is incomplete

- **WHEN** content preparation contains a [CONTENT NEEDED] marker
- **THEN** launch validation fails and the marker is not present in a production page

### Requirement: Authentic and privacy-safe project media

Project media SHALL use authentic product captures or approved product footage, SHALL be reviewed for publication rights and sensitive data, and SHALL remain understandable at its rendered size. The system MUST NOT depend on generic 3D laptop/phone renders as project evidence.

#### Scenario: Screenshot contains sensitive data

- **WHEN** a screenshot contains personal, medical, educational, credential, financial, or client-confidential information
- **THEN** the asset is redacted/replaced and approved before it can be used publicly

#### Scenario: Desktop interface becomes unreadable on mobile

- **WHEN** shrinking a desktop screenshot makes the relevant workflow illegible on a narrow viewport
- **THEN** the page uses an approved art-directed crop or alternate capture rather than the unreadable full image

#### Scenario: Browser context is useful

- **WHEN** a web-product screenshot benefits from browser context
- **THEN** the page MAY use minimal browser chrome without a fake URL or device render

### Requirement: Predictable navigation and contact

The portfolio SHALL provide persistent or readily available navigation to Work and Contact, a labeled mobile menu trigger, and a visible verified email-based contact path. Case studies SHALL provide navigation back to Home/Work and to the other core case study.

#### Scenario: Keyboard user opens mobile menu

- **WHEN** a keyboard user activates Menu
- **THEN** focus moves into the menu, remains within it while open, Escape closes it, background content cannot be operated, and focus returns to the trigger

#### Scenario: Visitor starts a project

- **WHEN** a visitor activates any primary Start a project action
- **THEN** the verified email or approved contact destination opens without requiring an account or encountering a dead intermediate route

#### Scenario: Live product is private

- **WHEN** a case study has no approved public live-product URL
- **THEN** the CTA truthfully invites contact or discussion of a similar project instead of presenting a broken or misleading live link

### Requirement: Responsive completeness

The portfolio SHALL preserve all essential content and actions without horizontal overflow from 320 through 1920 px. Layouts SHALL change structurally at content-appropriate thresholds while maintaining semantic order, readable text, and touch targets of at least 44 by 44 px.

#### Scenario: Minimum supported viewport

- **WHEN** a visitor views any route at 320 px width
- **THEN** content and focus indicators remain within the viewport, controls remain operable, text does not require horizontal scrolling, and contact links remain readable

#### Scenario: Wide viewport

- **WHEN** a visitor views a route at 1536 px or wider
- **THEN** readable content remains within the 1440 px maximum container and typography does not grow beyond approved maxima

#### Scenario: Zoom and reflow

- **WHEN** a visitor zooms text/content to 200% or uses a 400% reflow-equivalent narrow viewport
- **THEN** no essential content or action is lost, overlapped, or clipped

### Requirement: Accessible semantic experience

The portfolio SHALL target WCAG 2.2 AA, SHALL be fully keyboard operable, SHALL use semantic landmarks and sequential headings, SHALL expose visible focus, and SHALL provide meaningful accessible names and image alternatives.

#### Scenario: Keyboard traversal

- **WHEN** a visitor navigates a route using only the keyboard
- **THEN** a skip link, navigation, all interactive project/contact controls, any media controls, and footer links are reachable in a logical order with visible focus

#### Scenario: Non-text evidence

- **WHEN** an image or diagram communicates project information not already present in adjacent text
- **THEN** it has a concise meaningful alternative or an equivalent nearby text explanation

#### Scenario: Color-independent state

- **WHEN** a navigation link, control, success/error message, or selected item changes state
- **THEN** the state is communicated through text, shape, indicator, or semantics in addition to color

### Requirement: Reduced-motion and resilient content

Essential information and actions SHALL be visible before animation initializes and when animation fails. The portfolio SHALL honor prefers-reduced-motion by removing nonessential transforms, clip reveals, smooth scrolling, count-up effects, autoplay motion, and any pointer-following enhancement.

#### Scenario: Reduced motion requested

- **WHEN** the visitor's system requests reduced motion
- **THEN** all essential content remains present in the same reading/focus order and state changes occur without nonessential movement

#### Scenario: Client script fails

- **WHEN** nonessential motion or analytics code fails to load
- **THEN** server-rendered content, project navigation, and contact links remain usable

### Requirement: Restrained visual system

The public interface SHALL follow the approved warm-neutral, Geist, editorial-grid design system with a restricted lime accent, strong typographic hierarchy, borders/spacing before shadows, and large authentic project media. It MUST NOT use skill bars, proficiency percentages, terminal simulations, hacker/cyberpunk effects, particle backgrounds, excessive glassmorphism, generic decorative 3D, floating technology logos, or cards for every content block.

#### Scenario: Accent treatment

- **WHEN** lime #C6F63D is used as a background
- **THEN** foreground text uses an approved dark color and never white

#### Scenario: Content separation

- **WHEN** a section needs visual grouping
- **THEN** the design first uses hierarchy, grid, spacing, background contrast, or a documented border before adding an elevated card/shadow

### Requirement: Purposeful motion

Motion SHALL use the approved duration/easing limits, SHALL support hierarchy or feedback, SHALL NOT block interaction, and SHALL NOT introduce scroll hijacking, aggressive parallax, required marquees, continuous pointer tilt, or animations longer than 800 ms.

#### Scenario: Project media hover

- **WHEN** a fine-pointer user hovers a featured project media link
- **THEN** any image zoom remains at or below 1.015 and an equivalent visible focus state exists

#### Scenario: Content reveal repeats

- **WHEN** a visitor scrolls away from and back to previously revealed content
- **THEN** the content remains visible and does not replay a required entrance sequence

### Requirement: Search and social discoverability

Each public route SHALL provide a unique accurate title and description, final canonical URL, and approved social preview metadata. The site SHALL provide sitemap and robots behavior consistent with the final public/staging indexing decision.

#### Scenario: Search engine requests public metadata

- **WHEN** a crawler requests Home or either case study
- **THEN** the response exposes route-specific title, description, canonical, language, and social metadata without unverified claims

#### Scenario: Preview environment is not public

- **WHEN** an environment is designated preview/private
- **THEN** its indexing directives prevent accidental public indexing according to the approved deployment policy

### Requirement: Performance and stability

The portfolio SHALL render essential content server-first, reserve media dimensions to prevent layout shift, optimize font/image delivery, and limit client-side code to necessary interaction. It SHOULD meet LCP ≤2.5 seconds, INP ≤200 milliseconds, and CLS ≤0.1 at the 75th percentile on the agreed representative mobile profile.

#### Scenario: Hero media loads

- **WHEN** the Hero image loads on a slower connection
- **THEN** its layout space is reserved, text/contact actions remain stable, and no unrelated below-fold media is given equal loading priority without evidence

#### Scenario: Third-party script fails

- **WHEN** an optional analytics or external script is blocked or errors
- **THEN** content rendering, project navigation, and contact actions continue to work

### Requirement: Minimal optional analytics

The MVP MAY omit analytics. If analytics is enabled, it SHALL be privacy-respecting, non-blocking, limited to approved events, and SHALL NOT capture free-form personal data. Approved event names are contact_cta_click, case_study_open, live_product_click, and social_link_click.

#### Scenario: Approved CTA event

- **WHEN** a visitor activates a tracked contact or case-study action
- **THEN** the system records only the approved event with route, placement, and project identifier where relevant, then allows navigation regardless of tracking success

#### Scenario: Analytics is not approved

- **WHEN** provider, consent, or privacy requirements remain unresolved
- **THEN** the site launches without analytics rather than selecting a provider implicitly

### Requirement: Conditional testimonial handling

Testimonials SHALL render only from verified, permission-cleared quote records with exact attribution. The system SHALL support zero, one, two, or three testimonials without an automatic carousel or fabricated filler.

#### Scenario: One testimonial is approved

- **WHEN** exactly one verified testimonial exists
- **THEN** Home presents it as a deliberate full-width editorial quote rather than an incomplete multi-card grid

#### Scenario: No testimonials are approved

- **WHEN** the verified testimonial collection is empty
- **THEN** the testimonial section is absent and the surrounding page rhythm remains intentional

### Requirement: Development preview content

The implementation MAY use clearly designated mock copy and illustrative product UI while verified source material is pending. Any route rendered from mock content SHALL declare a non-production content state, SHALL be excluded from search indexing, SHALL omit fabricated metrics, testimonials, public URLs, and client endorsements, and MUST NOT be eligible for launch approval.

#### Scenario: Preview uses mock content

- **WHEN** a local or preview build renders one or more mock content records
- **THEN** route metadata and robots behavior prevent indexing and the internal content manifest identifies every mock record and illustrative asset

#### Scenario: Mock content reaches launch validation

- **WHEN** launch validation detects a mock content state or illustrative placeholder asset
- **THEN** the release is blocked until the record is replaced by verified approved content or the optional section is removed

#### Scenario: Mock project proof is displayed

- **WHEN** an illustrative product interface stands in for an authentic screenshot
- **THEN** it contains no invented usage metric, testimonial, client endorsement, live URL, or claim that it is the production interface

### Requirement: Quality gate before launch

The portfolio SHALL NOT be considered launch-ready until required routes, content integrity, privacy-cleared assets, responsive layouts, keyboard behavior, accessibility, metadata, links, production build, and performance checks have passed.

#### Scenario: Launch review detects unresolved content

- **WHEN** launch validation finds starter copy, placeholder text, [CONTENT NEEDED], a dead link, or an unverified sample metric
- **THEN** the release is blocked until the issue is removed or replaced with an approved truthful alternative

#### Scenario: Launch review passes

- **WHEN** every P0 requirement has a passing test, capture, content record, or documented manual check
- **THEN** the build is eligible for final user approval and deployment
