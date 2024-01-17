import { useEffect, useState } from 'react';
import { IBookProps } from '@/hooks/useFetchData';

export function useScrollPosition(selectedBook: IBookProps | undefined) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!selectedBook) {
      window.scrollTo(0, scrollPosition);
    }
  }, [selectedBook]);

  return { setScrollPosition };
}
