---
name: Henry Gonzalez Portfolio
description: An editorial product dossier for a full-stack Product Engineer.
colors:
  signal-lime: "#c6f63d"
  signal-lime-hover: "#b5e72f"
  signal-lime-soft: "#ecf9c9"
  warm-canvas: "#f3f3f0"
  quiet-canvas: "#eaeae5"
  white-surface: "#ffffff"
  primary-ink: "#0a0a0a"
  secondary-ink: "#4f4f4b"
  muted-ink: "#6b6b67"
  quiet-border: "#dadad5"
  strong-border: "#8a8a84"
  dark-surface: "#171717"
  inverse-ink: "#f3f3f0"
  focus-ink: "#0a0a0a"
  case-sky: "#e8f1ff"
  case-peach: "#ffebd6"
  case-quiet-ink: "#5c5c57"
  case-meta-ink: "#62625c"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(4.25rem, 7.4vw, 6.8rem)"
    fontWeight: 630
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.5rem)"
    fontWeight: 610
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 3rem)"
    fontWeight: 590
    lineHeight: 1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  control: "0.625rem"
  panel: "1rem"
  media: "1.5rem"
  feature: "2rem"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section-sm: "4rem"
  section-md: "6rem"
  section-lg: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.primary-ink}"
    textColor: "{colors.inverse-ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.25rem"
    height: "3.25rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.primary-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.25rem"
    height: "3.25rem"
  product-frame:
    backgroundColor: "{colors.white-surface}"
    textColor: "{colors.primary-ink}"
    rounded: "{rounded.media}"
  case-card:
    backgroundColor: "{colors.white-surface}"
    rounded: "{rounded.media}"
    padding: "1.5rem"
    shadow: "0 0 0 1px rgb(0 0 0 / .06) + four 3% layers (see bento.module.css)"
  case-section-head:
    typography: "560, clamp(2rem, 3.6vw, 2.75rem), 1.06, -0.04em"
---

# Design System: Henry Gonzalez Portfolio

## Overview

**Creative North Star: "The Product Dossier"**

The system combines the editorial confidence of a considered publication with the clarity of a focused software studio. Large type establishes the proposition; thin rules, operational diagrams, and authored product views provide evidence. The atmosphere is warm, exact, spacious, and grounded in real product work.

The visitor path is proposition → product proof → case studies → capability → person → contact. Product evidence always precedes biography. The opening uses one soft reveal; below it, blocks rise into place once as they scroll into view (see Motion).

The whole site uses the **bento** composition: every block sits on a white card on the warm canvas (see "Case study (bento)" for the kit). Home adds one exception — a dark hero stage — so the proposition lands before anything else; the contact card at the end returns to it.

**Key Characteristics:**

- Warm editorial canvas with near-black ink.
- One scarce lime signal color.
- Oversized, compact headlines paired with calm body copy.
- Flat surfaces organized by borders, rhythm, and contrast.
- Product interfaces shown as evidence, never decorative devices.

## Colors

The palette is nearly monochrome: warm neutrals carry the page, near-black establishes authority, and lime identifies action or system state.

### Primary

- **Signal Lime:** The sole attention color for primary hover states, progress, active data, and selected operational details.

### Neutral

- **Warm Canvas:** Default page field; it avoids sterile white without reading as beige decoration.
- **Quiet Canvas:** Separates long-form chapters and low-emphasis panels.
- **Primary Ink:** Headlines, high-priority controls, and dark chapters.
- **Secondary and Muted Ink:** Supporting prose and compact metadata; both remain AA-readable at their implemented sizes.
- **Quiet and Strong Borders:** The main tools for grouping and hierarchy.

### Named Rules

**The One Signal Rule.** Lime occupies a small portion of each viewport and always appears with dark text.

**The Proof, Not Decoration Rule.** Product-specific orange appears only inside the CEM interface illustration; it is not a second site accent.

## Typography

