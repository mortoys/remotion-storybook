import React from 'react';

import type { Meta, StoryObj } from "@storybook/react";

import MyVideo from '@/components/Slide/Demo'

import Player from './Player'

const Component = () => <Player component={MyVideo} frames={60}/>

const meta = {
  title: "Slide/Player",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {};
