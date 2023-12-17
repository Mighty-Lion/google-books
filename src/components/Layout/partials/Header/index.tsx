import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';
import { Container } from '../../index.styles';

// eslint-disable-next-line import/prefer-default-export
export function Header() {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarList>
          <NavbarListLink to="/">Home</NavbarListLink>
          <NavbarListLink to="/Posts">Posts</NavbarListLink>
          <NavbarListLink to="/">3</NavbarListLink>
          <NavbarListLink to="/">4</NavbarListLink>
          <NavbarListLink to="/">5</NavbarListLink>
        </NavbarList>
      </Container>
    </NavbarWrapper>
  );
}
