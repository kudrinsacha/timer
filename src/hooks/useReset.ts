import { useCallback } from 'react';

export const useReset = (setMillSeconds: Function, setSeconds: Function, setMinutes: Function, setIsPlay: Function, setIsPaused: Function, setTotalTime: Function) => {
    return useCallback(() => {
        setIsPlay(false);
        setIsPaused(false);
        setMillSeconds(1000);
        setSeconds(0);
        setMinutes(0);
        setTotalTime(0);
    }, []);
};
