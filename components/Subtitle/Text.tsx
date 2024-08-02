// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React from 'react';
import { AbsoluteFill, Img } from "remotion";
import { cn } from "../../lib/utils"

import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";
 
const fontFamily = "Inter";
 
loadFont({
  family: fontFamily,
  url: staticFile("Poppins-Bold.ttf"),
  weight: "600",
}).then(() => {
  console.log("Font loaded!");
});

// 加粗 斜体 颜色 大小 文字描边的粗细 文字描边的颜色
// 字幕的位置 顶部 中间 底部

interface TextProps {
  text: string;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  position?: 'top' | 'middle' | 'bottom';
}

export const Text = ({
  text = '',
  bold = false,
  italic = false,
  color = 'white',
  size = 20,
  strokeWidth = 2,
  strokeColor = 'black',
  position = 'bottom',
}: TextProps) => {
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
    <div className={textClasses} style={textStyle}>
      {text}
    </div>
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