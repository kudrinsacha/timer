import { useEffect, useState } from 'react';
import { TimeType } from '../models/Time';
import { changeValuesTimer } from '../utils/changeValuesTimer';

export const useInterval = (time: TimeType, setTime: Function, isPlay: boolean) => {
    const [isMillSecondsLimit, setIsMillSecondsLimit] = useState(false);
    const [isSecondsLimit, setIsSecondsLimit] = useState(false);

    useEffect(() => {
        let timerId: NodeJS.Timer;

        if (isPlay) {
            timerId = setInterval(() => {
                setTime((prevState: TimeType) => {
                    return prevState.map(objTime => {
                        return changeValuesTimer(
                            objTime,
                            isMillSecondsLimit,
                            setIsMillSecondsLimit,
                            isSecondsLimit,
                            setIsSecondsLimit
                        );
                    });
                });
            }, 10);
        }

        return () => clearInterval(timerId);
    }, [isMillSecondsLimit, isPlay, isSecondsLimit, setTime, time]);
};
