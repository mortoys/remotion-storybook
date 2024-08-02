import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import MotionComponent from "@/components/Subtitle/Motion";
import { MotionProps } from "@/components/Subtitle/Motion";
// import type { Mode } from "@/components/Subtitle/Text";

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
