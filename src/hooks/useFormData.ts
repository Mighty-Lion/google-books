import { FormEvent, useCallback, useEffect, useState } from 'react';
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

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setValues(state);
    },
    [state]
  );

  const handleClick = () => {
    setValues(state);
  };

  const handleEnter = (event: { key: string }) => {
    if (event.key === 'Enter') {
      setValues(state);
    }
  };

  const debouncedValue = useDebounce<{
    searchParams: string;
    category: string;
    sorting: string;
  }>(state, 5000);

  useEffect(() => {
    setValues(debouncedValue);
  }, [debouncedValue]);

  return { values, handleChange, handleSubmit, handleClick, handleEnter };
}
