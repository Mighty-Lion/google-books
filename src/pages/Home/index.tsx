import axios from 'axios';
import { useEffect, useState } from 'react';
import { log } from 'util';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';
import { SearchSection } from '@/components/SearchSection';
import { useHandleInput } from '@/hooks/useHandleInput';
import {
  BooksSectionContainer,
  BooksSectionWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';
import { LoadingSpinner } from '@/components/LoadingSpiner';

export default function Home() {
  const toastNotifications = useToastNotifications();
  const { values, handleInput, handleSubmit } = useHandleInput();
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';
  const { searchParams, sorting, category } = values;

  const [books, setBooks] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);

  const params = {
    q: `${searchParams}${
      category && `${searchParams !== '' && '+'}subject:${category}`
    }`,
    orderBy: `${sorting}`,
    startIndex: 0,
    maxResults: 30,
    key: `${apiKey}`,
  };
  console.log('params', params);
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
  }, [values]);

  console.log('books', books.items);
  const mappedBooks = books.items ? (
    books.items?.map((item: any) => {
      const author = item.volumeInfo.authors
        ? item.volumeInfo.authors.reduce(
            (accumulator: any, currentValue: any) =>
              `${accumulator + currentValue}\n`,
            ''
          )
        : '';
      return (
        <BookCard
          key={item.volumeInfo.title + item.volumeInfo.categories + author}
          img={
            item.volumeInfo.imageLinks !== undefined
              ? item.volumeInfo.imageLinks.smallThumbnail
              : SearchIcon
          }
          category={item.volumeInfo.categories}
          name={item.volumeInfo.title}
          author={author}
        />
      );
    })
  ) : (
    <div>Loading...</div>
  );

  return (
    <>
      <SearchSection handleInput={handleInput} handleSubmit={handleSubmit} />
      <BooksSectionWrapper>
        <BooksSectionContainer>
          {isFetching ? <LoadingSpinner /> : mappedBooks}
        </BooksSectionContainer>
      </BooksSectionWrapper>
    </>
  );
}
