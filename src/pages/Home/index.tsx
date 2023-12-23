import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';
import { SearchSection } from '@/components/SearchSection';
import { useHandleInput } from '@/hooks/useHandleInput';
import {log} from "util";

export default function Home() {
  const { values, handleInput, handleSubmit } = useHandleInput();

  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';
  const searchTerm = 'flowers';

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
      setIsFetching(true);
      const response = await axios.get(apiUrl, {
        params: {
          q: `${values.input ? values.input : 'java script'}+subject:${values.category}+fiction`,

          orderBy: `${values.sorting}`,
          key: `${apiKey}`,
        },
      });
      setBooks(response.data);
      console.log('response', response)
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
    <SearchSection handleInput={handleInput} handleSubmit={handleSubmit} />
  );
}
