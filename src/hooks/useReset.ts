import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const useReset = (time: TimeType, setTime: Function, setIsPlay: Function, setIsPaused: Function) => {
    return useCallback(() => {
        setIsPlay(false);
        setIsPaused(false);
        setTimeout(() => {
            setTime(
                time.map(objItem => {
                    if (objItem.title === 'millSeconds') {
                        return { ...objItem, value: 1000 };
                    } else {
                        return { ...objItem, value: 0 };
                    }
                })
            );
        }, 10)
    }, [setIsPaused, setIsPlay, setTime, time]);
};
