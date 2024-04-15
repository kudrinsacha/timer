import React from 'react';
import { SSlider } from './MySlider.styles';

const MySlider = (props: { seconds: number, setSeconds: Function, minutes: number, setMinutes: Function }) => {
    const marks = [
        {
            value: 0,
            label: '0 мин'
        },
        {
            value: 900,
            label: '15 мин'
        },
        {
            value: 1800,
            label: '30 мин'
        },
        {
            value: 2700,
            label: '45 мин'
        },
        {
            value: 3600,
            label: '60 мин'
        }
    ];

    const sliderValueChange = (e: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            props.setSeconds(newValue - (Math.floor(newValue / 60) * 60));
            props.setMinutes(Math.floor(newValue / 60));
        }
    };

    const valueSlider = () => {
        return props.minutes * 60 + props.seconds;
    };

    return (
        <SSlider
            max={3600}
            value={valueSlider()}
            step={15}
            marks={marks}
            onChange={sliderValueChange}
        />
    );
};

export default React.memo(MySlider);