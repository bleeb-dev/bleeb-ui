import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "cyan" | "violet" | "green";

const variantVars: Record<Variant, React.CSSProperties> = {
  cyan: { ["--neon-c1" as never]: "var(--bleeb-cyan)", ["--neon-c2" as never]: "var(--bleeb-violet)" },
  violet: { ["--neon-c1" as never]: "var(--bleeb-violet)", ["--neon-c2" as never]: "var(--bleeb-rose)" },
  green: { ["--neon-c1" as never]: "var(--bleeb-green)", ["--neon-c2" as never]: "var(--bleeb-cyan)" },
};

export interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  icon?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const NeonInput = React.forwardRef<HTMLInputElement, NeonInputProps>(
  ({ className, variant = "cyan", icon, suffix, ...props }, ref) => {
    return (
      <div
        className="neon-frame neon-bloom rounded-lg bg-bleeb-surface-2/80 backdrop-blur-sm"
        data-variant={variant}
        style={variantVars[variant]}
      >
        <div className="relative flex items-center gap-2 px-3 h-12 rounded-lg">
          {icon ? <span className="text-bleeb-muted shrink-0">{icon}</span> : null}
          <input
            ref={ref}
            className={cn(
              "flex-1 bg-transparent outline-none border-0 text-sm text-bleeb-text",
              "placeholder:text-bleeb-muted/70 font-sans",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className,
            )}
            {...props}
          />
          {suffix ? <span className="shrink-0">{suffix}</span> : null}
        </div>
        <span className="neon-scanline" aria-hidden />
      </div>
    );
  },
);
NeonInput.displayName = "NeonInput";
