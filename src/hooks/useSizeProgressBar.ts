import { useMemo } from 'react';

export const useSizeProgressBar = (time: number, isPlay: boolean) => {
    return useMemo(() => {
        if (isPlay) {
            if (time >= 6_000_000) {
                return 290;
            } else {
                return 270;
            }
        } else {
            if (time >= 6_000_000) {
                return 220;
            } else {
                return 200;
            }
        }
    }, [time, isPlay]);
};