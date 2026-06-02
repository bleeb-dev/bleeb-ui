import { BleebLogo, type LogoColorMode } from "./BleebLogo";
import { BleebWordmark } from "./BleebWordmark";
import { BleebPayoff } from "./BleebPayoff";
import type { PayoffVariant } from "./brand-voice";

interface Props {
  size?: number;
  colorMode?: LogoColorMode;
  payoff?: PayoffVariant | null;
  className?: string;
}

export function BleebLockupVertical({
  size = 96,
  colorMode = "color",
  payoff = null,
  className,
}: Props) {
  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className ?? ""}`}>
      <BleebLogo size={size} colorMode={colorMode} animated />
      <BleebWordmark className="text-2xl" />
      {payoff ? (
        <BleebPayoff variant={payoff} size="xs" className="text-bleeb-muted text-center" />
      ) : null}
    </div>
  );
}
