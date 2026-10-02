// --- Pairings -------------------------------------------------------------
// d = display family, b = body family, m = mono family (optional)
const PAIRINGS = [
  { n:1,  cat:"Editorial", name:"Instrument Serif + Archivo", d:"Instrument Serif", b:"Archivo", m:"JetBrains Mono",
    why:"A fine, slightly condensed serif for big headlines; a plain grotesk keeps body copy quiet. Mono handles specs without shouting.",
    mood:"Portfolio · studio · documentation" },
  { n:2,  cat:"Editorial", name:"Fraunces + DM Sans", d:"Fraunces", b:"DM Sans", m:"Space Mono",
    why:"Fraunces is a soft-serif with character; DM Sans is neutral. The warmth is balanced by the plain body, so it never tips into twee.",
    mood:"Creative studio · lifestyle brand" },
  { n:3,  cat:"Editorial", name:"Playfair Display + Source Sans 3", d:"Playfair Display", b:"Source Sans 3",
    why:"The classic didone + humanist sans. Maximum magazine energy with a very readable body. Widely used — make it intentional.",
    mood:"Fashion · luxury · editorial" },
  { n:4,  cat:"Editorial", name:"Cormorant Garamond + Proza Libre", d:"Cormorant Garamond", b:"Proza Libre",
    why:"Delicate high-contrast serif with a slightly quirky, warm sans body. Elegant without the Playfair cliché.",
    mood:"Boutique · beauty · slow-living" },
  { n:5,  cat:"Editorial", name:"Newsreader + Inter", d:"Newsreader", b:"Inter",
    why:"A literary serif with real italics against the most neutral UI sans. Reads as 'thoughtful publication', not 'tech startup'.",
    mood:"Writing · journalism · long-form" },

  { n:6,  cat:"Technical", name:"Space Grotesk + Inter", d:"Space Grotesk", b:"Inter", m:"JetBrains Mono",
    why:"Space Grotesk has just enough oddness to read as technical; Inter is invisible in the best way. The mono ties it to software.",
    mood:"Developer portfolio · dev tool · API docs" },
  { n:7,  cat:"Technical", name:"Geist + Geist Mono", d:"Geist", b:"Geist", m:"Geist Mono",
    why:"A single family plus its mono sibling — geometric, precise, modern. Zero risk of clashing because it is one design system.",
    mood:"Product · SaaS · minimal dashboard" },
  { n:8,  cat:"Technical", name:"IBM Plex Serif + Sans + Mono", d:"IBM Plex Serif", b:"IBM Plex Sans", m:"IBM Plex Mono",
    why:"A designed family with matching serif and mono, engineered to sit together. Corporate-credible and unusual enough to stand out.",
    mood:"Enterprise · infrastructure · docs" },
  { n:9,  cat:"Technical", name:"Archivo + Archivo Narrow", d:"Archivo", b:"Archivo Narrow", m:"Space Mono",
    why:"One grotesk family at two widths. Tight, functional, a bit newspaper-industrial. The mono adds the machine voice.",
    mood:"Data-heavy · systems · terminal" },

  { n:10, cat:"Product", name:"Bricolage Grotesque + Inter", d:"Bricolage Grotesque", b:"Inter",
    why:"Bricolage is a grotesque with real personality for headlines; Inter stays out of the way in the interface.",
    mood:"Modern product · startup landing" },
  { n:11, cat:"Product", name:"Plus Jakarta Sans + Inter", d:"Plus Jakarta Sans", b:"Inter",
    why:"Jakarta is a geometric-humanist hybrid, friendly and slightly rounded; a strong single brand face with Inter as UI workhorse.",
    mood:"Consumer app · fintech · friendly SaaS" },
  { n:12, cat:"Product", name:"Manrope + Inter", d:"Manrope", b:"Inter",
    why:"Manrope's semi-rounded geometry gives headlines a soft modern feel; Inter keeps body text neutral. Low-risk, high-polish.",
    mood:"SaaS · health · productivity" },
  { n:13, cat:"Product", name:"Outfit + Work Sans", d:"Outfit", b:"Work Sans",
    why:"Outfit is a clean geometric display; Work Sans is a slightly warmer grotesk body. Crisp and contemporary without being cold.",
    mood:"Startup · marketing · design-forward" },

  { n:14, cat:"Humanist", name:"Lora + Karla", d:"Lora", b:"Karla",
    why:"Lora is a balanced contemporary serif with brushy roots; Karla is a grotesque with a quirky humanist feel. Both have warmth.",
    mood:"Blog · nonprofit · personal · education" },
  { n:15, cat:"Humanist", name:"Merriweather + Open Sans", d:"Merriweather", b:"Open Sans",
    why:"Two very sturdy, screen-optimised faces. Unfashionable but bulletproof — readability above all.",
    mood:"Government · accessibility-first · content-heavy" },
  { n:16, cat:"Humanist", name:"Alegreya + Alegreya Sans", d:"Alegreya", b:"Alegreya Sans",
    why:"The same designer made both — a calligraphic serif and its sans companion. They share DNA, so the pairing is inherently harmonious.",
    mood:"Publishing · cultural institutions · bookish" },
  { n:17, cat:"Humanist", name:"Spectral + Rubik", d:"Spectral", b:"Rubik",
    why:"Spectral is a screen-first serif; Rubik's subtly rounded corners keep the interface friendly. Warm and modern.",
    mood:"Lifestyle · wellness · editorial product" },

  { n:18, cat:"Bold", name:"Archivo Black + Inter", d:"Archivo Black", b:"Inter", m:"Space Mono",
    why:"A heavy grotesque slab of a headline; Inter and a mono keep everything else stark. High contrast in weight, not category.",
    mood:"Bold landing · event · manifesto" },
  { n:19, cat:"Bold", name:"Syne + Space Grotesk", d:"Syne", b:"Space Grotesk",
    why:"Syne is an unusual, wide, retro-futurist display; Space Grotesk grounds it as a technical body. Two designy faces, different roles.",
    mood:"Art · crypto · creative tech" },
  { n:20, cat:"Bold", name:"Alfa Slab One + Inter", d:"Alfa Slab One", b:"Inter",
    why:"A fat slab display against a neutral sans. The clash is the point — loud headline, quiet everything else.",
    mood:"Poster-like hero · retail · loud brand" },
  { n:21, cat:"Bold", name:"Space Mono + Space Grotesk", d:"Space Mono", b:"Space Grotesk", m:"Space Mono",
    why:"Using the mono as the display face is a deliberate inversion — it reads as terminal/technical, with a legible grotesk body.",
    mood:"Developer · cyber · lab aesthetic" },

  { n:22, cat:"Single", name:"Inter (variable)", d:"Inter", b:"Inter",
    why:"When chosen deliberately and used across 300–900 with tight display tracking, it is a complete system. Commit, don't default.",
    mood:"Any — when coherence beats character" },
  { n:23, cat:"Single", name:"DM Sans", d:"DM Sans", b:"DM Sans",
    why:"Geometric, low-contrast, nine weights with italics. A friendlier single-family alternative to Inter.",
    mood:"Product · marketing · general-purpose" },
  { n:24, cat:"Single", name:"Geist", d:"Geist", b:"Geist",
    why:"A modern geometric grotesk designed for interfaces; a single family that reads as current.",
    mood:"Product · dev tool · minimal portfolio" },
];

