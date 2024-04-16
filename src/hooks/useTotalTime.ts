import { useEffect } from 'react';

export const useTotalTime = (seconds: number, minutes: number, totalTime: number, setTotalTime: Function, isPlay: boolean) => {
    useEffect(() => {
        if (isPlay) {
            if (totalTime < minutes * 60 + seconds) {
                setTotalTime(minutes * 60 + seconds);
            }
        }
    }, [isPlay]);
};