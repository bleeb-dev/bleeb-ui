import { LogoMotionContext, type ReducedMotionPref } from "./useLogoMotion";
import { BleebSymbolFull } from "./BleebSymbolFull";
import { BleebSymbolMono } from "./BleebSymbolMono";
import { BleebSymbolFavicon } from "./BleebSymbolFavicon";

export type LogoVariant = "full" | "mono" | "favicon";
export type LogoColorMode = "color" | "mono" | "inverse";

export interface BleebLogoProps {
  /** Visual treatment. */
  variant?: LogoVariant;
  /** Pixel size of the SVG (width = height). */
  size?: number;
  /** Color mode: brand palette, currentColor mono, or inverse (light surfaces). */
  colorMode?: LogoColorMode;
  /** Whether to attach hover/idle animations. */
  animated?: boolean;
  /** Generating loop (AI thinking). */
  state?: "rest" | "generating";
  /** Override prefers-reduced-motion behavior for this subtree. */
  reducedMotion?: ReducedMotionPref;
  className?: string;
  /** Accessible title rendered inside the SVG and used as aria-label fallback. */
  title?: string;
  ariaLabel?: string;
}

/**
 * Unified, parametrized Bleeb logo. Dispatches to the specialized
 * Symbol component based on variant/colorMode, and exposes a single
 * API the rest of the app can rely on.
 *
 * Examples:
 *   <BleebLogo size={120} />                                 // full color
 *   <BleebLogo variant="mono" size={48} />                   // currentColor
 *   <BleebLogo variant="favicon" size={32} state="generating" />
 *   <BleebLogo reducedMotion="reduce" />                     // QA / screenshot
 */
export function BleebLogo({
  variant = "full",
  size = 64,
  colorMode = "color",
  animated = true,
  state = "rest",
  reducedMotion = "auto",
  className,
  title,
  ariaLabel,
}: BleebLogoProps) {
  const a11yLabel = ariaLabel ?? title ?? "Bleeb";

  // Mono-style rendering wins whenever the caller asks for it explicitly,
  // or when the chosen color mode is mono/inverse on the Full variant.
  const renderMono =
    variant === "mono" || (variant === "full" && colorMode !== "color");

  let inner: React.ReactNode;
  if (variant === "favicon") {
    inner = (
      <BleebSymbolFavicon
        size={size}
        animated={animated}
        state={state}
        className={className}
      />
    );
  } else if (renderMono) {
    inner = (
      <BleebSymbolMono
        size={size}
        animated={animated}
        state={state}
        className={className}
      />
    );
  } else {
    inner = (
      <BleebSymbolFull
        size={size}
        animated={animated}
        state={state}
        className={className}
      />
    );
  }

  return (
    <LogoMotionContext.Provider value={reducedMotion}>
      <span
        className="bleeb-logo inline-flex"
        role="img"
        aria-label={a11yLabel}
        style={{ lineHeight: 0 }}
      >
        {inner}
        {title ? <span className="sr-only">{title}</span> : null}
      </span>
    </LogoMotionContext.Provider>
  );
}
