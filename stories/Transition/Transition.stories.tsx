import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import { transitions } from '@/components/Transition/transitions'
import TransitionDemo from './Demo'

import Player from "../Player";

const Component = () => (
  <Player component={TransitionDemo} frames={60 + (60-10)*transitions.length} />
);

const meta = {
  title: "Transition/Transition",
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
