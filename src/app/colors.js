// Paletas de color para todas las guías

const CANNABIS_COLORS = {
  bg: "#0a1a0f", bg2: "#0d1f14", bg3: "#1a2a10", bg4: "#0d2a14",
  border1: "#1b4332", border2: "#2d6a4f", borderAccent: "#40916c",
  accent1: "#52b788", accent2: "#74c69d", accent3: "#95d5b2", accent4: "#b7e4c7", accent5: "#d8f3dc",
  text: "#e8f5e9", textBright: "#d8f3dc",
  gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #1b4332 100%)",
  error: "#ff6b6b", errorBg: "#1a0a0a", errorBorder: "#4a1010",
};

const MUSHROOM_COLORS = {
  bg: "#0f0c08", bg2: "#1c1510", bg3: "#261c12", bg4: "#3d2810",
  border1: "#4a3520", border2: "#6b4f30", borderAccent: "#8a6240",
  accent1: "#8a6240", accent2: "#aa7c52", accent3: "#c49a6c", accent4: "#dbb98c", accent5: "#eed8b4",
  text: "#f5e6d0", textBright: "#fdf5ea",
  gradient: "linear-gradient(135deg, #3d2810 0%, #6b4520 50%, #3d2810 100%)",
  error: "#d4755b", errorBg: "#1a0c08", errorBorder: "#5a3a20",
};

// Cactus mescalina — verde-azulado desértico
const CACTUS_COLORS = {
  bg: "#0a1418", bg2: "#0d1c22", bg3: "#13262f", bg4: "#1a3340",
  border1: "#1f4050", border2: "#2d5a70", borderAccent: "#3d7590",
  accent1: "#5b95ad", accent2: "#7eb0c3", accent3: "#a3c8d6", accent4: "#c5dde5", accent5: "#e0eef3",
  text: "#e8f1f5", textBright: "#f5fafc",
  gradient: "linear-gradient(135deg, #1f4050 0%, #2d5a70 50%, #1f4050 100%)",
  error: "#e88a6a", errorBg: "#1a0c08", errorBorder: "#5a3020",
};

// Fermentaciones — dorado/ámbar miel-cerveza
const FERMENT_COLORS = {
  bg: "#1a0f05", bg2: "#241608", bg3: "#2e1d0c", bg4: "#3a2611",
  border1: "#4a2e15", border2: "#6b4520", borderAccent: "#8a5e30",
  accent1: "#c08040", accent2: "#d49a55", accent3: "#dfb578", accent4: "#ecd1a1", accent5: "#f5e6c4",
  text: "#f5e6c4", textBright: "#fff5dc",
  gradient: "linear-gradient(135deg, #4a2e15 0%, #8a5e30 50%, #4a2e15 100%)",
  error: "#e8755a", errorBg: "#1a0a05", errorBorder: "#5a2a15",
};

// Plantas tóxicas / venenos botánicos — carmesí oscuro
const TOXICAS_COLORS = {
  bg: "#0a0005", bg2: "#16000d", bg3: "#200014", bg4: "#2c001c",
  border1: "#500028", border2: "#7a003c", borderAccent: "#a80050",
  accent1: "#c82050", accent2: "#d84060", accent3: "#e06878", accent4: "#eb9a9a", accent5: "#f5c8c8",
  text: "#f5d8dd", textBright: "#fce8ec",
  gradient: "linear-gradient(135deg, #500028 0%, #a80050 50%, #500028 100%)",
  error: "#ff8080", errorBg: "#1a0808", errorBorder: "#5a1a1a",
};

// Plantas psicoactivas suaves — púrpura-malva botánico
const PLANTAS_COLORS = {
  bg: "#100818", bg2: "#1a0f24", bg3: "#231533", bg4: "#2e1b42",
  border1: "#3d2654", border2: "#553a78", borderAccent: "#74549b",
  accent1: "#9070b8", accent2: "#a888c8", accent3: "#bda3d4", accent4: "#d3bee0", accent5: "#e8d8ee",
  text: "#ebdef5", textBright: "#f5ebfc",
  gradient: "linear-gradient(135deg, #3d2654 0%, #553a78 50%, #3d2654 100%)",
  error: "#e88aa8", errorBg: "#1a0a14", errorBorder: "#5a2a3a",
};

// Amanita muscaria — rojo intenso con blanco
const AMANITA_COLORS = {
  bg: "#180a08", bg2: "#241010", bg3: "#33181a", bg4: "#421f25",
  border1: "#552830", border2: "#783545", borderAccent: "#9b4555",
  accent1: "#c25b6e", accent2: "#d27585", accent3: "#dc8e9c", accent4: "#e7adb7", accent5: "#f1ccd2",
  text: "#f5e0e3", textBright: "#fceaef",
  gradient: "linear-gradient(135deg, #552830 0%, #9b4555 50%, #552830 100%)",
  error: "#ff6b6b", errorBg: "#1a0808", errorBorder: "#5a1a1a",
};

// Ayahuasca — verde-jungla profundo
const AYAHUASCA_COLORS = {
  bg: "#070f0a", bg2: "#0d1810", bg3: "#152318", bg4: "#1d3022",
  border1: "#244030", border2: "#365e44", borderAccent: "#4a7e5c",
  accent1: "#6aa57e", accent2: "#88be99", accent3: "#a6d3b3", accent4: "#c2e2cb", accent5: "#deeee3",
  text: "#e3f1e7", textBright: "#f0faf3",
  gradient: "linear-gradient(135deg, #244030 0%, #4a7e5c 50%, #244030 100%)",
  error: "#e88a6a", errorBg: "#0f0a08", errorBorder: "#5a3020",
};

// Trufas mágicas (esclerocios Psilocybe) — marrón-oliva subterráneo
const TRUFAS_COLORS = {
  bg: "#0c0e0a", bg2: "#161812", bg3: "#22241c", bg4: "#2e3024",
  border1: "#3a3d2e", border2: "#535742", borderAccent: "#6e7256",
  accent1: "#8a8e6e", accent2: "#a4a785", accent3: "#bfc0a0", accent4: "#d9dabd", accent5: "#ecedda",
  text: "#e6e6cc", textBright: "#f4f4dc",
  gradient: "linear-gradient(135deg, #3a3d2e 0%, #6e7256 50%, #3a3d2e 100%)",
  error: "#d4755b", errorBg: "#1a0c08", errorBorder: "#5a3020",
};

// DMT — amarillo-dorado cristal psicodélico
const DMT_COLORS = {
  bg: "#0a0a14", bg2: "#10101e", bg3: "#181828", bg4: "#222236",
  border1: "#2e2e48", border2: "#444466", borderAccent: "#605e8a",
  accent1: "#8579b0", accent2: "#a094c5", accent3: "#bcb1d8", accent4: "#d4cce6", accent5: "#e8e3f1",
  text: "#e6e0f5", textBright: "#f3eefb",
  gradient: "linear-gradient(135deg, #2e2e48 0%, #605e8a 50%, #2e2e48 100%)",
  error: "#e88aa8", errorBg: "#0a0814", errorBorder: "#3a2a4a",
};
