import { useEffect } from 'react';

export const useSliderLimit = (minutes: number, setIsSliderLimit: Function) => {
    useEffect(() => {
        if (minutes > 60) {
            setIsSliderLimit(false);
        } else {
            setIsSliderLimit(true);
        }
    }, [minutes]);
};