import { useMemo } from 'react';

export const useSizeProgressBar = (minutes: number, isPlay: boolean) => {
    return useMemo(() => {
        if (isPlay) {
            if (minutes && minutes > 99) {
                return 290;
            } else {
                return 270;
            }
        } else {
            if (minutes && minutes > 99) {
                return 220;
            } else {
                return 200;
            }
        }
    }, [minutes, isPlay]);
};