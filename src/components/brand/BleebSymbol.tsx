import { BleebSymbolFull } from "./BleebSymbolFull";
import { BleebSymbolMono } from "./BleebSymbolMono";

interface Props {
  size?: number;
  monochrome?: boolean;
  animated?: boolean;
  state?: "rest" | "generating";
  className?: string;
}

/**
 * Backwards-compatible wrapper. Delegates to the Full or Mono variant
 * depending on the `monochrome` flag. Existing consumers (BleebWordmark,
 * BleebLockups) keep working unchanged.
 *
 * For new code, prefer importing BleebSymbolFull / BleebSymbolMono /
 * BleebSymbolFavicon directly — they make the choice explicit.
 */
export function BleebSymbol({ monochrome, ...rest }: Props) {
  if (monochrome) return <BleebSymbolMono {...rest} />;
  return <BleebSymbolFull {...rest} />;
}
