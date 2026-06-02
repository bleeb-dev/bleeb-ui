import { motion } from "motion/react";
import { useEffectiveReducedMotion } from "./useLogoMotion";

interface Props {
  size?: number;
  animated?: boolean;
  state?: "rest" | "generating";
  className?: string;
}

/**
 * Bleeb Symbol — Mono variant.
 *
 * Stroke-only rendering of "The Spark". Uses currentColor so it inherits
 * from text color: works on any background, in print, in any theme.
 *
 * Shares the hover signature with Full/Favicon: spark burst + flash + ripple.
 * What differs is the vocabulary — outlines instead of gradient fills.
 */
export function BleebSymbolMono({
  size = 64,
  animated = false,
  state = "rest",
  className,
}: Props) {
  const reduce = useEffectiveReducedMotion();
  const isGenerating = state === "generating";

  // Same flame paths as Full — visual continuity across variants.
  const humanFlame = "M 28 34 Q 4 40 10 56 Q 24 62 28 34 Z";
  const aiFlame = "M 36 30 Q 60 24 54 8 Q 40 2 36 30 Z";

  // Subtle stroke draw — a slow dash crawl that hints at life without color.
  const strokeIdle = reduce
    ? {}
    : {
        strokeDashoffset: [0, -120],
        transition: { duration: 8, repeat: Infinity, ease: "linear" as const },
      };

  const sparkIdle = reduce
    ? {}
    : {
        scale: [1, 1.2, 1],
        opacity: [0.85, 1, 0.85],
        transition: { duration: 2.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };

  const sparkGenerating = reduce
    ? {}
    : {
        scale: [1, 1.55, 1],
        transition: { duration: 0.8, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      initial={animated ? "rest" : false}
      whileHover={animated ? "active" : undefined}
      animate={animated ? "rest" : undefined}
      style={{ overflow: "visible", color: "currentColor" }}
      fill="none"
      stroke="currentColor"
    >
      {/* Human flame outline — slow dash crawl on idle */}
      <motion.path
        d={humanFlame}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 4"
        animate={strokeIdle}
        variants={{
          rest: { strokeWidth: 2.5, opacity: 0.85 },
          active: { strokeWidth: 3.5, opacity: 1 },
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* AI flame outline */}
      <motion.path
        d={aiFlame}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 4"
        animate={
          reduce
            ? {}
            : { strokeDashoffset: [0, 120], transition: { duration: 8, repeat: Infinity, ease: "linear" as const } }
        }
        variants={{
          rest: { strokeWidth: 2.5, opacity: 0.85 },
          active: { strokeWidth: 3.5, opacity: 1 },
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Spark — solid filled dot, the only "weight" in the mark */}
      <motion.circle
        cx={32}
        cy={32}
        r={3}
        fill="currentColor"
        stroke="none"
        animate={isGenerating ? sparkGenerating : sparkIdle}
        variants={{
          rest: { scale: 1 },
          active: { scale: [1, 1.8, 1.3] },
        }}
        style={{ transformOrigin: "32px 32px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Hover flash — same gesture as Full, in currentColor */}
      {animated && (
        <motion.circle
          cx={32}
          cy={32}
          r={3}
          fill="currentColor"
          stroke="none"
          variants={{ rest: { opacity: 0, scale: 1 }, active: { opacity: [0, 1, 0], scale: [1, 2.2, 3] } }}
          style={{ transformOrigin: "32px 32px", mixBlendMode: "screen" }}
          transition={{ duration: 0.7, times: [0, 0.3, 1], ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Hover ripple — single propagation, same curve as Full */}
      {animated && (
        <motion.circle
          cx={32}
          cy={32}
          r={4}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          variants={{
            rest: { scale: 1, opacity: 0 },
            active: { scale: [1, 4.5], opacity: [0.8, 0] },
          }}
          style={{ transformOrigin: "32px 32px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Generating: single slow ripple in loop — quieter than Full */}
      {isGenerating && !reduce && (
        <motion.circle
          cx={32}
          cy={32}
          r={4}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: [1, 4], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: [0, 0, 0.58, 1] }}
          style={{ transformOrigin: "32px 32px" }}
        />
      )}
    </motion.svg>
  );
}
