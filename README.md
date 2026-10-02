# Font List

A live showcase of 54 curated Google Fonts pairings, each rendered with a
compact specimen (font name, a glyph swatch, and a pangram) so you can
compare them before committing to one. Built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:4321
npm run build     # build static site to ./dist
npm run preview   # preview the production build
```

Use the category filters — Editorial, Technical, Product, Humanist, Bold,
Single, Neo-Grotesk, Maximalist Serif, Retro / Pixel, Tech-Mono, Accessible,
Kinetic, Classic — to narrow down the list, and read the "why" note under
each card to understand the rationale behind the pairing.

## Project structure

```
.
├── src/
│   ├── pages/index.astro     # page shell, head, filter script
│   ├── components/Card.astro # single pairing card markup
│   ├── data/pairings.js      # pairing data (fonts, category, rationale)
│   └── styles/global.css     # all styling
├── public/                   # static assets (favicon, etc.)
└── pairings.md                # full written catalog with CSS snippets
```

Google Fonts `<link>` tags are generated at build time from the unique
font families used in `pairings.js`, so every face is ready before the page
renders — no client-side font loading.

## Catalog

The live catalog (all 54 pairings) is `src/data/pairings.js`. [`pairings.md`](./pairings.md)
has a written write-up with ready-to-paste CSS variables for the original 24 —
useful as a reference format, not the full current list.

## Fonts

All families are sourced from [Google Fonts](https://fonts.google.com) and
are free for commercial use.
