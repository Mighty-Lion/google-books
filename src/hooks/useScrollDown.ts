import { useCallback, useEffect, useState } from 'react';

export function useScrollDown(
  func: () => Promise<void>,
  selectedBookId: string | undefined
) {
  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(window.scrollY), []);
  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

	console.log('selectedBookId', selectedBookId)
  useEffect(() => {
    function callback() {
      if (
        selectedBookId === undefined &&
        window.innerHeight + scroll >= document.body.offsetHeight
      ) {
        console.log('доскролил');
        func();
      }
    }
    setTimeout(callback, 1000);
  }, [scroll]);
}
