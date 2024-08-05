import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import TransitionComponent from "@/components/Transition/Rewrite";

import Player from "../Player";

const Component = () => (
  <Player component={TransitionComponent} frames={60 + (60-10)*8 } />
);

const meta = {
  title: "Transition/Rewrite",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
};
