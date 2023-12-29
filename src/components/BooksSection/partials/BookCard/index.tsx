import { Dispatch, SetStateAction, useMemo } from 'react';
import {
  BookCardContainer,
  BookCardImageWrapper,
  TextWrapper,
} from '@/components/BooksSection/partials/BookCard/index.styles';
import { Text, TextBold } from '@/components/Text/index.styles';

export interface IBookCardProps {
  id: string;
  img: string | undefined;
  category?: string[] | undefined;
  name?: string | undefined;
  author?: string | undefined;
  setSelectedBookId: Dispatch<SetStateAction<string | undefined>>;
}

export const BookCard = ({
  img,
  category,
  author,
  name,
  id,
  setSelectedBookId,
}: IBookCardProps) => {
  const cachedValue = useMemo(() => {
    return (
      <BookCardContainer onClick={() => setSelectedBookId(id)}>
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
  }, [img, category, author, name]);

  return cachedValue;
};
