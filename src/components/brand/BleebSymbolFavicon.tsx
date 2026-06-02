import { motion } from "motion/react";
import { useEffectiveReducedMotion } from "./useLogoMotion";

interface Props {
  size?: number;
  animated?: boolean;
  state?: "rest" | "generating";
  className?: string;
}

/**
 * Bleeb Symbol — Favicon variant.
 *
 * Simplified geometry tuned for 16–32px: rounded triangle flames + spark.
 * No gradients (turn muddy at micro sizes), no ripple on hover (invisible).
 * The hover signature collapses to a spark burst + flash — the essence only.
 *
 * Generating state: spark heartbeat + a single orbiting dot (OS-style
 * "thinking" indicator).
 */
export function BleebSymbolFavicon({
  size = 32,
  animated = false,
  state = "rest",
  className,
}: Props) {
  const reduce = useEffectiveReducedMotion();
  const isGenerating = state === "generating";

  // Simplified triangle flames — 3-point paths, rounded joins for legibility.
  const humanTri = "M 28 34 L 10 56 L 24 60 Z";
  const aiTri = "M 36 30 L 54 8 L 40 4 Z";

  const sparkIdle = reduce
    ? {}
    : {
        scale: [1, 1.3, 1],
        transition: { duration: 1.6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };

  const sparkGenerating = reduce
    ? {}
    : {
        scale: [1, 1.5, 1],
        transition: { duration: 0.6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
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
      style={{ overflow: "visible" }}
    >
      {/* Solid flames — no gradient, max legibility */}
      <path d={humanTri} fill="var(--bleeb-cyan)" strokeLinejoin="round" />
      <path d={aiTri} fill="var(--bleeb-violet)" strokeLinejoin="round" />

      {/* Spark — the only animated element */}
      <motion.circle
        cx={32}
        cy={32}
        r={3.5}
        fill="#FFFFFF"
        animate={isGenerating ? sparkGenerating : sparkIdle}
        variants={{
          rest: { scale: 1 },
          active: { scale: [1, 1.55, 1.2] },
        }}
        style={{ transformOrigin: "32px 32px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Hover flash — micro burst, no ripple (would be invisible at 16px) */}
      {animated && (
        <motion.circle
          cx={32}
          cy={32}
          r={3.5}
          fill="#FFFFFF"
          variants={{ rest: { opacity: 0, scale: 1 }, active: { opacity: [0, 1, 0], scale: [1, 2, 2.5] } }}
          style={{ transformOrigin: "32px 32px", mixBlendMode: "screen" }}
          transition={{ duration: 0.6, times: [0, 0.3, 1], ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Generating: orbiting "thinking" dot */}
      {isGenerating && !reduce && (
        <motion.g
          style={{ transformOrigin: "32px 32px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        >
          <circle cx={32} cy={18} r={1.6} fill="var(--bleeb-cyan)" />
        </motion.g>
      )}
    </motion.svg>
  );
}
