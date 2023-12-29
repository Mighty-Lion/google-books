import { useEffect, useState } from 'react';
import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { IBookProps, useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';
import { BookDetails } from '@/components/BookDetails';

export default function Home() {
  const { values, handleInput, handleSubmit } = useFormData();
  const { data, books, isFetching, handleUpdate } = useFetchData(values);

  const [selectedBookId, setSelectedBookId] = useState<string | undefined>(
    undefined
  );
  const [selectedBook, setSelectedBook] = useState<IBookProps | undefined>(
    undefined
  );

  function selectBook() {
    function callback(element: IBookProps) {
      return element.id === selectedBookId && element;
    }

    return books.find(callback);
  }

  useEffect(() => {
    setSelectedBook(selectBook());
  }, [selectedBookId]);

  return (
    <>
      <SearchSection handleChange={handleInput} handleSubmit={handleSubmit} />
      {selectedBookId === undefined ? (
        <BooksSection
          key={data?.items[0]?.volumeInfo?.title}
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
