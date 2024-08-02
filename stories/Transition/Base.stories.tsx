import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import TransitionComponent from "@/components/Transition/BaseTransition";

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
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
};
