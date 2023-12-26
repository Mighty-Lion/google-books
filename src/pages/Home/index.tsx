import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';

export default function Home() {
  const { values, handleInput, handleSubmit } = useFormData();
  const { books, isFetching, handleFetching } = useFetchData(values);

  return (
    <>
      <SearchSection handleChange={handleInput} handleSubmit={handleSubmit} />
      <BooksSection
        books={books}
        isFetching={isFetching}
        handleFetching={handleFetching}
      />
    </>
  );
}
