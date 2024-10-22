import { Player } from "@remotion/player"
// import type { PlayerPropsWithoutZod } from "@remotion/player"
// import type { CompProps } from 'remotion';

import { VIDEO_FPS } from '@/types/constants'


interface PlayerBookProps {
    component: any
    inputProps?: any
    frames: number
    height?: number
    width?: number
    controls?: boolean
}

const PlayerBook = ({ component, inputProps={}, frames, height=300, width=300, controls=false }: PlayerBookProps) => {
    const ratio = height / width
    // const ratio = 1.4
    const clientHeight = 300
    const clientWidth = clientHeight / ratio

    return <Player
        component={component}
        inputProps={inputProps}
        fps={VIDEO_FPS}
        durationInFrames={frames}
        compositionHeight={height}
        compositionWidth={width}
        style={{
            width: `${clientWidth}px`,
            height: `${clientHeight}px`,
        }}
        controls={controls}
        autoPlay
        loop
    />
}

export default PlayerBook
