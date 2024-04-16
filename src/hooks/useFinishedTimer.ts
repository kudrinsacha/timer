import { useEffect } from 'react';

export const useFinishedTimer = (time: number, setIsPlay: Function, setIsFinishedTimer: Function) => {
    useEffect(() => {
        if (time === 0) {
            setIsPlay(false)
        }
        if (time === 10) {
            setIsFinishedTimer(true);
        }
    }, [time]);
}