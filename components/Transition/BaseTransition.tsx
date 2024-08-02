import React from "React";

import {
  linearTiming,
  springTiming,
  TransitionSeries,
} from "@remotion/transitions";
import { AbsoluteFill, Img } from "remotion";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";

const Fill = ({ color }: { color: string }) => {
    return (
        <AbsoluteFill
            style={{ backgroundColor: color }}
            className="flex justify-center items-center"
        >
            <div className="text-5xl text-white">A</div>
        </AbsoluteFill>
    )
}
export const TransitionComponent = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={60}>
        <Fill color="blue" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={springTiming({ config: { damping: 200 } })}
        presentation={fade()}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Fill color="black" />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={linearTiming({ durationInFrames: 30 })}
        presentation={wipe()}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <Fill color="red" />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export default TransitionComponent
