import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export const NeonSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      "neon-frame relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full",
      "bg-bleeb-surface-2 transition-colors duration-300",
      "data-[state=checked]:bg-[image:var(--gradient-signal)]",
      "data-[state=checked]:shadow-[0_0_0_1px_var(--bleeb-cyan),0_0_20px_-2px_color-mix(in_oklab,var(--bleeb-cyan)_60%,transparent)]",
      "outline-none focus-visible:ring-2 focus-visible:ring-bleeb-cyan",
      className,
    )}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none relative block size-5 rounded-full bg-bleeb-text",
        "translate-x-1 data-[state=checked]:translate-x-6",
        "transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        "shadow-[0_0_10px_color-mix(in_oklab,var(--bleeb-cyan)_50%,transparent)]",
        "data-[state=checked]:shadow-[0_0_14px_var(--bleeb-cyan)]",
      )}
    />
  </SwitchPrimitives.Root>
));
NeonSwitch.displayName = "NeonSwitch";
