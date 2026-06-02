import {
  Sparkles, Workflow, Brain, Cpu, GitBranch, Database, ShieldCheck,
  Coins, Bell, Bot, Rocket, Plug,
} from "lucide-react";
import { iconSizes, iconStrokeWidth } from "./brand-tokens";

const ICONS = [
  { Icon: Sparkles,    label: "AI",         accent: "text-bleeb-cyan" },
  { Icon: Workflow,    label: "Workflow",   accent: "text-bleeb-green" },
  { Icon: Brain,       label: "Reasoning",  accent: "text-bleeb-violet" },
  { Icon: Bot,         label: "Agent",      accent: "text-bleeb-violet" },
  { Icon: Cpu,         label: "Model",      accent: "text-bleeb-cyan" },
  { Icon: GitBranch,   label: "Version",    accent: "text-bleeb-text" },
  { Icon: Database,    label: "Data",       accent: "text-bleeb-text" },
  { Icon: ShieldCheck, label: "Audit",      accent: "text-bleeb-green" },
  { Icon: Coins,       label: "Credits",    accent: "text-bleeb-amber" },
  { Icon: Bell,        label: "Alert",      accent: "text-bleeb-rose" },
  { Icon: Rocket,      label: "Ship",       accent: "text-bleeb-cyan" },
  { Icon: Plug,        label: "Integrate",  accent: "text-bleeb-blue" },
];

export function IconsShowcase() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
        <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider mb-4">
          Library · lucide-react · stroke {iconStrokeWidth.default} px
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {ICONS.map(({ Icon, label, accent }) => (
            <div key={label} className="rounded-md border border-border bg-bleeb-bg p-4 flex flex-col items-center gap-2">
              <Icon className={`size-6 ${accent}`} strokeWidth={iconStrokeWidth.default} />
              <span className="font-mono text-[10px] text-bleeb-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
        <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider mb-4">Size scale</div>
        <div className="flex items-end gap-6">
          {Object.entries(iconSizes).map(([k, v]) => (
            <div key={k} className="flex flex-col items-center gap-2">
              <Sparkles className="text-bleeb-cyan" style={{ width: v, height: v }} strokeWidth={iconStrokeWidth.default} />
              <span className="font-mono text-[10px] text-bleeb-muted">{k} · {v}px</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
