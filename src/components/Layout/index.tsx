import React, { PropsWithChildren } from 'react';
import { Container, Wrapper } from './index.styles';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Container as="main">{children}</Container>
    </Wrapper>
  );
}
