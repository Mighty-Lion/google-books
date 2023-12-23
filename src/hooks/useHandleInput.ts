import { useCallback, useState } from 'react';

interface IHandleInputProps {
  inputValue?: string;
  categoryValue?: string;
  sortingValue?: string;
}

export function useHandleInput({
  inputValue,
  categoryValue,
  sortingValue,
}: IHandleInputProps) {
  const initialValues = {
    inputValue: '',
    categoryValue: 'all',
    sortingValue: 'relevance',
  };
  const [values, setValues] = useState(initialValues);

  const handleInput = useCallback(() => {
    if (inputValue) {
      setValues((prev) => {
        return { ...prev, inputValue };
      });
    } else {
      setValues((prev) => {
        return { ...prev, inputValue: '' };
      });
    }

    if (categoryValue) {
      setValues((prev) => {
        return { ...prev, categoryValue };
      });
    }

    if (sortingValue) {
      setValues((prev) => {
        return { ...prev, sortingValue };
      });
    }
  }, [setValues]);

  return { values, handleInput };
}
