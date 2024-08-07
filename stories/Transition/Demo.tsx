import React from "react";
import { useVideoConfig } from "remotion";
import {
  linearTiming,
  springTiming,
  TransitionSeries,
} from "@remotion/transitions";
import { AbsoluteFill } from "remotion";

import { transitions } from '@/components/Transition/transitions'

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

export const TransitionDemo = () => {
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

export default TransitionDemo;
