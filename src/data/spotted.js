// Pairings spotted in "Album Font: Nyebrang Tapi Jodoh" (Kang Desain / @fajarnyeni)
// that use premium / third-party fonts not on Google Fonts, so they can't be
// live-rendered here (mixed licenses — several are personal-use-only, so we
// don't self-host or @font-face them; we only link out to where each one
// actually lives).
//
// Each font in a pair has a `status`:
//   "free"            verified free download, `url` points at the original host
//   "paid"            verified to redirect to a paid marketplace (e.g. Envato
//                     Elements) despite being listed as a free link in the ebook
//   "paid-commercial" a known commercial foundry font (Adobe, Monotype, etc.)
//   "unknown"         not yet checked — treat the ebook's own link with caution
//
// Fonts with no `status` at all haven't been researched yet (original Chapter 1
// list, besides Purelines + Audrey) — shown as plain text, same as before.
export const SPOTTED = [
  {
    theme: "Chapter 1: 20 Font Pairings",
    pairs: [
      { fonts: [
        { name: "Purelines", status: "free", url: "https://www.1001fonts.com/purelines-font.html" },
        { name: "Audrey", status: "free", url: "https://www.dafontfree.io/audrey-font-family/" },
      ] },
      "Equila + Steelfish",
      "Urbanist + Uniwars",
      "Variex + Circe Slab A",
      "The Seasons + Josefin Sans",
      "TT Norms Pro + Gebuk",
      "Circe Slab A + Jolly Club",
      "Boltz + Hexon",
      "Gegola + Adobe Clean",
      "Poppins + Wolgen",
      "Longinus + Holland",
      "Lunery + Swissnow",
      "Adobe Jenson Pro + Groovezilla",
      "Mina + Lamango",
      "Anisette + Palace Script",
      "Archivo + Magilio",
      "Cooper BT + Gliker",
    ],
  },
  {
    theme: "Cinematic Edition",
    pairs: [
      { fonts: [
        { name: "Moon Stone", status: "free", url: "https://www.1001fonts.com/moon-stone-font.html" },
        { name: "Montserrat", status: "free", url: "https://fonts.google.com/specimen/Montserrat" },
      ] },
      { fonts: [
        { name: "Due Credit", status: "free", url: "https://exfont.com/due-credit-bold.font" },
        { name: "Inter", status: "free", url: "https://fonts.google.com/specimen/Inter" },
      ] },
      { fonts: [
        { name: "Souther", status: "free", url: "https://www.1001fonts.com/souther-font.html" },
        { name: "Nikea", status: "free", url: "https://www.1001fonts.com/nikea-font.html" },
      ] },
      { fonts: [
        { name: "Tabuti", status: "paid", note: "redirects to Envato Elements" },
        { name: "Alexandria", status: "free", url: "https://fonts.google.com/specimen/Alexandria" },
      ] },
      { fonts: [
        { name: "Nepszabadsag", status: "paid", note: "redirects to Envato Elements" },
        { name: "Tabuti", status: "paid", note: "redirects to Envato Elements" },
      ] },
      { fonts: [
        { name: "Cervanttis", status: "free", url: "https://www.dafont.com/cervanttis.font" },
        { name: "Aquatico", status: "free", url: "https://font.download/font/aquatico" },
      ] },
    ],
  },
  {
    theme: "Japanese Style Edition",
    pairs: [
      { fonts: [
        { name: "Akashi", status: "free", url: "https://fonts2u.com/akashi.font" },
        { name: "Inter", status: "free", url: "https://fonts.google.com/specimen/Inter" },
      ] },
      { fonts: [
        { name: "Harukaze", status: "free", url: "https://www.dafont.com/harukaze.font" },
        { name: "Urbanist", status: "free", url: "https://fonts.google.com/specimen/Urbanist" },
      ] },
      { fonts: [
        { name: "Korosu", status: "free", url: "https://www.azfonts.net/fonts/korosu/regular-349480", note: "some mirrors gate it behind a 'watch an ad' unlock" },
        { name: "Mansure", status: "free", url: "https://freedafonts.com/mansure-font/" },
      ] },
      { fonts: [
        { name: "Riosark", status: "free", url: "https://befonts.com/riosark-font.html" },
        { name: "Wavacorp", status: "free", url: "https://8font.com/wavacorp/" },
      ] },
      { fonts: [
        { name: "Shinobi", status: "free", url: "https://freedafonts.com/shinobi-font/" },
        { name: "Montserrat", status: "free", url: "https://fonts.google.com/specimen/Montserrat" },
      ] },
      { fonts: [
        { name: "Blossom Sakura", status: "free", url: "https://www.dafont.com/blossom-sakura.font" },
        { name: "Nunito Sans", status: "free", url: "https://fonts.google.com/specimen/Nunito+Sans" },
      ] },
    ],
  },
  {
    theme: "Arabic Style Edition",
    pairs: [
      { fonts: [
        { name: "Syawal", status: "free", url: "https://www.1001fonts.com/syawal-font.html", note: "ebook's own link is dead; this is the real source" },
        { name: "Jane Austen", status: "free", url: "https://www.dafont.com/jane-austen.font" },
      ] },
      { fonts: [
        { name: "Tharwat", status: "free", url: "https://www.dafont.com/tharwat.font" },
        { name: "Inter", status: "free", url: "https://fonts.google.com/specimen/Inter" },
      ] },
      { fonts: [
        { name: "Reywak", status: "free", url: "https://www.dafont.com/reywak.font" },
        { name: "Poppins", status: "free", url: "https://fonts.google.com/specimen/Poppins" },
      ] },
      { fonts: [
        { name: "Makulath", status: "free", url: "https://www.dafont.com/makulath.font" },
        { name: "Creato Display", status: "free", url: "https://www.dafont.com/creato-display.font" },
      ] },
      { fonts: [
        { name: "Layalina", status: "paid", note: "redirects to Envato Elements" },
      ] },
    ],
  },
  {
    theme: "World Cup 2026 Edition",
    pairs: [
      { fonts: [
        { name: "Nos", status: "free", url: "https://www.fontshut.com/nos-font/" },
        { name: "Bason", status: "paid", note: "redirects to Envato Elements" },
      ] },
      { fonts: [
        { name: "Bronta", status: "free", url: "https://www.allfreefonts.co/bronta-font/" },
        { name: "Akashi", status: "free", url: "https://fonts2u.com/akashi.font" },
      ] },
      { fonts: [
        { name: "Arinza", status: "free", url: "https://www.1001fonts.com/arinza-font.html", note: "ebook's link for this one actually points at Souther; corrected" },
        { name: "Gegola", status: "free", url: "https://www.1001fonts.com/gegola-demo-font.html", note: "demo weight — commercial license sold separately" },
      ] },
      { fonts: [
        { name: "Ghoip", status: "free", url: "https://freedafonts.com/ghoip-font/" },
        { name: "Madelyn 3", status: "free", url: "https://www.dafont.com/madelyn-3.font" },
      ] },
      { fonts: [
        { name: "Bolte Sans", status: "free", url: "https://befonts.com/bolte-sans-font.html" },
        { name: "Boltz", status: "free", url: "https://www.dafont.com/boltzz-sans.font", note: "ebook's link is dead; closest free match is Boltzz Sans" },
      ] },
      { fonts: [
        { name: "Atelier", status: "free", url: "https://befonts.com/atelier-font.html", note: "ebook's link is dead; corrected URL" },
        { name: "Urbanist", status: "free", url: "https://fonts.google.com/specimen/Urbanist" },
      ] },
    ],
  },
];
