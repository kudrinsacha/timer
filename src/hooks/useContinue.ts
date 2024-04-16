import { useCallback } from 'react';

export const useContinue = (setIsPaused: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setIsPaused(false);
    }, []);
};