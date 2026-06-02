import { BleebBadge } from "./BleebBadge";
import { BleebKbd } from "./BleebKbd";
import { BleebCallout } from "./BleebCallout";
import { BleebTag } from "./BleebTag";
import { BleebMetric } from "./BleebMetric";
import { BleebAvatar } from "./BleebAvatar";
import { BleebDivider } from "./BleebDivider";
import { BleebCodeBlock } from "./BleebCodeBlock";
import { BleebPayoff } from "./BleebPayoff";

function Cell({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-bleeb-surface-1 p-5 space-y-3">
      <div>
        <div className="font-mono text-[11px] text-bleeb-cyan uppercase tracking-wider">{title}</div>
        {hint ? <div className="font-mono text-[10px] text-bleeb-muted">{hint}</div> : null}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function ComponentsShowcase() {
  const sampleCode = `import { BleebPayoff } from "@/components/brand/BleebPayoff";

<BleebPayoff variant="primary" size="lg" />
// → "Build living software from an idea."`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Cell title="BleebBadge" hint="Status & state pills">
        <div className="flex flex-wrap gap-2">
          <BleebBadge variant="ai" pulse>AI</BleebBadge>
          <BleebBadge variant="generating" pulse>Generating</BleebBadge>
          <BleebBadge variant="beta">Beta</BleebBadge>
          <BleebBadge variant="live" pulse>Live</BleebBadge>
          <BleebBadge variant="draft">Draft</BleebBadge>
          <BleebBadge variant="neutral">Neutral</BleebBadge>
        </div>
      </Cell>

      <Cell title="BleebKbd" hint="Keyboard shortcuts">
        <div className="flex items-center gap-2 text-sm text-bleeb-muted">
          Generate
          <BleebKbd>⌘</BleebKbd>
          <BleebKbd>⇧</BleebKbd>
          <BleebKbd>G</BleebKbd>
        </div>
        <div className="flex items-center gap-2 text-sm text-bleeb-muted">
          Open command palette
          <BleebKbd>⌘</BleebKbd>
          <BleebKbd>K</BleebKbd>
        </div>
      </Cell>

      <Cell title="BleebCallout" hint="5 variants">
        <BleebCallout variant="ai" title="AI-generated">
          Review the output before shipping. Every run is logged for audit.
        </BleebCallout>
        <BleebCallout variant="warning" title="Approaching credit limit">
          You have used 92% of this month's credits.
        </BleebCallout>
      </Cell>

      <Cell title="BleebTag" hint="Inline chips, accent-aware">
        <div className="flex flex-wrap gap-2">
          <BleebTag accent="cyan">ai</BleebTag>
          <BleebTag accent="green">workflow</BleebTag>
          <BleebTag accent="violet">reasoning</BleebTag>
          <BleebTag accent="amber">credits</BleebTag>
          <BleebTag accent="rose">danger</BleebTag>
          <BleebTag accent="blue">billing</BleebTag>
          <BleebTag>neutral</BleebTag>
        </div>
      </Cell>

      <Cell title="BleebMetric" hint="Dashboard numbers">
        <div className="grid grid-cols-2 gap-3">
          <BleebMetric label="Credits" value="1,240" unit="this month" trend={{ value: "+12%", direction: "up" }} />
          <BleebMetric label="Latency" value="312" unit="ms p95" trend={{ value: "-4%", direction: "down" }} />
        </div>
      </Cell>

      <Cell title="BleebAvatar" hint="Initials fallback, active ring">
        <div className="flex items-center gap-3">
          <BleebAvatar name="Ada Lovelace" />
          <BleebAvatar name="Grace Hopper" size={48} active />
          <BleebAvatar name="Linus Torvalds" size={32} />
          <BleebAvatar name="Margaret Hamilton" size={56} />
        </div>
      </Cell>

      <Cell title="BleebDivider" hint="With or without label">
        <BleebDivider />
        <BleebDivider label="or" />
        <BleebDivider label="generated output" />
      </Cell>

      <Cell title="BleebPayoff" hint="3 sizes, 8 variants — see brand-voice.ts">
        <BleebPayoff variant="primary" size="md" />
        <BleebPayoff variant="short" size="sm" className="text-bleeb-muted" />
        <BleebPayoff variant="imperative" size="xs" className="text-bleeb-cyan" />
      </Cell>

      <div className="md:col-span-2">
        <Cell title="BleebCodeBlock" hint="With copy button">
          <BleebCodeBlock language="tsx" code={sampleCode} />
        </Cell>
      </div>
    </div>
  );
}
