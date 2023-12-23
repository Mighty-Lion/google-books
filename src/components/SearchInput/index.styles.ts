import styled from '@emotion/styled';

export const SearchInputWrapper = styled.div<{
  isFocused: boolean;
  isHovered: boolean;
}>`
  grid-area: input;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  height: 50px;
  overflow: hidden;
  border-radius: 5px;
  transition: 0.5s all;
  ${({ isFocused }) =>
    isFocused &&
    `
      box-shadow: 0 4px 4px 0 var(--color-blue-400);
  `};

  ${({ isHovered }) =>
    isHovered &&
    `
      box-shadow: 0 4px 4px 0 var(--color-blue-400);
  `};

  input {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    border: none;
    padding: 0 70px 0 5px;
    width: 100%;
    height: 50px;
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
    transition: 0.5s all;

    &:focus,
    &:hover {
      background: var(--color-blue-400);
    }

    &:active {
      background: var(--color-blue-500);
    }
  }
`;
