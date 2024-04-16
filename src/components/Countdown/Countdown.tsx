import React, { useCallback } from 'react';
import { SAdornment, SCountdown, SInput } from './Countdown.styled';

const MS_IN_SECONDS = 1000;
const MS_IN_MINUTE = 60_000;

const Countdown = (props: { time: number, setTime: Function }) => {

    const minutes = Math.floor(props.time / MS_IN_MINUTE);
    const seconds = Math.floor((props.time - minutes * MS_IN_MINUTE) / MS_IN_SECONDS);

    const minutesValueChange = useCallback((e: React.FocusEvent<HTMLInputElement> | React.PointerEvent | React.KeyboardEvent, newValue: number | null) => {
        if (typeof newValue === 'number') {
            props.setTime( (seconds * MS_IN_SECONDS) + (newValue * MS_IN_MINUTE) );
        }
    }, [props.time]);

    const secondsValueChange = useCallback((e: React.FocusEvent<HTMLInputElement> | React.PointerEvent | React.KeyboardEvent, newValue: number | null) => {
        if (typeof newValue === 'number') {
            props.setTime( (minutes * MS_IN_MINUTE) + (newValue * MS_IN_SECONDS) );
        }
    }, [props.time]);

    return (
        <SCountdown>
            <SInput
                placeholder="Минуты"
                min={0}
                max={719}
                value={minutes}
                onChange={minutesValueChange}
                startAdornment={<SAdornment>м</SAdornment>}
            />
            <SInput
                placeholder="Секунды"
                min={0}
                max={59}
                value={seconds}
                onChange={secondsValueChange}
                startAdornment={<SAdornment>с</SAdornment>}
            />
        </SCountdown>
    );
};

export default React.memo(Countdown);
