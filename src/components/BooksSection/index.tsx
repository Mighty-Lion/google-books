import { Dispatch, SetStateAction, useMemo } from 'react';
import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  LoadingWrapper,
  ToTopButtonWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';
import { IBookProps } from '@/hooks/useFetchData';
import { Button } from '@/components/Button/index.styles';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';
import { LoadingSpinner } from '@/components/LoadingSpiner';

export interface IBooksSectionProps {
  books: IBookProps[];
  isFetching: boolean;
  isLastPage: boolean;
  handleUpdate: () => void;
  setSelectedBook: Dispatch<SetStateAction<IBookProps | undefined>>;
  setScrollPosition: Dispatch<SetStateAction<number>>;
  totalItems: number | undefined;
}
export function BooksSection({
  isFetching,
  books,
  handleUpdate,
  setSelectedBook,
  setScrollPosition,
  isLastPage,
  totalItems,
}: IBooksSectionProps) {
  const mappedBooks = books?.map((item: IBookProps) => {
    const imgSrc =
      item?.volumeInfo?.imageLinks !== undefined
        ? item.volumeInfo.imageLinks.smallThumbnail
        : SearchIcon;
    const author = item.volumeInfo?.authors
      ? item.volumeInfo.authors.reduce(
          (accumulator: string, currentValue: string) =>
            `${accumulator + currentValue}\n`,
          ''
        )
      : '';

    return (
      <BookCard
        key={
          item.volumeInfo.title + author + imgSrc + getRandomArbitrary(0, 1000)
        }
        setSelectedBook={setSelectedBook}
        book={item}
        setScrollPosition={setScrollPosition}
        img={imgSrc}
        category={item.volumeInfo?.categories}
        name={item.volumeInfo?.title}
        author={author}
      />
    );
  });

  return useMemo(() => {
    return (
      <BooksSectionWrapper>
        {totalItems ? (
          <FoundedResults>Found {totalItems} results</FoundedResults>
        ) : (
          <FoundedResults>Found {books.length} results</FoundedResults>
        )}
        <BooksSectionContainer>
          {mappedBooks}
          <ToTopButtonWrapper>
            <Button
              onClick={() =>
                window.scrollTo({
                  behavior: 'smooth',
                  top: 0,
                })
              }
            >
              To top
            </Button>
          </ToTopButtonWrapper>
        </BooksSectionContainer>

        {!isLastPage && (
          <LoadingWrapper>
            {!isFetching ? (
              <Button type="button" onClick={handleUpdate}>
                Load more ...
              </Button>
            ) : (
              <LoadingSpinner />
            )}
          </LoadingWrapper>
        )}
      </BooksSectionWrapper>
    );
  }, [
    totalItems,
    books.length,
    mappedBooks,
    isLastPage,
    isFetching,
    handleUpdate,
  ]);
}
