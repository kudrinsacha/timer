import React, { useState } from 'react';
import Countdown from '../Countdown/Countdown';
import MySlider from '../UI/MySlider/MySlider';
import { useTimeout } from '../../hooks/useTimeout';
import { useFormattedTime } from '../../hooks/useFormattedTime';
import { usePlay } from '../../hooks/usePlay';
import { useStop } from '../../hooks/useStop';
import { useContinue } from '../../hooks/useContinue';
import { useReset } from '../../hooks/useReset';
import { TimeType } from '../../models/Time';
import { useSound } from '../../hooks/useSound';
import {
    STimer,
    STimerBtnPlay,
    STimerBtnReset,
    STimerBtns,
    STimerContainer,
    STimerField,
    STimerTitle
} from './Timer.styled';
import { useSliderLimit } from '../../hooks/useSliderLimit';

const Timer = () => {
    const [time, setTime] = useState<TimeType>([
        { title: 'minutes', value: 0 },
        { title: 'seconds', value: 0 },
        { title: 'millSeconds', value: 0 }
    ]);

    const [isPlay, setIsPlay] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinishedTimer, setIsFinishedTimer] = useState(false);
    const [isSliderLimit, setIsSliderLimit] = useState(true);

    const playTimer = usePlay(time, setTime, setIsPlay);

    const stopTimer = useStop(setIsPlay, setIsPaused);

    const continueTimer = useContinue(time, setTime, setIsPaused, setIsPlay);

    const resetTimer = useReset(time, setTime, setIsPlay, setIsPaused);

    const formattedTime = useFormattedTime(time, isPlay, isPaused);

    useTimeout(time, setTime, isPlay, setIsPlay, isFinishedTimer, setIsFinishedTimer);

    useSound(isFinishedTimer);

    useSliderLimit(time, setIsSliderLimit)

    return (
        <STimer>
            <STimerContainer>
                <STimerTitle>Таймер</STimerTitle>
                <STimerField>{formattedTime}</STimerField>
                {!isPlay && <Countdown time={time} setTime={setTime} />}
                {!isPlay && isSliderLimit
                    && (<MySlider time={time} setTime={setTime} />)}
                <STimerBtns>
                    {(isPlay || isPaused) && (
                        <STimerBtnReset onClick={resetTimer} variant="outlined">
                            Сбросить
                        </STimerBtnReset>
                    )}
                    {!isPlay && !isPaused && (
                        <STimerBtnPlay
                            disabled={
                                time.find(timeObj => timeObj.title === 'minutes')?.value === 0 &&
                                time.find(timeObj => timeObj.title === 'seconds')?.value === 0
                            }
                            onClick={playTimer}
                            variant="outlined"
                        >
                            Запустить
                        </STimerBtnPlay>
                    )}
                    {isPlay && (
                        <STimerBtnPlay onClick={stopTimer} variant="outlined">
                            Пауза
                        </STimerBtnPlay>
                    )}
                    {isPaused && (
                        <STimerBtnPlay onClick={continueTimer} variant="outlined">
                            Возобновить
                        </STimerBtnPlay>
                    )}
                </STimerBtns>
            </STimerContainer>
        </STimer>
    );
};

export default React.memo(Timer);
