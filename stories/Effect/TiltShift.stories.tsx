import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import EffectComponent from "@/components/Effect/TiltShiftEffect";
// import { ImageProps } from "@/components/Slide/Image";
import type { TiltShiftEffectDemoProps } from "@/components/Effect/TiltShiftEffect";
import { effects } from "@/components/Effect/TiltShiftEffect";

import Player from "../Player";

const Component = (inputProps: TiltShiftEffectDemoProps) => (
  <Player component={EffectComponent} inputProps={inputProps} frames={70} />
);

const meta = {
  title: "Effect/TiltShiftEffect",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  //   argTypes: {
  //     image: {
  //       control: { type: "image" },
  //     },
  //   },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const focusCenter: Story = {
    args: {
        ... effects[Object.keys(effects)[0]]
    }
}
export const leftShiftBlur: Story = {
    args: {
        ... effects[Object.keys(effects)[1]]
    }
}
export const rightShiftBrighten: Story = {
    args: {
        ... effects[Object.keys(effects)[2]]
    }
}
export const vintage: Story = {
    args: {
        ... effects[Object.keys(effects)[3]]
    }
}
export const highContrast: Story = {
    args: {
        ... effects[Object.keys(effects)[4]]
    }
}
export const coolTone: Story = {
    args: {
        ... effects[Object.keys(effects)[5]]
    }
}
export const sepiaEffect: Story = {
    args: {
        ... effects[Object.keys(effects)[6]]
    }
}
export const dramaticZoom: Story = {
    args: {
        ... effects[Object.keys(effects)[7]]
    }
}
export const tiltLeft: Story = {
    args: {
        ... effects[Object.keys(effects)[8]]
    }
}
export const tiltRight: Story = {
    args: {
        ... effects[Object.keys(effects)[9]]
    }
}
export const blurZoom: Story = {
    args: {
        ... effects[Object.keys(effects)[10]]
    }
}
// export const S11: Story = {
//     args: {
//         ... effects[Object.keys(effects)[11]]
//     }
// }
