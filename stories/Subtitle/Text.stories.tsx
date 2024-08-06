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
    weight: {
      control: { type: 'select' },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    italic: { control: 'boolean' },
    color: { control: 'color' },
    size: { control: 'number' },
    strokeWidth: { control: 'number' },
    strokeColor: { control: 'color' },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const En: Story = {
  args: {
    size: 20,
    weight: 800,
    strokeWidth: 2,
    text: 'Artificial Intelligence (AI)'
  },
};

export const Cn: Story = {
  args: {
    size: 20,
    weight: 800,
    text: '灰色的使用可以在鲜艳的数据展示中带来平衡和冷静'
  },
};

export const Mix: Story = {
  args: {
    size: 20,
    weight: 800,
    text: '这是一个测试 subtitle 的英文混合。'
  },
};

