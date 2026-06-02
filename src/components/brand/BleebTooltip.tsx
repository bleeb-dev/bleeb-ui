import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export const BleebTooltipProvider = TooltipPrimitive.Provider;
export const BleebTooltipRoot = TooltipPrimitive.Root;
export const BleebTooltipTrigger = TooltipPrimitive.Trigger;

export const BleebTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 rounded-md border border-border bg-bleeb-surface-2 px-2.5 py-1.5",
      "font-mono text-[11px] text-bleeb-text shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
      "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out fade-in-0 fade-out-0 zoom-in-95",
      className,
    )}
    {...props}
  />
));
BleebTooltipContent.displayName = "BleebTooltipContent";

/** Convenience wrapper: <BleebTooltip label="…">{trigger}</BleebTooltip> */
export function BleebTooltip({
  label,
  children,
  side = "top",
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <BleebTooltipProvider delayDuration={200}>
      <BleebTooltipRoot>
        <BleebTooltipTrigger asChild>{children}</BleebTooltipTrigger>
        <BleebTooltipContent side={side}>{label}</BleebTooltipContent>
      </BleebTooltipRoot>
    </BleebTooltipProvider>
  );
}
