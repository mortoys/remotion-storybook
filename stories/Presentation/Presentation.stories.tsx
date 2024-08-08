import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import type { inputProps } from "@/components/Presentation/types";
import Presentation from "@/components/Presentation/Presentation";
import { boundaries as dataSample } from "../Subtitle/data";

import Player from "../Player";

// const time = dataSample.reduce((sum, item) => sum + item.duration, 0) / 1000
const last = dataSample[dataSample.length - 1]
const time = (last.audio_offset + last.duration) / 1000

console.log('time', time)

const Component = (inputProps: inputProps) => (
  <Player
    component={Presentation}
    inputProps={inputProps}
    frames={Math.floor((time + 0.5) * 30) * 2}
    controls
  />
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
    slides: [
      {
        duration: time,
        transition: "clock-wipe",
        effect: "focus-center",
        subtitle: dataSample,
        audio: "",
        image: "",
      },
      {
        duration: time,
        transition: "none",
        effect: "focus-center",
        subtitle: dataSample,
        audio: "",
        image: "",
      },
    ],
    style: {
      size: 18,
      weight: 500,
      strokeColor: "#444",
      strokeWidth: 2,
      position: 'middle',
      highlight: {
        color: "#169e00",
        strokeColor: "#444",
        strokeWidth: 2
      }
    }
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
