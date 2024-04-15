import React, { useState } from 'react';
import Countdown from '../Countdown/Countdown';
import MySlider from '../UI/MySlider/MySlider';
import MyProgressBar from '../UI/MyProgressBar/MyProgressBar';
import { useTimeout } from '../../hooks/useTimeout';
import { useFormattedTime } from '../../hooks/useFormattedTime';
import { usePlay } from '../../hooks/usePlay';
import { useStop } from '../../hooks/useStop';
import { useContinue } from '../../hooks/useContinue';
import { useReset } from '../../hooks/useReset';
import { useSound } from '../../hooks/useSound';
import { useSliderLimit } from '../../hooks/useSliderLimit';
import {
    STimer,
    STimerBtnPlay,
    STimerBtnReset,
    STimerBtns,
    STimerContainer,
    STimerField,
    STimerTitle
} from './Timer.styled';

const Timer = () => {
    const [millSeconds, setMillSeconds] = useState(1000);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [isPlay, setIsPlay] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinishedTimer, setIsFinishedTimer] = useState(false);
    const [isSliderLimit, setIsSliderLimit] = useState(true);
    const [totalTime, setTotalTime] = useState(0);

    const playTimer = usePlay(setMillSeconds, setIsPlay, setIsFinishedTimer, seconds, minutes, setTotalTime);

    const stopTimer = useStop(setIsPlay, setIsPaused);

    const continueTimer = useContinue(setMillSeconds, setIsPaused, setIsPlay, seconds, minutes, totalTime, setTotalTime);

    const resetTimer = useReset(setMillSeconds, setSeconds, setMinutes, setIsPlay, setIsPaused);

    const formattedTime = useFormattedTime(millSeconds, seconds, minutes, isPlay);

    useTimeout(millSeconds, setMillSeconds, seconds, setSeconds, minutes, setMinutes, isPlay, setIsPlay, setIsFinishedTimer);

    useSound(isFinishedTimer);

    useSliderLimit(minutes, setIsSliderLimit);

    return (
        <STimer>
            <STimerContainer>
                <STimerTitle>Таймер</STimerTitle>
                <MyProgressBar seconds={seconds} minutes={minutes} totalTime={totalTime} isPlay={isPlay} isPaused={isPaused}>
                <STimerField>{formattedTime}</STimerField>
                </MyProgressBar>
                {!isPlay && <Countdown seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} />}
                {!isPlay && isSliderLimit
                    && (<MySlider seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} />)}
                <STimerBtns>
                    {(isPlay || isPaused) && (
                        <STimerBtnReset onClick={resetTimer} variant="outlined">
                            Сбросить
                        </STimerBtnReset>
                    )}
                    {!isPlay && !isPaused && (
                        <STimerBtnPlay
                            disabled={minutes === 0 && seconds === 0}
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