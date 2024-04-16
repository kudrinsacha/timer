import { useMemo } from 'react';

export const useFormattedTime = (millSeconds: number, seconds: number, minutes: number, isPlay: boolean) => {
    return useMemo(() => {
        const newMillSeconds = millSeconds === 1000 ? millSeconds / 100 : millSeconds !== 1000 && millSeconds >= 100 ? millSeconds / 10 : '0' + millSeconds / 10;
        const newSeconds = seconds < 10 ? '0' + seconds : seconds;
        const newMinutes = minutes < 10 ? '0' + minutes : minutes;

        if (isPlay) {
            return `${newMinutes} : ${newSeconds} : ${newMillSeconds}`;
        }
        return `${newMinutes} : ${newSeconds}`;
    }, [millSeconds, seconds, minutes]);
};