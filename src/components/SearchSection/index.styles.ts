import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const SearchFormWrapper = styled.div`
  width: 100vw;
  background: var(--color-black-700);
`;

export const SearchFormContainer = styled.div`
  margin: 0 auto;
  padding: 50px 56px;
  max-width: 1440px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    padding: 25px 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const HeadingWrapper = styled.div`
  margin: 0 auto;
  max-width: 400px;

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    margin: 0 auto;
  }
`;
export const SearchForm = styled.form`
  display: grid;
  grid-template-areas:
    'input input'
    'categories-select sorting-select';
  grid-gap: 30px;
  margin: 30px auto 0 auto;
  padding: 0 50px;
  width: 100%;
  max-width: 800px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    grid-template-areas:
      'input'
      'categories-select'
      'sorting-select';
    padding: 0;
  }
`;
