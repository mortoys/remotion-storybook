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

export const S0: Story = {
    args: {
        ... effects[Object.keys(effects)[0]]
    }
}
export const S1: Story = {
    args: {
        ... effects[Object.keys(effects)[1]]
    }
}
export const S2: Story = {
    args: {
        ... effects[Object.keys(effects)[2]]
    }
}
export const S3: Story = {
    args: {
        ... effects[Object.keys(effects)[3]]
    }
}
export const S4: Story = {
    args: {
        ... effects[Object.keys(effects)[4]]
    }
}
export const S5: Story = {
    args: {
        ... effects[Object.keys(effects)[5]]
    }
}
export const S6: Story = {
    args: {
        ... effects[Object.keys(effects)[6]]
    }
}
export const S7: Story = {
    args: {
        ... effects[Object.keys(effects)[7]]
    }
}
export const S8: Story = {
    args: {
        ... effects[Object.keys(effects)[8]]
    }
}
export const S9: Story = {
    args: {
        ... effects[Object.keys(effects)[9]]
    }
}
export const S10: Story = {
    args: {
        ... effects[Object.keys(effects)[10]]
    }
}
// export const S11: Story = {
//     args: {
//         ... effects[Object.keys(effects)[11]]
//     }
// }
