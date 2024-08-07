import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { AbsoluteFill, Img } from "remotion";

import { TiltShiftEffect } from "@/components/Effect/TiltShiftEffect";
import type {
  EffectProps,
  SpringProps,
} from "@/components/Effect/TiltShiftEffect";
import { effects } from "@/components/Effect/effects";
import type { EffectType } from "@/components/Effect/effects";

import Player from "../Player";

type Props = SpringProps & EffectProps;
const TiltShiftEffectDemo = ({
  overshootClamping,
  mass,
  damping,
  stiffness,
  delay,
  ...props
}: Props) => {
  const springConfig: SpringProps = {
    overshootClamping,
    mass,
    damping,
    stiffness,
    delay,
  };
  return (
    <AbsoluteFill>
      <TiltShiftEffect effect={props} spring={springConfig}>
        <Img src="/Lighthouse.png" alt="Tilt Shift" />
      </TiltShiftEffect>
    </AbsoluteFill>
  );
};

const Component = (inputProps: Props) => (
  <Player component={TiltShiftEffectDemo} inputProps={inputProps} frames={70} />
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
    ...effects[Object.keys(effects)[0] as EffectType],
    overshootClamping: false,
    mass: 3,
    damping: 10,
    stiffness: 10,
    delay: 0,
  },
};
export const leftShiftBlur: Story = {
  args: {
    ...effects[Object.keys(effects)[1] as EffectType],
  },
};
export const rightShiftBrighten: Story = {
  args: {
    ...effects[Object.keys(effects)[2] as EffectType],
  },
};
export const vintage: Story = {
  args: {
    ...effects[Object.keys(effects)[3] as EffectType],
  },
};
export const highContrast: Story = {
  args: {
    ...effects[Object.keys(effects)[4] as EffectType],
  },
};
export const coolTone: Story = {
  args: {
    ...effects[Object.keys(effects)[5] as EffectType],
  },
};
export const sepiaEffect: Story = {
  args: {
    ...effects[Object.keys(effects)[6] as EffectType],
  },
};
export const dramaticZoom: Story = {
  args: {
    ...effects[Object.keys(effects)[7] as EffectType],
  },
};
export const tiltLeft: Story = {
  args: {
    ...effects[Object.keys(effects)[8] as EffectType],
  },
};
export const tiltRight: Story = {
  args: {
    ...effects[Object.keys(effects)[9] as EffectType],
  },
};
export const blurZoom: Story = {
  args: {
    ...effects[Object.keys(effects)[10] as EffectType],
  },
};
// export const S11: Story = {
//     args: {
//         ... effects[Object.keys(effects)[11]]
//     }
// }
