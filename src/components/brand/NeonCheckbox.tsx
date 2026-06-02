import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

export interface NeonCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const NeonCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  NeonCheckboxProps
>(({ className, label, description, id, ...props }, ref) => {
  const generatedId = React.useId();
  const itemId = id ?? generatedId;
  const node = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={itemId}
      className={cn(
        "relative size-5 rounded-md shrink-0",
        "border border-border bg-bleeb-bg",
        "outline-none focus-visible:ring-2 focus-visible:ring-bleeb-green",
        "data-[state=checked]:border-bleeb-green",
        "data-[state=checked]:bg-[color-mix(in_oklab,var(--bleeb-green)_15%,var(--bleeb-bg))]",
        "data-[state=checked]:shadow-[0_0_0_1px_var(--bleeb-green),0_0_16px_-2px_color-mix(in_oklab,var(--bleeb-green)_70%,transparent)]",
        "transition-all",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 20 20" className="size-4" fill="none">
          <path
            d="M4 10.5 L8.5 15 L16 6"
            stroke="var(--bleeb-green)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 22,
              strokeDashoffset: 22,
              animation: "neon-draw 320ms cubic-bezier(0.16,1,0.3,1) forwards",
              filter: "drop-shadow(0 0 4px var(--bleeb-green))",
            }}
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label) return node;
  return (
    <label htmlFor={itemId} className="flex items-start gap-3 cursor-pointer group">
      {node}
      <div className="flex-1">
        <div className="text-sm font-display text-bleeb-text group-hover:text-bleeb-green transition-colors">
          {label}
        </div>
        {description ? (
          <div className="text-xs text-bleeb-muted mt-0.5">{description}</div>
        ) : null}
      </div>
    </label>
  );
});
NeonCheckbox.displayName = "NeonCheckbox";
