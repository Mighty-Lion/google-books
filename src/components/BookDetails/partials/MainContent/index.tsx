import { Dispatch, memo, SetStateAction } from 'react';
import { IBookProps } from '@/hooks/useFetchData';
import { BookDetails } from '@/components/BookDetails';
import { BooksSection } from '@/components/BooksSection';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';

interface IContentProps {
  selectedBook: IBookProps | undefined;
  books: IBookProps[];
  isLastPage: boolean;
  isFetching: boolean;
  handleUpdate: () => void;
  setSelectedBook: Dispatch<SetStateAction<IBookProps | undefined>>;
  setScrollPosition: Dispatch<SetStateAction<number>>;
  totalItems: number | undefined;
}
export const MainContent = memo(function MainContent({
  selectedBook,
  books,
  isLastPage,
  isFetching,
  handleUpdate,
  totalItems,
  setSelectedBook,
  setScrollPosition,
}: IContentProps) {
  return selectedBook ? (
    <BookDetails
      selectedBook={selectedBook}
      setSelectedBook={setSelectedBook}
    />
  ) : (
    <BooksSection
      key={getRandomArbitrary(0, 1000)}
      books={books}
      isLastPage={isLastPage}
      isFetching={isFetching}
      handleUpdate={handleUpdate}
      setSelectedBook={setSelectedBook}
      setScrollPosition={setScrollPosition}
      totalItems={totalItems}
    />
  );
});
