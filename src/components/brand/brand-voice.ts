/**
 * Bleeb voice & messaging — single source of truth.
 * Imported by the brand book UI and reusable across the app
 * (marketing pages, dashboards, emails).
 */

export type PayoffVariant =
  | "primary"
  | "short"
  | "product"
  | "workflow"
  | "governance"
  | "studio"
  | "stamp"
  | "imperative";

export interface Payoff {
  variant: PayoffVariant;
  text: string;
  /** Where it shines. */
  useFor: string;
  /** Hard avoid contexts. */
  avoid: string;
  /** Approximate character length. */
  length: number;
}

export const payoffs: Record<PayoffVariant, Payoff> = {
  primary: {
    variant: "primary",
    text: "Build living software from an idea.",
    useFor: "Hero, OG image, deck cover, master signature.",
    avoid: "Avatars, favicons, anything < 24px tall.",
    length: 36,
  },
  short: {
    variant: "short",
    text: "Ideas become systems.",
    useFor: "Sub-hero, social handle bios, tab titles, app loading.",
    avoid: "Standalone — pair with the wordmark or symbol.",
    length: 22,
  },
  product: {
    variant: "product",
    text: "Prompt to product. Workflow to system.",
    useFor: "Product pages, feature decks, sales one-pagers.",
    avoid: "Casual social posts, swag.",
    length: 39,
  },
  workflow: {
    variant: "workflow",
    text: "AI that builds, ships and runs your software.",
    useFor: "Landing pages targeting ops/engineering audiences.",
    avoid: "Investor or branding contexts where the master payoff fits.",
    length: 45,
  },
  governance: {
    variant: "governance",
    text: "AI with cost, memory and audit built in.",
    useFor: "Enterprise pitch, security/compliance pages, RFPs.",
    avoid: "Consumer-facing surfaces.",
    length: 40,
  },
  studio: {
    variant: "studio",
    text: "The operating system for AI-native products.",
    useFor: "Investor decks, partner intros, careers page.",
    avoid: "App UI; too long for navigation surfaces.",
    length: 44,
  },
  stamp: {
    variant: "stamp",
    text: "Bleeb. Live software.",
    useFor: "Merch, video outros, end frames, footer stamp.",
    avoid: "Body copy or headlines.",
    length: 21,
  },
  imperative: {
    variant: "imperative",
    text: "Generate. Govern. Ship.",
    useFor: "Posters, event banners, motion intros.",
    avoid: "Long-form copy, technical documentation.",
    length: 23,
  },
};

export const payoffList: Payoff[] = Object.values(payoffs);

export const toneAttributes = [
  "Intelligent",
  "Precise",
  "Direct",
  "Confident",
  "Pragmatic",
] as const;

export const voicePillars = [
  {
    pillar: "Core message",
    text: "Bleeb turns ideas into live apps and automated workflows with AI.",
  },
  {
    pillar: "Pillar · Idea to system",
    text: "From prompt to app, data, workflow and deployment.",
  },
  {
    pillar: "Pillar · AI with governance",
    text: "Every generation has cost, version, memory and audit.",
  },
  {
    pillar: "Pillar · Built-in automation",
    text: "Workflows are part of the product, not a separate afterthought.",
  },
] as const;

export const doExamples = [
  { label: "Action", text: "Generate workflow" },
  { label: "Metric",  text: "1,240 credits used" },
  { label: "State",   text: "Audit ready" },
  { label: "Verb",    text: "Ship to production" },
] as const;

export const dontExamples = [
  { label: "No magic",   text: "Magic ✨ AI sparkles" },
  { label: "No hype",    text: "Crushing it with AI" },
  { label: "No buzz",    text: "Web3-native intelligence" },
  { label: "No cliché",  text: "Disruption-ready platform" },
] as const;

export const microcopy = {
  loading: "Generating…",
  loadingLong: "Building your system. This may take a minute.",
  empty: "Nothing here yet. Describe what you want to build.",
  errorGeneric: "Something broke. The run has been logged for audit.",
  errorRetry: "Retry the last step",
  successGenerated: "Generated. Review before you ship.",
  successShipped: "Shipped to production.",
  aiLabel: "AI-generated · review before use",
  costPrefix: "Cost",
  versionPrefix: "v",
} as const;

export const namingConventions = [
  { kind: "Feature names",  rule: "PascalCase",       example: "WorkflowCanvas, AgentConsole" },
  { kind: "Design tokens",  rule: "kebab-case",       example: "bleeb-surface-2, duration-base" },
  { kind: "Env variables",  rule: "UPPER_SNAKE_CASE", example: "BLEEB_API_URL, OPENAI_API_KEY" },
  { kind: "Routes",         rule: "kebab-case",       example: "/agent-console, /api/public/webhook" },
  { kind: "Event names",    rule: "snake_case",       example: "workflow_generated, app_shipped" },
] as const;
