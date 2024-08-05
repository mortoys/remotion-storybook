import { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';

export type LinearWipeProps = {
	angle?: number;
};

const LinearWipePresentation: React.FC<
	TransitionPresentationComponentProps<LinearWipeProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
	const angle = passedProps.angle ?? 0;
	const progress = presentationProgress;
	const a = (angle * Math.PI) / 180;
	const dist = Math.abs(Math.cos(a)) + Math.abs(Math.sin(a));

	const box = useMemo(() => [
		[-1, -1],
		[-1, 1],
		[1, 1],
		[1, -1],
	]
		.map(([x, y]) => [dist * x + dist * 2 * (1 - progress), dist * y])
		.map(([x, y]) => [
			x * Math.cos(a) - y * Math.sin(a),
			x * Math.sin(a) + y * Math.cos(a),
		])
		.map(([x, y]) => [x + 1, y + 1])
		.map(([x, y]) => [50 * x, 50 * y]), [a, dist, progress]);

	const polygon = `polygon(${box
		.map((p) => `${p[0]}% ${p[1]}%`)
		.join(',')})`;

	const commonStyle: React.CSSProperties = {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	};

	const enteringElementStyle = useMemo(
		() => ({
			...commonStyle,
			clipPath: polygon,
		}),
		[polygon]
	);

	const exitingElementStyle = useMemo(
		() => ({
			...commonStyle,
		}),
		[]
	);

	return (
		<AbsoluteFill>
			<div style={exitingElementStyle}>
				{presentationDirection === 'exiting' ? children : null}
			</div>
			<div style={enteringElementStyle}>
				{presentationDirection === 'entering' ? children : null}
			</div>
		</AbsoluteFill>
	);
};

/**
 * Provides a linear wipe transition component for sliding elements in and out.
 * @param {LinearWipeProps} [props] Optional properties to define 'angle'.
 * @returns {TransitionPresentation<LinearWipeProps>} The transition presentation component setup.
 */
export const linearWipe = (
	props?: LinearWipeProps
): TransitionPresentation<LinearWipeProps> => {
	return {
		component: LinearWipePresentation,
		props: props ?? {},
	};
};
