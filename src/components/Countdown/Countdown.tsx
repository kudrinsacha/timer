import React from 'react';
import { SAdornment, SCountdown, SInput } from './Countdown.styled';

const Countdown = (props: {seconds: number, setSeconds: Function, minutes: number, setMinutes: Function}) => {
    return (
        <SCountdown>
            <SInput
                placeholder='Минуты'
                min={0}
                max={719}
                value={props.minutes}
                onChange={(e, newValue) => {
                    if (typeof newValue === 'number') {
                        props.setMinutes(newValue)
                    }
                }}
                startAdornment={<SAdornment>м</SAdornment>}
            />
            <SInput
                placeholder='Секунды'
                min={0}
                max={59}
                value={props.seconds}
                onChange={(e, newValue) => {
                    if (typeof newValue === 'number') {
                        props.setSeconds(newValue)
                    }
                }}
                startAdornment={<SAdornment>с</SAdornment>}
            />
        </SCountdown>
    );
};

export default React.memo(Countdown);
