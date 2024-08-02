// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";
import React from 'react';
import { AbsoluteFill, Img } from "remotion";
import { cn } from "../../lib/utils"


export type Mode = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
export interface ImageProps {
    mode: Mode
}
const ImageComponent = ({ mode }: ImageProps) => {
  return (
    <AbsoluteFill
      className={`h-screen w-screen flex items-center justify-center bg-gray-200`}
    >
      <Img
        src="/Lighthouse.png"
        alt="Sample"
        className={cn(`h-full w-full`, {
          'object-cover': mode === 'cover',
          'object-contain': mode === 'contain',
          'object-fill': mode === 'fill',
          'object-none': mode === 'none',
          'object-scale-down': mode === 'scale-down',
        })}
      />
    </AbsoluteFill>
  );
};

export default ImageComponent;
