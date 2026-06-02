/**
 * Preset programmatico dei token Bleeb.
 *
 * Tailwind v4 usa @theme inline in CSS — il modo canonico è:
 *   @import "@bleeb/ui/styles.css";
 *
 * Questo file esiste per chi vuole accedere ai token in JS (config Tailwind
 * v3 legacy, generatori di tema, motion config, charts, ecc.).
 */
import { colors, accents, gradients, radii, durations, easings, type } from "@/components/brand/brand-tokens";

export const bleebTheme = {
  colors,
  accents,
  gradients,
  radii,
  durations,
  easings,
  type,
} as const;

export type BleebTheme = typeof bleebTheme;

// Compat opzionale per chi usa ancora Tailwind v3.
export const tailwindV3Preset = {
  theme: {
    extend: {
      colors: {
        bleeb: colors,
      },
      borderRadius: {
        "bleeb-sm": `${radii.sm}px`,
        "bleeb-md": `${radii.md}px`,
        "bleeb-lg": `${radii.lg}px`,
        "bleeb-xl": `${radii.xl}px`,
        "bleeb-2xl": `${radii["2xl"]}px`,
      },
      transitionDuration: {
        "bleeb-fast": `${durations.fast}ms`,
        "bleeb-base": `${durations.base}ms`,
        "bleeb-slow": `${durations.slow}ms`,
      },
    },
  },
} as const;
