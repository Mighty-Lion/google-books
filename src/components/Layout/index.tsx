import { PropsWithChildren } from 'react';
import { Header } from './partials/Header';
import { ContentWrapper, Wrapper } from './index.styles';
import { Footer } from './partials/Footer';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper as="main">{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
