import styled from 'styled-components';
import Button from '@mui/material/Button';

export const STimer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
`;

export const STimerContainer = styled.div`
    text-align: center;
`;
export const STimerTitle = styled.div`
    color: white;
    text-align: center;
`;
export const STimerField = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const STimerBtnPlay = styled(Button)`
    && {
        min-width: 150px;
        margin: 0 10px;
    }
`;

export const STimerBtnReset = styled(STimerBtnPlay)`
    && {
        color: red;
    }
`;
