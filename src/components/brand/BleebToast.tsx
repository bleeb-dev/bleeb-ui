import { toast as sonner } from "sonner";
import { Sparkles, CheckCircle2, AlertTriangle, OctagonAlert, Info } from "lucide-react";
import * as React from "react";

export type ToastVariant = "ai" | "success" | "warning" | "error" | "info";

const META: Record<ToastVariant, { color: string; Icon: React.ComponentType<{ className?: string }> }> = {
  ai:      { color: "var(--bleeb-cyan)",   Icon: Sparkles },
  success: { color: "var(--bleeb-green)",  Icon: CheckCircle2 },
  warning: { color: "var(--bleeb-amber)",  Icon: AlertTriangle },
  error:   { color: "var(--bleeb-rose)",   Icon: OctagonAlert },
  info:    { color: "var(--bleeb-blue)",   Icon: Info },
};

export interface BleebToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
}

/** Brand-styled toast built on sonner. Requires <Toaster /> mounted at root. */
export function bleebToast({ title, description, variant = "info" }: BleebToastOptions) {
  const { color, Icon } = META[variant];
  return sonner.custom((id) => (
    <div
      style={{ borderColor: `color-mix(in oklab, ${color} 40%, transparent)` }}
      className="w-[340px] rounded-lg border bg-bleeb-surface-1 px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex gap-3"
    >
      <div className="shrink-0 mt-0.5" style={{ color }}>
        <Icon className="size-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-sm text-bleeb-text">{title}</div>
        {description ? (
          <div className="text-xs text-bleeb-muted mt-0.5 leading-relaxed">{description}</div>
        ) : null}
      </div>
      <button
        onClick={() => sonner.dismiss(id)}
        className="text-bleeb-muted hover:text-bleeb-text font-mono text-[10px] uppercase tracking-wider"
      >
        Close
      </button>
    </div>
  ));
}

/** Preview component used in the brand book — renders inline, no provider needed. */
export function BleebToastPreview({ title, description, variant = "info" }: BleebToastOptions) {
  const { color, Icon } = META[variant];
  return (
    <div
      style={{ borderColor: `color-mix(in oklab, ${color} 40%, transparent)` }}
      className="rounded-lg border bg-bleeb-surface-1 px-3.5 py-3 flex gap-3"
    >
      <div className="shrink-0 mt-0.5" style={{ color }}>
        <Icon className="size-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-sm text-bleeb-text">{title}</div>
        {description ? (
          <div className="text-xs text-bleeb-muted mt-0.5 leading-relaxed">{description}</div>
        ) : null}
      </div>
    </div>
  );
}
