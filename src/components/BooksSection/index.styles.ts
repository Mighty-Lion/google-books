import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const BooksSectionWrapper = styled.section`
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

export const BooksSectionContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`;
