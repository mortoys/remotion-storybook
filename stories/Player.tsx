import { Player } from "@remotion/player"
// import type { PlayerPropsWithoutZod } from "@remotion/player"
// import type { CompProps } from 'remotion';

import { VIDEO_FPS } from '@/types/constants'


interface PlayerBookProps {
    component: any
    inputProps?: Record<string, unknown>
    frames: number
    height?: number
    width?: number
}

const PlayerBook = ({ component, inputProps={}, frames, height=300, width=300 }: PlayerBookProps) => {
    const ratio = height / width

    return <Player
        component={component}
        inputProps={inputProps}
        fps={VIDEO_FPS}
        durationInFrames={frames}
        compositionHeight={height}
        compositionWidth={width}
        style={{
            width: `${width}px`,
            height: `${height}px`,
        }}
        controls
        autoPlay
        loop
    />
}

export default PlayerBook
