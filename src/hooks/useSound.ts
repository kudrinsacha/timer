import { useCallback, useEffect, useState } from 'react';
// import kz from '../assets/sounds/kz.mp3';
import bruh from '../assets/sounds/bruh.mp3';

export const useSound = (isFinishedTimer: boolean, setIsFinishedTimer: Function) => {
    const [interactUser, setInteractUser] = useState(false);

    const clickUser = useCallback(() => {
        setInteractUser(true);
    }, []);

    document.addEventListener('click', clickUser);

    useEffect(() => {
        if (isFinishedTimer) {
            if (interactUser) {
                const audio = new Audio(bruh);
                audio.play();
            }
            setIsFinishedTimer(false);
        }
        return () => document.removeEventListener('click', clickUser);
    }, [isFinishedTimer]);
};