**Display Font:** Geist (with Arial and sans-serif fallbacks)
**Body Font:** Geist (with Arial and sans-serif fallbacks)

**Character:** One variable grotesk carries the entire interface. Tight, heavy displays feel decisive; conventional body proportions keep commercial and technical explanations easy to scan.

### Hierarchy

- **Display** (630, fluid 68–109 px, 0.92): First-view propositions and case-study names.
- **Headline** (610, fluid 48–88 px, 0.96): Major section openings and final calls to action.
- **Title** (590, fluid 29–48 px, 1): Services, project chapters, and strong subheads.
- **Body** (400, 16 px, 1.55): Supporting copy, capped near 60–68 characters where it becomes narrative.
- **Label** (700, 12–13 px): Compact facts, indices, and interface metadata; sentence case by default.

### Named Rules

**The One Family Rule.** Do not introduce display serif or monospace styling to simulate editorial or technical credibility.

**The Scale Carries Hierarchy Rule.** Weight changes remain narrow; size, placement, and whitespace do most of the work.

## Layout

The desktop system uses a 12-column editorial grid inside a 1440 px maximum container. The outer gutter is fluid from 20 to 48 px, while major sections use 64–160 px of vertical space. Split layouts collapse selectively at 1088 px; at 768 px the navigation becomes a full-screen menu and content flows in one column. Long labels and product names always sit inside shrinkable `minmax(0, 1fr)` tracks.

Case studies use a narrower 1200 px frame (`75rem` + gutters), a 16 px gap between cards, and 64–80 px between sections.

The first viewport pairs a dominant proposition with a product-proof column. On mobile, copy remains first, actions become full width, and the proof follows immediately. Featured projects alternate media placement only on wide layouts; their mobile reading order is always copy then media.

## Elevation & Depth

The system is flat by default. Warm field changes, one-pixel borders, and generous spacing provide depth. The only ambient shadow is the subtle two-layer shadow on the floating navigation and product windows; hover states do not grow dramatic shadows.

### Shadow Vocabulary

- **Subtle Float** (`0 1px 2px rgba(10,10,10,.04), 0 14px 34px rgba(10,10,10,.05)`): Floating navigation and screenshot/product frames only.

### Named Rules

**The Border Before Shadow Rule.** Add structure with tone or a one-pixel rule before considering elevation.

## Shapes

Product media uses gently rounded 24 px corners. Navigation and standard panels use 16 px corners, compact notices and controls use 10 px, and feature-scale containers may use 32 px. Full pills are reserved for buttons, status badges, and tags; they are not a generic card treatment.

## Components

### Buttons

- **Shape:** Full pill with a minimum 44 px touch target; primary page actions are 52 px high.
- **Primary:** Near-black surface with inverse text; lime on hover.
- **Hover / Focus:** Color changes complete in 160 ms. Focus combines a white inner outline with a dark outer ring so it survives every shipped surface.
- **Secondary:** Transparent with a strong neutral border, becoming near-black on hover.
- **Inverse:** Lime on dark chapters, becoming the inverse paper tone on hover.

### Chips

- **Style:** Compact pill, quiet border, no shadow, sentence-case technical labels.
- **State:** Informational only; interactive states are not implied when a tag is static.

### Cards / Containers

- **Corner Style:** Media corners for product views; panel corners for testimonials and architecture flows.
- **Background:** White on warm canvas, quiet canvas for chapter separation, or dark surface for process/architecture.
- **Shadow Strategy:** Flat except for product frames.
- **Border:** One-pixel neutral rules carry separation.
- **Internal Padding:** 20–32 px for ordinary panels; larger sections rely on container rhythm rather than card padding.

### Navigation

The sticky navigation is a compact floating capsule-like panel, not a hidden-on-scroll control. Desktop shows five links and one CTA; mobile replaces them with a 44 px menu trigger and a full-screen, focus-trapped dialog. Active case-study routes mark Work, Escape closes the menu, and focus returns to the trigger.

