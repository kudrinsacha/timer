import React, { useEffect, useRef, useState } from 'react';
import { SProgress, SProgressBar, SProgressValue } from './MyProgressBar.styled';
import { TimeType } from '../../../models/Time';

const MyProgressBar = (props: { children: React.ReactElement, time: TimeType, totalTime: number, isPlay: boolean }) => {

    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const minutes = props.time.find(objTime => objTime.title === 'minutes')?.value;
        const seconds = props.time.find(objTime => objTime.title === 'seconds')?.value;
        const millSeconds = props.time.find(objTime => objTime.title === 'millSeconds')?.value;

        if (typeof minutes === 'number' && typeof seconds === 'number' && typeof millSeconds === 'number') {
            if (seconds === 0 && minutes === 0 && millSeconds === 0) {
                setProgress(100);
            } else if (props.isPlay) {
                if (seconds !== 59) {
                    const currentTime = minutes * 60 + seconds;
                    setProgress((currentTime / props.totalTime) * 100);
                } else {
                    const currentTime = (minutes - 1) * 60 + seconds;
                    setProgress((currentTime / props.totalTime) * 100);
                }
            }
        }
    }, [props.time.find(objTime => objTime.title === 'seconds')?.value]);

    return (
        <SProgressBar>
            <SProgress variant="determinate" value={progress} size={props.isPlay ? 220 : 150} />
            <SProgressValue>{props.children}</SProgressValue>
        </SProgressBar>
    );
};

export default MyProgressBar;