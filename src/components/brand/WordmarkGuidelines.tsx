import { BleebWordmark } from "./BleebWordmark";

type Pair = {
  label: string;
  bg: string;
  bgLabel: string;
  main: string;
  mainName: string;
  accent: string;
  accentName: string;
  textLight?: boolean;
};

const PAIRS: Pair[] = [
  {
    label: "Dark surface",
    bg: "#080A0F",
    bgLabel: "bleeb-bg #080A0F",
    main: "#F4F7FB",
    mainName: "text #F4F7FB",
    accent: "#23D3EE",
    accentName: "cyan #23D3EE",
    textLight: true,
  },
  {
    label: "Light surface",
    bg: "#F4F7FB",
    bgLabel: "light #F4F7FB",
    main: "#080A0F",
    mainName: "ink #080A0F",
    accent: "#8B5CF6",
    accentName: "violet #8B5CF6",
  },
  {
    label: "Cyan brand fill",
    bg: "#23D3EE",
    bgLabel: "cyan #23D3EE",
    main: "#080A0F",
    mainName: "ink #080A0F",
    accent: "#8B5CF6",
    accentName: "violet #8B5CF6",
  },
  {
    label: "Violet brand fill",
    bg: "#8B5CF6",
    bgLabel: "violet #8B5CF6",
    main: "#F4F7FB",
    mainName: "text #F4F7FB",
    accent: "#23D3EE",
    accentName: "cyan #23D3EE",
    textLight: true,
  },
  {
    label: "Multicolor gradient",
    bg: "linear-gradient(120deg,#23D3EE 0%,#8B5CF6 50%,#FF6BD6 100%)",
    bgLabel: "cyan → violet → magenta",
    main: "#080A0F",
    mainName: "ink #080A0F",
    accent: "#39E58C",
    accentName: "green #39E58C — the only safe accent on this gradient",
  },
  {
    label: "Hero gradient accent",
    bg: "#080A0F",
    bgLabel: "bleeb-bg #080A0F",
    main: "#F4F7FB",
    mainName: "text #F4F7FB",
    accent: "url(#bleebHero)",
    accentName: "cyan → violet gradient on the final b",
    textLight: true,
  },
];

function PairTile({ p }: { p: Pair }) {
  const isGradientAccent = p.accent.startsWith("url");
  return (
    <div className="rounded-lg border border-border bg-bleeb-surface-1 overflow-hidden">
      <div
        className="h-32 flex items-center justify-center"
        style={{ background: p.bg }}
      >
        <span
          className="font-display font-medium text-5xl inline-flex items-baseline"
          style={{ letterSpacing: "-0.04em", color: p.main }}
        >
          <span>Blee</span>
          {isGradientAccent ? (
            <span
              style={{
                background: "linear-gradient(135deg,#23D3EE,#8B5CF6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              b
            </span>
          ) : (
            <span style={{ color: p.accent }}>b</span>
          )}
        </span>
      </div>
      <div className="p-4 space-y-1.5">
        <div className="font-display text-sm text-bleeb-text">{p.label}</div>
        <div className="font-mono text-[10px] text-bleeb-muted">bg · {p.bgLabel}</div>
        <div className="font-mono text-[10px] text-bleeb-muted">main · {p.mainName}</div>
        <div className="font-mono text-[10px] text-bleeb-muted">accent · {p.accentName}</div>
      </div>
    </div>
  );
}

function RuleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 py-2.5 border-b border-border last:border-b-0 items-baseline">
      <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{label}</div>
      <div className="text-sm text-bleeb-text">{value}</div>
    </div>
  );
}

function DontTile({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-bleeb-rose/40 bg-bleeb-rose/5 p-5 flex flex-col items-center gap-3 min-h-40 relative overflow-hidden">
      <div className="font-mono text-[10px] text-bleeb-rose uppercase tracking-wider absolute top-2 left-2">don't · {label}</div>
      <div className="my-auto">{children}</div>
      <div className="font-mono text-[10px] text-bleeb-muted text-center max-w-[200px]">{hint}</div>
    </div>
  );
}

