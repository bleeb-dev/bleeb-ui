import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, GitBranch, Rocket, AlertTriangle, Activity } from "lucide-react";

export type RunEvent = "ai" | "workflow" | "deploy" | "error" | "system";

const META: Record<RunEvent, { color: string; Icon: React.ComponentType<{ className?: string }>; label: string }> = {
  ai:       { color: "text-bleeb-cyan",   Icon: Sparkles,       label: "ai" },
  workflow: { color: "text-bleeb-green",  Icon: GitBranch,      label: "workflow" },
  deploy:   { color: "text-bleeb-violet", Icon: Rocket,         label: "deploy" },
  error:    { color: "text-bleeb-rose",   Icon: AlertTriangle,  label: "error" },
  system:   { color: "text-bleeb-muted",  Icon: Activity,       label: "system" },
};

export interface RunLogEntry {
  ts: string;
  event: RunEvent;
  message: string;
  cost?: string;
}

export function BleebRunLog({ entries, className }: { entries: RunLogEntry[]; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border bg-bleeb-surface-1 divide-y divide-border font-mono text-[12px]", className)}>
      {entries.map((e, i) => {
        const m = META[e.event];
        return (
          <div key={i} className="grid grid-cols-[88px_90px_1fr_auto] items-center gap-3 px-3 py-2">
            <span className="text-bleeb-muted text-[11px]">{e.ts}</span>
            <span className={cn("inline-flex items-center gap-1.5 uppercase tracking-wider text-[10px]", m.color)}>
              <m.Icon className="size-3" />
              {m.label}
            </span>
            <span className="text-bleeb-text truncate">{e.message}</span>
            {e.cost ? <span className="text-bleeb-amber text-[11px]">{e.cost}</span> : <span />}
          </div>
        );
      })}
    </div>
  );
}
