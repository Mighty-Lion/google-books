import { SearchSection } from '@/components/SearchSection';
import { useHandleInput } from '@/hooks/useHandleInput';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';

export default function Home() {
  const { values, handleInput, handleSubmit } = useHandleInput();
  const { books, isFetching, handleFetching } = useFetchData(values);
  console.log('books', books);
  return (
    <>
      <SearchSection handleInput={handleInput} handleSubmit={handleSubmit} />
      <BooksSection
        books={books}
        isFetching={isFetching}
        handleFetching={handleFetching}
      />
    </>
  );
}