// --- Load Google Fonts (one link per family avoids URL-length limits) ------
const FALLBACKS = { serif:"Georgia, serif", sans:"system-ui, sans-serif", mono:"ui-monospace, monospace" };
const loaded = new Set();
function loadFamily(family) {
  if (loaded.has(family)) return;
  loaded.add(family);
  const f = family.replace(/ /g, "+");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${f}:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`;
  document.head.appendChild(link);
}

// --- Render ---------------------------------------------------------------
const grid = document.getElementById("grid");
const filters = document.getElementById("filters");

function specimenStyle(p) {
  return `--d:'${p.d}', ${FALLBACKS.serif}; --b:'${p.b}', ${FALLBACKS.sans}; --m:'${p.m || p.b}', ${FALLBACKS.mono};`;
}

function card(p) {
  return `
  <article class="card" data-cat="${p.cat}" style="${specimenStyle(p)}">
    <div class="card-head">
      <span class="card-name"><b>${String(p.n).padStart(2,"0")}</b> &nbsp;${p.name}</span>
      <span class="card-num">${p.cat}</span>
    </div>
    <div class="specimen">
      <div class="d" style="font-family:var(--d)">Build things that last.</div>
      <div class="d2" style="font-family:var(--d)"><i>The quick brown fox</i> jumps over the lazy dog.</div>
      <p class="b" style="font-family:var(--b)">
        Software engineer building local-first AI agents, automation bots and small
        tools that run close to the metal. The body face does the heavy lifting —
        read a full paragraph before deciding. 0123456789 &amp; @#$%
      </p>
      <div class="m" style="font-family:var(--m)">JETBRAINS · 2026 · SPEC 1400×788 · v0.1.0</div>
    </div>
    <div class="why">${p.why}</div>
    <div class="card-foot">
      <span class="mood">${p.mood}</span>
      <span class="roles">
        <span>D ${p.d}</span><span>B ${p.b}</span>${p.m ? `<span>M ${p.m}</span>` : ""}
      </span>
    </div>
  </article>`;
}

function render(filter) {
  const list = filter && filter !== "All"
    ? PAIRINGS.filter(p => p.cat === filter)
    : PAIRINGS;
  grid.innerHTML = list.map(card).join("");
  list.forEach(p => { loadFamily(p.d); loadFamily(p.b); if (p.m) loadFamily(p.m); });
}

// --- Filters --------------------------------------------------------------
const cats = ["All", ...new Set(PAIRINGS.map(p => p.cat))];
filters.innerHTML = cats.map((c, i) =>
  `<button data-cat="${c}" class="${i === 0 ? "active" : ""}">${c}</button>`
).join("");
filters.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  filters.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
  render(btn.dataset.cat);
});

render("All");
