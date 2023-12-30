import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';
import { BookDetails } from '@/components/BookDetails';
import { useSelectedBook } from '@/hooks/useSelectedBook';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';

export default function Home() {
  const { values, handleInput, handleSubmit } = useFormData();
  const { data, books, isFetching, handleUpdate } = useFetchData(values);
  const { selectedBookId, setSelectedBookId, selectedBook } =
    useSelectedBook(books);

  return (
    <>
      <SearchSection handleChange={handleInput} handleSubmit={handleSubmit} />
      {selectedBookId === undefined ? (
        <BooksSection
          key={getRandomArbitrary(0, 1000)}
          data={data}
          books={books}
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
