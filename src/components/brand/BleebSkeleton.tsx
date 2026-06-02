import { cn } from "@/lib/utils";

export interface BleebSkeletonProps {
  className?: string;
  variant?: "line" | "block" | "circle";
}

export function BleebSkeleton({ className, variant = "line" }: BleebSkeletonProps) {
  const base = "relative overflow-hidden bg-bleeb-surface-2";
  const shape =
    variant === "circle" ? "rounded-full size-10" :
    variant === "block"  ? "rounded-md h-24 w-full" :
                           "rounded h-3 w-full";
  return (
    <div className={cn(base, shape, "motion-reduce:before:hidden", className)}>
      <span
        className="absolute inset-0 -translate-x-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--bleeb-cyan) 22%, transparent), color-mix(in oklab, var(--bleeb-violet) 14%, transparent), transparent)",
          animation: "bleeb-shimmer 1.6s ease-in-out infinite",
        }}
      />
      <style>{`@keyframes bleeb-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`}</style>
    </div>
  );
}
