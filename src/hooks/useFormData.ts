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
  const [filters, setFilters] = useState(initialValues);
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
      setFilters(state);
    },
    [state]
  );

  const handleChangeSelect = useCallback(
    (event: IHandleChangeProps) => {
      const { name, value } = event.target;
      // for debouncedValue
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      // to click on the select option
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setFilters]
  );

  const handleEnter = useCallback(
    (event: { key: string }) => {
      if (event.key === 'Enter') {
        setFilters(state);
        (document.activeElement as HTMLInputElement).blur();
      }
    },
    [state]
  );

  const debouncedValue = useDebounce<{
    searchParams: string;
    category: string;
    sorting: string;
  }>(state, 5000);

  useEffect(() => {
    setFilters(debouncedValue);
  }, [debouncedValue]);

  return {
    filters,
    handleChange,
    handleSubmit,
    handleEnter,
    handleChangeSelect,
  };
}
