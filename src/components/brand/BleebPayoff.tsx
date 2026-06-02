import { cn } from "@/lib/utils";
import { payoffs, type PayoffVariant } from "./brand-voice";

interface Props {
  variant?: PayoffVariant;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  as?: "p" | "span" | "h2" | "h3";
}

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-lg md:text-xl",
  lg: "text-2xl md:text-3xl",
};

export function BleebPayoff({
  variant = "primary",
  size = "md",
  className,
  as: Tag = "p",
}: Props) {
  const p = payoffs[variant];
  return (
    <Tag
      className={cn(
        "font-display font-medium tracking-tight text-bleeb-text",
        sizeMap[size],
        className,
      )}
      style={{ letterSpacing: "-0.02em" }}
    >
      {p.text}
    </Tag>
  );
}
