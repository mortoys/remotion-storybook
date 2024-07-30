// https://www.remotion.dev/docs/use-current-frame
// import { useCurrentFrame } from "remotion";

// https://www.remotion.dev/docs/use-video-config
// import { useVideoConfig } from "remotion";

// https://www.remotion.dev/docs/animating-properties
// opacity
// https://www.remotion.dev/docs/interpolate
// https://www.remotion.dev/docs/spring

import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';

export const MyVideo: React.FC = () => {
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

const Slide: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => {
	return (
		<AbsoluteFill className="flex flex-col justify-center items-center">
			<div className="text-5xl font-bold mb-5">{title}</div>
			<div className="text-2xl text-gray-600">{subtitle}</div>
		</AbsoluteFill>
	);
};
