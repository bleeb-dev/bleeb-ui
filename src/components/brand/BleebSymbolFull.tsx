import { motion } from "motion/react";
import { useEffectiveReducedMotion } from "./useLogoMotion";

interface Props {
  size?: number;
  monochrome?: boolean;
  animated?: boolean;
  state?: "rest" | "generating";
  className?: string;
}

/**
 * Bleeb Symbol v3 — "The Spark".
 *
 * Two asymmetric flame/teardrop forms reach toward each other along an
 * ascending diagonal, separated by a small gap where a luminous node pulses.
 * A nod to Michelangelo's Creation of Adam: the almost-touch where human
 * intent meets generative AI and an idea is born.
 *
 *  - Human flame (cyan, bottom-left): the prompt, the intent.
 *  - AI flame (violet, top-right): the generative response.
 *  - Spark (white iridescent node at 32,32): the bleep — the creative instant.
 *
 * Implicitly reads as a B rotated ~25°. Asymmetric on purpose: no grid,
 * no tiles, no resemblance to corporate marks built on squares.
 */
export function BleebSymbolFull({
  size = 64,
  monochrome = false,
  animated = false,
  state = "rest",
  className,
}: Props) {
  const reduce = useEffectiveReducedMotion();

  const cyan = monochrome ? "currentColor" : "var(--bleeb-cyan)";
  const violet = monochrome ? "currentColor" : "var(--bleeb-violet)";

  const isGenerating = state === "generating";

  // Flame paths — taper to a point that aims at the central spark.
  // Human flame: tip at (28, 34), body sweeps down-left to (10, 56).
  const humanFlame = "M 28 34 Q 4 40 10 56 Q 24 62 28 34 Z";
  // AI flame: tip at (36, 30), body sweeps up-right to (54, 8).
  const aiFlame = "M 36 30 Q 60 24 54 8 Q 40 2 36 30 Z";

  // Subtle "reaching toward each other" idle motion.
  const humanReach = reduce
    ? {}
    : {
        x: [0, 0.8, 0],
        y: [0, -0.6, 0],
        transition: { duration: 3.2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };
  const aiReach = reduce
    ? {}
    : {
        x: [0, -0.8, 0],
        y: [0, 0.6, 0],
        transition: { duration: 3.2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };

  const sparkIdle = reduce
    ? {}
    : {
        scale: [1, 1.25, 1],
        transition: { duration: 2.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };
  const haloIdle = reduce
    ? {}
    : {
        scale: [0.85, 1.25, 0.85],
        opacity: [0.55, 0.95, 0.55],
        transition: { duration: 2.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
      };

  // Generating: faster heartbeat + emitted concentric waves.
  const sparkGenerating = reduce
    ? {}
    : {
        scale: [1, 1.7, 1],
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
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="bleeb-human-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={cyan} stopOpacity="0.6" />
          <stop offset="60%" stopColor={cyan} />
          <stop offset="100%" stopColor="#7DF9FF" />
        </linearGradient>
        <linearGradient id="bleeb-ai-grad" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={violet} stopOpacity="0.6" />
          <stop offset="55%" stopColor={violet} />
          <stop offset="100%" stopColor="#FF6BD6" />
        </linearGradient>
        <radialGradient id="bleeb-spark-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%" stopColor={cyan} stopOpacity="0.5" />
          <stop offset="80%" stopColor={violet} stopOpacity="0.25" />
          <stop offset="100%" stopColor={violet} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bleeb-spark-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor={cyan} stopOpacity="0.6" />
        </radialGradient>
      </defs>

      {/* Halo — always present, breathes; intensifies on hover/generating */}
      <motion.circle
        cx={32}
        cy={32}
        r={14}
        fill="url(#bleeb-spark-halo)"
        animate={isGenerating ? { scale: [0.9, 1.5, 0.9], opacity: [0.7, 1, 0.7], transition: { duration: 0.8, repeat: Infinity } } : haloIdle}
        variants={{
          rest: { scale: 1, opacity: monochrome ? 0 : 0.7 },
          active: { scale: [1, 1.6, 1.2], opacity: [0.7, 1, 0.85] },
        }}
        style={{ transformOrigin: "32px 32px", mixBlendMode: monochrome ? "normal" : "screen" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Human flame — bottom-left, reaches up-right toward the spark */}
      <motion.g
        animate={humanReach}
        variants={{
          rest: { x: 0, y: 0 },
          active: { x: 1.5, y: -1.2 },
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.path
          d={humanFlame}
          fill={monochrome ? "currentColor" : "url(#bleeb-human-grad)"}
          variants={{
            rest: { opacity: 1 },
            active: { opacity: 1 },
          }}
        />
      </motion.g>

      {/* AI flame — top-right, reaches down-left toward the spark */}
      <motion.g
        animate={aiReach}
        variants={{
          rest: { x: 0, y: 0 },
          active: { x: -1.5, y: 1.2 },
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.path
          d={aiFlame}
          fill={monochrome ? "currentColor" : "url(#bleeb-ai-grad)"}
          variants={{
            rest: { opacity: 1 },
            active: { opacity: 1 },
          }}
        />
      </motion.g>

      {/* Spark — the bleep, the creative instant */}
      <motion.circle
        cx={32}
        cy={32}
        r={3}
        fill={monochrome ? "currentColor" : "url(#bleeb-spark-core)"}
        animate={isGenerating ? sparkGenerating : sparkIdle}
        variants={{
          rest: { scale: 1 },
          active: { scale: [1, 1.9, 1.3] },
        }}
        style={{ transformOrigin: "32px 32px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Hover flash — bright burst at the spark moment */}
      {animated && !monochrome && (
        <motion.circle
          cx={32}
          cy={32}
          r={3}
          fill="#FFFFFF"
          variants={{ rest: { opacity: 0, scale: 1 }, active: { opacity: [0, 1, 0], scale: [1, 2.4, 3] } }}
          style={{ transformOrigin: "32px 32px", mixBlendMode: "screen" }}
          transition={{ duration: 0.7, times: [0, 0.25, 1], ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Generating: concentric ripples emitted from the spark */}
      {isGenerating && !reduce && (
        <>
          {[0, 0.4, 0.8].map((delay) => (
            <motion.circle
              key={delay}
              cx={32}
              cy={32}
              r={4}
              fill="none"
              stroke={monochrome ? "currentColor" : cyan}
              strokeWidth={1.2}
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: [1, 5], opacity: [0.8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, delay, ease: [0, 0, 0.58, 1] }}
              style={{ transformOrigin: "32px 32px" }}
            />
          ))}
        </>
      )}

      {/* Hover ripple — single propagation on interaction */}
      {animated && (
        <motion.circle
          cx={32}
          cy={32}
          r={4}
          fill="none"
          stroke={monochrome ? "currentColor" : cyan}
          strokeWidth={1.2}
          variants={{
            rest: { scale: 1, opacity: 0 },
            active: { scale: [1, 4.5], opacity: [0.9, 0] },
          }}
          style={{ transformOrigin: "32px 32px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </motion.svg>
  );
}
