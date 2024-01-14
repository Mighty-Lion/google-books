import { Dispatch, SetStateAction, useState } from 'react';
import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  LoadingWrapper,
  ToTopButtonWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';
import { IBookProps, IDataProps } from '@/hooks/useFetchData';
import { Button } from '@/components/Button/index.styles';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';
import {LoadingSpinner} from "@/components/LoadingSpiner";

export interface IBooksSectionProps {
  data: IDataProps | undefined;
  books: IBookProps[];
  isFetching: boolean;
  isLastPage: boolean;
  handleUpdate: () => void;
  setSelectedBookId: Dispatch<SetStateAction<string | undefined>>;
  setScrollPosition: Dispatch<SetStateAction<number>>;
}
export function BooksSection({
  isFetching,
  data,
  books,
  handleUpdate,
  setSelectedBookId,
  setScrollPosition,
  isLastPage,
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
        setSelectedBookId={setSelectedBookId}
        setScrollPosition={setScrollPosition}
        id={item.id}
        img={imgSrc}
        category={item.volumeInfo?.categories}
        name={item.volumeInfo?.title}
        author={author}
      />
    );
  });

  return (
    <BooksSectionWrapper>
      {data?.totalItems && (
        <FoundedResults>Found {data.totalItems} results</FoundedResults>
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
}
