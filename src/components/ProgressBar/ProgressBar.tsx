import React, { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { useSizeProgressBar } from '../../hooks/useSizeProgressBar';
import { SProgress, SProgressBar, SProgressValue } from './ProgressBar.styled';

const ProgressBar = (props: {
    children: React.ReactElement,
    seconds: number,
    minutes: number,
    totalTime: number,
    isPlay: boolean,
    isPaused: boolean
}) => {
    const [progress, setProgress] = useState(100);
    const size = useSizeProgressBar(props.minutes, props.isPlay);

    useProgress(props.seconds, props.minutes, props.totalTime, props.isPlay, props.isPaused, setProgress);

    return (
        <SProgressBar>
            <SProgress variant="determinate" value={progress} size={size} />
            <SProgressValue>{props.children}</SProgressValue>
        </SProgressBar>
    );
};

export default React.memo(ProgressBar);