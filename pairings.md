# Font pairing catalog

Every pairing below uses **Google Fonts** (open-source, free for commercial
use). Each entry gives: the display face, the body face, an optional mono, a
one-line rationale, the mood it suits, and the CSS variables to paste.

Legend — **D** = display/headings, **B** = body, **M** = mono/metadata.

---

## Editorial & portfolio

### 1. Instrument Serif + Archivo + JetBrains Mono
- **D** Instrument Serif · **B** Archivo · **M** JetBrains Mono
- **Why:** A fine, slightly condensed serif carries big headlines; a plain
  grotesk keeps body copy quiet. The mono handles specs/dates without
  shouting. Editorial without being fussy.
- **Mood:** portfolio, studio, agency, documentation with a point of view.
- **Note:** Instrument Serif is display-only (one weight) — never set body in it.

```css
--font-display: "Instrument Serif", Georgia, serif;
--font-ui: "Archivo", "Helvetica Neue", Arial, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
```

### 2. Fraunces + DM Sans + Space Mono
- **D** Fraunces · **B** DM Sans · **M** Space Mono
- **Why:** Fraunces is a "soft-serif" with optical sizing and wonky character;
  DM Sans is neutral and legible. The warmth of the display face is balanced
  by the plain body, so it never tips into twee.
- **Mood:** creative studio, food/lifestyle brand, friendly editorial.

```css
--font-display: "Fraunces", Georgia, serif;
--font-ui: "DM Sans", system-ui, sans-serif;
--font-mono: "Space Mono", ui-monospace, monospace;
```

### 3. Playfair Display + Source Sans 3
- **D** Playfair Display · **B** Source Sans 3
- **Why:** The classic high-contrast pairing — a didone display against a
  humanist sans. Maximum "magazine" energy with a very readable body.
- **Mood:** fashion, luxury, print-like editorial.
- **Caution:** widely used; make it feel intentional with scale and spacing.

```css
--font-display: "Playfair Display", Georgia, serif;
--font-ui: "Source Sans 3", "Helvetica Neue", Arial, sans-serif;
```

### 4. Cormorant Garamond + Proza Libre
- **D** Cormorant Garamond · **B** Proza Libre
- **Why:** Delicate, high-contrast serif headlines with a slightly quirky,
  warm sans body. Elegant without the Playfair cliché.
- **Mood:** boutique, beauty, slow-living, wedding/event sites.

```css
--font-display: "Cormorant Garamond", Georgia, serif;
--font-ui: "Proza Libre", system-ui, sans-serif;
```

### 5. Newsreader + Inter
- **D** Newsreader · **B** Inter
- **Why:** A literary serif with real italics against the most neutral UI
  sans. Reads as "thoughtful publication" rather than "tech startup".
- **Mood:** writing, journalism, long-form portfolio.

```css
--font-display: "Newsreader", Georgia, serif;
--font-ui: "Inter", system-ui, sans-serif;
```

---

## Technical & engineering

### 6. Space Grotesk + Inter + JetBrains Mono
- **D** Space Grotesk · **B** Inter · **M** JetBrains Mono
- **Why:** Space Grotesk has just enough oddness in its letterforms to read as
  technical without being a novelty; Inter is invisible in the best way. The
  mono ties the whole thing to "software".
- **Mood:** developer portfolio, dev tool, API docs.

```css
--font-display: "Space Grotesk", "Helvetica Neue", sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
```

### 7. Geist + Geist Mono
- **D/B** Geist · **M** Geist Mono
- **Why:** A single family (plus its mono sibling) — geometric, precise,
  modern. Zero risk of clashing because it's one design system.
- **Mood:** product/SaaS, Vercel-adjacent, minimal dashboards.

```css
--font-display: "Geist", system-ui, sans-serif;
--font-ui: "Geist", system-ui, sans-serif;
--font-mono: "Geist Mono", ui-monospace, monospace;
```

### 8. IBM Plex Sans + IBM Plex Mono + IBM Plex Serif
- **D** IBM Plex Serif · **B** IBM Plex Sans · **M** IBM Plex Mono
- **Why:** A designed family with matching serif and mono — engineered to sit
  together. Corporate-credible and unusual enough to stand out.
- **Mood:** enterprise, infrastructure, technical docs, "serious software".

```css
--font-display: "IBM Plex Serif", Georgia, serif;
--font-ui: "IBM Plex Sans", system-ui, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, monospace;
```

