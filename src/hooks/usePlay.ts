import { useCallback } from 'react';

export const usePlay = (setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
    }, []);
};