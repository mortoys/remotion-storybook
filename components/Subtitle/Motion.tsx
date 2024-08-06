// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React from "react";
import { AbsoluteFill, Img, Sequence, useVideoConfig } from "remotion";
import { cn } from "../../lib/utils";

import type { BoundaryData } from "./data";
import { boundaries as dataSample } from "./data";
import { splitBoundaries } from "./segment";
import type { Boundary } from "./segment";

import { TextBox, Text } from "./Text";

export interface MotionProps {
  data?: BoundaryData[];
}

export interface SubtitleProps {
  data: Boundary[];
}

let moving = false

export const Subtitle = ({ data = [] }: SubtitleProps) => {
  const { fps } = useVideoConfig();

  return data.map(({ duration, offset }) => (
    <Sequence
      from={(offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={offset}
    >
      <TextBox size={18} weight={500} strokeColor="black" strokeWidth={1}>
        {data.filter(
          ({ text, duration: segDuration, offset: segOffset }) => 
            moving ? (segOffset + segDuration) <= (offset + duration) : true
        ).map(({ text, duration: segDuration, offset: segOffset }) => (
          (segOffset >= offset && (segOffset + segDuration) <= (offset + duration))
          ? <Text text={text} key={segOffset} color="#169e00" strokeColor="#444" strokeWidth={2}/>
          : <Text text={text} key={segOffset} strokeColor="#444" strokeWidth={1}/>
        ))}
      </TextBox>
    </Sequence>
  ));
};

export const Screen = ({ data = [] }: MotionProps) => {
  const { fps } = useVideoConfig();
  const screens = splitBoundaries(data);

  return screens.map(({ groups, duration, audio_offset }) => (
    <Sequence
      from={(audio_offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={audio_offset}
    >
      <Subtitle data={groups}></Subtitle>
    </Sequence>
  ));
};

const MotionComponent = ({ data = dataSample }: MotionProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img src="/Lenna.png" alt="Sample" className="h-full w-full" />
      <Screen data={data} />
    </AbsoluteFill>
  );
};

export default MotionComponent;
