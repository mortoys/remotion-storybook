import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import TransitionComponent from "@/components/Transition/BaseTransition";
// import { TextProps } from "@/components/Transition/Text";
// import type { Mode } from "@/components/Subtitle/Text";

import Player from "../Player";

const Component = () => (
  <Player component={TransitionComponent} frames={60*7 - 10*6} />
);

const meta = {
  title: "Transition/Base",
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
  args: {
    size: 20,
    bold: true,
    // text: '这是一个测试 subtitle 的英文混合。',
    text: 'Artificial Intelligence (AI)'
  },
};
