import React, { useCallback } from 'react';
import { SSlider } from './Slider.styles';

const MS_IN_15_MINUTES = 900_000
const MS_IN_30_MINUTES = 1_800_000;
const MS_IN_45_MINUTES = 2_700_000;
const MS_IN_60_MINUTES = 3_600_000;
const STEP_SLIDER = 15_000;

const Slider = (props: { time: number, setTime: Function }) => {
    const marks = [
        {
            value: 0,
            label: '0 мин'
        },
        {
            value: MS_IN_15_MINUTES,
            label: '15 мин'
        },
        {
            value: MS_IN_30_MINUTES,
            label: '30 мин'
        },
        {
            value: MS_IN_45_MINUTES,
            label: '45 мин'
        },
        {
            value: MS_IN_60_MINUTES,
            label: '60 мин'
        }
    ];


    const sliderValueChange = useCallback((e: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            props.setTime(newValue);
        }
    }, []);

    return (
        <SSlider
            max={MS_IN_60_MINUTES}
            value={props.time}
            step={STEP_SLIDER}
            marks={marks}
            onChange={sliderValueChange}
        />
    );
};

export default React.memo(Slider);