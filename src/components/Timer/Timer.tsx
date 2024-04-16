import React, { useState } from 'react';
import Countdown from '../Countdown/Countdown';
import Slider from '../Slider/Slider';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useTimeout } from '../../hooks/useTimeout';
import { useFormattedTime } from '../../hooks/useFormattedTime';
import { usePlay } from '../../hooks/usePlay';
import { useStop } from '../../hooks/useStop';
import { useContinue } from '../../hooks/useContinue';
import { useReset } from '../../hooks/useReset';
import { useSound } from '../../hooks/useSound';
import { useSliderLimit } from '../../hooks/useSliderLimit';
import { useTotalTime } from '../../hooks/useTotalTime';
import {
    STimer,
    STimerBtnPlay,
    STimerBtnReset,
    STimerBtns,
    STimerContainer,
    STimerField,
    STimerTitle
} from './Timer.styled';
import { useFinishedTimer } from '../../hooks/useFinishedTimer';

const INITIAL_VALUE_TIMER = 0;
const INITIAL_TOTAL_TIME = 0;
const INITIAL_IS_PLAY = false;
const INITIAL_IS_PAUSED = false;
const INITIAL_IS_FINISHED = false;
const INITIAL_IS_SLIDER_LIMIT = true;

const Timer = () => {
    const [time, setTime] = useState(INITIAL_VALUE_TIMER);
    const [totalTime, setTotalTime] = useState(INITIAL_TOTAL_TIME);
    const [isPlay, setIsPlay] = useState(INITIAL_IS_PLAY);
    const [isPaused, setIsPaused] = useState(INITIAL_IS_PAUSED);
    const [isFinishedTimer, setIsFinishedTimer] = useState(INITIAL_IS_FINISHED);
    const [isSliderLimit, setIsSliderLimit] = useState(INITIAL_IS_SLIDER_LIMIT);

    const playTimer = usePlay(setIsPlay);

    const stopTimer = useStop(setIsPlay, setIsPaused);

    const continueTimer = useContinue(setIsPaused, setIsPlay);

    const resetTimer = useReset(setTime, setIsPlay, setIsPaused, setTotalTime);

    const formattedTime = useFormattedTime(time, isPlay);

    useTimeout(setTime, isPlay);

    useFinishedTimer(time, setIsPlay, setIsFinishedTimer);

    useSound(isFinishedTimer, setIsFinishedTimer);

    useSliderLimit(time, setIsSliderLimit);

    useTotalTime(time, totalTime, setTotalTime, isPlay);

    return (
        <STimer>
            <STimerContainer>
                <STimerTitle>Таймер</STimerTitle>
                <ProgressBar time={time} totalTime={totalTime} isPlay={isPlay} isPaused={isPaused}>
                    <STimerField>{formattedTime}</STimerField>
                </ProgressBar>
                {!isPlay &&
                    <Countdown time={time} setTime={setTime} />}
                {!isPlay && isSliderLimit
                    && (<Slider time={time} setTime={setTime} />)}
                <STimerBtns>
                    {(isPlay || isPaused) && (
                        <STimerBtnReset onClick={resetTimer} variant="outlined">
                            Сбросить
                        </STimerBtnReset>
                    )}
                    {!isPlay && !isPaused && (
                        <STimerBtnPlay
                            disabled={time === 0}
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
                        <STimerBtnPlay
                            disabled={time === 0}
                            onClick={continueTimer}
                            variant="outlined">
                            Возобновить
                        </STimerBtnPlay>
                    )}
                </STimerBtns>
            </STimerContainer>
        </STimer>
    );
};

export default React.memo(Timer);