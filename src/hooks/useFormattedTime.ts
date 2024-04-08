import { useMemo } from 'react';
import { TimeType } from '../models/Time';

export const useFormattedTime = (time: TimeType) => {
    return useMemo(() => {
        let minutes = '0';
        let seconds = '0';
        let millSeconds = '0';

        time.forEach((objTime => {
            if (objTime.title === 'minutes') {
                minutes = `${objTime.value < 10 ? '0' + objTime.value : objTime.value}`
            }
            if (objTime.title === 'seconds') {
                seconds = `${objTime.value < 10 ? '0' + objTime.value : objTime.value}`
            }
            if (objTime.title === 'millSeconds') {
                millSeconds = `${objTime.value < 100 ? '0' + objTime.value / 10 : objTime.value / 10}`
            }
        }))
        
        return `${minutes} : ${seconds} : ${millSeconds}`
    }, [time]);
};
