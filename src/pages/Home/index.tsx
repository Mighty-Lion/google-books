import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';
import { SearchSection } from '@/components/SearchSection';
import { useHandleInput } from '@/hooks/useHandleInput';
import { BooksSection } from '@/components/BooksSection';

export default function Home() {
  const { values, handleInput, handleSubmit } = useHandleInput();
  console.log('values111', values);
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';
  const { input, sorting, category } = values;
  const categoryParams = category !== 'all' ? `+subject:${category}` : '';
  const searchParams = input || 'java script';
  const inputParams = searchParams + categoryParams;
  console.log('input', input);
  console.log('inputParams', inputParams);

  // const savedPosts = localStorage.getItem('savedPosts');
  // const parsedPosts = savedPosts && JSON.parse(savedPosts);
  const toastNotifications = useToastNotifications();

  // const [posts, setPosts] = useState<IPostProps[]>(parsedPosts || []);
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const testT = {
    searchTerm: '',
    printType: 'all',
    bookType: 'full',
  };
  async function fetchData() {
    try {
      console.log('values', values);

      setIsFetching(true);
      const response = await axios.get(apiUrl, {
        params: {
          q: `${searchParams}`,

          orderBy: `${sorting}`,
          key: `${apiKey}`,
        },
      });
      setBooks(response.data);
      console.log('response', response.config.params);
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log('handelSendReminder', errorMessage);
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [values]);

  console.log('books', books);
  return (
    <>
      <SearchSection handleInput={handleInput} handleSubmit={handleSubmit} />
      <BooksSection books={books} />
    </>
  );
}
