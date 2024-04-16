import { useCallback } from 'react';

export const useReset = (setTime: Function, setIsPlay: Function, setIsPaused: Function, setTotalTime: Function) => {
    return useCallback(() => {
        setIsPlay(false);
        setIsPaused(false);
        setTime(0)
        setTotalTime(0);
    }, []);
};
