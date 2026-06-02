import * as React from "react";
import { cn } from "@/lib/utils";
import { BleebKbd } from "./BleebKbd";
import { Sparkles, ArrowUp } from "lucide-react";

export interface BleebPromptInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  maxTokens?: number;
  className?: string;
}

export function BleebPromptInput({
  placeholder = "Describe what you want to build…",
  value: controlled,
  onChange,
  onSubmit,
  maxTokens = 4000,
  className,
}: BleebPromptInputProps) {
  const [internal, setInternal] = React.useState("");
  const value = controlled ?? internal;
  const tokens = Math.ceil(value.length / 4);

  const handleChange = (v: string) => {
    if (controlled === undefined) setInternal(v);
    onChange?.(v);
  };

  return (
    <div
      className={cn(
        "neon-frame neon-bloom rounded-xl bg-bleeb-surface-2/80 backdrop-blur-sm",
        className,
      )}
      data-variant="cyan"
      style={{
        ["--neon-c1" as never]: "var(--bleeb-cyan)",
        ["--neon-c2" as never]: "var(--bleeb-violet)",
      }}
    >
      <div className="relative p-3 space-y-2">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-bleeb-cyan">
          <Sparkles className="size-3" />
          AI prompt
        </div>
        <textarea
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              onSubmit?.(value);
            }
          }}
          rows={3}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none resize-none text-sm text-bleeb-text placeholder:text-bleeb-muted/70 font-sans"
        />
        <div className="flex items-center justify-between pt-1 border-t border-border/60">
          <div className="flex items-center gap-2 font-mono text-[10px] text-bleeb-muted">
            <span>/ slash for commands</span>
            <span className="text-bleeb-muted/50">·</span>
            <span className={cn(tokens > maxTokens && "text-bleeb-rose")}>
              {tokens.toLocaleString()} / {maxTokens.toLocaleString()} tokens
            </span>
          </div>
          <button
            type="button"
            onClick={() => onSubmit?.(value)}
            className="inline-flex items-center gap-1.5 rounded-md bg-bleeb-cyan/15 hover:bg-bleeb-cyan/25 text-bleeb-cyan px-2.5 py-1 transition-colors"
          >
            <BleebKbd>⌘</BleebKbd>
            <BleebKbd>⏎</BleebKbd>
            <ArrowUp className="size-3.5" />
          </button>
        </div>
        <span className="neon-scanline" aria-hidden />
      </div>
    </div>
  );
}
