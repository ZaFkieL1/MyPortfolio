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
---

# Design System: Henry Gonzalez Portfolio

## Overview

**Creative North Star: "The Product Dossier"**

The system combines the editorial confidence of a considered publication with the clarity of a focused software studio. Large type establishes the proposition; thin rules, operational diagrams, and authored product views provide evidence. The atmosphere is warm, exact, spacious, and grounded in real product work.

The visitor path is proposition → product proof → case studies → capability → person → contact. Product evidence always precedes biography. The opening uses one soft reveal; everything after it relies on direct state changes and restrained motion.

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

The sticky navigation is a compact floating capsule-like panel, not a hidden-on-scroll control. Desktop shows four links and one CTA; mobile replaces them with a 44 px menu trigger and a full-screen, focus-trapped dialog. Active case-study routes mark Work, Escape closes the menu, and focus returns to the trigger.

### Featured Project

Each case study gets a full-width editorial chapter with index, category, project name, concise narrative, optional verified metrics, CTA, and one large product view. Media alternates left/right on desktop, but small cards never substitute for the primary proof.

## Do's and Don'ts

### Do:

- **Do** lead with concrete product work and operational detail.
- **Do** use large type, whitespace, and thin rules to establish hierarchy.
- **Do** label illustrative UI and withhold metrics or testimonials until evidence is approved.
- **Do** keep motion at or under 600 ms, with the longest duration reserved for the opening reveal.
- **Do** preserve visible focus, reduced motion, and 44 px touch targets.

### Don't:

- **Don't** turn every content group into a floating card or bento tile.
- **Don't** add gradients, glassmorphism, 3D device renders, terminal motifs, or decorative tech logos.
- **Don't** introduce parallax, scroll hijacking, autoplay carousels, pointer tilt, or cursor replacement.
- **Don't** use unverified metrics, endorsements, screenshots, clients, or production links.
- **Don't** let the personal profile appear before the product evidence.
