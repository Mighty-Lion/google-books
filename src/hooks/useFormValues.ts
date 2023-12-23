import { useFormik } from 'formik';
import { useCallback, useState } from 'react';

export function useFormValues() {
  const formik = useFormik({
    initialValues: {
      id: undefined,
      input: '',
      category: 'all',
      sorting: 'relevance',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
}


