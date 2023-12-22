import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  flex: 1 0 auto;
  max-width: 1440px;
  width: 100%;
  position: relative;
  // padding-left: 56px;
  // padding-right: 56px;
	//
  // @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
  //   padding-left: 10px;
  //   padding-right: 10px;
  // }
	//
  // @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
  //   padding-left: 5px;
  //   padding-right: 5px;
  // }
`;
