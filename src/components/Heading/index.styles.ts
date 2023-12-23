import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const TitleH1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 3.2em;
  font-weight: normal;
  font-style: italic;
  color: var(--color-white-0);

  // @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
  //   font-size: 15px;
  // }
`;
