import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  BooksButton,
  LoadingWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import { LoadingSpinner } from '@/components/LoadingSpiner';
import SearchIcon from '@/assets/images/svg/search.svg';
import { IBookProps, IDataProps } from '@/hooks/useFetchData';

export interface IBooksSectionProps {
  data: IDataProps | undefined;
  isFetching: boolean;
  handleFetching: () => void;
}
export function BooksSection({
  isFetching,
  data,
  handleFetching,
}: IBooksSectionProps) {
  const mappedBooks = data?.items?.map((item: IBookProps) => {
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
      <LoadingWrapper>
        {!isFetching ? (
          <BooksButton type="button" onClick={handleFetching}>
            Load more ...
          </BooksButton>
        ) : (
          <div>Loading ...</div>
        )}
      </LoadingWrapper>

      <BooksSectionContainer>
        {isFetching ? <LoadingSpinner /> : mappedBooks}
      </BooksSectionContainer>
    </BooksSectionWrapper>
  );
}
