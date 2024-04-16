import { useEffect } from 'react';

export const useProgress = (time: number, totalTime: number, isPlay: boolean, isPaused: boolean, setProgress: Function) => {
    useEffect(() => {
        if (isPlay && totalTime !== 0) {
            const progressPercent = Math.floor((time / totalTime) * 100);

            if (totalTime < 5000) {
                if (progressPercent % 10 === 0) {
                    setProgress(progressPercent);
                }
            } else {
                setProgress(progressPercent);
            }
        }
        if (!isPlay && !isPaused) {
            setProgress(100);
        }
    }, [time, isPlay, isPaused, totalTime]);
};