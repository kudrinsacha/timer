import styled from 'styled-components'
import { NumberInput } from '../UI/MyNumberInput/MyNumberInput';

export const SCountdown = styled.div`
    display: flex;
    gap: 20px;
`;

export const SInput = styled(NumberInput)`
    position: relative;
`;

export const SAdornment = styled.div`
    position: absolute;
    left: 45px;
    color: #9DA8B7;
`;

