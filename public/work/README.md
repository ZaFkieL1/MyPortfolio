# Project captures

Screenshots for the described projects on Home (`Credora`, `Kiseki no Oto`). Each file is
declared in `content/portfolio.ts` under that project's `screenshots`, with the alt text and
the caption already written.

A capture renders only once its file exists here: `components/work/side-project-page.tsx`
checks the path on disk while the route is prerendered. Until then the image is skipped and
the "View screenshots" action stays hidden — so there is never a broken frame or a dead link.

Drop the files in with exactly these names, then rebuild:

| File | Shows |
|---|---|
| `credora-solicitudes.png` | The application inbox |
| `credora-prestamos.png` | A loan with its instalment plan |
| `credora-cobranza.png` | The collection route for a day |
| `credora-caja.png` | A cash session and its movements |
| `credora-cartera.png` | Portfolio classification at a period close |
| `kiseki-boot.png` | The LABEL_OS boot sequence |
| `kiseki-system.png` | The identity page with the loaded record |
| `kiseki-catalogue.png` | A release scene, chassis retinted from the sleeve |
| `kiseki-kernel.png` | The KERNEL console |

Capture at 2× device pixels. The frame is 16:10 and crops with `object-fit: cover`, so keep
the subject centred. Redact customer names, emails and account menus before committing —
Credora's screens hold lending data.
