import { useEffect, useState } from 'react';
import { IBookProps, IFormDataProps } from '@/hooks/useFetchData';

export function useSelectedBook(books: IBookProps[], filters: IFormDataProps) {
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

  useEffect(() => {
    setSelectedBookId(undefined);
  }, [filters]);

  return { selectedBookId, setSelectedBookId, selectedBook };
}
