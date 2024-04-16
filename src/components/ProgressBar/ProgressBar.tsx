import React, { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { useSizeProgressBar } from '../../hooks/useSizeProgressBar';
import { SProgress, SProgressBar, SProgressValue } from './ProgressBar.styled';

const INITIAL_PROGRESS_PERCENT = 100;

const ProgressBar = (props: {
    children: React.ReactElement,
    time: number,
    totalTime: number,
    isPlay: boolean,
    isPaused: boolean
}) => {
    const [progress, setProgress] = useState(INITIAL_PROGRESS_PERCENT);
    const size = useSizeProgressBar(props.time, props.isPlay);

    useProgress(props.time, props.totalTime, props.isPlay, props.isPaused, setProgress);

    return (
        <SProgressBar>
            <SProgress variant="determinate" value={progress} size={size} />
            <SProgressValue>{props.children}</SProgressValue>
        </SProgressBar>
    );
};

export default React.memo(ProgressBar);