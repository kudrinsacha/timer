import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const useReset = (setTime: Function, setIsPlay: Function, setIsPaused: Function) => {
    return useCallback(() => {
        setIsPlay(false);
        setIsPaused(false);
        setTime((prevState: TimeType) => {
            return prevState.map((objItem) => {
                return {...objItem, value: 0}
            })
        })
    }, [setIsPaused, setIsPlay, setTime]);
};
