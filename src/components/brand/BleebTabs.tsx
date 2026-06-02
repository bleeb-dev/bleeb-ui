import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const BleebTabs = TabsPrimitive.Root;

export const BleebTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("relative inline-flex items-center gap-1 border-b border-border", className)}
    {...props}
  />
));
BleebTabsList.displayName = "BleebTabsList";

export const BleebTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-bleeb-muted",
      "hover:text-bleeb-text transition-colors",
      "data-[state=active]:text-bleeb-cyan",
      "after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-px after:h-px after:bg-transparent",
      "data-[state=active]:after:bg-bleeb-cyan data-[state=active]:after:shadow-[0_0_10px_var(--bleeb-cyan)]",
      "outline-none focus-visible:ring-2 focus-visible:ring-bleeb-cyan/40 rounded-t",
      className,
    )}
    {...props}
  />
));
BleebTabsTrigger.displayName = "BleebTabsTrigger";

export const BleebTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("mt-4 outline-none", className)} {...props} />
));
BleebTabsContent.displayName = "BleebTabsContent";
