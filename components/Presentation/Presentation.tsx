import React, { useMemo } from "react";
import { useVideoConfig, Sequence, AbsoluteFill } from "remotion";
import { Audio, Img } from "remotion";

import { Subtitle } from "@/components/Subtitle/Motion";
// import Transition from "@/components/Transition/Transition";
import { Effect } from "@/components/Effect/Effect";
import type { inputProps } from "./types";

import type { TransitionType } from "@/components/Transition/transitions";
import { transitionsMap } from "@/components/Transition/transitions";

import {
  linearTiming,
  // springTiming,
  TransitionSeries,
} from "@remotion/transitions";

import { splitBoundaries } from "@/components/Subtitle/segment";

type PresentationProps = inputProps;

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const { width, height } = useVideoConfig();
  const { fps } = useVideoConfig();
  const durationToFrames = (d: number) => {
    // debugger
    return Math.floor(d * fps + 0.5);
  };

  const funcMap = (type: TransitionType) => transitionsMap[type];

  const durationTransition = Math.floor(2 * fps + 0.5)

  const timing = linearTiming({
      durationInFrames: durationTransition,
    });

  const segDuration = useMemo(
    () =>
      slides
        .map((slide) => {
          const last = slide.subtitle[slide.subtitle.length - 1]
          return last.audio_offset + last.duration + 1e3/2
        })
        .map((duration) => Math.floor(duration * fps / 1e3 + 1))
    ,[slides]
  );

  const segOffset = useMemo(
    () => segDuration.reduce((o, u, i) => [...o, u + o[i]], [0]),
    [segDuration]
  );

  return (
    <AbsoluteFill>
      <TransitionSeries>
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <TransitionSeries.Sequence
              durationInFrames={segDuration[index] + durationTransition /2}
            >
              <Effect effect={slide.effect}>
                {/* <Img src={slide.image} alt={`Slide ${index + 1}`} /> */}
                <Img src="/lighthouse.png" alt={`Slide ${index + 1}`} />
              </Effect>
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              timing={timing}
              presentation={
                typeof funcMap(slide.transition) === "function"
                  ? //@ts-expect-error
                    funcMap(slide.transition)({ width, height })
                  : funcMap(slide.transition)
              }
            />
          </React.Fragment>
        ))}
      </TransitionSeries>

      {slides.map((slide, index) => (
        <Sequence
          key={index}
          from={segOffset[index]}
          durationInFrames={segDuration[index]}
        >
          <Subtitle data={slide.subtitle} />
          {/* <Audio src={slide.audio} /> */}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default Presentation;
