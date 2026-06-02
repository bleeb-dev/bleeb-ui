import { cn } from "@/lib/utils";
import { Check, X, Loader2 } from "lucide-react";

export type StepState = "pending" | "active" | "done" | "error";

export interface Step {
  label: string;
  state: StepState;
  hint?: string;
}

const STATE: Record<StepState, { ring: string; bg: string; text: string }> = {
  pending: { ring: "border-border",         bg: "bg-bleeb-surface-2", text: "text-bleeb-muted" },
  active:  { ring: "border-bleeb-cyan",     bg: "bg-bleeb-cyan/10",   text: "text-bleeb-cyan" },
  done:    { ring: "border-bleeb-green",    bg: "bg-bleeb-green/10",  text: "text-bleeb-green" },
  error:   { ring: "border-bleeb-rose",     bg: "bg-bleeb-rose/10",   text: "text-bleeb-rose" },
};

export function BleebStepper({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("flex items-start gap-2 w-full overflow-x-auto", className)}>
      {steps.map((s, i) => {
        const m = STATE[s.state];
        return (
          <li key={i} className="flex items-start gap-2 min-w-0 flex-1">
            <div className="flex flex-col items-center">
              <div className={cn("size-7 rounded-full border-2 grid place-items-center", m.ring, m.bg, m.text)}>
                {s.state === "done" ? <Check className="size-3.5" /> :
                 s.state === "error" ? <X className="size-3.5" /> :
                 s.state === "active" ? <Loader2 className="size-3.5 animate-spin motion-reduce:animate-none" /> :
                 <span className="font-mono text-[10px]">{i + 1}</span>}
              </div>
              {i < steps.length - 1 ? (
                <div className={cn("w-px flex-1 mt-1", s.state === "done" ? "bg-bleeb-green/40" : "bg-border")} />
              ) : null}
            </div>
            <div className="pt-1 min-w-0">
              <div className={cn("font-mono text-[11px] uppercase tracking-wider", m.text)}>{s.label}</div>
              {s.hint ? <div className="text-xs text-bleeb-muted truncate">{s.hint}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