**Language switcher.** A two-segment pill (`EN` / `ES`) sits in the right-hand cluster, between the links and the CTA, at the same pill radius and control height as the CTA but drawn as a hairline over the secondary field — so the dark CTA remains the only heavy element on that side. The active language is the filled segment. Both segments are real links to the same page in the other language, so the control works before hydration and mirrors the page's `hreflang` pair; the current one keeps `aria-current="true"` and a default cursor rather than being removed. It is the one control that never collapses into the mobile menu: it is how a visitor leaves a language they cannot read, so it stays beside the menu trigger at every width.

### Featured Project

Each case study gets a full-width editorial chapter with index, category, project name, concise narrative, optional verified metrics, CTA, and one large product view. Media alternates left/right on desktop, but small cards never substitute for the primary proof.

## Motion

Motion is built on **GSAP** (`gsap` + `@gsap/react`, installed with pnpm): ScrollTrigger for scroll, SplitText for type. It must work in every browser, including Firefox. All GSAP code runs in `useGSAP` inside `gsap.matchMedia()`, so reduced motion reverts everything and leaves a static, complete page.

- **Home hero load** (`components/home/home-hero.tsx`): the lime glow blooms, the status pill fades up, the statement's lines rise from behind a mask (`expo.out`, 1.3 s, 0.1 s stagger), then the actions, while the three product cards deal in from below with their rotations.
- **Home hero scroll**: scrubbed — the full-bleed stage narrows into a rounded panel as it leaves (`clip-path` inset + radius), so the warm page below reads as the same surface continuing. On wide screens the cards also fan apart and the statement lifts.
- **Navigation theme**: over a dark hero stage (`data-hero-stage`) the navigation is dark glass with a lime CTA; it eases back to the light capsule (420 ms) once the stage scrolls away. Pages with a stage start dark via `:has()`, so nothing flashes before hydration.
- **Site-wide scroll reveals** (`components/motion/scroll-reveal.tsx`, mounted once in `app/layout.tsx`), opted into with data attributes:
  - `data-reveal` — block rises 48 px and fades in (1.1 s, `expo.out`).
  - `data-reveal="settle"` — large media rise and settle from 94% scale (1.4 s).
  - `data-reveal-group` — children enter one after another (0.1 s stagger).
  - `data-split` — heading lines slide up from behind a mask. Section heads in the kit use it.
  - `data-countup` — numbers count up from zero ("20,641+", "41%"), keeping separators and suffixes.
  - `data-parallax="0.1"` — media drift against the scroll inside a cropped window (scrubbed).
- Reveals play once, fade with **opacity only** (never `visibility`, so screen readers and in-page search still reach content), and never hide what is already on screen at load.
- **Case-study hero**: a CSS load sequence (700 ms each, 60–80 ms stagger).
- **Marquee** (home): a CSS loop of the kinds of work; stops under reduced motion.
- **Product loops**: an animated product mock (e.g. `SessionSetupAnimation`) is pure CSS keyframes on one timeline, dark-themed so it reads as the product rather than the site, and labelled as an illustrative recreation.

## Home

`app/page.tsx` composes the kit plus `components/home/`:

