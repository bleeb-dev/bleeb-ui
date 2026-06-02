interface Props {
  className?: string;
  /** Tailwind text size class controls scale, e.g. "text-6xl" */
}

export function BleebWordmark({ className = "" }: Props) {
  return (
    <span
      className={`font-display font-medium tracking-tight inline-flex items-baseline ${className}`}
      style={{ letterSpacing: "-0.04em" }}
    >
      <span>Blee</span>
      <span className="text-bleeb-cyan">b</span>
    </span>
  );
}
