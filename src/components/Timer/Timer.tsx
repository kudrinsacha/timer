import React, { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { useFormattedTime } from '../../hooks/useFormattedTime';
import { usePlay } from '../../hooks/usePlay';
import { useStop } from '../../hooks/useStop';
import { useContinue } from '../../hooks/useContinue';
import { useReset } from '../../hooks/useReset';
import { TimeType } from '../../models/Time';
import { STimer, STimerBtnPlay, STimerBtnReset, STimerContainer, STimerField, STimerTitle } from './Timer.styled';

const Timer = () => {
    const [time, setTime] = useState<TimeType>([
        {title: 'minutes', value: 0},
        {title: 'seconds', value: 0},
        {title: 'millSeconds', value: 0}
    ]);
    const [isPlay, setIsPlay] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const playTimer = usePlay(setTime, setIsPlay);

    const stopTimer = useStop(setIsPlay, setIsPaused);

    const continueTimer = useContinue(setTime, setIsPaused, setIsPlay);

    const resetTimer = useReset(setTime, setIsPlay, setIsPaused);

    const formattedTime = useFormattedTime(time);

    useInterval(time, setTime, isPlay);

    return (
        <STimer>
            <STimerContainer>
                <STimerTitle>Таймер</STimerTitle>
                <STimerField>{formattedTime}</STimerField>
                {(isPlay || isPaused) && (
                    <STimerBtnReset onClick={resetTimer} variant='outlined'>
                        Сбросить
                    </STimerBtnReset>
                )}
                {!isPlay && !isPaused && (
                    <STimerBtnPlay onClick={playTimer} variant='outlined'>
                        Запустить
                    </STimerBtnPlay>
                )}
                {isPlay && (
                    <STimerBtnPlay onClick={stopTimer} variant='outlined'>
                        Пауза
                    </STimerBtnPlay>
                )}
                {isPaused && (
                    <STimerBtnPlay onClick={continueTimer} variant='outlined'>
                        Возобновить
                    </STimerBtnPlay>
                )}
            </STimerContainer>
        </STimer>
    );
};

export default React.memo(Timer);
