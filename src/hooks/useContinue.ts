import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const useContinue = (time: TimeType, setTime: Function, setIsPaused: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPaused(false);
        setIsPlay(true);
        setTime(
            time.map((objTime) => {
                if (objTime.title === 'millSeconds') {
                    return {...objTime, value: objTime.value - 10}
                }
                return objTime;
            })
        )
    }, [setIsPaused, setIsPlay, setTime, time]);
};