### 9. Archivo + Archivo Narrow + Space Mono
- **D** Archivo · **B** Archivo Narrow · **M** Space Mono
- **Why:** One grotesk family used at two widths. Tight, functional, a bit
  newspaper-industrial. The mono adds the machine voice.
- **Mood:** data-heavy, systems, "terminal" aesthetics.

```css
--font-display: "Archivo", "Helvetica Neue", sans-serif;
--font-ui: "Archivo Narrow", "Helvetica Neue", sans-serif;
--font-mono: "Space Mono", ui-monospace, monospace;
```

---

## Product & SaaS

### 10. Bricolage Grotesque + Inter
- **D** Bricolage Grotesque · **B** Inter
- **Why:** Bricolage is a grotesque with personality (variable width + weight)
  for headlines; Inter stays out of the way in the interface.
- **Mood:** modern product, startup landing pages with character.

```css
--font-display: "Bricolage Grotesque", system-ui, sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
```

### 11. Plus Jakarta Sans + Inter
- **D/B** Plus Jakarta Sans · **B** Inter
- **Why:** Jakarta is a geometric-humanist hybrid, friendly and slightly
  rounded; perfect as the single brand face with Inter as the UI workhorse.
- **Mood:** consumer app, fintech, friendly SaaS.

```css
--font-display: "Plus Jakarta Sans", system-ui, sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
```

### 12. Manrope + Inter
- **D** Manrope · **B** Inter
- **Why:** Manrope's semi-rounded geometry gives headlines a soft, modern
  feel; Inter keeps body text neutral. Low-risk, high-polish.
- **Mood:** SaaS, health, productivity tools.

```css
--font-display: "Manrope", system-ui, sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
```

### 13. Outfit + Work Sans
- **D** Outfit · **B** Work Sans
- **Why:** Outfit is a clean geometric display; Work Sans is a slightly
  warmer grotesk body. Crisp and contemporary without being cold.
- **Mood:** startup, marketing site, design-forward product.

```css
--font-display: "Outfit", system-ui, sans-serif;
--font-ui: "Work Sans", system-ui, sans-serif;
```

---

## Warm & humanist

### 14. Lora + Karla
- **D/B** Lora · **B** Karla
- **Why:** Lora is a well-balanced contemporary serif with brushy roots; Karla
  is a grotesque with a slightly quirky, humanist feel. Both have warmth.
- **Mood:** blog, nonprofit, personal site, education.

```css
--font-display: "Lora", Georgia, serif;
--font-ui: "Karla", system-ui, sans-serif;
```

### 15. Merriweather + Open Sans
- **D/B** Merriweather · **B** Open Sans
- **Why:** Two very sturdy, screen-optimised faces. Merriweather for readable
  headlines, Open Sans for body. Unfashionable but bulletproof.
- **Mood:** government, accessibility-first, content-heavy sites.

```css
--font-display: "Merriweather", Georgia, serif;
--font-ui: "Open Sans", system-ui, sans-serif;
```

### 16. Alegreya + Alegreya Sans
- **D** Alegreya · **B** Alegreya Sans
- **Why:** The same designer made both — a calligraphic serif and its sans
  companion. They share DNA, so the pairing is inherently harmonious.
- **Mood:** publishing, cultural institutions, bookish projects.

```css
--font-display: "Alegreya", Georgia, serif;
--font-ui: "Alegreya Sans", system-ui, sans-serif;
```

### 17. Spectral + Rubik
- **D/B** Spectral · **B** Rubik
- **Why:** Spectral is a screen-first serif (also lovely for body); Rubik's
  subtly rounded corners keep the interface friendly.
- **Mood:** lifestyle, wellness, editorial product.

```css
--font-display: "Spectral", Georgia, serif;
--font-ui: "Rubik", system-ui, sans-serif;
```

---

## Bold, brutalist & expressive

### 18. Archivo Black + Inter + Space Mono
- **D** Archivo Black · **B** Inter · **M** Space Mono
- **Why:** Archivo Black is a heavy grotesque slab of a headline; Inter and a
  mono keep everything else stark. High contrast in weight, not category.
- **Mood:** bold landing page, event, manifesto.

```css
--font-display: "Archivo Black", "Helvetica Neue", sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
--font-mono: "Space Mono", ui-monospace, monospace;
```

### 19. Syne + Space Grotesk
- **D** Syne · **B** Space Grotesk
- **Why:** Syne is an unusual, wide, slightly retro-futurist display; Space
  Grotesk grounds it as a technical body. Two "designy" faces that still
  differ in role.
