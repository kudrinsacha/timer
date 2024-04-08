import { useCallback } from 'react';
import { TimeType } from '../models/Time';

export const usePlay = (setTime: Function, setIsPlay: Function) => {
    return useCallback(() => {
        setIsPlay(true);
        setTime((prevState: TimeType) => {
            return prevState.map((objTime) => {
                if (objTime.title === 'millSeconds') {
                    return {...objTime, value: objTime.value + 10}
                }
                return objTime;
            })
        });
    }, [setIsPlay, setTime]);
};
