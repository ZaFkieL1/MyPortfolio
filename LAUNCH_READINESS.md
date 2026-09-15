# Portfolio launch readiness

Assessment date: 2026-09-14  
Current disposition: **Preview implementation ready; production release blocked.**

## Implemented and verified

- Static Next.js routes: `/`, `/work/medisapience`, and `/work/cem-nicaragua`.
- Editorial Home and reusable case-study presentation for both priority projects.
- Sticky desktop navigation and focus-managed mobile menu with Work, Services, Process, About, and Contact paths.
- Approved design-token contract, Geist font loading, responsive grid, restrained CSS motion, and reduced-motion fallback.
- Conditional metric and testimonial systems that render no unverified evidence.
- Per-route titles, descriptions, OpenGraph/Twitter text, shared social image, sitemap, robots, and favicon.
- Mock-mode governance: visible preview label, `noindex, nofollow`, crawler exclusion, and failing release validation.
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
| Launch-content validator | Expected fail while mocks remain |
| Instrumented Core Web Vitals | Pending; Chrome DevTools MCP unavailable |

The final design review was completed inline because delegated reviewers are disabled in this session. Its disposition is **ship as a non-indexable preview**; authentic media and verified commercial content remain production-release gates rather than visual patch work.

## Production blockers

1. Replace `hello@example.com` with the verified contact address and approve availability wording.
2. Add final LinkedIn and GitHub URLs.
3. Confirm the public domain/deployment target and add canonical URLs.
4. Approve final Home and case-study copy, exact role/team boundaries, dates, public project status, and technology claims.
5. Replace illustrative UI with authentic, redacted, permission-cleared screenshots and responsive crops.
6. Add only metrics with definition, period, source, rounding rule, and publication approval.
7. Add only testimonials with exact attribution and publication permission; otherwise keep the section omitted.
8. Confirm live-product URLs or retain honest contact fallbacks.
9. Run a real NVDA/VoiceOver pass and the agreed mobile Core Web Vitals profile.
10. Change `content/readiness.json` to verified/indexable only after every preceding blocker is closed, then require `validate:launch` to pass.

## Release rule

Do not publish this preview as the final indexed portfolio. A release is authorized only when the launch-content validator exits successfully, canonical/contact destinations are final, evidence permissions are recorded, accessibility checks are repeated with real media, and measured performance meets or explicitly resolves the budgets.
