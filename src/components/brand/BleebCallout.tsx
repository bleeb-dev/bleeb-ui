import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle2, Sparkles, OctagonAlert } from "lucide-react";

type Variant = "info" | "warning" | "success" | "ai" | "danger";

interface Props {
  variant?: Variant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const META: Record<Variant, { color: string; bg: string; border: string; Icon: React.ComponentType<{ className?: string }> }> = {
  info:    { color: "text-bleeb-blue",   bg: "bg-bleeb-blue/8",   border: "border-bleeb-blue/30",   Icon: Info },
  warning: { color: "text-bleeb-amber",  bg: "bg-bleeb-amber/8",  border: "border-bleeb-amber/30",  Icon: AlertTriangle },
  success: { color: "text-bleeb-green",  bg: "bg-bleeb-green/8",  border: "border-bleeb-green/30",  Icon: CheckCircle2 },
  ai:      { color: "text-bleeb-cyan",   bg: "bg-bleeb-cyan/8",   border: "border-bleeb-cyan/30",   Icon: Sparkles },
  danger:  { color: "text-bleeb-rose",   bg: "bg-bleeb-rose/8",   border: "border-bleeb-rose/30",   Icon: OctagonAlert },
};

export function BleebCallout({ variant = "info", title, children, className }: Props) {
  const { color, bg, border, Icon } = META[variant];
  return (
    <div className={cn("rounded-lg border p-4 flex gap-3", bg, border, className)}>
      <Icon className={cn("size-5 shrink-0 mt-0.5", color)} />
      <div className="flex-1 space-y-1">
        {title ? (
          <div className={cn("font-display text-sm", color)}>{title}</div>
        ) : null}
        <div className="text-sm text-bleeb-text/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
