interface Props {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ index, eyebrow, title, description }: Props) {
  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-6 mb-12">
      <div className="space-y-2">
        <div className="font-mono text-xs text-bleeb-muted">{index}</div>
        <div className="font-mono text-xs text-bleeb-cyan uppercase tracking-wider">{eyebrow}</div>
      </div>
      <div className="space-y-3 max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl leading-tight">{title}</h2>
        {description && <p className="text-bleeb-muted text-base leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
