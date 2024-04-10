import { TimeObjType } from '../models/Time';

export const changeValuesTimer = (
    objTime: TimeObjType,
    isMillSecondsLimit: boolean,
    setIsMillSecondsLimit: Function,
    isSecondsLimit: boolean,
    setIsSecondsLimit: Function,
    setIsFinishedTimer: Function,
    setIsPlay: Function
) => {

    if (objTime.title === 'minutes' && isSecondsLimit && objTime.value > 0) {
        setIsSecondsLimit(false)
        return {...objTime, value: objTime.value - 1}
    } else if (objTime.title === 'minutes' && isSecondsLimit && objTime.value <= 0) {
        setIsSecondsLimit(false)
        setIsFinishedTimer(true)
        setIsPlay(false)
    }

    if (objTime.title === 'seconds' && isMillSecondsLimit && objTime.value > 0) {
        setIsMillSecondsLimit(false)
        return {...objTime, value: objTime.value - 1}
    } else if (objTime.title === 'seconds' && isMillSecondsLimit && objTime.value <= 0) {
        setIsMillSecondsLimit(false)
        setIsSecondsLimit(true)
        return {...objTime, value: 59}
    }

    if (objTime.title === 'millSeconds' && objTime.value <= 0) {
        setIsMillSecondsLimit(true)
        return {...objTime, value: 1000}
    } else if (objTime.title === 'millSeconds' && objTime.value > 0) {
        return { ...objTime, value: objTime.value - 10 };
    }

    return objTime;
};