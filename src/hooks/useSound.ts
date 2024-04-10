import { useEffect, useState } from 'react';
import kz from '../assets/sounds/kz.mp3'
// import bruh from '../assets/sounds/bruh.mp3'

export const useSound = (isFinishedTimer: boolean) => {
    const [interactUser, setInteractUser] = useState(false)
    useEffect(() => {
        const clickUser = () => {
            setInteractUser(true)
        }

        document.addEventListener('click', clickUser)

        if (interactUser) {
            const audio = new Audio(kz)
            audio.play()
        }

        return () => document.removeEventListener('click', clickUser)
    }, [isFinishedTimer]);
}