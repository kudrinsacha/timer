import { useMemo } from 'react';

export const useFormattedTime = (time: number, isPlay: boolean) => {
    return useMemo(() => {
        const minutes = Math.floor(time / 60_000);
        const seconds = Math.floor((time - minutes * 60_000) / 1000);
        const millSeconds = (time - minutes * 60_000) - (seconds * 1000);

        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedMillSeconds = millSeconds === 0 ? '0' + millSeconds : millSeconds >= 100 ? millSeconds / 10 : millSeconds;

        if (isPlay) {
            return `${formattedMinutes} : ${formattedSeconds} : ${formattedMillSeconds}`;
        }
        return `${formattedMinutes} : ${formattedSeconds}`;
    }, [time, isPlay]);
};