import type {
  TransitionPresentation,
  // PresentationProps,
} from "@remotion/transitions";

import { none } from "@remotion/transitions/none";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { flip } from "@remotion/transitions/flip";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import type { ClockWipeProps } from "@remotion/transitions/clock-wipe";

type PresentationProps = Record<string, unknown>;
export interface TransitionConfig {
  type: TransitionType;
  func:
    | TransitionPresentation<PresentationProps>
    | ((props: PresentationProps) => TransitionPresentation<PresentationProps>);
}

export const baseTransition: TransitionConfig[] = [
  {
    type: "none",
    func: none(),
  },
  {
    type: "flip-left",
    func: flip({ direction: "from-left" }),
  },
  {
    type: "flip-right",
    func: flip({ direction: "from-right" }),
  },
  {
    type: "flip-top",
    func: flip({ direction: "from-top" }),
  },
  {
    type: "flip-bottom",
    func: flip({ direction: "from-bottom" }),
  },
  {
    type: "fade",
    func: fade(),
  },
  {
    type: "clock-wipe",
    //@ts-expect-error
    func: ({ width, height }: ClockWipeProps) => clockWipe({ width, height }),
  },
  {
    type: "slide-left",
    func: slide({ direction: "from-left" }),
  },
  {
    type: "slide-right",
    func: slide({ direction: "from-right" }),
  },
  {
    type: "slide-top",
    func: slide({ direction: "from-top" }),
  },
  {
    type: "slide-bottom",
    func: slide({ direction: "from-bottom" }),
  },
  {
    type: "wipe-left",
    func: wipe({ direction: "from-left" }),
  },
  {
    type: "wipe-right",
    func: wipe({ direction: "from-right" }),
  },
  {
    type: "wipe-top",
    func: wipe({ direction: "from-top" }),
  },
  {
    type: "wipe-bottom",
    func: wipe({ direction: "from-bottom" }),
  },
];

import { circularWipe } from "./rewrite/CircularWipe";
import { fadeThroughColor } from "./rewrite/FadeThroughColor";
import { linearWipe } from "./rewrite/LinearWipe";
import { pan } from "./rewrite/Pan";
import { slidingDoors } from "./rewrite/SlidingDoors";

export const rewriteTransition: TransitionConfig[] = [
  {
    type: "circular-wipe",
    //@ts-expect-error
    func: ({ width, height }) => circularWipe({ width, height }),
  },
  {
    type: "fade-through-color",
    func: fadeThroughColor({ color: "black" }),
  },
  {
    type: "linear-wipe",
    func: linearWipe({ angle: 180 + 60 }),
  },
  // {
  //   type: "pan-up",
  //   func: pan({ direction: "up" }),
  // },
  // {
  //   type: "pan-down",
  //   func: pan({ direction: "down" }),
  // },
  // {
  //   type: "pan-left",
  //   func: pan({ direction: "left" }),
  // },
  // {
  //   type: "pan-right",
  //   func: pan({ direction: "right" }),
  // },
  //   {
  //     type: 'sliding-doors-open',
  //     func: slidingDoors({ direction: 'open', angle: 220 })
  //   },
  {
    type: "sliding-doors-close",
    func: slidingDoors({ direction: "close", angle: 220 }),
  },
  //   {
  //     type: 'pan-right',
  //     func: pan({ direction: 'right' })
  //   },
];

export const transitions = [... baseTransition, ... rewriteTransition]

export const transitionsMap = Object.fromEntries(transitions.map(({ type, func }) => [type, func]));

type TransitionBase =
  | "none"
  | "flip-left"
  | "flip-right"
  | "flip-top"
  | "flip-bottom"
  | "fade"
  | "clock-wipe"
  | "slide-left"
  | "slide-right"
  | "slide-top"
  | "slide-bottom"
  | "wipe-left"
  | "wipe-right"
  | "wipe-top"
  | "wipe-bottom";
type TransitionRewrite =
  | "circular-wipe"
  | "fade-through-color"
  | "linear-wipe"
  //   | "pan-up"
  //   | "pan-down"
  //   | "pan-left"
  //   | "pan-right"
  | "sliding-doors-close";
// "sliding-doors-open"

export type TransitionType = TransitionBase | TransitionRewrite;