import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #e5eceb;
  z-index: 100;
`;

export const NavbarList = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 0;
`;

export const NavbarListLink = styled(Link)`
  font-size: 1rem;
`;
