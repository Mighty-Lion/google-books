import styled from '@emotion/styled';
import { getBreakpoint } from '@/Breakpoinst';

export const BookDetailsWrapper = styled.section`
  margin: 0 auto;
  padding: 20px 56px 200px 56px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  background: #646cff50;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    padding: 10px 10px 100px 10px;
  }

  @media (max-width: ${getBreakpoint('MOBILE_M', 'down')}) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;
export const BookDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    padding: 0 10px;
  }
`;

export const BookImgWrapper = styled.div`
  margin: 0 auto 15px auto;
  min-height: 450px;
  max-width: 300px;
  width: 100%;

  @media (max-width: ${getBreakpoint('MOBILE_LANDSCAPE', 'down')}) {
    max-width: 150px;
  }

  img {
    display: flex;
    width: 100%;
    object-fit: contain;
  }
`;

export const BookInformation = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  grid-gap: 20px;
`;

export const BookText = styled.span<{
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: string;
  textDecoration?: string;
  color?: string;
}>`
  font-family: Roboto, sans-serif;
  font-style: ${(props) =>
    props.fontStyle
      ? `
       ${props.fontStyle}
  `
      : `normal`};
  font-weight: ${(props) =>
    props.fontWeight
      ? `
       ${props.fontWeight}
  `
      : `normal`};
  font-size: ${(props) =>
    props.fontSize
      ? `
       ${props.fontSize}
  `
      : `normal`};
  text-decoration: ${(props) =>
    props.textDecoration
      ? `
       ${props.textDecoration}
  `
      : `none`};
  color: ${(props) =>
    props.color
      ? `
       ${props.color}
  `
      : `var(--color-black-900)`};
`;

export const BookButtonWrapper = styled.div`
  margin: 0 auto;
`;

export const BookLink = styled.a`
  font-family: Roboto, sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  text-decoration: underline;
  color: var(--color-blue-500);
`;
