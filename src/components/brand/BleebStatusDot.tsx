import { cn } from "@/lib/utils";

type Status = "live" | "idle" | "offline" | "generating" | "error";

const META: Record<Status, { color: string; pulse?: boolean; label: string }> = {
  live:       { color: "bg-bleeb-green",  pulse: true,  label: "Live" },
  generating: { color: "bg-bleeb-cyan",   pulse: true,  label: "Generating" },
  idle:       { color: "bg-bleeb-amber",  label: "Idle" },
  offline:    { color: "bg-bleeb-muted",  label: "Offline" },
  error:      { color: "bg-bleeb-rose",   pulse: true,  label: "Error" },
};

export interface BleebStatusDotProps {
  status: Status;
  label?: string;
  className?: string;
}

export function BleebStatusDot({ status, label, className }: BleebStatusDotProps) {
  const m = META[status];
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono text-[11px] text-bleeb-muted", className)}>
      <span className="relative inline-flex">
        <span className={cn("size-2 rounded-full", m.color)} />
        {m.pulse ? (
          <span className={cn("absolute inset-0 rounded-full opacity-60 animate-ping motion-reduce:animate-none", m.color)} />
        ) : null}
      </span>
      <span className="uppercase tracking-wider text-bleeb-text">{label ?? m.label}</span>
    </span>
  );
}
