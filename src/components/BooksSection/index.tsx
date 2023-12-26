import {
  FoundedResults,
  BooksSectionContainer,
  BooksSectionWrapper,
  BooksButton,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import { LoadingSpinner } from '@/components/LoadingSpiner';
import SearchIcon from '@/assets/images/svg/search.svg';

export interface IBooksSectionProps {
  books: any;
  isFetching: boolean;
  handleFetching: () => void;
}
export function BooksSection({
  isFetching,
  books,
  handleFetching,
}: IBooksSectionProps) {
  const mappedBooks = books.items ? (
    books.items.map((item: any) => {
      const imgSrc =
        item.volumeInfo.imageLinks !== undefined
          ? item.volumeInfo.imageLinks.smallThumbnail
          : SearchIcon;
      const author = item.volumeInfo.authors
        ? item.volumeInfo.authors.reduce(
            (accumulator: any, currentValue: any) =>
              `${accumulator + currentValue}\n`,
            ''
          )
        : '';
      return (
        <BookCard
          key={
            item.volumeInfo.title + item.volumeInfo.categories + author + imgSrc
          }
          img={imgSrc}
          category={item.volumeInfo.categories}
          name={item.volumeInfo.title}
          author={author}
        />
      );
    })
  ) : (
    <div>Loading...</div>
  );

  console.log(books);
  return (
    <BooksSectionWrapper>
      {books.totalItems && (
        <FoundedResults>Found {books.totalItems} results</FoundedResults>
      )}
      <BooksSectionContainer>
        {isFetching ? <LoadingSpinner /> : mappedBooks}
      </BooksSectionContainer>
      <BooksButton type="button" onClick={handleFetching}>
        Load more ...
      </BooksButton>
    </BooksSectionWrapper>
  );
}
