import { useCallback, useState } from 'react';

interface IHandleInputProps {
  target: { name: string; value: string };
}
export function useHandleInput() {
  const initialValues = {
    input: '',
    category: 'all',
    sorting: 'relevance',
  };
  const [values, setValues] = useState(initialValues);

  const handleInput = useCallback(
    (event: IHandleInputProps) => {
      const { name, value } = event.target;
      setValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setValues]
  );

  console.log('values', values);
  return { values, handleInput };
}
