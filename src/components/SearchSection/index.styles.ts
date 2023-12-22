import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const SearchFormWrapper = styled.div`
  width: 100vw;
  background: var(--color-black-700);
`;

export const SearchFormContainer = styled.div`
  padding-left: 56px;
  padding-right: 56px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
export const SearchForm = styled.div`
  display: grid;
  grid-template-areas:
    'input input'
    'categoties-select sorting-select';
  margin: 0 auto;
  padding: 50px;
  width: 100%;
  max-width: 50%;
`;

export const SearchInputWrapper = styled.div`
  grid-area: input;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  height: 80px;
  overflow: hidden;
  border-radius: 5px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    border: none;
    padding: 0 70px 0 5px;
    width: 100%;
    height: 80px;
    font-size: 15px;

    &::placeholder {
      font-size: 15px;
    }
  }

  label {
    display: none;
  }

  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 99%;
    width: 50px;
    outline: none;
    cursor: pointer;
  }
`;
