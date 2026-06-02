import * as React from "react";
import { cn } from "@/lib/utils";
import { BleebSymbol } from "./BleebSymbol";

export interface BleebEmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function BleebEmptyState({ title, description, action, className }: BleebEmptyStateProps) {
  return (
    <div className={cn(
      "rounded-lg border border-dashed border-border bg-bleeb-surface-1/60 p-10 text-center flex flex-col items-center gap-4",
      className,
    )}>
      <div className="opacity-40">
        <BleebSymbol size={48} />
      </div>
      <div className="space-y-1">
        <div className="font-display text-lg text-bleeb-text">{title}</div>
        {description ? (
          <div className="text-sm text-bleeb-muted max-w-sm mx-auto leading-relaxed">{description}</div>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