- **Mood:** art, crypto, experimental brand, creative tech.

```css
--font-display: "Syne", system-ui, sans-serif;
--font-ui: "Space Grotesk", system-ui, sans-serif;
```

### 20. Alfa Slab One + Inter
- **D** Alfa Slab One · **B** Inter
- **Why:** A fat slab display against a neutral sans. The clash is the point —
  loud headline, quiet everything else.
- **Mood:** poster-like hero, food/retail, loud personal brand.

```css
--font-display: "Alfa Slab One", Georgia, serif;
--font-ui: "Inter", system-ui, sans-serif;
```

### 21. Space Mono + Space Grotesk
- **D/M** Space Mono · **B** Space Grotesk
- **Why:** Using the mono as the *display* face is a deliberate inversion —
  it reads as terminal/technical, and the grotesk body keeps it legible.
- **Mood:** developer, cyber, "lab" aesthetic.

```css
--font-display: "Space Mono", ui-monospace, monospace;
--font-ui: "Space Grotesk", system-ui, sans-serif;
```

---

## Single-family systems (safe, coherent)

### 22. Inter (variable) alone
- **D/B** Inter
- **Why:** When chosen deliberately and used across a wide weight range
  (300–900) with tight display tracking, it is a complete system. The trick is
  to *commit* to it, not treat it as a fallback.
- **Mood:** any, when coherence beats character.

```css
--font-display: "Inter", system-ui, sans-serif;
--font-ui: "Inter", system-ui, sans-serif;
```

### 23. DM Sans alone
- **D/B** DM Sans
- **Why:** Geometric, low-contrast, nine weights with italics. A friendlier
  single-family alternative to Inter.
- **Mood:** product, marketing, general-purpose.

```css
--font-display: "DM Sans", system-ui, sans-serif;
--font-ui: "DM Sans", system-ui, sans-serif;
```

### 24. Geist alone
- **D/B** Geist
- **Why:** A modern geometric grotesk designed for interfaces; a single
  family that reads as "current".
- **Mood:** product, dev tool, minimal portfolio.

```css
--font-display: "Geist", system-ui, sans-serif;
--font-ui: "Geist", system-ui, sans-serif;
```

---

## Quick reference table

| # | Display | Body | Mono | Best for |
|---|---|---|---|---|
| 1 | Instrument Serif | Archivo | JetBrains Mono | Portfolio / editorial |
| 2 | Fraunces | DM Sans | Space Mono | Creative studio |
| 3 | Playfair Display | Source Sans 3 | — | Fashion / luxury |
| 4 | Cormorant Garamond | Proza Libre | — | Boutique / elegant |
| 5 | Newsreader | Inter | — | Writing / long-form |
| 6 | Space Grotesk | Inter | JetBrains Mono | Developer portfolio |
| 7 | Geist | Geist | Geist Mono | SaaS / minimal |
| 8 | IBM Plex Serif | IBM Plex Sans | IBM Plex Mono | Enterprise / docs |
| 9 | Archivo | Archivo Narrow | Space Mono | Data / terminal |
| 10 | Bricolage Grotesque | Inter | — | Modern product |
| 11 | Plus Jakarta Sans | Inter | — | Consumer app |
| 12 | Manrope | Inter | — | SaaS / productivity |
| 13 | Outfit | Work Sans | — | Startup / marketing |
| 14 | Lora | Karla | — | Blog / nonprofit |
| 15 | Merriweather | Open Sans | — | Accessibility-first |
| 16 | Alegreya | Alegreya Sans | — | Publishing / cultural |
| 17 | Spectral | Rubik | — | Lifestyle / wellness |
| 18 | Archivo Black | Inter | Space Mono | Bold / event |
| 19 | Syne | Space Grotesk | — | Art / experimental |
| 20 | Alfa Slab One | Inter | — | Poster-like hero |
| 21 | Space Mono | Space Grotesk | Space Mono | Dev / cyber |
| 22 | Inter | Inter | — | General-purpose |
| 23 | DM Sans | DM Sans | — | Product / general |
| 24 | Geist | Geist | — | Product / dev tool |

## Sources

Principles distilled from Google Fonts' *Knowledge* guides, Typewolf's
*Definitive Guide to Free Fonts* and Top-40 Google Fonts list, and Fontpair's
curated pairings. Pairings are cross-checked to use families that actually
exist on Google Fonts.
