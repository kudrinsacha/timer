import { styled } from '@mui/system';

export const StyledInputRoot = styled('div')(
    () => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: #007fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`
);

export const StyledInput = styled('input')(
    () => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: #DAE2ED;
  background: #1C2025;
  border: 1px solid #434D5B;
  box-shadow: 0px 2px 4px rgba(0,0,0, 0.5);
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: #B0B8C4;
  }

  &:focus {
    border-color: 1px solid #434D5B;
  }

  &:focus-visible {
    
    outline: 0;
  }
`
);

export const StyledButton = styled('button')(
    () => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: #303740;
  background: #1C2025;
  color: #DAE2ED;
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: #434D5B;
    border-color: #9DA8B7;
    color: #F3F6F9;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`
);