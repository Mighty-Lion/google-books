import { PropsWithChildren } from 'react';
import { TitleH1 } from '@/components/Heading/index.styles';

export function Heading({ children }: PropsWithChildren) {
  return <TitleH1>{children}</TitleH1>;
}
