import { createContext, useContext } from "react";
import { useReducedMotion } from "motion/react";

export type ReducedMotionPref = "auto" | "reduce" | "allow";

/**
 * Context that lets <BleebLogo> propagate a reduced-motion override
 * down to the specialized Symbol components without prop-drilling.
 */
export const LogoMotionContext = createContext<ReducedMotionPref>("auto");

/**
 * Resolves the effective reduced-motion flag for a logo subtree:
 *
 * - "auto"   → respect the user's prefers-reduced-motion system setting
 * - "reduce" → force reduced motion (idle anims off, hover collapses)
 * - "allow"  → ignore the system setting; always animate
 *
 * Callers pass their local prop override; the hook falls back to the
 * surrounding LogoMotionContext (set by <BleebLogo>) and finally to "auto".
 */
export function useEffectiveReducedMotion(override?: ReducedMotionPref): boolean {
  const ctx = useContext(LogoMotionContext);
  const pref = override ?? ctx ?? "auto";
  const systemReduce = useReducedMotion() ?? false;

  if (pref === "reduce") return true;
  if (pref === "allow") return false;
  return systemReduce;
}
