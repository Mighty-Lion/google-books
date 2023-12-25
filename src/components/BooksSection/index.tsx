import {
  BooksSectionContainer,
  BooksSectionWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import {useEffect} from "react";

export interface IBooksSectionProps {
  books: any;
}
export function BooksSection({ books }: IBooksSectionProps) {

  /* eslint-disable */
  // @ts-ignore

  const imgSrc = item.volumeInfo.imageLinks.smallThumbnail;
  console.log('imgSrc', imgSrc)
  const mappedBooks = books['items']?.map((item: any) => (
    /* eslint-enable */
    <BookCard

      img={imgSrc}
      category={item.volumeInfo.categories}
      name={item.volumeInfo.title}
      author={item.volumeInfo.authors}
    />
  ));


  return (
    <BooksSectionWrapper>
      <BooksSectionContainer>{mappedBooks}</BooksSectionContainer>
    </BooksSectionWrapper>
  );
}
