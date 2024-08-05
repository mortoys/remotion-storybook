import { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';

export type CircularWipeProps = {
	width: number;
	height: number;
};

const CircularWipePresentation: React.FC<
	TransitionPresentationComponentProps<CircularWipeProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
	const { width: w, height: h } = passedProps;
	const radius = 0.5 * Math.sqrt(w * w + h * h);
	const isEntering = presentationDirection === 'entering';

	const progress = isEntering ? presentationProgress : 1 - presentationProgress

	const polygon = `circle(${radius * progress}px)`;

	const commonStyle: React.CSSProperties = {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	};

	const currentElementStyle = useMemo(
		() => ({
			...commonStyle,
			clipPath: isEntering ? polygon : undefined,
		}),
		[isEntering, polygon]
	);

	return (
		<AbsoluteFill>
			<div style={currentElementStyle}>
				{children}
			</div>
			{/* <div style={currentElementStyle}>
				{isEntering ? children : null}
			</div> */}
		</AbsoluteFill>
	);
};

/**
 * Provides a circular wipe transition component for sliding elements in and out.
 * @param {CircularWipeProps} [props] Optional properties to define 'direction'.
 * @returns {TransitionPresentation<CircularWipeProps>} The transition presentation component setup.
 */
export const circularWipe = (
	props?: CircularWipeProps
): TransitionPresentation<CircularWipeProps> => {
	return {
		component: CircularWipePresentation,
		props: props ?? {},
	};
};
