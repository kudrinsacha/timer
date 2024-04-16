import { useCallback } from 'react';

export const usePlay = (setMillSeconds: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setMillSeconds(990);
    }, []);
};