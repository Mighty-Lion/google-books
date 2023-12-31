import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';
import { BookDetails } from '@/components/BookDetails';
import { useSelectedBook } from '@/hooks/useSelectedBook';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';

export default function Home() {
  const {
    filters,
    handleChange,
    handleSubmit,
    handleEnter,
    handleChangeSelect,
  } = useFormData();
  const { data, books, isLastPage, isFetching, handleUpdate, fetchData } =
    useFetchData(filters);
  const { selectedBookId, setSelectedBookId, selectedBook } = useSelectedBook(
    books,
    filters
  );

  return (
    <>
      <SearchSection
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEnter={handleEnter}
        handleChangeSelect={handleChangeSelect}
      />
      {selectedBookId === undefined ? (
        <BooksSection
          key={getRandomArbitrary(0, 1000)}
          data={data}
          books={books}
          isLastPage={isLastPage}
          isFetching={isFetching}
          handleUpdate={handleUpdate}
          setSelectedBookId={setSelectedBookId}
        />
      ) : (
        <BookDetails
          selectedBook={selectedBook}
          setSelectedBookId={setSelectedBookId}
        />
      )}
    </>
  );
}
