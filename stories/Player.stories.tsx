

import type { Meta, StoryObj } from "@storybook/react";
import { Player } from "@remotion/player";

import { MyVideo } from '@/components/Slides/Demo'

const VIDEO_WIDTH = 1024;
const VIDEO_HEIGHT = 1024;
const VIDEO_FPS = 30;
// const DURATION_IN_FRAMES = VIDEO_FPS * 4;
const DURATION_IN_FRAMES = 50 * 3

export const MyPlayer = () => 
    <Player
        component={MyVideo}
        // inputProps={inputProps}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        compositionHeight={VIDEO_HEIGHT}
        compositionWidth={VIDEO_WIDTH}
        style={{
            width: "300px",
        }}
        controls
        autoPlay
        loop
    />

const meta = {
  title: "Slide/Player",
  component: MyPlayer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
    layout: 'centered'
  },
  args: {
  },
} satisfies Meta<typeof MyPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {
//   args: {
//   },
// };

export const LoggedOut: Story = {};
