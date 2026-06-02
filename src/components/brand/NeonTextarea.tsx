import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "cyan" | "violet" | "green";

const variantVars: Record<Variant, React.CSSProperties> = {
  cyan: { ["--neon-c1" as never]: "var(--bleeb-cyan)", ["--neon-c2" as never]: "var(--bleeb-violet)" },
  violet: { ["--neon-c1" as never]: "var(--bleeb-violet)", ["--neon-c2" as never]: "var(--bleeb-rose)" },
  green: { ["--neon-c1" as never]: "var(--bleeb-green)", ["--neon-c2" as never]: "var(--bleeb-cyan)" },
};

export interface NeonTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: Variant;
  footer?: React.ReactNode;
}

export const NeonTextarea = React.forwardRef<HTMLTextAreaElement, NeonTextareaProps>(
  ({ className, variant = "cyan", footer, ...props }, ref) => {
    return (
      <div
        className="neon-frame neon-bloom rounded-xl bg-bleeb-surface-2/80 backdrop-blur-sm"
        data-variant={variant}
        style={variantVars[variant]}
      >
        <div className="relative rounded-xl p-4">
          <textarea
            ref={ref}
            className={cn(
              "block w-full min-h-32 resize-none bg-transparent outline-none border-0",
              "text-sm text-bleeb-text placeholder:text-bleeb-muted/70 font-sans leading-relaxed",
              "disabled:opacity-50",
              className,
            )}
            {...props}
          />
          {footer ? (
            <div className="flex items-center justify-between gap-3 pt-3 mt-3 border-t border-border/60">
              <div className="flex items-center gap-2 font-mono text-[10px] text-bleeb-muted">
                <span className="size-1.5 rounded-full bg-bleeb-cyan animate-pulse" />
                READY
              </div>
              {footer}
            </div>
          ) : null}
        </div>
        <span className="neon-scanline" aria-hidden />
      </div>
    );
  },
);
NeonTextarea.displayName = "NeonTextarea";
