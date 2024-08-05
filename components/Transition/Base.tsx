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
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { flip } from "@remotion/transitions/flip";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import type { ClockWipeProps } from "@remotion/transitions/clock-wipe";

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

type PresentationProps = Record<string, unknown>
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
