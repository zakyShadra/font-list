# Font List

A live showcase of 24 curated Google Fonts pairings, each rendered with real
headline and body copy so you can compare them before committing to one.

## Preview

Open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8099
# then open http://localhost:8099
```

Use the category filters (Editorial, Technical, Product, Humanist, Bold,
Single) to narrow down the list, and read the "why" note under each card to
understand the rationale behind the pairing.

## Project structure

```
.
├── index.html     # markup only
├── style.css      # all styling
├── script.js      # pairing data + rendering/filtering logic
└── pairings.md     # full catalog with CSS snippets and rationale per pairing
```

## Catalog

The full written catalog — with CSS variables ready to paste into a project —
lives in [`pairings.md`](./pairings.md).

## Fonts

All families are sourced from [Google Fonts](https://fonts.google.com) and
are free for commercial use. Fonts are loaded on demand via the Google Fonts
CDN as each card is rendered.
