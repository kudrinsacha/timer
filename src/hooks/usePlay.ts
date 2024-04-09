import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const usePlay = (time: TimeType, setTime: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setTime(
           time.map((objTime) => {
                if (objTime.title === 'millSeconds') {
                    return {...objTime, value: objTime.value - 10}
                }
                return objTime;
            })
        )
    }, [setIsPlay, setTime, time]);
};
