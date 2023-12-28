import {
  BookCardContainer,
  BookCardImageWrapper,
  TextWrapper,
} from '@/components/BooksSection/partials/BookCard/index.styles';
import { Text, TextBold } from '@/components/Text/index.styles';

export interface IBookCardProps {
  img: string | undefined;
  category?: string[] | undefined;
  name?: string | undefined;
  author?: string | undefined;
}

export function BookCard({ img, category, author, name }: IBookCardProps) {
  return (
    <BookCardContainer>
      <BookCardImageWrapper>
        <img src={img} alt="img" />
      </BookCardImageWrapper>
      <TextWrapper>
        <Text>{category}</Text>
      </TextWrapper>
      <TextWrapper>
        <TextBold>{name}</TextBold>
      </TextWrapper>
      <TextWrapper>
        <Text>{author}</Text>
      </TextWrapper>
    </BookCardContainer>
  );
}
