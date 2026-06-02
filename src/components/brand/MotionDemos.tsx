import { motion } from "motion/react";
import { useState } from "react";

function DemoFrame({ title, children, onReplay }: { title: string; children: React.ReactNode; onReplay: () => void }) {
  return (
    <div className="rounded-lg border border-border bg-bleeb-surface-1 overflow-hidden">
      <div className="relative h-44 flex items-center justify-center bg-grid">
        {children}
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-border">
        <div className="font-mono text-xs text-bleeb-muted">{title}</div>
        <button
          onClick={onReplay}
          className="font-mono text-[11px] text-bleeb-cyan hover:text-bleeb-text transition-colors"
        >
          replay ↻
        </button>
      </div>
    </div>
  );
}

export function SignalRevealDemo() {
  const [k, setK] = useState(0);
  return (
    <DemoFrame title="signal_reveal" onReplay={() => setK((v) => v + 1)}>
      <svg width="240" height="80" viewBox="0 0 240 80" key={k}>
        {[20, 80, 140, 200].map((cx, i) => (
          <motion.circle
            key={cx} cx={cx} cy="40" r="6"
            fill="var(--bleeb-surface-3)"
            animate={{ fill: ["var(--bleeb-surface-3)", "var(--bleeb-cyan)"] }}
            transition={{ duration: 0.22, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        <motion.line
          x1="20" y1="40" x2="200" y2="40"
          stroke="url(#signalGrad)" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="signalGrad" x1="0" x2="1">
            <stop offset="0" stopColor="var(--bleeb-cyan)" />
            <stop offset="1" stopColor="var(--bleeb-violet)" />
          </linearGradient>
        </defs>
      </svg>
    </DemoFrame>
  );
}

export function SpecMaterializeDemo() {
  const [k, setK] = useState(0);
  return (
    <DemoFrame title="spec_materialize" onReplay={() => setK((v) => v + 1)}>
      <div key={k} className="flex flex-col gap-1.5 w-48">
        {["app.spec", "  pages: 4", "  workflows: 2", "  data: postgres"].map((line, i) => (
          <motion.div
            key={i}
            className="font-mono text-[11px] text-bleeb-text bg-bleeb-surface-2 px-2 py-1 rounded"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.22, delay: i * 0.075, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </DemoFrame>
  );
}

export function BuildPulseDemo() {
  const [k, setK] = useState(0);
  return (
    <DemoFrame title="build_pulse" onReplay={() => setK((v) => v + 1)}>
      <div key={k} className="w-56 space-y-2">
        <div className="flex items-center gap-2 font-mono text-[11px] text-bleeb-muted">
          <motion.span
            className="size-2 rounded-full bg-bleeb-amber"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          building…
        </div>
        <div className="h-1.5 bg-bleeb-surface-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{ background: "var(--gradient-build)" }}
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="font-mono text-[10px] text-bleeb-muted">step 4 of 6 · vite bundle</div>
      </div>
    </DemoFrame>
  );
}

export function WorkflowTraceDemo() {
  const [k, setK] = useState(0);
  return (
    <DemoFrame title="workflow_trace" onReplay={() => setK((v) => v + 1)}>
      <svg key={k} width="260" height="100" viewBox="0 0 260 100">
        {[
          { x: 20, label: "trg", color: "var(--bleeb-cyan)" },
          { x: 100, label: "llm", color: "var(--bleeb-violet)" },
          { x: 180, label: "act", color: "var(--bleeb-green)" },
          { x: 240, label: "ok", color: "var(--bleeb-green)" },
        ].map((n, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.18, duration: 0.22 }}
          >
            <rect x={n.x - 18} y="36" width="36" height="28" rx="4" fill="var(--bleeb-surface-2)" stroke={n.color} />
            <text x={n.x} y="54" textAnchor="middle" fontSize="9" fill="var(--bleeb-text)" fontFamily="JetBrains Mono">
              {n.label}
            </text>
          </motion.g>
        ))}
        <motion.path
          d="M 38 50 L 82 50 M 118 50 L 162 50 M 198 50 L 222 50"
          stroke="var(--bleeb-green)" strokeWidth="2" fill="none" strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: "linear" }}
        />
      </svg>
    </DemoFrame>
  );
}
