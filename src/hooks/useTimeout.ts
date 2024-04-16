import { useEffect } from 'react';

export const useTimeout = (millSeconds: number, setMillSeconds: Function, seconds: number, setSeconds: Function, minutes: number, setMinutes: Function, isPlay: boolean, setIsPlay: Function, setIsFinishedTimer: Function, setTotalTime: Function) => {
    useEffect(() => {
        if (isPlay) {
            const timer = setTimeout(() => {

                if (seconds === 0 && minutes <= 0 && millSeconds <= 0) {
                    setIsPlay(false);
                    setIsFinishedTimer(true)
                    setTotalTime(0)
                    setMillSeconds(1000)
                }
                if (seconds === 0 && minutes > 0 && millSeconds <= 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }

                if (millSeconds > 0) {
                    setMillSeconds(millSeconds - 10);
                }
                if (millSeconds <= 0 && seconds > 0) {
                    setSeconds(seconds - 1);
                    setMillSeconds(1000);
                }
                if (millSeconds <= 0) {
                    setMillSeconds(1000);
                }
            }, 10);

            return () => clearTimeout(timer);
        }
    }, [millSeconds]);
};
