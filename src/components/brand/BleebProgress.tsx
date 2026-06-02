import * as React from "react";
import { cn } from "@/lib/utils";

type Accent = "cyan" | "green" | "amber" | "violet" | "rose";

const ACCENT: Record<Accent, { fg: string; glow: string }> = {
  cyan:   { fg: "bg-bleeb-cyan",   glow: "shadow-[0_0_18px_var(--bleeb-cyan)]" },
  green:  { fg: "bg-bleeb-green",  glow: "shadow-[0_0_18px_var(--bleeb-green)]" },
  amber:  { fg: "bg-bleeb-amber",  glow: "shadow-[0_0_18px_var(--bleeb-amber)]" },
  violet: { fg: "bg-bleeb-violet", glow: "shadow-[0_0_18px_var(--bleeb-violet)]" },
  rose:   { fg: "bg-bleeb-rose",   glow: "shadow-[0_0_18px_var(--bleeb-rose)]" },
};

export interface BleebProgressProps {
  value?: number;
  accent?: Accent;
  indeterminate?: boolean;
  label?: string;
  className?: string;
}

export function BleebProgress({
  value = 0,
  accent = "cyan",
  indeterminate,
  label,
  className,
}: BleebProgressProps) {
  const a = ACCENT[accent];
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("space-y-1.5", className)}>
      {label ? (
        <div className="flex items-center justify-between font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">
          <span>{label}</span>
          {!indeterminate ? <span className="text-bleeb-text">{v}%</span> : null}
        </div>
      ) : null}
      <div className="relative h-1.5 w-full rounded-full bg-bleeb-surface-2 overflow-hidden">
        {indeterminate ? (
          <div
            className={cn(
              "absolute inset-y-0 w-1/3 rounded-full motion-reduce:animate-none",
              a.fg,
              a.glow,
            )}
            style={{ animation: "bleeb-progress-indet 1.4s cubic-bezier(0.45,0,0.55,1) infinite" }}
          />
        ) : (
          <div
            className={cn("h-full rounded-full transition-[width] duration-500", a.fg, a.glow)}
            style={{ width: `${v}%` }}
          />
        )}
      </div>
      <style>{`@keyframes bleeb-progress-indet{0%{left:-35%}100%{left:100%}}`}</style>
    </div>
  );
}
