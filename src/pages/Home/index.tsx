import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

export default function Home() {
  // const apiUrl = 'https://www.googleapis.com/books/v1/volumes/115151515151';
  // const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&'
   const apiUrl = 'https://www.googleapis.com/books/v1/volumes'
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw'

  // const savedPosts = localStorage.getItem('savedPosts');
  // const parsedPosts = savedPosts && JSON.parse(savedPosts);
  const toastNotifications = useToastNotifications();

  // const [posts, setPosts] = useState<IPostProps[]>(parsedPosts || []);
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const testT = {
    searchTerm: '',
    printType: 'all',
		bookType: 'full'
  }
  async function fetchData() {
    try {

      // const getUrl = `${apiUrl}?key=${apiKey}&langRestrict=en&maxResults=40&orderBy=relevance&q=${testT.searchTerm}&filter=${testT.bookType}&printType=${testT.printType}`
      const getUrl = `${apiUrl}?q=inauthor:keyes&key=${apiKey}`
      console.log(getUrl)

      setIsFetching(true);
      const response = await axios(getUrl);
      setBooks(response.data);
      console.log('response.data', response.data);
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
  }, []);

  console.log('books', books)
  return <></>;
}
