import { useEffect } from 'react';
import useSound from 'use-sound';
// import bruh from '../assets/sounds/bruh.mp3'
import kz from '../assets/sounds/kz.mp3'

export const useAudio = (isFinishedTimer: boolean, setIsFinishedTimer: Function) => {

    const [play] = useSound(kz)
    // const [play] = useSound(bruh)

    useEffect(() => {
        play()
        setIsFinishedTimer(false)
    }, [isFinishedTimer]);
}