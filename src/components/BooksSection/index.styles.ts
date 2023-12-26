import styled from '@emotion/styled';
import exp from 'constants';
import { getBreakpoint } from '@/Breakpoinst';

export const BooksSectionWrapper = styled.section`
  margin: 0 auto;
  padding: 20px 56px 200px 56px;
  max-width: 1440px;
  background: #646cff50;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    padding: 10px 10px 100px 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const BooksSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FoundedResults = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 1em;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 20px auto;
`;
export const BooksButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 10px;
  border: none;
  height: 30px;
  width: 100%;
  max-width: 100px;
  border-radius: 5px;
  background: #646cff;
  color: white;

  &:hover,
  &:focus {
    background: #9a9ff9;
    color: #e6e5f2;
  }

  &:active {
    background: lightblue;
    color: white;
  }
`;
