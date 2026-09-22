# Portfolio launch readiness

Assessment date: 2026-09-21 (contact record resolved, content layer consolidated)  
Current disposition: **Preview implementation ready; production release blocked.**

## Implemented and verified

- Static Next.js routes: `/`, `/work/medisapience`, and `/work/cem-nicaragua`.
- Editorial Home and reusable case-study presentation for both priority projects.
- Sticky desktop navigation and focus-managed mobile menu with Work, Services, Process, About, and Contact paths.
- Approved design-token contract, Geist font loading, responsive grid, restrained CSS motion, and reduced-motion fallback.
- Conditional metric and testimonial systems that render no unverified evidence.
- Per-route titles, descriptions, canonical URLs, OpenGraph/Twitter text, shared social image, sitemap, robots, and favicon.
- `Person` and `WebSite` structured data built only from verified identity records.
- All published case-study copy held in `content/case-studies/`, with the components arranging records rather than owning copy.
- Mock-mode governance: `noindex, nofollow`, crawler exclusion, and failing release validation. (The visible preview banner was removed at the owner’s request.)
- Automated unit/content, route, keyboard-menu, responsive overflow, reduced-motion, and Axe WCAG A/AA coverage.
- Full-page review captures for all three routes at 1440 px and 390 px.

## Verification evidence

| Gate | Result |
|---|---|
| Lint | Pass |
| TypeScript | Pass |
| Unit/content tests | Pass |
| Browser tests | Pass |
| Next.js production build | Pass |
| OpenSpec strict validation | Pass |
| Launch-content validator | Expected fail; the blocker left is mock readiness |
| Instrumented Core Web Vitals | Pending; Chrome DevTools MCP unavailable |

The final design review was completed inline because delegated reviewers are disabled in this session. Its disposition is **ship as a non-indexable preview**; authentic media and verified commercial content remain production-release gates rather than visual patch work.

## Production blockers

1. ~~Replace the placeholder contact address.~~ Resolved: `hjosuegm0@gmail.com`.
2. ~~Add final LinkedIn and GitHub URLs.~~ Resolved; both render in the footer and the About section, and feed the `Person` structured data.
3. Confirm the public domain/deployment target. Canonical URLs, OpenGraph `url`, the sitemap and robots now all derive from `NEXT_PUBLIC_SITE_URL` (`content/site.ts`); the variable still falls back to `http://localhost:3000`, so the destination is the only thing missing.
4. Approve the remaining case-study copy. MediSapience narrative, role, dates and technology claims are approved and published. CEM Digital narrative and the exact role/team boundary still need client sign-off.
5. Replace illustrative UI with authentic, redacted, permission-cleared screenshots. Both case studies now ship real captures, taken from the apps running locally on demonstration data — MediSapience three, CEM Digital eight. Still illustrative: MediSapience's hero loop (`session-setup-animation.tsx`, labelled as a recreation) and the CEM card on Home, whose wide media window does not fit a phone capture. Both remain permission-cleared items for the client to confirm before launch.
6. ~~Metric governance.~~ In force: every published metric carries `approved: true` and a source (`tests/content.test.ts`). MediSapience publishes four; CEM publishes none until the client approves usage figures.
7. ~~Testimonial governance.~~ In force: the MediSapience quote is attributed and linked; CEM approved none, so the section is omitted, not filled. The lorem-ipsum placeholder has been removed.
8. ~~Confirm live-product URLs.~~ Resolved: `medisapience.com` and `cemnicaragua.com`.
9. Run a real NVDA/VoiceOver pass and the agreed mobile Core Web Vitals profile.
10. Change `content/readiness.json` to verified/indexable only after every preceding blocker is closed, then require `validate:launch` to pass.

## Release rule

Do not publish this preview as the final indexed portfolio. A release is authorized only when the launch-content validator exits successfully, canonical/contact destinations are final, evidence permissions are recorded, accessibility checks are repeated with real media, and measured performance meets or explicitly resolves the budgets.
