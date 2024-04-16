import { useEffect } from 'react';

export const useTotalTime = (time: number, totalTime: number, setTotalTime: Function, isPlay: boolean) => {
    useEffect(() => {
        if (isPlay) {
            if (totalTime < time) {
                setTotalTime(time);
            }
        }
    }, [isPlay]);
};