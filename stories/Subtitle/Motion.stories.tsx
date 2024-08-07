import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import { Subtitle } from '@/components/Subtitle/Motion'
import type { MotionProps } from "@/components/Subtitle/Motion";
import { AbsoluteFill, Img } from "remotion";
import { boundaries as dataSample } from "./data";

const MotionComponent = ({ data = dataSample }: MotionProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img src="/Lenna.png" alt="Sample" className="h-full w-full" />
      <Subtitle data={data} />
    </AbsoluteFill>
  );
};

import Player from "../Player";

import { VIDEO_FPS } from '../../types/constants'

const Component = (inputProps: MotionProps) => (
  <Player component={MotionComponent} inputProps={inputProps} frames={10*VIDEO_FPS} />
);

const meta = {
  title: "Subtitle/Motion",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
};
