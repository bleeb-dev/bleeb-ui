import * as React from "react";
import { cn } from "@/lib/utils";
import { BleebKbd } from "./BleebKbd";

export interface BleebCommandHintProps {
  keys: string[];
  children: React.ReactNode;
  className?: string;
}

export function BleebCommandHint({ keys, children, className }: BleebCommandHintProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 font-mono text-[11px] text-bleeb-muted", className)}>
      <span>{children}</span>
      <span className="inline-flex items-center gap-1">
        {keys.map((k, i) => <BleebKbd key={i}>{k}</BleebKbd>)}
      </span>
    </div>
  );
}
