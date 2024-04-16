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

const Timer = () => {
    const [millSeconds, setMillSeconds] = useState(1000);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [totalTime, setTotalTime] = useState(0);

    const [isPlay, setIsPlay] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinishedTimer, setIsFinishedTimer] = useState(false);
    const [isSliderLimit, setIsSliderLimit] = useState(true);

    const playTimer = usePlay(setMillSeconds, setIsPlay);

    const stopTimer = useStop(setIsPlay, setIsPaused);

    const continueTimer = useContinue(setMillSeconds, setIsPaused, setIsPlay);

    const resetTimer = useReset(setMillSeconds, setSeconds, setMinutes, setIsPlay, setIsPaused, setTotalTime);

    const formattedTime = useFormattedTime(millSeconds, seconds, minutes, isPlay);

    useTimeout(millSeconds, setMillSeconds, seconds, setSeconds, minutes, setMinutes, isPlay, setIsPlay, setIsFinishedTimer, setTotalTime);

    useSound(isFinishedTimer, setIsFinishedTimer);

    useSliderLimit(minutes, setIsSliderLimit);

    useTotalTime(seconds, minutes, totalTime, setTotalTime, isPlay);

    return (
        <STimer>
            <STimerContainer>
                <STimerTitle>Таймер</STimerTitle>
                <ProgressBar seconds={seconds} minutes={minutes} totalTime={totalTime} isPlay={isPlay}
                               isPaused={isPaused}>
                    <STimerField>{formattedTime}</STimerField>
                </ProgressBar>
                {!isPlay &&
                    <Countdown seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} />}
                {!isPlay && isSliderLimit
                    && (<Slider seconds={seconds} setSeconds={setSeconds} minutes={minutes}
                                  setMinutes={setMinutes} />)}
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