import { useEffect } from 'react';
import { TimeType } from '../models/Time';

export const useSliderLimit = (time: TimeType, setIsSliderLimit: Function) => {
    useEffect(() => {
        const minutes = time.find(objTime => objTime.title === 'minutes')?.value;
        if (minutes && minutes <= 60) {
            setIsSliderLimit(true);
        }
        if (minutes && minutes > 60) {
            setIsSliderLimit(false);
        }
    }, [time]);
};