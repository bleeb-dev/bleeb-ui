import { cn } from "@/lib/utils";

export interface BleebSpinnerProps {
  size?: number;
  className?: string;
  label?: string;
}

/** Two arcs (echo of the twin-flame symbol) spinning in opposite directions. */
export function BleebSpinner({ size = 24, className, label }: BleebSpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label ?? "Loading"}
      className={cn("inline-flex items-center gap-2 text-bleeb-cyan", className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="motion-reduce:animate-none"
        style={{ animation: "bleeb-spin 1.1s linear infinite" }}
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 12a9 9 0 0 0 5.4 8.25"
          stroke="var(--bleeb-violet)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      {label ? <span className="font-mono text-[11px] text-bleeb-muted">{label}</span> : null}
      <style>{`@keyframes bleeb-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
