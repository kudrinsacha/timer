import React, { useCallback } from 'react';
import { SAdornment, SCountdown, SInput } from './Countdown.styled';

const Countdown = (props: { seconds: number, setSeconds: Function, minutes: number, setMinutes: Function }) => {

    const minutesValueChange = useCallback((e: React.FocusEvent<HTMLInputElement> | React.PointerEvent | React.KeyboardEvent, newValue: number | null) => {
        if (typeof newValue === 'number') {
            props.setMinutes(newValue);
        }
    }, []);

    const secondsValueChange = useCallback((e: React.FocusEvent<HTMLInputElement> | React.PointerEvent | React.KeyboardEvent, newValue: number | null) => {
        if (typeof newValue === 'number') {
            props.setSeconds(newValue);
        }
    }, []);

    return (
        <SCountdown>
            <SInput
                placeholder="Минуты"
                min={0}
                max={719}
                value={props.minutes}
                onChange={minutesValueChange}
                startAdornment={<SAdornment>м</SAdornment>}
            />
            <SInput
                placeholder="Секунды"
                min={0}
                max={59}
                value={props.seconds}
                onChange={secondsValueChange}
                startAdornment={<SAdornment>с</SAdornment>}
            />
        </SCountdown>
    );
};

export default React.memo(Countdown);
