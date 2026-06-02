import * as React from "react";
import { cn } from "@/lib/utils";
import { BleebSymbol } from "./BleebSymbol";
import { BleebAvatar } from "./BleebAvatar";
import { BleebSpinner } from "./BleebSpinner";

type Role = "ai" | "user";
type State = "thinking" | "streaming" | "done" | "error";

export interface BleebAIMessageProps {
  role: Role;
  state?: State;
  author?: string;
  children?: React.ReactNode;
  className?: string;
}

export function BleebAIMessage({ role, state = "done", author, children, className }: BleebAIMessageProps) {
  const isAI = role === "ai";
  return (
    <div className={cn("flex gap-3", isAI ? "items-start" : "items-start flex-row-reverse", className)}>
      <div className="shrink-0">
        {isAI ? (
          <div className="size-8 rounded-full border border-bleeb-cyan/40 bg-bleeb-cyan/10 grid place-items-center">
            <BleebSymbol size={20} />
          </div>
        ) : (
          <BleebAvatar name={author ?? "You"} size={32} />
        )}
      </div>
      <div
        className={cn(
          "max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
          isAI
            ? "bg-bleeb-surface-1 border border-border text-bleeb-text"
            : "bg-bleeb-cyan/10 border border-bleeb-cyan/30 text-bleeb-text",
          state === "error" && "border-bleeb-rose/50 bg-bleeb-rose/10",
        )}
      >
        <div className="font-mono text-[10px] uppercase tracking-wider mb-1 text-bleeb-muted">
          {isAI ? "Bleeb AI" : author ?? "You"}
        </div>
        {state === "thinking" ? (
          <BleebSpinner size={16} label="Thinking…" />
        ) : (
          <div className={cn(state === "streaming" && "after:inline-block after:w-[6px] after:h-[14px] after:bg-bleeb-cyan after:ml-1 after:align-middle after:animate-pulse")}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
