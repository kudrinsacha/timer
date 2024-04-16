import React, { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { getSizeProgressBar } from '../../../utils/getSizeProgressBar';
import { SProgress, SProgressBar, SProgressValue } from './MyProgressBar.styled';

const MyProgressBar = (props: {
    children: React.ReactElement,
    seconds: number,
    minutes: number,
    totalTime: number,
    isPlay: boolean,
    isPaused: boolean
}) => {

    const [progress, setProgress] = useState(100);
    const size = getSizeProgressBar(props.minutes, props.isPlay);

    useProgress(props.seconds, props.minutes, props.totalTime, props.isPlay, props.isPaused, setProgress);

    return (
        <SProgressBar>
            <SProgress variant="determinate" value={progress} size={size} />
            <SProgressValue>{props.children}</SProgressValue>
        </SProgressBar>
    );
};

export default React.memo(MyProgressBar);