interface Props {
  name: string;
  token: string;
  hex: string;
  role: string;
  textOnLight?: boolean;
}

export function ColorSwatch({ name, token, hex, role, textOnLight }: Props) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-border bg-bleeb-surface-1">
      <div
        className="h-28 flex items-end p-4"
        style={{ background: hex, color: textOnLight ? "var(--bleeb-bg)" : "var(--bleeb-text)" }}
      >
        <span className="font-mono text-xs opacity-80">{hex}</span>
      </div>
      <div className="p-4 space-y-1">
        <div className="font-display text-base">{name}</div>
        <div className="font-mono text-[11px] text-bleeb-muted">{token}</div>
        <div className="text-xs text-bleeb-muted pt-1">{role}</div>
      </div>
    </div>
  );
}
