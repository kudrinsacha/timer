import { useEffect, useRef } from 'react';

export const useTimeout = (setTime: Function, isPlay: boolean) => {
    const timerRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (isPlay) {
            timerRef.current = setInterval(() => {
                setTime((prev: number) => prev - 10);
            }, 10);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlay]);
};