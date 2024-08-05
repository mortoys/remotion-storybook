import { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';

export type FadeThroughColorProps = {
	color?: React.CSSProperties['backgroundColor'];
};

const FadeThroughColorPresentation: React.FC<
	TransitionPresentationComponentProps<FadeThroughColorProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
	const color = passedProps.color ?? 'black';
	const progress = presentationProgress;

	const commonStyle: React.CSSProperties = {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
	};

	const overlayStyle = useMemo(() => ({
		...commonStyle,
		backgroundColor: color,
		opacity: Math.min(1, progress * 2),
	}), [color, progress]);

	const exitingElementStyle = useMemo(() => ({
		...commonStyle,
	}), []);

	const enteringElementStyle = useMemo(() => ({
		...commonStyle,
		opacity: Math.max(0, 2 * progress - 1),
	}), [progress]);

	return (
		<AbsoluteFill>
			<div style={exitingElementStyle}>
				{presentationDirection === 'exiting' ? children : null}
			</div>
			<div style={overlayStyle} />
			<div style={enteringElementStyle}>
				{presentationDirection === 'entering' ? children : null}
			</div>
		</AbsoluteFill>
	);
};

/**
 * Provides a fade through color transition component for sliding elements in and out.
 * @param {FadeThroughColorProps} [props] Optional properties to define 'color'.
 * @returns {TransitionPresentation<FadeThroughColorProps>} The transition presentation component setup.
 */
export const fadeThroughColor = (
	props?: FadeThroughColorProps
): TransitionPresentation<FadeThroughColorProps> => {
	return {
		component: FadeThroughColorPresentation,
		props: props ?? {},
	};
};