1. **Hero stage** — full-bleed and the full viewport (`#0d0e0d`), running under the navigation (`--chrome-height`), lime spotlight, availability pill, the statement at `clamp(2.75rem, 6.2vw, 6.25rem)` / 600 / −0.055em, lead, lime primary + outlined ghost action, and a fan of real product screens (two screenshots behind, the animated setup in front). Below 64 rem the fan collapses to the front card.
2. **Proof** — open on the canvas: a short statement beside three large client-published figures that count up, each under a dark hairline; source named.
3. **Marquee** — service names with lime dots.
4. **Selected work** — one shelf of four cards numbered 01–04, never two sections. Every card shares the same grammar: meta row (index left, category right), name, summary, muted chips, then an action row under a hairline. **Scale carries the rank.** 01–02 are the case studies: full width, `ProjectCard`, story left and media right in a dark window with parallax, chips for status/platform/year, and two actions — the case study and the live product’s hostname. 03–04 are described-only (`OtherProjects`): the same bento card at half width in a two-up row, name on the documented **title** step, chips carrying status plus the stack, the live site beside the category in the meta row (added to it, never replacing it), and an action row in the featured cards’ own link treatment — **View screenshots ↗** and **Source code ↗**. Either action renders only when it has somewhere real to go; a project with neither shows the reason instead. They carry no media because neither has an approved capture — a card half the width, not a different species, and the parallax media belongs only to the two with product evidence. The section head stands alone with no lead.

   **Described-project pages** (`/work/credora`, `/work/kiseki-no-oto`, from `components/work/side-project-page.tsx`) are not case studies and never borrow the case-study hero: an open header (index · category · status, the headline step, the same description, primary/ghost actions), the captures as 16:10 framed cards that each say what they prove, a short “How it is built” statement, and a `CaseCta` whose next card reads **Next project**.
5. **What I build** — open two-column list divided by hairlines. **Process** — four numbered steps on a shared rule. **Tools** — label/stack rows divided by hairlines.
6. **About** — no card and no portrait: the section head alone (no lead — the name carries it), a first-person note in a wide column, and the standing facts (location, how he works, focus, profiles) as hairline rows in a narrow right margin, 7fr/4fr; 2×2 on tablet, stacked on phone. **Contact** — the dark stage again as a rounded panel, split-line headline, lime button.

Below the hero, **spacing and hairlines do the grouping, not boxes**: home sections sit 96–160 px apart (`.spacious`) with larger section heads (`clamp(2.4rem, 4.8vw, 4rem)`). Reserve cards for things that are objects (projects, the contact panel) — a person is not one, which is why About is open canvas.

## Case study (bento)

Every case study follows the same recipe so visitors learn the structure once. Build it from the kit in `components/case-study/bento.tsx` (styles in `bento.module.css`); `components/work/medisapience-case-study.tsx` is the reference implementation.

### Canvas, cards, and tints

- One continuous warm canvas; no alternating bands or dark chapters. Every block lives on a white card: 24 px radius, 1 px hairline ring (`rgb(0 0 0 / .06)`), and a soft four-layer shadow capped at 3% per layer.
- **Tints carry meaning, never decoration:** sky `#e8f1ff` = end users (students, customers); peach `#ffebd6` = the operating team; lime-soft = verified outcomes. Dark `#0a0a0a` cards mark "now" or a single highlight (launch date, the latest milestone, the next case study).
- Chips are pills: white on tinted cards, canvas-coloured (`muted`) on white cards.
- Headings: section h2 560 weight, `clamp(2rem, 3.6vw, 2.75rem)`, −0.04em; card h3 580, 20 px. Body 16–17 px, 1.5 line height, capped near 36–50 ch. Small grey card labels are sentence case, never all caps.

### Section recipe (in order)

