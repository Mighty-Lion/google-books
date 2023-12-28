import { useEffect, useState } from 'react';
import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { IBookProps, useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';

export default function Home() {
  const { values, handleInput, handleSubmit } = useFormData();
  const { data, books, isFetching, handleUpdate } = useFetchData(values);

  const [bookId, setBookId] = useState<string | undefined>(undefined);

  console.log('bookId click', bookId);

  function findBookId() {
    function callback(element: IBookProps) {
      return element.id === bookId && element;
    }

    return books.find(callback);
  }

  useEffect(() => {
    findBookId();
  }, [bookId]);

  return (
    <>
      <SearchSection handleChange={handleInput} handleSubmit={handleSubmit} />
      <BooksSection
        key={data?.items[0]?.volumeInfo?.title}
        data={data}
        books={books}
        isFetching={isFetching}
        handleUpdate={handleUpdate}
        setBookId={setBookId}
      />
    </>
  );
}
