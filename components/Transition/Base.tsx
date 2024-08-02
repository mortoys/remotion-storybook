import React from "React";
// import { useVideoConfig } from "remotion";
// import {
  // linearTiming,
  // springTiming,
  // TransitionSeries,
// } from "@remotion/transitions";
import { AbsoluteFill } from "remotion";

// import { none } from "@remotion/transitions/none";
// import { fade } from "@remotion/transitions/fade";
// import { slide } from "@remotion/transitions/slide";
// import { wipe } from "@remotion/transitions/wipe";
// import { flip } from "@remotion/transitions/flip";
// import { clockWipe } from "@remotion/transitions/clock-wipe";

// import { cube } from "@remotion/transitions/";

// const Fill = ({ color, text }: { color: string, text: string }) => {
//   return (
//     <AbsoluteFill
//       style={{ backgroundColor: color }}
//       className="flex justify-center items-center"
//     >
//       <div className="text-5xl text-white">{ text }</div>
//     </AbsoluteFill>
//   );
// };
export const TransitionComponent = () => {
  // const { width, height } = useVideoConfig();
  return (
    null
    // <TransitionSeries>
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="blue" text="none" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={none()}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="red" text="slide" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={slide()}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="green" text="fade" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={fade()}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="black" text="flip" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={flip()}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="yellow" text="clockWipe" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={clockWipe({ width, height })}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="green" text="wipe" />
    //   </TransitionSeries.Sequence>
    //   <TransitionSeries.Transition
    //     timing={linearTiming({ durationInFrames: 10 })}
    //     presentation={wipe()}
    //   />
    //   <TransitionSeries.Sequence durationInFrames={60}>
    //     <Fill color="red" text="end" />
    //   </TransitionSeries.Sequence>
    // </TransitionSeries>
  );
};

export default TransitionComponent;
