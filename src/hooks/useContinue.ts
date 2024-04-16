import { useCallback } from 'react';

export const useContinue = (setMillSeconds: Function, setIsPaused: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setIsPaused(false);
        setMillSeconds((prev: number) => prev - 10)
    }, []);
};