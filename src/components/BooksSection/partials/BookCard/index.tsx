import { Dispatch, SetStateAction, useMemo } from 'react';
import {
  BookCardContainer,
  BookCardImageWrapper,
  TextWrapper,
} from '@/components/BooksSection/partials/BookCard/index.styles';
import { Text, TextBold } from '@/components/Text/index.styles';
import { IBookProps } from '@/hooks/useFetchData';

export interface IBookCardProps {
  img: string | undefined;
  category?: string[] | undefined;
  name?: string | undefined;
  author?: string | undefined;
  book: IBookProps;
  setSelectedBook: Dispatch<SetStateAction<IBookProps | undefined>>;
  setScrollPosition: Dispatch<SetStateAction<number>>;
}

export const BookCard = ({
  img,
  category,
  author,
  name,
  book,
  setSelectedBook,
  setScrollPosition,
}: IBookCardProps) => {
  return useMemo(() => {
    return (
      <BookCardContainer
        onClick={() => {
          setSelectedBook(book);
          setScrollPosition(window.scrollY);
        }}
      >
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
  }, [img, category, name, author, setSelectedBook, setScrollPosition]);
};
