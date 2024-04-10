import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const usePlay = (time: TimeType, setTime: Function, setIsPlay: Function, setTotalTime: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setTime(
            time.map((objTime) => {
                if (objTime.title === 'millSeconds') {
                    return { ...objTime, value: objTime.value - 10 };
                }
                return objTime;
            })
        );

        const minutes = time.find(objTime => objTime.title === 'minutes')?.value;
        const seconds = time.find(objTime => objTime.title === 'seconds')?.value;
        if (typeof minutes === 'number' && typeof seconds === 'number') {
            setTotalTime(minutes * 60 + seconds)
        }
    }, [setIsPlay, setTime, time]);
};
