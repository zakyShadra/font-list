// Live-rendering layer on top of spotted.js: for every pair in the ebook where
// BOTH fonts are a verified free download AND we have an actual file for them
// (self-hosted locally, or already on Google Fonts), we can render a real
// specimen instead of just a name + outbound link.
//
// This is a PREVIEW feature (see /spotted-preview) — nothing here touches the
// main pairings grid. Local font files live in public/fonts/spotted/, pulled
// from the zips the ebook links to (src/font/).
import { SPOTTED } from "./spotted";

export const LOCAL_FONT_FILES = {
  Akashi: { file: "akashi.ttf", format: "truetype" },
  Aquatico: { file: "aquatico.otf", format: "opentype" },
  Arinza: { file: "arinza.otf", format: "opentype" },
  Atelier: { file: "atelier.otf", format: "opentype" },
  Audrey: { file: "audrey.otf", format: "opentype" },
  "Blossom Sakura": { file: "blossom-sakura.otf", format: "opentype" },
  "Bolte Sans": { file: "bolte-sans.otf", format: "opentype" },
  Boltz: { file: "boltzz-sans.ttf", format: "truetype" },
  Bronta: { file: "bronta.otf", format: "opentype" },
  Cervanttis: { file: "cervanttis.ttf", format: "truetype" },
  "Creato Display": { file: "creato-display.otf", format: "opentype" },
  "Due Credit": { file: "due-credit.otf", format: "opentype" },
  Gegola: { file: "gegola.otf", format: "opentype" },
  Ghoip: { file: "ghoip.otf", format: "opentype" },
  Harukaze: { file: "harukaze.otf", format: "opentype" },
  "Jane Austen": { file: "jane-austen.ttf", format: "truetype" },
  "Madelyn 3": { file: "madelyn-3.woff2", format: "woff2" },
  Makulath: { file: "makulath.otf", format: "opentype" },
  Mansure: { file: "mansure.woff2", format: "woff2" },
  "Moon Stone": { file: "moon-stone.otf", format: "opentype" },
  Nikea: { file: "nikea.otf", format: "opentype" },
  Nos: { file: "nos.otf", format: "opentype" },
  Purelines: { file: "purelines.ttf", format: "truetype" },
  Reywak: { file: "reywak.ttf", format: "truetype" },
  Riosark: { file: "riosark.otf", format: "opentype" },
  Shinobi: { file: "shinobi.woff2", format: "woff2" },
  Souther: { file: "souther.otf", format: "opentype" },
  Syawal: { file: "syawal.otf", format: "opentype" },
  Tharwat: { file: "tharwat.ttf", format: "truetype" },
  Wavacorp: { file: "wavacorp.otf", format: "opentype" },
};

export const GOOGLE_FONTS = new Set(["Montserrat", "Inter", "Urbanist", "Nunito Sans", "Poppins"]);

const isRenderable = (name) => Boolean(LOCAL_FONT_FILES[name]) || GOOGLE_FONTS.has(name);

export const LIVE_PAIRS = SPOTTED.flatMap((group) =>
  group.pairs
    .filter(
      (pair) =>
        typeof pair === "object" &&
        pair.fonts.length >= 2 &&
        pair.fonts.every((f) => f.status === "free" && isRenderable(f.name))
    )
    .map((pair) => ({ theme: group.theme, d: pair.fonts[0], b: pair.fonts[1] }))
);

export const PREMIUM_CATEGORIES = [...new Set(LIVE_PAIRS.map((p) => p.theme))];
