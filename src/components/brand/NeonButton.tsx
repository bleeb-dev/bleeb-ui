import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "destructive";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = cn(
      "relative inline-flex items-center justify-center gap-2 rounded-lg font-display tracking-tight",
      "transition-all duration-200 cursor-pointer select-none",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
      sizes[size],
    );

    if (variant === "primary") {
      return (
        <button
          ref={ref}
          className={cn(
            base,
            "neon-shimmer text-bleeb-bg font-medium",
            "bg-[image:var(--gradient-signal)]",
            "shadow-[0_0_0_1px_color-mix(in_oklab,var(--bleeb-cyan)_60%,transparent),0_0_24px_-4px_color-mix(in_oklab,var(--bleeb-cyan)_45%,transparent)]",
            "hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--bleeb-cyan)_80%,transparent),0_0_40px_-2px_color-mix(in_oklab,var(--bleeb-cyan)_60%,transparent),0_0_60px_-4px_color-mix(in_oklab,var(--bleeb-violet)_45%,transparent)]",
            "active:translate-y-[1px]",
            className,
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    if (variant === "destructive") {
      return (
        <button
          ref={ref}
          className={cn(
            base,
            "neon-frame neon-bloom bg-bleeb-surface-2/60 text-bleeb-rose",
            "hover:text-bleeb-text hover:bg-bleeb-rose/15",
            className,
          )}
          data-variant="rose"
          style={{
            ["--neon-c1" as never]: "var(--bleeb-rose)",
            ["--neon-c2" as never]: "var(--bleeb-amber)",
          }}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          base,
          "neon-frame neon-bloom bg-bleeb-surface-1/40 text-bleeb-text",
          "hover:bg-bleeb-surface-2",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
NeonButton.displayName = "NeonButton";
