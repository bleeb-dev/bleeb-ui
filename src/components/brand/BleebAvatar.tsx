import { cn } from "@/lib/utils";

interface Props {
  name: string;
  src?: string;
  size?: number;
  active?: boolean;
  className?: string;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function BleebAvatar({ name, src, size = 40, active, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-bleeb-surface-2 border border-border font-display text-bleeb-text overflow-hidden",
        active && "ring-2 ring-bleeb-cyan ring-offset-2 ring-offset-bleeb-bg",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      aria-label={name}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        initials(name)
      )}
    </span>
  );
}
