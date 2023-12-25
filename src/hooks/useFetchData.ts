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

  const [books, setBooks] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);

  const params = {
    q: `${searchParams !== '' ? `${searchParams}+` : ''}subject:${
      category === 'all' ? '' : category
    }`,
    orderBy: `${sorting}`,
    startIndex: 0,
    maxResults: 10,
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
  }, [searchParams, category, sorting]);

  return { books, isFetching };
}
