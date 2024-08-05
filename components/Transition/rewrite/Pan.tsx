import { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from '@remotion/transitions';

export type PanProps = {
	direction?: 'up' | 'down' | 'left' | 'right';
};

const PanPresentation: React.FC<
	TransitionPresentationComponentProps<PanProps>
> = ({ children, presentationDirection, presentationProgress, passedProps }) => {
	const direction = passedProps.direction ?? 'left';
	const sign = direction === 'right' || direction === 'down' ? 1 : -1;
	const percentComplete = 100 * presentationProgress;
	const translateFunction = direction === 'right' || direction === 'left' ? 'translateX' : 'translateY';

	const exitingElementStyle = useMemo(() => ({
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		transform: `${translateFunction}(${sign * percentComplete}%)`,
	}), [translateFunction, sign, percentComplete]);

	const enteringElementStyle = useMemo(() => ({
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		transform: `${translateFunction}(${sign * (percentComplete - 100)}%)`,
	}), [translateFunction, sign, percentComplete]);

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
 * Provides a pan transition component for sliding elements in and out.
 * @param {PanProps} [props] Optional properties to define 'direction'.
 * @returns {TransitionPresentation<PanProps>} The transition presentation component setup.
 */
export const pan = (
	props?: PanProps
): TransitionPresentation<PanProps> => {
	return {
		component: PanPresentation,
		props: props ?? {},
	};
};