export function WordmarkGuidelines() {
  return (
    <div className="space-y-10">
      {/* Anatomy */}
      <div className="rounded-lg border border-border bg-bleeb-surface-1 p-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
          <div className="flex items-center justify-center min-h-[180px] bg-bleeb-bg rounded-md border border-border">
            <BleebWordmark className="text-7xl" />
          </div>
          <div>
            <div className="font-mono text-[11px] text-bleeb-cyan uppercase tracking-wider mb-1">Anatomy</div>
            <h3 className="font-display text-xl text-bleeb-text mb-4">Bleeb — five letters, one accent</h3>
            <RuleRow label="Case" value='Always "Bleeb". B capital, rest lowercase. Never BLEEB, bleeb, BleeB.' />
            <RuleRow label="Font" value="Space Grotesk · Medium for body, SemiBold for UI, Bold for hero." />
            <RuleRow label="Tracking" value="−0.04em fisso, ogni size, ogni superficie." />
            <RuleRow label="Composition" value='"Blee" in main color · final "b" in accent color. The b carries the brand.' />
            <RuleRow label="Min size · screen" value="14 px x-height" />
            <RuleRow label="Min size · print" value="8 mm cap height" />
            <RuleRow label="Clear space" value='≥ height of the "B" on every side' />
          </div>
        </div>
      </div>

      {/* Color pairs */}
      <div>
        <div className="font-mono text-[11px] text-bleeb-cyan uppercase tracking-wider mb-1">Official color pairs</div>
        <h3 className="font-display text-xl text-bleeb-text mb-4">Every background has one correct main/accent</h3>
        <p className="text-sm text-bleeb-muted mb-5 max-w-2xl">
          The accent on the final <span className="font-display text-bleeb-text">b</span> must contrast against the
          surface. Never pick an accent that lives inside the background gradient — that's how the b disappears.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAIRS.map((p) => <PairTile key={p.label} p={p} />)}
        </div>
      </div>

      {/* Lockup with symbol */}
      <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
        <div className="font-mono text-[11px] text-bleeb-violet uppercase tracking-wider mb-1">Lockup with symbol</div>
        <h3 className="font-display text-xl text-bleeb-text mb-4">Symbol + wordmark, optical baseline</h3>
        <RuleRow label="Horizontal" value="Symbol left of wordmark, optical baseline aligned. Gap = ½ symbol height." />
        <RuleRow label="Vertical" value="Symbol above wordmark, centered. Gap = ¼ symbol height." />
        <RuleRow label="Never" value="Wordmark above symbol. Symbol on top is a separate, non-brand composition." />
      </div>

      {/* Don'ts */}
      <div>
        <div className="font-mono text-[11px] text-bleeb-rose uppercase tracking-wider mb-3">Wordmark don'ts</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <DontTile label="No uppercase" hint='Never "BLEEB". The case is a brand fingerprint.'>
            <span className="font-display font-medium text-4xl text-bleeb-text" style={{ letterSpacing: "-0.04em" }}>
              BLEEB
            </span>
          </DontTile>
          <DontTile label="No lowercase" hint='Never "bleeb". The capital B opens the mark.'>
            <span className="font-display font-medium text-4xl text-bleeb-text" style={{ letterSpacing: "-0.04em" }}>
              bleeb
            </span>
          </DontTile>
          <DontTile label="No mixed case" hint='Never "BleeB", "BLeEb", or any cute variation.'>
            <span className="font-display font-medium text-4xl text-bleeb-text" style={{ letterSpacing: "-0.04em" }}>
              BleeB
            </span>
          </DontTile>
          <DontTile label="No off-palette accent" hint="The b accent stays inside the brand palette.">
            <span className="font-display font-medium text-4xl text-bleeb-text inline-flex items-baseline" style={{ letterSpacing: "-0.04em" }}>
              Blee<span style={{ color: "#FF9100" }}>b</span>
            </span>
          </DontTile>
          <DontTile label="No low contrast" hint="Accent must clearly read against the background.">
            <div className="px-3 py-2 rounded" style={{ background: "#8B5CF6" }}>
              <span className="font-display font-medium text-4xl text-white inline-flex items-baseline" style={{ letterSpacing: "-0.04em" }}>
                Blee<span style={{ color: "#9B6CF6" }}>b</span>
              </span>
            </div>
          </DontTile>
          <DontTile label="No spacing" hint='Never break "Blee" and the final "b" apart.'>
            <span className="font-display font-medium text-4xl text-bleeb-text inline-flex items-baseline gap-2" style={{ letterSpacing: "-0.04em" }}>
              <span>Blee</span>
              <span className="text-bleeb-cyan">b</span>
            </span>
          </DontTile>
          <DontTile label="No other font" hint="Space Grotesk only. No serif, no script, no display swap.">
            <span className="text-4xl font-serif italic text-bleeb-text inline-flex items-baseline" style={{ letterSpacing: "0" }}>
              Blee<span className="text-bleeb-cyan">b</span>
            </span>
          </DontTile>
          <DontTile label="No stretch / skew" hint="Always uniform scale. Never deform.">
            <span className="font-display font-medium text-4xl text-bleeb-text inline-flex items-baseline" style={{ letterSpacing: "-0.04em", transform: "scaleX(1.6) skewX(-8deg)" }}>
              Blee<span className="text-bleeb-cyan">b</span>
            </span>
          </DontTile>
        </div>
      </div>
    </div>
  );
}
