import { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';

export type SlidingDoorsProps = {
	direction?: 'open' | 'close';
	angle?: number;
};

const SlidingDoorsPresentation: React.FC<
	TransitionPresentationComponentProps<SlidingDoorsProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
	const { direction = 'close', angle = 0 } = passedProps;
	const a = (angle * Math.PI) / 180;
	const dist = Math.abs(Math.cos(a)) + Math.abs(Math.sin(a));
	const progress = direction === 'close' 
		? 1 - presentationProgress 
		: presentationProgress;

	const box = useMemo(() => [
		[-1, -1],
		[-1, 1],
		[1, 1],
		[1, -1],
	]
		.map(([x, y]) => [x + 1, y])
		.map(([x, y]) => [dist * x, dist * y])
		.map(([x, y]) => [
			x * Math.cos(a) - y * Math.sin(a),
			x * Math.sin(a) + y * Math.cos(a),
		])
		.map(([x, y]) => [50 + 50 * x, 50 + 50 * y]), [a, dist]);

	const inverseBox = useMemo(() => [
		[-1, -1],
		[-1, 1],
		[1, 1],
		[1, -1],
	]
		.map(([x, y]) => [x + 1, y])
		.map(([x, y]) => [dist * x, dist * y])
		.map(([x, y]) => [
			x * Math.cos(Math.PI + a) - y * Math.sin(Math.PI + a),
			x * Math.sin(Math.PI + a) + y * Math.cos(Math.PI + a),
		])
		.map(([x, y]) => [50 + 50 * x, 50 + 50 * y]), [a, dist]);

	const polygon = `polygon(${box.map((p) => `${p[0]}% ${p[1]}%`).join(',')})`;
	const inversePolygon = `polygon(${inverseBox.map((p) => `${p[0]}% ${p[1]}%`).join(',')})`;

	const translateFunction = useMemo(() => {
		const adjustedAngle = angle % 180;
		if (adjustedAngle >= -45 && adjustedAngle <= 45) {
			return 'translateX';
		}
		if (adjustedAngle < -135 || adjustedAngle > 135) {
			return 'translateX';
		}
		return 'translateY';
	}, [angle]);

	const hypotenuse = translateFunction === 'translateX' ? dist / Math.cos(a) : dist / Math.sin(a);
	const translateLength = 50 * hypotenuse;
	const translateProgress = progress;

	const commonStyle: React.CSSProperties = {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	};

	const enteringElementStyle = useMemo(() => ({
		...commonStyle,
		clipPath: polygon,
		transform: `${translateFunction}(${translateLength * translateProgress}%)`,
	}), [polygon, translateFunction, translateLength, translateProgress]);

	const enteringElementInverseStyle = useMemo(() => ({
		...commonStyle,
		clipPath: inversePolygon,
		transform: `${translateFunction}(${-translateLength * translateProgress}%)`,
	}), [inversePolygon, translateFunction, translateLength, translateProgress]);

	const exitingElementStyle = useMemo(() => ({
		...commonStyle,
	}), []);

	return (
		<AbsoluteFill>
			{direction === 'close' ? (
				<>
					<div style={exitingElementStyle}>
						{presentationDirection === 'exiting' ? children : null}
					</div>
					<div style={enteringElementStyle}>
						{presentationDirection === 'entering' ? children : null}
					</div>
					<div style={enteringElementInverseStyle}>
						{presentationDirection === 'entering' ? children : null}
					</div>
				</>
			) : (
				<>
					<div style={exitingElementStyle}>
						{presentationDirection === 'entering' ? children : null}
					</div>
					<div style={enteringElementStyle}>
						{presentationDirection === 'exiting' ? children : null}
					</div>
					<div style={enteringElementInverseStyle}>
						{presentationDirection === 'exiting' ? children : null}
					</div>
				</>
			)}
		</AbsoluteFill>
	);
};

/**
 * Provides a sliding doors transition component for sliding elements in and out.
 * @param {SlidingDoorsProps} [props] Optional properties to define 'direction' and 'angle'.
 * @returns {TransitionPresentation<SlidingDoorsProps>} The transition presentation component setup.
 */
export const slidingDoors = (
	props?: SlidingDoorsProps
): TransitionPresentation<SlidingDoorsProps> => {
	return {
		component: SlidingDoorsPresentation,
		props: props ?? {},
	};
};
