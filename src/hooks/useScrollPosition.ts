import { useEffect, useState } from 'react';

export function useScrollPosition(selectedBookId: string | undefined) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!selectedBookId) {
      window.scrollTo(0, scrollPosition);
    }
  }, [selectedBookId]);

  return { setScrollPosition };
}
