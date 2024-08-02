// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React from 'react';
import { AbsoluteFill, Img } from "remotion";
import { cn } from "../../lib/utils"

import { boundaries } from "./data";
import { splitBoundaries } from './segment'

const subtitleSegments = splitBoundaries(boundaries);

interface MotionProps {
  text: string;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  position?: 'top' | 'middle' | 'bottom';
}

export const Motion = ({
}: MotionProps) => {
  const positionClass = cn({
    'top-5': position === 'top',
    'top-1/2 transform -translate-y-1/2': position === 'middle',
    'bottom-5': position === 'bottom',
  });

  const textClasses = cn(
    'absolute w-full text-center',
    bold && 'font-bold',
    italic && 'italic',
    positionClass
  );

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily,
    color,
    fontSize: `${size}px`, // Set font size directly based on size prop
    // WebkitTextStrokeWidth: `${strokeWidth}px`,
    // WebkitTextStrokeColor: strokeColor,
    textShadow: `${strokeWidth}px ${strokeWidth}px 0 ${strokeColor}`,
  };

  return (
    <AbsoluteFill className="bg-white flex justify-center items-center">
			<Sequence from={0} durationInFrames={50}>
				<Slide title="第一张幻灯片" subtitle="这是第一张幻灯片的字幕" />
			</Sequence>
			<Sequence from={50} durationInFrames={50}>
				<Slide title="第二张幻灯片" subtitle="这是第二张幻灯片的字幕" />
			</Sequence>
			<Sequence from={100} durationInFrames={50}>
				<Slide title="第三张幻灯片" subtitle="这是第三张幻灯片的字幕" />
			</Sequence>
		</AbsoluteFill>
  );
};

const TextComponent = (props: TextProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img
        src="/Lenna.png"
        alt="Sample"
        className="h-full w-full"
      />
      <Text {...props} />
    </AbsoluteFill>
  );
};

export default TextComponent;