import { useEffect } from 'react';

export const useProgress = (seconds: number, minutes: number, totalTime: number, isPlay: boolean, isPaused: boolean, setProgress: Function) => {
    useEffect(() => {
        if (isPlay) {
            const currentTime = minutes * 60 + seconds;
            setProgress((currentTime / totalTime) * 100);
        }
        if (!isPlay && !isPaused) {
            setProgress(100)
        }
    }, [seconds, isPlay, isPaused, totalTime]);
};