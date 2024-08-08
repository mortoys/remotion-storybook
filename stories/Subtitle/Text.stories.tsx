import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import { AbsoluteFill, Img } from "remotion";
import { TextBox, Text } from '@/components/Subtitle/Text'
import { TextElementProps, TextBoxProps } from "@/components/Subtitle/Text";
// import type { Mode } from "@/components/Subtitle/Text";

import Player from "../Player";

const TextComponent = (props: TextBoxProps & TextElementProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img src="/Lenna.png" alt="Sample" className="h-full w-full" />
      <TextBox {...props}>
        <Text {...props} />
        <Text {...props} />
        <Text {...props} />
      </TextBox>
    </AbsoluteFill>
  );
};

const Component = (inputProps: TextElementProps) => (
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
    weight: 600,
    strokeWidth: 2,
    text: 'Artificial Intelligence (AI)'
  },
};

export const Cn: Story = {
  args: {
    size: 20,
    weight: 600,
    strokeWidth: 1,
    text: '灰色的使用可以在鲜艳的数据展示中带来平衡和冷静'
  },
};

export const Mix: Story = {
  args: {
    size: 20,
    weight: 600,
    strokeWidth: 1,
    text: '这是一个测试 subtitle 的英文混合。'
  },
};

