import { Dispatch, SetStateAction } from 'react';
import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  BooksButton,
  LoadingWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';
import { IBookProps, IDataProps } from '@/hooks/useFetchData';

export interface IBooksSectionProps {
  data: IDataProps | undefined;
  books: IBookProps[];
  isFetching: boolean;
  handleUpdate: () => void;
  setBookId: Dispatch<SetStateAction<string | undefined>>;
}
export function BooksSection({
  isFetching,
  data,
  books,
  handleUpdate,
  setBookId,
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
        setBookId={setBookId}
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
          <BooksButton type="button" onClick={handleUpdate}>
            Load more ...
          </BooksButton>
        ) : (
          <div>Loading ...</div>
        )}
        <BooksButton
          onClick={() =>
            window.scrollTo({
              behavior: 'smooth',
              top: 0,
            })
          }
        >
          To top
        </BooksButton>
      </LoadingWrapper>
    </BooksSectionWrapper>
  );
}
