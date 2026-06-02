import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

export const NeonRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root ref={ref} className={cn("grid gap-3", className)} {...props} />
));
NeonRadioGroup.displayName = "NeonRadioGroup";

export interface NeonRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export const NeonRadioItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  NeonRadioItemProps
>(({ className, label, description, id, ...props }, ref) => {
  const generatedId = React.useId();
  const itemId = id ?? generatedId;
  return (
    <label
      htmlFor={itemId}
      className={cn(
        "group neon-frame neon-bloom flex items-start gap-3 rounded-lg p-4",
        "bg-bleeb-surface-1/60 cursor-pointer transition-colors",
        "has-[[data-state=checked]]:bg-bleeb-surface-2",
        className,
      )}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        className={cn(
          "relative shrink-0 size-5 rounded-full mt-0.5",
          "border border-border bg-bleeb-bg",
          "data-[state=checked]:border-bleeb-cyan",
          "data-[state=checked]:shadow-[0_0_0_1px_var(--bleeb-cyan),0_0_14px_-2px_color-mix(in_oklab,var(--bleeb-cyan)_70%,transparent)]",
          "outline-none focus-visible:ring-2 focus-visible:ring-bleeb-cyan",
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
          <span
            className="block size-2 rounded-full bg-bleeb-cyan"
            style={{
              boxShadow: "0 0 10px var(--bleeb-cyan)",
              animation: "neon-pulse 1.6s ease-in-out infinite",
            }}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <div className="flex-1">
        <div className="text-sm font-display text-bleeb-text">{label}</div>
        {description ? (
          <div className="text-xs text-bleeb-muted mt-1 leading-relaxed">{description}</div>
        ) : null}
      </div>
    </label>
  );
});
NeonRadioItem.displayName = "NeonRadioItem";
