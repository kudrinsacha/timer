import { TimeObjType } from '../models/Time';

export const changeValuesTimer = (
    objTime: TimeObjType,
    isMillSecondsLimit: boolean,
    setIsMillSecondsLimit: Function,
    isSecondsLimit: boolean,
    setIsSecondsLimit: Function
) => {
    if (objTime.title === 'millSeconds' && objTime.value === 1000) {
        setIsMillSecondsLimit(true);
        return { ...objTime, value: 0 };
    } else if (objTime.title === 'millSeconds' && objTime.value < 1000) {
        return { ...objTime, value: objTime.value + 10 };
    }

    if (objTime.title === 'seconds' && isMillSecondsLimit) {
        setIsMillSecondsLimit(false);
        return { ...objTime, value: objTime.value + 1 };
    }
    if (objTime.title === 'seconds' && objTime.value === 60) {
        setIsSecondsLimit(true);
        return { ...objTime, value: 0 };
    }

    if (objTime.title === 'minutes' && isSecondsLimit) {
        setIsSecondsLimit(false);
        return { ...objTime, value: objTime.value + 1 };
    }
    if (objTime.title === 'minutes' && objTime.value === 60) {
        return { ...objTime, value: 0 };
    }
    return objTime;
};
