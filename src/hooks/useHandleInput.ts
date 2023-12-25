import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface IHandleInputProps {
  target: { name: string; value: string };
}

export function useHandleInput() {
  const initialValues = {
    searchParams: '',
    category: 'all',
    sorting: 'relevance',
  };
  const [state, setState] = useState(initialValues);
  const [values, setValues] = useState(initialValues);
  const handleInput = useCallback(
    (event: IHandleInputProps) => {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setState]
  );

  function handleSubmit() {
    console.log('handleSubmit');
    setValues(state);
  }

  const debouncedValue = useDebounce<{
    searchParams: string;
    category: string;
    sorting: string;
  }>(state, 5000);

  useEffect(() => {
    setValues(debouncedValue);
  }, [debouncedValue]);

  return { values, handleInput, handleSubmit };
}
