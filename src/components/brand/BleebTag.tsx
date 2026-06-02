import { cn } from "@/lib/utils";
import type { AccentName } from "./brand-tokens";

interface Props {
  children: React.ReactNode;
  accent?: AccentName | "neutral";
  className?: string;
}

const ACCENT_CLASS: Record<string, string> = {
  cyan: "text-bleeb-cyan border-bleeb-cyan/30",
  violet: "text-bleeb-violet border-bleeb-violet/30",
  green: "text-bleeb-green border-bleeb-green/30",
  amber: "text-bleeb-amber border-bleeb-amber/30",
  rose: "text-bleeb-rose border-bleeb-rose/30",
  blue: "text-bleeb-blue border-bleeb-blue/30",
  neutral: "text-bleeb-muted border-border",
};

export function BleebTag({ children, accent = "neutral", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border bg-bleeb-surface-1/60 px-2 py-0.5 font-mono text-[11px]",
        ACCENT_CLASS[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}
