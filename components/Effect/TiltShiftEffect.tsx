import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring as springFunc } from "remotion";

export interface EffectProps {
  tilt: number;
  zoom: number;
  shiftX: number;
  shiftY: number;
  blur: number;
  brightness: number;
  contrast: number;
  saturate: number;
  sepia: number;
  hueRotate: number;
}

export interface SpringProps {
    overshootClamping?: boolean
    mass?: number
    damping?: number
    stiffness?: number
    delay?: number
}

const applyTiltShiftEffect = ({
  tilt,
  zoom,
  shiftX,
  shiftY,
  blur,
  brightness,
  contrast,
  saturate,
  sepia,
  hueRotate,
}: EffectProps) => {
  const transform = `scale(${zoom}) rotate(${tilt}deg) translate(${shiftX}px, ${shiftY}px)`;
  const filter = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) sepia(${sepia}%) hue-rotate(${hueRotate}deg)`;
  return { transform, filter };
};

interface TiltShiftEffectProps {
  effect: EffectProps;
  spring?: SpringProps;
  children: React.ReactNode;
}

export const TiltShiftEffect = ({
  effect,
  spring = {},
  children,
}: TiltShiftEffectProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const springValue = springFunc({
    frame,
    fps,
    from: 0,
    to: 1,
    // [Easing Functions Cheat Sheet](https://easings.net/#)
    // 将动画曲线拉伸到指定的帧数长度
    // durationInFrames
    // 动画在接近结束时被认为完成的阈值，仅在 `durationInFrames` 也指定时生效
    // durationRestThreshold: 1,
    delay: spring.delay ?? 0,
    config: {
      // 10
      // 动画的减速程度。
      // 增大阻尼 (damping)，动画会更快地减速并停止；减小阻尼，动画会更长时间地振荡。
      damping: spring.damping ?? 10,
      //   确定动画是否可以超过目标 (to) 值。
      //   如果设置为 true，动画超出目标值后会立即返回到目标值；如果设置为 false，动画可以超过目标值并逐渐回到目标值。
      overshootClamping: spring.overshootClamping ?? false,
      //   100
      // 弹簧的刚度系数。
      // 增大刚度 (stiffness)，动画的弹性程度会增加；减小刚度，动画会显得更加柔和。
      stiffness: spring.stiffness ?? 10,
      //   1
      // 弹簧的质量。
      // 减小质量 (mass)，动画速度会变快；增大质量，动画速度会变慢
      mass: spring.mass ?? 3,
    },
  });

  const animatedEffect = {
    ...effect,
    shiftX: interpolate(springValue, [0, 1], [effect.shiftX, 0]),
    shiftY: interpolate(springValue, [0, 1], [effect.shiftY, 0]),
    tilt: interpolate(springValue, [0, 1], [effect.tilt, 0]),
    zoom: interpolate(springValue, [0, 1], [effect.zoom, 1]),
    blur: interpolate(springValue, [0, 1], [effect.blur, 0]),
    brightness: interpolate(springValue, [0, 1], [effect.brightness, 100]),
    contrast: interpolate(springValue, [0, 1], [effect.contrast, 100]),
    saturate: interpolate(springValue, [0, 1], [effect.saturate, 100]),
    sepia: interpolate(springValue, [0, 1], [effect.sepia, 0]),
    hueRotate: interpolate(springValue, [0, 1], [effect.hueRotate, 0]),
  };

  const { transform, filter } = applyTiltShiftEffect(animatedEffect);

  const style = {
    transform,
    filter,
  };

  return <div style={style}>{children}</div>;
};

// const TiltShiftEffectApp = (effect: EffectProps) => {
//   return (
//     <AbsoluteFill>
//       <TiltShiftEffect effect={effect}>
//         <Img
//           // src={image}
//           src="/Lighthouse.png"
//           alt="Tilt Shift"
//         />
//       </TiltShiftEffect>
//     </AbsoluteFill>
//   );
// };

// export default TiltShiftEffectApp;
