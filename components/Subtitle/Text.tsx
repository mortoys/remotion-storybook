// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React, { useLayoutEffect, useState, useRef } from "react";
import { AbsoluteFill, Img } from "remotion";
import { cn } from "../../lib/utils";

import loadFonts from "./loadFont";

loadFonts().then(() => {
  console.log("Font loaded!");
});

const fontFamily = '"NotoSansSC", "Poppins"';
// const fontFamily = '"Poppins"';

// 加粗 斜体 颜色 大小 文字描边的粗细 文字描边的颜色
// 字幕的位置 顶部 中间 底部

export interface TextStyleProps {
  weight?: number
  italic?: boolean;
  color?: string;
  strokeWidth?: number;
  strokeColor?: string;
}

export type TextElementProps = TextStyleProps & { text:string }

export type TextBoxProps = TextStyleProps & {
  size?: number;
  position?: "top" | "middle" | "bottom";
  children: React.ReactElement<typeof Text> | React.ReactElement<typeof Text>[];
};

export const Text = ({
  text,
  italic,
  weight,
  color,
  size,
  strokeWidth,
  strokeColor,
}: TextElementProps) => {
  const textClasses = cn(
    "text-center",
    "text-stroke",
    italic && "italic"
  );

  const customStyle = {
    '--text-content': `"${text}"`,
    '--text-color': color,
    '--stroke-color': strokeColor,
    '--stroke-width': `${strokeWidth}px`,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily,
    fontWeight: weight,
    color,
    fontSize: `${size}px`,
    // textShadow: `0 0 ${strokeWidth}px ${strokeColor}`,
    // WebkitTextStroke: `${strokeWidth}px ${strokeColor}`,
    // WebkitTextFillColor: color,
    // WebkitTextStrokeColor: strokeColor,
    // WebkitTextStrokeWidth: `${strokeWidth}px`,
  };

  return (
    <span className={textClasses} style={{...textStyle, ...customStyle}}>
      {text}
    </span>
  );
};

export const TextBox = ({
  // bold = false,
  weight = 400,
  italic = false,
  color = "white",
  size = 20,
  strokeWidth = 2,
  strokeColor = "black",
  position = "bottom",
  children,
}: TextBoxProps) => {
  const [textHeight, setTextHeight] = useState<number>(0);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.clientHeight);
    }
  }, [children]);

  const positionStyle: React.CSSProperties = {
    top: position === "top" ? "5px" : position === "middle" ? "50%" : "auto",
    transform: position === "middle" ? "translateY(-50%)" : "none",
    bottom: position === "bottom" ? "5px" : "auto",
  };

  const textClasses = cn(
    "absolute w-full text-center",
    italic && "italic"
  );

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily,
    fontWeight: weight,
    color,
    fontSize: `${size}px`,
    // textShadow: `0 0 ${strokeWidth}px ${strokeColor}`,
    ...positionStyle,
  };

  return (
    <AbsoluteFill
      className={textClasses}
      style={{
        ...textStyle,
        height: textHeight,
      }}
    >
      <div ref={textRef}>{children}</div>
    </AbsoluteFill>
  );
};

const TextComponent = (props: TextBoxProps & TextElementProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img src="/Lenna.png" alt="Sample" className="h-full w-full" />
      <TextBox {...props}>
        <Text {...props} />
        <Text {...props} />
        <Text {...props} />
      </TextBox>
    </AbsoluteFill>
  );
};

export default TextComponent;
