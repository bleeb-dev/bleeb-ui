import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export const NeonSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center py-2", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-bleeb-surface-2 border border-border">
      <SliderPrimitive.Range
        className="absolute h-full bg-[image:var(--gradient-flow)]"
        style={{
          boxShadow:
            "0 0 10px color-mix(in oklab, var(--bleeb-cyan) 60%, transparent), 0 0 22px -2px color-mix(in oklab, var(--bleeb-green) 50%, transparent)",
        }}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block size-5 rounded-full bg-bleeb-bg border border-bleeb-cyan",
        "outline-none cursor-grab active:cursor-grabbing",
        "shadow-[0_0_0_1px_var(--bleeb-cyan),0_0_16px_-2px_color-mix(in_oklab,var(--bleeb-cyan)_70%,transparent)]",
        "hover:shadow-[0_0_0_1px_var(--bleeb-cyan),0_0_24px_-2px_var(--bleeb-cyan),0_0_44px_-4px_color-mix(in_oklab,var(--bleeb-violet)_60%,transparent)]",
        "active:scale-110 transition-transform",
      )}
    />
  </SliderPrimitive.Root>
));
NeonSlider.displayName = "NeonSlider";
