import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface Props {
  language?: string;
  code: string;
  className?: string;
}

export function BleebCodeBlock({ language = "ts", code, className }: Props) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className={cn("rounded-lg border border-border bg-bleeb-surface-1 overflow-hidden", className)}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-bleeb-surface-2/60">
        <span className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-bleeb-muted hover:text-bleeb-cyan transition-colors"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-[12px] leading-relaxed text-bleeb-text">
        <code>{code}</code>
      </pre>
    </div>
  );
}
