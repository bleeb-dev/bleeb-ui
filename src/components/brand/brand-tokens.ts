/**
 * Bleeb design tokens — programmatic export.
 * Mirrors the CSS variables in src/styles.css. Use for motion configs,
 * charts, canvas drawings, and any place that can't read CSS vars.
 *
 * Single source of truth for app code; the brand book renders from these
 * same values where possible.
 */

export const colors = {
  bg: "#080A0F",
  surface1: "#10141D",
  surface2: "#171D2A",
  surface3: "#202838",
  text: "#F4F7FB",
  muted: "#98A4B7",
  line: "#2B3447",
  cyan: "#23D3EE",
  green: "#39E58C",
  violet: "#8B5CF6",
  amber: "#F7B955",
  rose: "#FF5C8A",
  blue: "#3B82F6",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const accents = ["cyan", "green", "violet", "amber", "rose", "blue"] as const;
export type AccentName = (typeof accents)[number];

export const gradients = {
  signal: `linear-gradient(135deg, ${colors.cyan}, ${colors.violet})`,
  flow: `linear-gradient(135deg, ${colors.green}, ${colors.cyan})`,
  build: `linear-gradient(135deg, ${colors.amber}, ${colors.rose})`,
} as const;

export const durations = {
  instant: 80,
  fast: 140,
  base: 220,
  slow: 360,
  cinematic: 700,
} as const;

export const easings = {
  standard: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
  enter: [0.16, 1, 0.3, 1] as [number, number, number, number],
  exit: [0.7, 0, 0.84, 0] as [number, number, number, number],
};

export const radii = { sm: 4, md: 6, lg: 8, xl: 12, "2xl": 16 } as const;

export const type = {
  displayXl: { size: 72, lh: 78, family: "display" },
  displayLg: { size: 56, lh: 62, family: "display" },
  h1: { size: 40, lh: 48, family: "display" },
  h2: { size: 30, lh: 38, family: "display" },
  h3: { size: 22, lh: 30, family: "display" },
  bodyLg: { size: 18, lh: 28, family: "sans" },
  body: { size: 15, lh: 24, family: "sans" },
  bodySm: { size: 13, lh: 20, family: "sans" },
  monoSm: { size: 12, lh: 18, family: "mono" },
  monoXs: { size: 11, lh: 16, family: "mono" },
} as const;

export const fontFamilies = {
  display: '"Space Grotesk", system-ui, sans-serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

export const iconSizes = { xs: 14, sm: 16, md: 20, lg: 24, xl: 32 } as const;
export const iconStrokeWidth = { default: 1.75, hover: 2, bold: 2.25 } as const;

/** Print/CMYK/Pantone equivalents — for guidelines & offline output. */
export const printEquivalents = {
  cyan:    { hex: "#23D3EE", cmyk: "C70 M0 Y15 K0",  pantone: "311 C" },
  violet:  { hex: "#8B5CF6", cmyk: "C60 M70 Y0 K0",  pantone: "2665 C" },
  green:   { hex: "#39E58C", cmyk: "C60 M0 Y65 K0",  pantone: "354 C" },
  amber:   { hex: "#F7B955", cmyk: "C0 M30 Y75 K0",  pantone: "1365 C" },
  rose:    { hex: "#FF5C8A", cmyk: "C0 M75 Y30 K0",  pantone: "191 C" },
  bg:      { hex: "#080A0F", cmyk: "K100",            pantone: "Black 6 C" },
  text:    { hex: "#F4F7FB", cmyk: "C2 M0 Y0 K2",    pantone: "Cool Gray 1 C" },
} as const;

export type BrandTokens = {
  colors: typeof colors;
  gradients: typeof gradients;
  durations: typeof durations;
  easings: typeof easings;
  type: typeof type;
};
