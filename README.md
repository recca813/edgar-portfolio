# Edgar Pineda — Portfolio

Hand-built multi-page static site. No build step — serve the folder with
any static file server (e.g. `python -m http.server`). Root pages use
root-absolute nav links (`/work.html` etc.), so opening `.html` files
directly via `file://` will break navigation.

## Structure
- `index.html` — homepage
- `work.html` — project index
- `work/<slug>.html` — individual case studies
- `about.html` — narrative + CV
- `contact.html`
- `styles.css` — shared design system (palette/type/layout tokens) — every
  page links this file; don't define competing styles per-page.
