interface Props {
  label: string;
  size: string;
  lineHeight: string;
  family: "display" | "sans" | "mono";
  sample: string;
}

const families = {
  display: "font-display font-medium",
  sans: "font-sans",
  mono: "font-mono",
};

export function TypeSpecimen({ label, size, lineHeight, family, sample }: Props) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-6 py-5 border-b border-border items-baseline">
      <div className="space-y-1">
        <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{label}</div>
        <div className="font-mono text-[11px] text-bleeb-muted">{size}/{lineHeight}</div>
      </div>
      <div
        className={families[family]}
        style={{ fontSize: size, lineHeight }}
      >
        {sample}
      </div>
    </div>
  );
}
