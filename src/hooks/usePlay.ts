import { useCallback } from 'react';

export const usePlay = (setMillSeconds: Function, setIsPlay: Function, setIsFinishedTimer: Function, seconds: number, minutes: number, setTotalTime: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setMillSeconds(990);
        setIsFinishedTimer(false);
        setTotalTime(minutes * 60 + seconds);
    }, [minutes, seconds]);
};