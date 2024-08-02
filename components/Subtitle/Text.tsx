// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React, { useLayoutEffect, useState, useRef } from 'react';
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
}

type TextBoxProps = Omit<TextProps, 'text'> & {
  position?: 'top' | 'middle' | 'bottom';
  children: React.ReactElement<typeof Text> | React.ReactElement<typeof Text>[];
};

export const Text = ({
  text,
  bold = false,
  italic = false,
  color = 'white',
  size = 20,
  strokeWidth = 2,
  strokeColor = 'black',
}: TextProps) => {
  const textClasses = cn(
    'text-center',
    bold && 'font-bold',
    italic && 'italic',
  );

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily,
    color,
    fontSize: `${size}px`,
    textShadow: `${strokeWidth}px ${strokeWidth}px 0 ${strokeColor}`,
  };

  return (
    <span className={textClasses} style={textStyle}>
      {text}
    </span>
  );
};

export const TextBox = ({
  bold = false,
  italic = false,
  color = 'white',
  size = 20,
  strokeWidth = 2,
  strokeColor = 'black',
  position = 'bottom',
  children
}: TextBoxProps) => {
  const [textHeight, setTextHeight] = useState<number>(0);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [children]);

  const positionStyle: React.CSSProperties = {
    top: position === 'top' ? '5px' : position === 'middle' ? '50%' : 'auto',
    transform: position === 'middle' ? 'translateY(-50%)' : 'none',
    bottom: position === 'bottom' ? '5px' : 'auto',
  };

  const textClasses = cn(
    'absolute w-full text-center',
    bold && 'font-bold',
    italic && 'italic',
  );

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily,
    color,
    fontSize: `${size}px`,
    textShadow: `${strokeWidth}px ${strokeWidth}px 0 ${strokeColor}`,
    ... positionStyle,
  };

  return (
    <AbsoluteFill className={textClasses} style={{
        ...textStyle, 
        height: textHeight
      }}>
      <div ref={textRef}>
        {children}
      </div>
    </AbsoluteFill>
  );
};

const TextComponent = (props: TextBoxProps & TextProps) => {
  return (
    <AbsoluteFill className={`h-screen w-screen flex items-center justify-center bg-gray-200`}>
      <Img
        src="/Lenna.png"
        alt="Sample"
        className="h-full w-full"
      />
      <TextBox {...props}>
        <Text {...props} />
        <Text {...props} />
        <Text {...props} />
      </TextBox>
    </AbsoluteFill>
  );
};


export default TextComponent;