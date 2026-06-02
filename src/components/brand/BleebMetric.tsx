import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string | number;
  unit?: string;
  trend?: { value: string; direction: "up" | "down" | "flat" };
  className?: string;
}

export function BleebMetric({ label, value, unit, trend, className }: Props) {
  const trendColor =
    trend?.direction === "up"   ? "text-bleeb-green" :
    trend?.direction === "down" ? "text-bleeb-rose"  :
                                  "text-bleeb-muted";
  return (
    <div className={cn("rounded-lg border border-border bg-bleeb-surface-1 p-5", className)}>
      <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-4xl text-bleeb-text tabular-nums" style={{ letterSpacing: "-0.04em" }}>
          {value}
        </span>
        {unit ? <span className="font-mono text-xs text-bleeb-muted">{unit}</span> : null}
      </div>
      {trend ? (
        <div className={cn("mt-1 font-mono text-[11px]", trendColor)}>
          {trend.direction === "up" ? "▲" : trend.direction === "down" ? "▼" : "■"} {trend.value}
        </div>
      ) : null}
    </div>
  );
}
