import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import ImageComponent from "@/components/Slide/Image";
import { ImageProps } from "@/components/Slide/Image";
import type { Mode } from "@/components/Slide/Image";

import Player from "../Player";

const Component = (inputProps: ImageProps) => (
  <Player component={ImageComponent} inputProps={inputProps} frames={30} />
);

const meta = {
  title: "Slide/Image",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    mode: {
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'] as Mode[],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cover: Story = {
  args: {
    mode: "cover",
  },
};

export const contain: Story = {
  args: {
    mode: "contain",
  },
};

export const fill: Story = {
  args: {
    mode: "fill",
  },
};

export const none: Story = {
  args: {
    mode: "none",
  },
};

export const ScaleDown: Story = {
  args: {
    mode: "scale-down",
  },
};
