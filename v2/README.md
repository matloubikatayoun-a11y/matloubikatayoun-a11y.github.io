# Site v2 (preview)

A redesigned, multi-page version of katayounmatloubi.com. It lives in this `v2/` folder
so the current site at the root stays exactly as it is.

- Preview address once merged into `main`: https://katayounmatloubi.com/v2/
- Pages: Home, Research, Publications, Teaching, Talks, Fellowships, News, CV, Contact
  (each is `v2/<page>/index.html`; shared styles in `assets/css/site.css`).
- The CV and syllabus links point to the existing files at `/cv/` and `/teaching/`,
  so there is still only one copy of each PDF to update.
- Every page carries `<meta name="robots" content="noindex, follow">` so search engines
  do not list the preview next to the live site. Remove that line from each page when
  this version replaces the live one.

## Photographs

Library, museum and campus photographs come from Wikimedia Commons under free licences
(CC BY, CC BY-SA, CC0 or public domain). Each one is credited, with its licence, directly
under the image on the page where it appears. Keep those credit lines if you reuse a photo.
Portrait and personal photographs are the same files used on the current site.

## Fonts

Cormorant Garamond, Instrument Sans and Vazirmatn, self-hosted under the SIL Open Font
License (see `assets/fonts/LICENSE-*.txt`).
