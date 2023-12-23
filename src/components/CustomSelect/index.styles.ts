import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const CustomSelectWrapper = styled.div<{ gridArea: string | undefined }>`
  display: grid;
  align-items: center;
  grid-template-areas: 'label select';
  grid-gap: 5px;
  min-width: 300px;
  max-width: 600px;
  position: relative;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`};

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    margin: 0 auto;
  }

  label {
    grid-area: label;
    margin-left: auto;
    margin-right: 0;
    max-width: 90px;
    white-space: nowrap;
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 1.15rem;
    color: var(--color-white-0);
  }

  select {
    grid-area: select;
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /*  other styles for aesthetics */
    width: 100%;
    font-size: 1.15rem;
    padding: 0.675em 5em 0.675em 1em;
    background-color: #fff;
    border: 1px solid #caced1;
    border-radius: 0.25rem;
    color: #000;
    cursor: pointer;
  }

  &::before,
  &::after {
    --size: 0.3rem;
    content: '';
    position: absolute;
    right: 1rem;
    pointer-events: none;
  }

  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid black;
    top: 40%;
  }

  &::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid black;
    top: 55%;
  }
`;
