import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  className?: string;
}

export function BleebDivider({ label, className }: Props) {
  if (!label) return <div className={cn("h-px w-full bg-border", className)} role="separator" />;
  return (
    <div className={cn("flex items-center gap-3", className)} role="separator">
      <div className="flex-1 h-px bg-border" />
      <span className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
