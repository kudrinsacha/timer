import { useEffect, useState } from 'react';
import { TimeType } from '../models/Time';
import { changeValuesTimer } from '../utils/changeValuesTimer';

export const useTimeout = (time: TimeType, setTime: Function, isPlay: boolean, setIsPlay: Function, isFinishedTimer: boolean, setIsFinishedTimer: Function) => {
    const [isMillSecondsLimit, setIsMillSecondsLimit] = useState(false);
    const [isSecondsLimit, setIsSecondsLimit] = useState(false);

    useEffect(() => {
        if (isPlay) {
            setTimeout(() => {
                setTime(time.map(objTime => {
                        return changeValuesTimer(
                            objTime,
                            isMillSecondsLimit,
                            setIsMillSecondsLimit,
                            isSecondsLimit,
                            setIsSecondsLimit,
                            setIsFinishedTimer,
                            setIsPlay
                        );
                    })
                );
            }, 10);
        }
        if (isFinishedTimer) {
            setIsFinishedTimer(false);
            setTimeout(() => {
                setTime(
                    time.map(objTime => {
                        return { ...objTime, value: 0 };
                    })
                );
            }, 10);
        }
    }, [isFinishedTimer, isMillSecondsLimit, isPlay, isSecondsLimit, setIsPlay, setTime, time]);
};
