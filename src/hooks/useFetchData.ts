import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

interface IFetchDataProps {
  searchParams: string;
  category: string;
  sorting: string;
}
export function useFetchData({
  searchParams,
  category,
  sorting,
}: IFetchDataProps) {
  const toastNotifications = useToastNotifications();
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';

  // const
  const [newValues, setNewValues] = useState({
    searchParams: '',
    category: 'all',
    sorting: 'relevance',
  });
  const [books, setBooks] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [startId, setStartId] = useState(0);
  const limit = 30;


  useEffect(() => {
    if (
      searchParams !== newValues.searchParams ||
      category !== newValues.category ||
      sorting !== newValues.sorting
    ) {
      setStartId(0);
      setNewValues({ searchParams, category, sorting });
    }
  }, [searchParams, category, sorting]);

  // console.log('values', values)
  const handleFetching = () => {
    console.log('handleFetching');
    setStartId((prev) => prev + limit);
  };

  const params = {
    q: `${
      newValues.searchParams !== '' ? `${newValues.searchParams}+` : ''
    }subject:${newValues.category === 'all' ? '' : newValues.category}`,
    orderBy: `${newValues.sorting}`,
    startIndex: startId,
    maxResults: limit,
    key: `${apiKey}`,
  };

  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await axios.get(apiUrl, { params });
      setBooks(response.data);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [newValues.searchParams, newValues.category, newValues.sorting, startId]);

  return { books, isFetching, handleFetching };
}
