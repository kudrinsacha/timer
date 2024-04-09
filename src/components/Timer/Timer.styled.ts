import styled from 'styled-components';
import Button from '@mui/material/Button';

export const STimer = styled.div``;

export const STimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;
export const STimerTitle = styled.h1`
    margin: 0;
    color: white;
    text-align: center;
`;
export const STimerField = styled.h1`
    margin: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const STimerBtns = styled.div`
    display: flex;
    gap: 15px;
`;

export const STimerBtnPlay = styled(Button)`
    && {
        min-width: 150px;
    }
`;

export const STimerBtnReset = styled(STimerBtnPlay)`
    && {
        color: red;
    }
`;