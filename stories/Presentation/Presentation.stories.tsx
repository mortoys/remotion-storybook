import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import type { inputProps } from '@/components/Presentation/types'
import Presentation from '@/components/Presentation/Presentation'
import { boundaries as dataSample } from "../Subtitle/data";

import Player from "../Player";

const Component = (inputProps: inputProps) => (
  <Player component={Presentation} inputProps={inputProps} frames={30} />
);

const meta = {
  title: "Presentation/Presentation",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cover: Story = {
  args: {
    slides: [{
        duration: 10,
        transition: "flip-left",
        effect: "focus-center",
        subtitle: dataSample,
        audio: '',
        image: ''
    }]
  },
};

// export const contain: Story = {
//   args: {
//     // mode: "contain",
//   },
// };

// export const fill: Story = {
//   args: {
//     // mode: "fill",
//   },
// };

// export const none: Story = {
//   args: {
//     // mode: "none",
//   },
// };

// export const ScaleDown: Story = {
//   args: {
//     // mode: "scale-down",
//   },
// };
