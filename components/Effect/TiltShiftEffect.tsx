import React from "react";
import { AbsoluteFill, Img } from "remotion";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

interface EffectProps {
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
  children: React.ReactNode;
}

export const TiltShiftEffect: React.FC<TiltShiftEffectProps> = ({
  effect,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const springValue = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    // 将动画曲线拉伸到指定的帧数长度
    // durationInFrames
    // 动画在接近结束时被认为完成的阈值，仅在 `durationInFrames` 也指定时生效
    // durationRestThreshold: 1,
    // delay: 10,
    config: {
      // 10
      // 动画的减速程度。
      // 增大阻尼 (damping)，动画会更快地减速并停止；减小阻尼，动画会更长时间地振荡。
      damping: 10,
      //   确定动画是否可以超过目标 (to) 值。
      //   如果设置为 true，动画超出目标值后会立即返回到目标值；如果设置为 false，动画可以超过目标值并逐渐回到目标值。
      //   overshootClamping: true,
      //   100
      // 弹簧的刚度系数。
      // 增大刚度 (stiffness)，动画的弹性程度会增加；减小刚度，动画会显得更加柔和。
      stiffness: 10,
      //   1
      // 弹簧的质量。
      //   减小质量 (mass)，动画速度会变快；增大质量，动画速度会变慢
      mass: 3,
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

export const effects: {[name:string]: EffectProps} = {
  focusCenter: {
    tilt: 0,
    zoom: 1.5,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  leftShiftBlur: {
    tilt: 0,
    zoom: 1,
    shiftX: -50,
    shiftY: 0,
    blur: 5,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  rightShiftBrighten: {
    tilt: 0,
    zoom: 1,
    shiftX: 50,
    shiftY: 0,
    blur: 0,
    brightness: 150,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  vintage: {
    tilt: 0,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 110,
    contrast: 90,
    saturate: 80,
    sepia: 30,
    hueRotate: 0,
  },
  highContrast: {
    tilt: 0,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 150,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  coolTone: {
    tilt: 0,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 180,
  },
  sepiaEffect: {
    tilt: 0,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 100,
    hueRotate: 0,
  },
  dramaticZoom: {
    tilt: 0,
    zoom: 2,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 80,
    contrast: 120,
    saturate: 150,
    sepia: 0,
    hueRotate: 0,
  },
  tiltLeft: {
    tilt: -10,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  tiltRight: {
    tilt: 10,
    zoom: 1,
    shiftX: 0,
    shiftY: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
  blurZoom: {
    tilt: 0,
    zoom: 1.2,
    shiftX: 0,
    shiftY: 0,
    blur: 10,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0,
    hueRotate: 0,
  },
};

export interface TiltShiftEffectDemoProps {
    effect: EffectProps
}

const TiltShiftEffectApp = ({ effect }: TiltShiftEffectDemoProps) => {
  return (
    <AbsoluteFill>
      <TiltShiftEffect effect={effect}>
        <Img
          // src={image}
          src="/Lighthouse.png"
          alt="Tilt Shift"
        />
      </TiltShiftEffect>
    </AbsoluteFill>
  );
};

export default TiltShiftEffectApp;
