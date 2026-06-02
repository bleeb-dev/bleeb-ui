import { defineConfig } from "tsup";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoSrc = path.resolve(__dirname, "src");

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "brand/index": "src/brand/index.ts",
    "neon/index": "src/neon/index.ts",
    "ui/index": "src/ui/index.ts",
    "tokens/index": "src/tokens/index.ts",
    "tailwind-preset": "src/tailwind-preset.ts",
  },
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  target: "es2022",
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    /^@radix-ui\//,
    "lucide-react",
    "framer-motion",
    "motion",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "next-themes",
    "sonner",
    "cmdk",
    "vaul",
    "embla-carousel-react",
    "react-day-picker",
    "date-fns",
    "input-otp",
    "react-resizable-panels",
    "recharts",
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
  ],
  esbuildOptions(options) {
    options.alias = {
      "@": repoSrc,
    };
    options.jsx = "automatic";
  },
});
