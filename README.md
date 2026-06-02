# @bleeb/ui

Design system di Bleeb — atomi di brand, componenti Neon, set completo shadcn/ui, token e CSS pronto.

> Versione `0.1.0`. Pacchetto pubblico MIT del design system Bleeb.

## Installazione

```bash
npm install @bleeb/ui
# peer deps
npm install react react-dom tailwindcss
```

Oppure da git (senza pubblicare):

```bash
# bun / pnpm supportano i subpath
bun add @bleeb/ui@github:<org>/<repo>#path:packages/ui
```

## Setup

### 1. CSS

Importa il foglio di stile una sola volta nell'entry dell'app:

```ts
// src/main.tsx  oppure  src/routes/__root.tsx
import "@bleeb/ui/styles.css";
```

Contiene reset, font, CSS variables di Bleeb e i blocchi `@theme` di Tailwind v4.

### 2. Tailwind v4

Se la tua app non ha già Tailwind configurato:

```css
/* app.css */
@import "tailwindcss";
@import "@bleeb/ui/styles.css";
```

Tutti i token (`--bg`, `--cyan`, `--surface-1`, ecc.) e le utility (`bg-bleeb-cyan`, `text-foreground`...) diventano disponibili automaticamente.

### 2b. Fonts

Il pacchetto **non bundle-a font**: vanno caricati lato app. Tre opzioni, scegline una.

**A. Self-host via `@fontsource` (consigliato)** — i font sono dichiarati come `optionalDependencies`, installali con:

```bash
npm i @fontsource/inter @fontsource/space-grotesk @fontsource/jetbrains-mono
```

Poi nell'entry:

```ts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@bleeb/ui/styles.css";
```

**B. Google Fonts CDN** — nell'`<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

**C. File brand** — i `.woff2` ufficiali stanno in `public/brand/fonts/` della repo. Scarica `fonts.css` + i `.woff2`, mettili sotto `public/` della tua app e:

```css
@import url("/brand/fonts/fonts.css");
```

Famiglie / pesi attesi dai token (`--font-display`, `--font-sans`, `--font-mono`):

| Token | Famiglia | Pesi |
|---|---|---|
| `--font-display` | Space Grotesk | 400, 500, 600, 700 |
| `--font-sans` | Inter | 400, 500, 600 |
| `--font-mono` | JetBrains Mono | 400, 500 |



### 3. Token in JS

```ts
import { colors, accents, gradients, payoffs } from "@bleeb/ui/tokens";
import { bleebTheme } from "@bleeb/ui/tailwind-preset";
```

## Import

Entry granulari (consigliati per il tree-shaking):

```tsx
import { NeonButton, NeonInput } from "@bleeb/ui/neon";
import { BleebLogo, BleebPayoff } from "@bleeb/ui/brand";
import { Button, Card, Dialog } from "@bleeb/ui/ui";
import { colors, voicePillars } from "@bleeb/ui/tokens";
```

Entry root (più comodo, leggermente più grosso):

```tsx
import { NeonButton, BleebLogo, colors } from "@bleeb/ui";
```

## Cosa c'è dentro

| Entry | Contenuto |
|---|---|
| `@bleeb/ui/brand` | `BleebLogo`, `BleebSymbol*`, `BleebWordmark`, `BleebLockups`, `BleebPayoff`, `BleebAvatar`, `BleebBadge`, `BleebTag`, `BleebKbd`, `BleebDivider`, `BleebMetric`, `BleebCallout`, `BleebCodeBlock`, `useLogoMotion` |
| `@bleeb/ui/neon` | `NeonButton`, `NeonInput`, `NeonTextarea`, `NeonCheckbox`, `NeonSwitch`, `NeonRadioGroup`, `NeonSlider` |
| `@bleeb/ui/ui` | shadcn/ui completo (45 componenti) + `cn` |
| `@bleeb/ui/tokens` | `colors`, `accents`, `gradients`, `radii`, `durations`, `easings`, `type`, `payoffs`, `voicePillars`, `toneAttributes`, `doExamples` |
| `@bleeb/ui/styles.css` | CSS globali (variables + @theme) |
| `@bleeb/ui/tailwind-preset` | `bleebTheme` (oggetto token) + `tailwindV3Preset` (legacy) |

## Build / dev / test / publish

Tutti gli script funzionano sia con **pnpm** (dal root del monorepo) sia con **npm** (dentro `packages/ui/`).

### Build

```bash
# pnpm
pnpm --filter @bleeb/ui build

# npm
cd packages/ui && npm install && npm run build
```

### Watch

```bash
pnpm --filter @bleeb/ui dev
# oppure
cd packages/ui && npm run dev
```

### Test / typecheck

`test` esegue `tsc --noEmit`. Sostituiscilo con `vitest run` se aggiungi test unitari.

```bash
pnpm --filter @bleeb/ui test
# oppure
cd packages/ui && npm test
```

### Dry-run publish

```bash
pnpm --filter @bleeb/ui publish:dry
# oppure
cd packages/ui && npm run publish:dry
```

### Publish su npm

```bash
npm login                                              # una tantum
pnpm --filter @bleeb/ui release:patch                  # bump + publish
# oppure
cd packages/ui && npm run release:patch

# manuale
cd packages/ui
npm version <patch|minor|major>
npm publish --access public
```

Lo script `prepack` ricostruisce `dist/` prima della pubblicazione, quindi non serve buildare a mano.

### Alias dal root della repo (bun)

```bash
bun run ui:build
bun run ui:test
bun run ui:publish:dry
bun run ui:publish
bun run ui:release:patch
```

Il sito brand book della repo padre non viene toccato dal build del pacchetto.

## Peer deps

`react >=18`, `react-dom >=18`, `tailwindcss >=4`. Tutto il resto (Radix, lucide, framer-motion, recharts, ecc.) è gestito come `dependencies` del pacchetto.

## Link

- Sito: https://bleeb.dev
- Issues: https://github.com/bleeb/bleeb/issues
