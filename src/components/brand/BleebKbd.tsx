import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function BleebKbd({ children, className }: Props) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center min-w-[1.5em] h-6 px-1.5 rounded border border-border bg-bleeb-surface-2 font-mono text-[11px] text-bleeb-text shadow-[inset_0_-1px_0_0_var(--color-border)]",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
