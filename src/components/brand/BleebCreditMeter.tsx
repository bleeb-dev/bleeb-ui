import { cn } from "@/lib/utils";
import { Coins } from "lucide-react";

export interface BleebCreditMeterProps {
  used: number;
  total: number;
  label?: string;
  className?: string;
}

export function BleebCreditMeter({ used, total, label = "Credits", className }: BleebCreditMeterProps) {
  const pct = Math.max(0, Math.min(100, (used / total) * 100));
  const accent = pct >= 90 ? "var(--bleeb-rose)" : pct >= 70 ? "var(--bleeb-amber)" : "var(--bleeb-green)";
  return (
    <div className={cn("rounded-lg border border-border bg-bleeb-surface-1 p-4 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-bleeb-muted">
          <Coins className="size-3.5" style={{ color: accent }} />
          {label}
        </div>
        <div className="font-mono text-xs text-bleeb-text">
          {used.toLocaleString()} <span className="text-bleeb-muted">/ {total.toLocaleString()}</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-bleeb-surface-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{
            width: `${pct}%`,
            background: accent,
            boxShadow: `0 0 14px ${accent}`,
          }}
        />
      </div>
      <div className="flex items-center justify-between font-mono text-[10px] text-bleeb-muted">
        <span>{pct.toFixed(0)}% used</span>
        <span>{(total - used).toLocaleString()} left</span>
      </div>
    </div>
  );
}
