import { useCallback } from 'react';

export const useStop = (setIsPlay: Function, setIsPaused: Function) => {
    return useCallback(() => {
        setIsPlay(false);
        setIsPaused(true);
    }, []);
};
