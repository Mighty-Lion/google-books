import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';
import { BookDetails } from '@/components/BookDetails';
import { useSelectedBook } from '@/hooks/useSelectedBook';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { HomeContainer } from '@/pages/Home/index.styles';

export default function Home() {
  const {
    filters,
    handleChange,
    handleSubmit,
    handleEnter,
    handleChangeSelect,
  } = useFormData();
  const { books, isLastPage, isFetching, handleUpdate, totalItems } =
    useFetchData(filters);
  const { selectedBookId, setSelectedBookId, selectedBook } = useSelectedBook(
    books,
    filters
  );

  const { setScrollPosition } = useScrollPosition(selectedBookId);

  return (
    <HomeContainer>
      <SearchSection
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEnter={handleEnter}
        handleChangeSelect={handleChangeSelect}
      />
      {selectedBookId === undefined ? (
        <BooksSection
          key={getRandomArbitrary(0, 1000)}
          books={books}
          isLastPage={isLastPage}
          isFetching={isFetching}
          handleUpdate={handleUpdate}
          setSelectedBookId={setSelectedBookId}
          setScrollPosition={setScrollPosition}
          totalItems={totalItems}
        />
      ) : (
        <BookDetails
          selectedBook={selectedBook}
          setSelectedBookId={setSelectedBookId}
        />
      )}
    </HomeContainer>
  );
}
