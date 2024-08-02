import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

// import TransitionComponent from "@/components/Transition/Base";
import ImageComponent from "@/components/Slide/Image";
import { ImageProps } from "@/components/Slide/Image";
import type { Mode } from "@/components/Slide/Image";

import Player from "../Player";

const Component = (inputProps: ImageProps) => (
  <Player component={ImageComponent} inputProps={inputProps} frames={30} />
);

const meta = {
  title: "Transition/Base",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    mode: "none",
  }
};
