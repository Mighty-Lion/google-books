import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export interface IHandleChangeProps {
  target: { name: string; value: string };
}

export function useFormData() {
  const initialValues = {
    searchParams: '',
    category: 'all',
    sorting: 'relevance',
  };
  const [state, setState] = useState(initialValues);
  const [values, setValues] = useState(initialValues);
  const handleChange = useCallback(
    (event: IHandleChangeProps) => {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setState]
  );

  function handleSubmit() {
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

  return { values, handleChange, handleSubmit };
}
