import React from 'react';
import { TimeType } from '../../../models/Time';
import { SSlider } from './MySlider.styles';

const MySlider = (props: {time: TimeType, setTime: Function}) => {
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
        props.setTime(
            props.time.map((objTime) => {
                if (newValue < 60 && objTime.title === 'seconds' && typeof newValue === 'number') {
                    return {...objTime, value: newValue}
                } else if (typeof newValue === 'number') {
                    const minutes = Math.floor(newValue / 60);
                    if (objTime.title === 'seconds') {
                        return {...objTime, value: newValue - (minutes * 60)}
                    }
                    if (objTime.title === 'minutes') {
                        return {...objTime, value: minutes}
                    }
                }

                return {...objTime}
            })
        )
    }

    const valueSlider = () => {
        const minutes = props.time.find(objTime => objTime.title === 'minutes')?.value
        const seconds = props.time.find(objTime => objTime.title === 'seconds')?.value

        if (typeof minutes === 'number' && typeof seconds === 'number') {
            return minutes * 60 + seconds
        }
    }

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

export default MySlider;