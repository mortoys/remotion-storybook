import { BoundaryData } from "@/components/Subtitle/Motion";

import type { EffectType } from '@/components/Effect/effects'
import type { TransitionType } from '@/components/Transition/transitions'

interface Screen {
  duration: number;
  transition: TransitionType;
  effect: EffectType;
  subtitle: BoundaryData[];
  audio: string;
  image: string;
}

export type inputProps = {
  slides: Screen[]
}
