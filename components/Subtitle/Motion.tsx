// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React from "react";

import { Sequence, useVideoConfig } from "remotion";

import { splitBoundaries } from "./segment";
import type { Boundary } from "./segment";
import { TextBox, Text } from "./Text";

export interface BoundaryData {
  text: string;
  audio_offset: number;
  duration: number;
  text_offset: number;
  word_length: number;
}

export interface MotionProps {
  data?: BoundaryData[];
}

export interface SubtitleProps {
  data: Boundary[];
}

let moving = false;

export const SubtitleSequence = ({ data = [] }: SubtitleProps) => {
  const { fps } = useVideoConfig();

  return data.map(({ duration, offset }) => (
    <Sequence
      from={(offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={offset}
    >
      <TextBox size={18} weight={500} strokeColor="black" strokeWidth={1}>
        {data
          .filter(({ text, duration: segDuration, offset: segOffset }) =>
            moving ? segOffset + segDuration <= offset + duration : true
          )
          .map(({ text, duration: segDuration, offset: segOffset }) =>
            segOffset >= offset &&
            segOffset + segDuration <= offset + duration ? (
              <Text
                text={text}
                key={segOffset}
                color="#169e00"
                strokeColor="#444"
                strokeWidth={2}
              />
            ) : (
              <Text
                text={text}
                key={segOffset}
                strokeColor="#444"
                strokeWidth={1}
              />
            )
          )}
      </TextBox>
    </Sequence>
  ));
};

export const Subtitle = ({ data = [] }: MotionProps) => {
  const { fps } = useVideoConfig();
  const screens = splitBoundaries(data);

  return screens.map(({ groups, duration, audio_offset }) => (
    <Sequence
      from={(audio_offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={audio_offset}
    >
      <SubtitleSequence data={groups}></SubtitleSequence>
    </Sequence>
  ));
};
