import { BleebLogo, type LogoColorMode } from "./BleebLogo";
import { BleebWordmark } from "./BleebWordmark";
import { BleebPayoff } from "./BleebPayoff";
import type { PayoffVariant } from "./brand-voice";

interface HorizontalProps {
  symbolSize?: number;
  textClass?: string;
  colorMode?: LogoColorMode;
  payoff?: PayoffVariant | null;
}

export function BleebLockupHorizontal({
  symbolSize = 36,
  textClass = "text-3xl",
  colorMode = "color",
  payoff = null,
}: HorizontalProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <BleebLogo size={symbolSize} colorMode={colorMode} animated />
      <div className="flex flex-col leading-none gap-1">
        <BleebWordmark className={textClass} />
        {payoff ? (
          <BleebPayoff variant={payoff} size="xs" className="text-bleeb-muted" />
        ) : null}
      </div>
    </div>
  );
}

interface SquareProps {
  size?: number;
  colorMode?: LogoColorMode;
  payoff?: PayoffVariant | null;
}

export function BleebLockupSquare({ size = 120, colorMode = "color", payoff = null }: SquareProps) {
  return (
    <div className="inline-flex flex-col items-center gap-2" style={{ width: size }}>
      <BleebLogo size={size * 0.55} colorMode={colorMode} animated />
      <BleebWordmark className="text-base" />
      {payoff ? (
        <BleebPayoff variant={payoff} size="xs" className="text-bleeb-muted text-center" />
      ) : null}
    </div>
  );
}
