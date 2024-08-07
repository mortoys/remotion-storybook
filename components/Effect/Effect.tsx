import React from "react";

import { TiltShiftEffect } from "./TiltShiftEffect";

import type { EffectType } from "./effects";
import { effects } from "./effects";

interface EffectProps {
  effect: EffectType;
  children: React.ReactNode;
}

export const Effect: React.FC<EffectProps> = ({ effect, children }) => {
  const effectConfig = effects[effect];

  return <TiltShiftEffect effect={effectConfig}>{children}</TiltShiftEffect>;
};
