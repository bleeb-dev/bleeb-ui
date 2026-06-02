import * as React from "react";
import { BleebProgress } from "./BleebProgress";
import { BleebSpinner } from "./BleebSpinner";
import { BleebSkeleton } from "./BleebSkeleton";
import { BleebPromptInput } from "./BleebPromptInput";
import { BleebAIMessage } from "./BleebAIMessage";
import { BleebRunLog } from "./BleebRunLog";
import { BleebCreditMeter } from "./BleebCreditMeter";
import { BleebStepper } from "./BleebStepper";
import { BleebEmptyState } from "./BleebEmptyState";
import { BleebStatusDot } from "./BleebStatusDot";
import { BleebToastPreview, bleebToast } from "./BleebToast";
import { BleebTabs, BleebTabsList, BleebTabsTrigger, BleebTabsContent } from "./BleebTabs";
import { BleebTooltip } from "./BleebTooltip";
import { BleebCommandHint } from "./BleebCommandHint";

function Cell({ title, hint, children, span }: { title: string; hint?: string; children: React.ReactNode; span?: boolean }) {
  return (
    <div className={`rounded-lg border border-border bg-bleeb-surface-1 p-5 space-y-4 ${span ? "md:col-span-2" : ""}`}>
      <div>
        <div className="font-mono text-[11px] text-bleeb-cyan uppercase tracking-wider">{title}</div>
        {hint ? <div className="font-mono text-[10px] text-bleeb-muted">{hint}</div> : null}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function ProductPrimitivesShowcase() {
  const [progress, setProgress] = React.useState(42);

  React.useEffect(() => {
    const id = setInterval(() => setProgress((p) => (p >= 100 ? 12 : p + 7)), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Cell title="BleebProgress" hint="Determinate + indeterminate (AI thinking)">
        <BleebProgress value={progress} accent="cyan" label="Generating spec" />
        <BleebProgress value={88} accent="amber" label="Build" />
        <BleebProgress indeterminate accent="violet" label="Reasoning…" />
      </Cell>

      <Cell title="BleebSpinner & BleebSkeleton" hint="Loading states">
        <div className="flex items-center gap-6">
          <BleebSpinner size={20} label="Generating…" />
          <BleebSpinner size={28} />
        </div>
        <div className="space-y-2 pt-2">
          <BleebSkeleton className="w-3/4" />
          <BleebSkeleton className="w-1/2" />
          <BleebSkeleton variant="block" />
        </div>
      </Cell>

      <Cell title="BleebPromptInput" hint="AI prompt with ⌘⏎ submit + token count" span>
        <BleebPromptInput placeholder="Build me a CRM for boutique hotels…" />
      </Cell>

      <Cell title="BleebAIMessage" hint="ai · user · thinking · streaming · error" span>
        <div className="space-y-3">
          <BleebAIMessage role="user" author="Alex">
            Generate a pricing page for an AI workspace.
          </BleebAIMessage>
          <BleebAIMessage role="ai" state="streaming">
            Scaffolding three tiers — Free, Team, Scale — with credit-based usage
          </BleebAIMessage>
          <BleebAIMessage role="ai" state="thinking" />
        </div>
      </Cell>

      <Cell title="BleebRunLog" hint="Audit trail · timestamp · event · cost" span>
        <BleebRunLog
          entries={[
            { ts: "14:02:11", event: "ai",       message: "Generated pricing page (claude-3.7)", cost: "1,240 cr" },
            { ts: "14:02:34", event: "workflow", message: "Pushed branch feat/pricing → preview" },
            { ts: "14:02:58", event: "deploy",   message: "Deployed preview · bleeb.dev/p/4821" },
            { ts: "14:03:12", event: "error",    message: "Stripe webhook signature mismatch" },
            { ts: "14:03:40", event: "system",   message: "Reduced motion preference applied" },
          ]}
        />
      </Cell>

      <Cell title="BleebCreditMeter" hint="Build amber → alert rose at 90%">
        <BleebCreditMeter used={1240} total={5000} />
        <BleebCreditMeter used={4720} total={5000} label="Credits · warning zone" />
      </Cell>

      <Cell title="BleebStepper" hint="Workflow trace · pending · active · done · error">
        <BleebStepper
          steps={[
            { label: "Brief",    state: "done",    hint: "Parsed" },
            { label: "Spec",     state: "done",    hint: "v0.3" },
            { label: "Generate", state: "active",  hint: "Streaming…" },
            { label: "Review",   state: "pending" },
            { label: "Deploy",   state: "pending" },
          ]}
        />
      </Cell>

      <Cell title="BleebStatusDot" hint="System & resource state">
        <div className="flex flex-wrap gap-4">
          <BleebStatusDot status="live" />
          <BleebStatusDot status="generating" />
          <BleebStatusDot status="idle" />
          <BleebStatusDot status="offline" />
          <BleebStatusDot status="error" />
        </div>
      </Cell>

      <Cell title="BleebToast" hint="Brand toast over sonner · click to test">
        <div className="space-y-2">
          <BleebToastPreview variant="ai" title="Generation complete" description="Pricing page ready for review." />
          <BleebToastPreview variant="warning" title="Approaching credit limit" description="92% used this month." />
        </div>
        <button
          onClick={() => bleebToast({ variant: "success", title: "Deployed", description: "bleeb.dev/p/4821 is live." })}
          className="font-mono text-[11px] text-bleeb-cyan hover:underline"
        >
          Fire toast →
        </button>
      </Cell>

      <Cell title="BleebTabs" hint="Underline cyan, glow on active" span>
        <BleebTabs defaultValue="spec">
          <BleebTabsList>
            <BleebTabsTrigger value="spec">Spec</BleebTabsTrigger>
            <BleebTabsTrigger value="code">Code</BleebTabsTrigger>
            <BleebTabsTrigger value="preview">Preview</BleebTabsTrigger>
            <BleebTabsTrigger value="audit">Audit</BleebTabsTrigger>
          </BleebTabsList>
          <BleebTabsContent value="spec" className="text-sm text-bleeb-muted">
            The structured plan the AI follows. Versioned, diffable, auditable.
          </BleebTabsContent>
          <BleebTabsContent value="code" className="text-sm text-bleeb-muted">
            Generated source — TypeScript-first, idiomatic, fully owned by you.
          </BleebTabsContent>
          <BleebTabsContent value="preview" className="text-sm text-bleeb-muted">
            Live sandbox of the build. Updates as the AI streams.
          </BleebTabsContent>
          <BleebTabsContent value="audit" className="text-sm text-bleeb-muted">
            Every generation logged: model, cost, version, who triggered it.
          </BleebTabsContent>
        </BleebTabs>
      </Cell>

      <Cell title="BleebTooltip & BleebCommandHint" hint="Microcopy primitives">
        <div className="flex items-center gap-6">
          <BleebTooltip label="Re-run the last generation">
            <button className="rounded-md border border-border bg-bleeb-surface-2 px-3 py-1.5 text-xs text-bleeb-text hover:border-bleeb-cyan/50 transition-colors">
              Re-run
            </button>
          </BleebTooltip>
          <BleebCommandHint keys={["⌘", "K"]}>Search</BleebCommandHint>
        </div>
      </Cell>

      <Cell title="BleebEmptyState" hint="No data · onboarding · zero state" span>
        <BleebEmptyState
          title="No projects yet."
          description="Describe what you want to build and Bleeb will scaffold the first version in seconds."
          action={
            <button className="font-mono text-[11px] uppercase tracking-wider text-bleeb-cyan border border-bleeb-cyan/40 rounded-md px-3 py-1.5 hover:bg-bleeb-cyan/10 transition-colors">
              Start a project
            </button>
          }
        />
      </Cell>
    </div>
  );
}
