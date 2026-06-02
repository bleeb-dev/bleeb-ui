import { cn } from "@/lib/utils";
import type { AccentName } from "./brand-tokens";

interface Props {
  children: React.ReactNode;
  variant?: "ai" | "generating" | "beta" | "live" | "draft" | "neutral";
  pulse?: boolean;
  className?: string;
}

const VARIANT_ACCENT: Record<NonNullable<Props["variant"]>, AccentName | "muted"> = {
  ai: "cyan",
  generating: "cyan",
  beta: "violet",
  live: "green",
  draft: "amber",
  neutral: "muted" as AccentName | "muted",
};

const ACCENT_CLASS: Record<string, string> = {
  cyan: "text-bleeb-cyan border-bleeb-cyan/40 bg-bleeb-cyan/10",
  violet: "text-bleeb-violet border-bleeb-violet/40 bg-bleeb-violet/10",
  green: "text-bleeb-green border-bleeb-green/40 bg-bleeb-green/10",
  amber: "text-bleeb-amber border-bleeb-amber/40 bg-bleeb-amber/10",
  rose: "text-bleeb-rose border-bleeb-rose/40 bg-bleeb-rose/10",
  blue: "text-bleeb-blue border-bleeb-blue/40 bg-bleeb-blue/10",
  muted: "text-bleeb-muted border-border bg-bleeb-surface-2/60",
};

const ACCENT_DOT: Record<string, string> = {
  cyan: "bg-bleeb-cyan",
  violet: "bg-bleeb-violet",
  green: "bg-bleeb-green",
  amber: "bg-bleeb-amber",
  rose: "bg-bleeb-rose",
  blue: "bg-bleeb-blue",
  muted: "bg-bleeb-muted",
};

export function BleebBadge({
  children,
  variant = "neutral",
  pulse,
  className,
}: Props) {
  const accent = VARIANT_ACCENT[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider",
        ACCENT_CLASS[accent],
        className,
      )}
    >
      {pulse ? (
        <span className={cn("size-1.5 rounded-full animate-pulse", ACCENT_DOT[accent])} />
      ) : null}
      {children}
    </span>
  );
}
