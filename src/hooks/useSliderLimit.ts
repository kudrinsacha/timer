import { useEffect } from 'react';

export const useSliderLimit = (time: number, setIsSliderLimit: Function) => {
    useEffect(() => {
        if (time > 3_600_000) {
            setIsSliderLimit(false);
        } else {
            setIsSliderLimit(true);
        }
    }, [time]);
};