import { BleebLogo } from "./BleebLogo";
import { printEquivalents } from "./brand-tokens";

/** "Don't" example tile — symbol shown wrong with a red overlay. */
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
    <div className="rounded-lg border border-bleeb-rose/40 bg-bleeb-rose/5 p-5 flex flex-col items-center gap-3 min-h-44 relative overflow-hidden">
      <div className="font-mono text-[10px] text-bleeb-rose uppercase tracking-wider absolute top-2 left-2">don't · {label}</div>
      <div className="relative my-auto opacity-90">{children}</div>
      <div className="font-mono text-[10px] text-bleeb-muted text-center max-w-[180px]">{hint}</div>
    </div>
  );
}

function RuleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-4 py-2.5 border-b border-border last:border-b-0 items-baseline">
      <div className="font-mono text-[11px] text-bleeb-muted uppercase tracking-wider">{label}</div>
      <div className="text-sm text-bleeb-text">{value}</div>
    </div>
  );
}

export function UsageRules() {
  return (
    <div className="space-y-10">
      {/* Online + Offline rules side by side */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Online */}
        <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-mono text-[11px] text-bleeb-cyan uppercase tracking-wider">Online</div>
              <h3 className="font-display text-xl text-bleeb-text mt-1">Digital surfaces</h3>
            </div>
            <div className="font-mono text-[10px] text-bleeb-muted">web · app · social · email</div>
          </div>
          <div>
            <RuleRow label="Clear space" value="≥ symbol-height ÷ 2 on every side" />
            <RuleRow label="Min size · full" value="32 px" />
            <RuleRow label="Min size · mono" value="24 px" />
            <RuleRow label="Min size · favicon" value="16 px" />
            <RuleRow label="Backgrounds" value="Full on #080A0F → #202838; mono anywhere with AA contrast ≥ 4.5:1" />
            <RuleRow label="Animation" value="Idle spark only above 480 px viewport and with prefers-reduced-motion: no-preference" />
            <RuleRow label="Favicon" value="favicon.svg for browser tab; bleeb-favicon-rounded.svg for app icons" />
            <RuleRow label="OG image" value="1200 × 630, full logo on bleeb-bg, primary payoff bottom-left" />
            <RuleRow label="Social avatar" value="Square lockup 512 × 512" />
            <RuleRow label="Email signature" value="mono-light 24 px + wordmark 14 pt Inter" />
          </div>
        </div>

        {/* Offline */}
        <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-mono text-[11px] text-bleeb-violet uppercase tracking-wider">Offline</div>
              <h3 className="font-display text-xl text-bleeb-text mt-1">Print & physical</h3>
            </div>
            <div className="font-mono text-[10px] text-bleeb-muted">print · merch · signage</div>
          </div>
          <div>
            <RuleRow label="Color print" value="Full color SVG or PNG @ 1024 minimum, CMYK from table below" />
            <RuleRow label="Mono print" value="mono-light on light paper, mono-dark on dark/black" />
            <RuleRow label="Min size · symbol" value="12 mm width" />
            <RuleRow label="Min size · lockup" value="20 mm width" />
            <RuleRow label="Merch / textile" value="Mono variant only; spark must stay filled (no outline)" />
            <RuleRow label="Embroidery" value="Min 40 mm, favicon geometry, max 3 colors, no halo" />
            <RuleRow label="Signage" value="Vector or PNG @ 1024+; never upscale below source" />
            <RuleRow label="Paper stocks" value="Coated for color fidelity; uncoated for mono only" />
          </div>
        </div>
      </div>

      {/* CMYK / Pantone table */}
      <div className="rounded-lg border border-border bg-bleeb-surface-1 p-6">
        <div className="font-mono text-[11px] text-bleeb-amber uppercase tracking-wider mb-1">Print equivalents</div>
        <h3 className="font-display text-xl text-bleeb-text mb-4">CMYK & Pantone reference</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(printEquivalents).map(([name, p]) => (
            <div key={name} className="flex items-center gap-3 rounded-md border border-border bg-bleeb-bg p-3">
              <div className="size-12 rounded-md shrink-0 border border-border" style={{ background: p.hex }} />
              <div className="min-w-0">
                <div className="font-display text-sm text-bleeb-text capitalize">{name}</div>
                <div className="font-mono text-[11px] text-bleeb-muted">{p.hex}</div>
                <div className="font-mono text-[10px] text-bleeb-muted">{p.cmyk} · {p.pantone}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Universal don'ts */}
      <div>
        <div className="font-mono text-[11px] text-bleeb-rose uppercase tracking-wider mb-3">Universal don'ts</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <DontTile label="No rotation" hint="The mark always sits upright. Never tilt.">
            <div style={{ transform: "rotate(22deg)" }}><BleebLogo size={64} animated={false} /></div>
          </DontTile>
          <DontTile label="No recolor" hint="Stay inside the brand palette. No custom tints.">
            <div style={{ filter: "hue-rotate(140deg) saturate(1.4)" }}><BleebLogo size={64} animated={false} /></div>
          </DontTile>
          <DontTile label="No stretch" hint="Always uniform scale. Never squash or stretch.">
            <div style={{ transform: "scaleX(1.8)" }}><BleebLogo size={64} animated={false} /></div>
          </DontTile>
          <DontTile label="No drop shadow" hint="The halo is the only depth. No external shadow.">
            <div style={{ filter: "drop-shadow(4px 6px 8px rgba(0,0,0,0.7))" }}><BleebLogo size={64} animated={false} /></div>
          </DontTile>
          <DontTile label="No busy bg" hint="Place on solid bleeb-bg or neutral surfaces.">
            <div className="p-3 rounded" style={{ background: "repeating-linear-gradient(45deg, #c44, #c44 6px, #4c4 6px, #4c4 12px)" }}>
              <BleebLogo size={56} animated={false} />
            </div>
          </DontTile>
          <DontTile label="No outline" hint="Full variant is filled. Never stroke the gradient.">
            <div style={{ filter: "invert(1) contrast(2)" }}><BleebLogo size={64} animated={false} /></div>
          </DontTile>
        </div>
      </div>
    </div>
  );
}
