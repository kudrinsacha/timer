import { useCallback } from 'react';

export const useContinue = (setMillSeconds: Function, setIsPaused: Function, setIsPlay: Function, seconds: number, minutes: number, totalTime: number, setTotalTime: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setIsPaused(false);
        setMillSeconds((prev: number) => prev - 10)

        if (totalTime < minutes * 60 + seconds) {
            setTotalTime(minutes * 60 + seconds)
        }
    }, [seconds, minutes]);
};