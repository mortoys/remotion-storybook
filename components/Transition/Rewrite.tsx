import React from "react";
import { useVideoConfig } from "remotion";
import {
  linearTiming,
  springTiming,
  TransitionSeries,
} from "@remotion/transitions";
import { AbsoluteFill } from "remotion";
import type {
  TransitionPresentation,
  // PresentationProps,
} from "@remotion/transitions";

import { none } from "@remotion/transitions/none";
// import { fade } from "@remotion/transitions/fade";
// import { slide } from "@remotion/transitions/slide";
// import { wipe } from "@remotion/transitions/wipe";
// import { flip } from "@remotion/transitions/flip";
// import { clockWipe } from "@remotion/transitions/clock-wipe";
// import type { ClockWipeProps } from "@remotion/transitions/clock-wipe";

import { circularWipe } from "./rewrite/CircularWipe";
import { fadeThroughColor } from './rewrite/FadeThroughColor'
import { linearWipe } from './rewrite/LinearWipe'
import { pan } from './rewrite/Pan'
import { slidingDoors } from './rewrite/SlidingDoors'

// import { cube } from "@remotion/transitions/";

const Fill = ({ color, text }: { color: string; text: string }) => {
  return (
    <AbsoluteFill
      style={{ backgroundColor: color }}
      className="flex justify-center items-center"
    >
      <div className="text-5xl text-white">{text}</div>
    </AbsoluteFill>
  );
};

type PresentationProps = Record<string, unknown>;
interface Transition {
  type: string;
  duration?: number;
  func:
    | TransitionPresentation<PresentationProps>
    | ((props: PresentationProps) => TransitionPresentation<PresentationProps>);
}

const colors = [
  "#8dd3c7",
  "#ffffb3",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#b3de69",
  "#fccde5",
  "#d9d9d9",
  "#bc80bd",
  "#ccebc5",
  "#ffed6f",
];

const transitions: Transition[] = [
  {
    type: "circular-wipe",
    //@ts-expect-error
    func: ({ width, height }) => circularWipe({ width, height }),
  },
  {
    type: "fade-through-color",
    func: fadeThroughColor({ color: 'black'}),
  },
  {
    type: 'linear-wipe',
    func: linearWipe({ angle: 180 + 60 })
  },
  {
    type: 'pan-up',
    func: pan({ direction: 'up' })
  },
  {
    type: 'pan-down',
    func: pan({ direction: 'down' })
  },
  {
    type: 'pan-left',
    func: pan({ direction: 'left' })
  },
  {
    type: 'pan-right',
    func: pan({ direction: 'right' })
  },
//   {
//     type: 'sliding-doors-open',
//     func: slidingDoors({ direction: 'open', angle: 220 })
//   },
  {
    type: 'sliding-doors-close',
    func: slidingDoors({ direction: 'close', angle: 220 })
  },
//   {
//     type: 'pan-right',
//     func: pan({ direction: 'right' })
//   },
];

export const TransitionComponent = () => {
  const { width, height } = useVideoConfig();

  return (
    <TransitionSeries>
      {transitions.map(({ type, func }, index) => (
        <React.Fragment key={type + index}>
          <TransitionSeries.Sequence durationInFrames={60}>
            <Fill color={colors[index % colors.length]} text={type} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            timing={linearTiming({ durationInFrames: 10 })}
            presentation={
              typeof func === "function" ? func({ width, height }) : func
            }
          />
        </React.Fragment>
      ))}
      <TransitionSeries.Sequence durationInFrames={60}>
        <Fill color="#fb8072" text="end" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export default TransitionComponent;
