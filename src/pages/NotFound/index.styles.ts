import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 30px;
  width: 100%;
  max-width: 100px;
  border-radius: 5px;
  background: #646cff;
  color: white;

  &:hover {
    background: #9a9ff9;
    color: #e6e5f2;
  }

  &:active {
    background: lightblue;
    color: white;
  }
`;
