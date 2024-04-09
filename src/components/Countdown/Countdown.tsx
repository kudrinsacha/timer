import React from 'react';
import { SAdornment, SCountdown, SInput } from './Countdown.styled';
import { TimeType } from '../../models/Time';

const Countdown = (props: { time: TimeType; setTime: Function }) => {
    return (
        <SCountdown>
            <SInput
                placeholder='Минуты'
                min={0}
                max={720}
                value={props.time.find(timeObj => timeObj.title === 'minutes')?.value}
                onChange={(e, newValue) => {
                    if (typeof newValue === 'number') {
                        props.setTime(
                            props.time.map(timeObj => {
                                if (timeObj.title === 'minutes') {
                                    return { ...timeObj, value: newValue };
                                }
                                return timeObj;
                            })
                        );
                    }
                }}
                startAdornment={<SAdornment>м</SAdornment>}
            />
            <SInput
                placeholder='Секунды'
                min={0}
                max={59}
                value={props.time.find(timeObj => timeObj.title === 'seconds')?.value}
                onChange={(e, newValue) => {
                    if (typeof newValue === 'number') {
                        props.setTime(
                            props.time.map(timeObj => {
                                if (timeObj.title === 'seconds') {
                                    return { ...timeObj, value: newValue };
                                }
                                return timeObj;
                            })
                        );
                    }
                }}
                startAdornment={<SAdornment>с</SAdornment>}
            />
        </SCountdown>
    );
};

export default Countdown;
