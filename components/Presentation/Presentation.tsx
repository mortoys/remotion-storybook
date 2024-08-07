import React from "react";
import { useVideoConfig, Sequence, AbsoluteFill } from "remotion";
import { Audio, Img } from "remotion";

import { Subtitle } from "@/components/Subtitle/Motion";
import Transition from "@/components/Transition/Transition";
import { Effect } from "@/components/Effect/Effect";
import type { inputProps } from "./types";

import {
  linearTiming,
  // springTiming,
  TransitionSeries,
} from "@remotion/transitions";

type PresentationProps = inputProps;

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const { fps } = useVideoConfig();
  // const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      <TransitionSeries>
        {slides.map((slide, index) => (
          <Transition
            key={index}
            duration={slide.duration}
            type={slide.transition}
          >
            <Effect effect={slide.effect}>
              <Img src={slide.image} alt={`Slide ${index + 1}`} />
            </Effect>
          </Transition>
        ))}
      </TransitionSeries>

      {/* {slides.map((slide, index) => (
        <Sequence
          key={index}
          from={index * slide.duration * fps}
          durationInFrames={slide.duration * fps}>

          <Subtitle data={slide.subtitle} />
          <Audio src={slide.audio} />

        </Sequence>
      ))} */}
    </AbsoluteFill>
  );
};

export default Presentation;
