import React from "react";
import { useVideoConfig } from "remotion";
import {
  linearTiming,
  springTiming,
  TransitionSeries,
} from "@remotion/transitions";

import type { TransitionType } from "./transitions";
import { transitionsMap } from './transitions'

interface TransitionProps {
  children?: React.ReactNode;
  transitionDuration?: number;
  duration: number;
  type: TransitionType
}

const Transition: React.FC<TransitionProps> = ({
  children,
  duration,
  transitionDuration,
  type,
}) => {
  const { width, height } = useVideoConfig();
  const { fps } = useVideoConfig();
  const durationToFrames = (d: number) => Math.floor(d * fps);

  const func = transitionsMap[type]

  const timing = linearTiming({
    durationInFrames: durationToFrames(transitionDuration ?? 10),
  });

  return (
    <>
      <TransitionSeries.Sequence durationInFrames={durationToFrames(duration)}>
        {children}
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={timing}
        presentation={
          typeof func === "function" ? func({ width, height }) : func
        }
      />
    </>
  );
};

export default Transition;