1. **Hero** — `CaseHero`: live-status pill, "<Client> case study" kicker, a headline that names the product and who it serves, one lead sentence, primary button + ghost link, and a bento of facts (client, timeline, role), one dark highlight (launch date), and one sky note (stack). Fills the first viewport; no card behind it.
2. **Product visual** — `VisualCard`: an animated product loop or the best real screenshot.
3. **What it is and the idea** — `StatementCard` (heading left; `StatementLead` + one paragraph right), then a three-up `CardGrid` of goals. Write goals from what the product demonstrably does; never invent the "before" story.
4. **Who it serves** — `PairGrid`: users (sky) vs the operating team (peach), each a title and chips.
5. **The core loop** — `StepList` (only for a real sequence), then a `Screenshot` and any feature card, then a peach `BandCard` for the operating side.
6. **Signature architecture idea** (e.g. multi-bank) — a custom card plus a `CardGrid` of mechanisms.
7. **Technical decisions** — `CardGrid` with `details: Problem / Approach`, plus a `DiagramCard` (Mermaid).
8. **Tools for the team** — peach `CardGrid`.
9. **Architecture** — `DiagramCard` + `StatGrid` of measured numbers only.
10. **How the product grew** — `Timeline` (last card = now, dark) + `ListCard` of what shipped after launch.
11. **How it's tested** — `AsideGrid` with a `StatGrid` and a `ListCard` of covered areas.
12. **How I worked** — three-up `CardGrid`.
13. **Outcome** — `OutcomeGrid`: one verified result in lime, with its source named underneath. It can also carry a list of published figures, or an evidence list that labels what is still pending; both are optional, and neither case study currently shows a pending list.
14. **Closing** — `StatementCard` with the technology chips.
15. **CTA** — `CaseCta`: contact card beside the dark "next case study" card.

Skip a section rather than fill it with weak content. Every heading is a plain statement; each card does one job in one or two sentences.

### Kit reference

| Component | Use |
|---|---|
| `CaseStudyShell` | Navbar, canvas, optional full-bleed `hero`, frame, footer |
| `CaseHero`, `GhostLink` | First viewport |
| `VisualCard`, `Screenshot`, `PhoneShots`, `DiagramCard` | Media on cards (settle reveal) |
| `CaseSection` | Section with the standard head (h2 id + optional lead) |
| `StatementCard`, `StatementLead` | Heading-in-card openings and closings |
| `CardGrid` | Three-up cards; `details` for problem/approach; `tint` |
| `PairGrid` | Two audiences with chips |
| `StepList` | Numbered sequence, number beside the title |
| `Timeline` | Dated milestones; the last one inverts |
| `BandCard` | One full-width title/explanation row |
| `ChipList`, `ListCard` | Chips; a labelled chip card |
| `StatGrid`, `AsideGrid` | Measured values; narrow + wide pairing |
| `OutcomeGrid` | Verified result + optional figures or pending-evidence list |
| `CaseCta` | Contact + next case study |
| `Card`, `bento` | One-off blocks and the kit's class names |

### Media rules

- Screenshots are WebP, imported statically from `components/work/media/` (hashed filename, immutable cache) and rendered at quality 90 (`next.config.ts` → `images.qualities`). Capture desktop at 2× device pixels and phone at 3×, for sharp text.
- A wide capture goes in a `Screenshot`. A phone capture is tall and narrow, so a single one wastes the width: put two or three in a `PhoneShots` row instead, where they read as a sequence. Every shot in a row shares one frame, stated once as `width`/`height` — the static import alone does not size them under jsdom.
- Crop out personal data (names, emails, account menus) before committing. Caption what the screen proves, not what it is.
- Illustrations and animated recreations keep the words "Illustrative product UI" in their caption until real, approved captures replace them. A real capture taken on seeded data says so instead — name the app and the data, never imply live customer activity.

## Do's and Don'ts

### Do:

- **Do** lead with concrete product work and operational detail.
- **Do** use large type, whitespace, and thin rules to establish hierarchy.
- **Do** label illustrative UI and withhold metrics or testimonials until evidence is approved.
- **Do** keep motion one-shot and purposeful: the hero reveal, scroll reveals, and labelled product loops only (see Motion).
- **Do** preserve visible focus, reduced motion, and 44 px touch targets.

### Don't:

- **Don't** add dark stages beyond the home hero and the closing contact card; the canvas stays warm.
- **Don't** add gradients, glassmorphism, 3D device renders, terminal motifs, or decorative tech logos.
- **Don't** introduce parallax, scroll hijacking, autoplay carousels, pointer tilt, cursor replacement, or reveals that replay on every scroll.
- **Don't** use unverified metrics, endorsements, screenshots, clients, or production links.
- **Don't** let the personal profile appear before the product evidence.
