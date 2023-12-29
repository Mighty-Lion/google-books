import { Dispatch, SetStateAction } from 'react';
import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  LoadingWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';
import { IBookProps, IDataProps } from '@/hooks/useFetchData';
import { Button } from '@/components/Button/index.styles';

export interface IBooksSectionProps {
  data: IDataProps | undefined;
  books: IBookProps[];
  isFetching: boolean;
  handleUpdate: () => void;
  setSelectedBookId: Dispatch<SetStateAction<string | undefined>>;
}
export function BooksSection({
  isFetching,
  data,
  books,
  handleUpdate,
  setSelectedBookId,
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
        key={item.volumeInfo.title + author + imgSrc}
        setSelectedBookId={setSelectedBookId}
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
      <BooksSectionContainer>{mappedBooks}</BooksSectionContainer>
      <LoadingWrapper>
        {!isFetching ? (
          <Button type="button" onClick={handleUpdate}>
            Load more ...
          </Button>
        ) : (
          <div>Loading ...</div>
        )}
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
      </LoadingWrapper>
    </BooksSectionWrapper>
  );
}
