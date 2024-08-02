import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import TextComponent from "@/components/Subtitle/Text";
import { TextProps } from "@/components/Subtitle/Text";
// import type { Mode } from "@/components/Subtitle/Text";

import Player from "../Player";

const Component = (inputProps: TextProps) => (
  <Player component={TextComponent} inputProps={inputProps} frames={30} />
);

const meta = {
  title: "Subtitle/Text",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: 'text' },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    color: { control: 'color' },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
    strokeColor: { control: 'color' },
    position: {
      control: { type: 'radio' },
      options: ['top', 'middle', 'bottom']
    },
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
