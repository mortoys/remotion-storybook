// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React, { useMemo } from "react";

import { Sequence, useVideoConfig } from "remotion";

import { splitBoundaries } from "./segment";
import type { Boundary } from "./segment";
import { TextBox, Text } from "./Text";

import type { TextBoxStyleProps, TextStyleProps } from './Text'

export interface BoundaryData {
  text: string;
  audio_offset: number;
  duration: number;
  text_offset?: number;
  word_length?: number;
}

export interface SubtitleStyle extends TextBoxStyleProps {
  highlight?: TextStyleProps
}

export interface MotionProps {
  data?: BoundaryData[];
  style?: SubtitleStyle;
}

export interface SubtitleProps {
  data: Boundary[];
  style?: SubtitleStyle;
}

let moving = false;

export const SubtitleSequence = ({ data = [], style = {} }: SubtitleProps) => {
  const { fps } = useVideoConfig();

  const { highlight = {}, ... textStyle } = style

  return data.map(({ duration, offset }) => (
    <Sequence
      from={(offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={offset}
    >
      <TextBox { ... textStyle }>
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
                { ... highlight }
              />
            ) : (
              <Text
                text={text}
                key={segOffset}
                { ... textStyle }
              />
            )
          )}
      </TextBox>
    </Sequence>
  ));
};

export const Subtitle = ({ data = [], style }: MotionProps) => {
  const { fps } = useVideoConfig();
  const screens = useMemo(() => splitBoundaries(data), [data])

  return screens.map(({ groups, duration, audio_offset }) => (
    <Sequence
      from={(audio_offset * fps) / 1e3}
      durationInFrames={(duration * fps) / 1e3}
      key={audio_offset}
    >
      <SubtitleSequence data={groups} style={style}></SubtitleSequence>
    </Sequence>
  ));
};
