import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: none;
  height: 50px;
  width: 100%;
  max-width: 150px;
	font-size: 1rem;
  border-radius: 5px;
  background: #646cff;
  color: white;
  transition: 0.5s ease;

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
