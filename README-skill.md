---
name: font-pairing
description: Curated catalog of proven font pairings (Google Fonts, all open-source) plus the principles behind them. Use when choosing or changing typography for a website, app, deck or document — when the user asks for "good fonts", "font combos", "ganti font", "font pairing", or wants a typographic direction. Includes a live visual showcase to preview pairings before applying them.
---

# Font Pairing

A catalog of font combinations that are known to work, each with a one-line
rationale and ready-to-paste CSS. The goal is to pick typography with intent,
not to reach for the default `Inter + system-ui`.

## When to use

Use this skill when the task involves **choosing or changing type**: a new
site, a redesign, "make it look better", "font-nya jelek", or an explicit
request for pairings. Also use it when a design feels generic and the culprit
is likely typography.

## The workflow (follow in order)

1. **Show before choosing.** Open the live showcase and let the user *see*
   the options — never apply a font blind. Run:
   ```bash
   python3 -m http.server 8099 --directory <skill-dir>
   # then open http://localhost:8099/showcase.html
   ```
   The showcase renders each pairing with real headings + body text in the
   site's own colours, so the comparison is honest.
2. **Recommend, don't dump.** Pick **3–5** pairings that fit the project's
   context (see "Choosing by context"). Present them as options with the
   reasoning, and make a clear first recommendation.
3. **Ask, then wait.** Ask the user which one to apply. Do not change fonts
   before they confirm.
4. **Apply with tokens.** Edit the project's type tokens (font-family vars,
   the Google Fonts `<link>`), not scattered declarations. Keep a system
   fallback in every stack.
5. **Verify.** Reload, check the chosen fonts actually loaded (not the
   fallback), and confirm body text is still readable at small sizes.

## The rules behind a good pairing

These are the principles; the catalog is just them applied.

1. **Contrast, then harmony.** Pair faces that differ clearly (serif vs
   sans, geometric vs humanist) so the difference reads as a decision. Two
   near-identical sans-serifs look like a mistake, not a system.
2. **One job per face.** Give each family a role: display, body, or
   metadata/mono. Three voices with clear roles beats five without.
3. **Match on mood, not category.** A warm humanist serif wants a warm
   humanist sans. Mixing a cold geometric with a calligraphic serif can work
   but is a deliberate clash — know you're doing it.
4. **The body font does the heavy lifting.** It must have real weights,
   good hinting, a large x-height and low-to-moderate stroke contrast. If a
   face isn't body-friendly, use it only for display.
5. **Limit the total.** Two families (plus an optional mono for data/code)
   is the sweet spot. Every extra family is more bytes and more noise.
6. **Respect the x-height gap.** Pairing a very large x-height body face
   with a tiny x-height display face makes headlines look weak. Keep them in
   a similar range unless the contrast is intentional.
7. **Never ship defaults unthinkingly.** `Inter`/`system-ui` is fine when it
   is *chosen*; it reads as generic when it is merely the fallback.
8. **Mind the performance.** Prefer 2–4 weights per family, load with
   `display=swap`, and self-host or use the Google Fonts CDN (cross-site
   caching). Four-plus families or ten weights will cost real load time.

## Choosing by context

| Context | Lean toward |
|---|---|
| Editorial / portfolio / agency | High-contrast serif display + clean grotesk or neutral sans body |
| Technical / engineering / dev tool | Grotesk or neo-grotesk display + a mono for metadata; keep it restrained |
| Product / SaaS / app UI | One versatile sans in many weights, or a geometric + a neutral sans |
| Luxury / fashion / studio | High-contrast didone or fine serif display + light sans body |
| Friendly / consumer / lifestyle | Rounded or humanist sans + a soft serif for warmth |
| Brutalist / experimental | A single extreme display face + a plain mono/sans, deliberately clashing |

## How to apply (CSS)

Set two variables in the project's token file and reference them everywhere:

```css
:root {
  --font-display: "Fraunces", Georgia, serif;
  --font-ui: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
}
```

Swap the Google Fonts `<link>` to the new families, requesting only the
weights actually used:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Archivo:wght@400;500;600&display=swap" rel="stylesheet" />
```

Then verify with DevTools (or a headless check) that the rendered
`font-family` resolves to the intended face, not the fallback.

## Catalog

The full list — with rationale and CSS per pairing — is in
[`pairings.md`](./pairings.md). The visual preview is
[`showcase.html`](./showcase.html). Browse both before recommending.

## Custom pairings

If none of the catalog fits, build one using the rules above, then add it to
`pairings.md` with the same shape (display / body / mono, rationale, CSS) so
the catalog grows. Show it in the showcase and get confirmation before
applying it to the project.
