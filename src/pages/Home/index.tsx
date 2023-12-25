import axios from 'axios';
import { useEffect, useState } from 'react';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';
import { SearchSection } from '@/components/SearchSection';
import { useHandleInput } from '@/hooks/useHandleInput';
import {
  BooksSectionContainer,
  BooksSectionWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';
import SearchIcon from '@/assets/images/svg/search.svg';

export default function Home() {
  const { values, handleInput, handleSubmit } = useHandleInput();
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';
  const { input, sorting, category } = values;
  const categoryParams = category !== 'all' ? `+subject:${category}` : '';
  const searchParams = input || 'java script';
  const inputParams = searchParams + categoryParams;
  // console.log('input', input);
  // console.log('inputParams', inputParams);

  // const savedPosts = localStorage.getItem('savedPosts');
  // const parsedPosts = savedPosts && JSON.parse(savedPosts);
  const toastNotifications = useToastNotifications();

  // const [posts, setPosts] = useState<IPostProps[]>(parsedPosts || []);
  const [books, setBooks] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);

  const testT = {
    searchTerm: '',
    printType: 'all',
    bookType: 'full',
  };

  async function fetchData() {
    try {
      // console.log('values', values);

      setIsFetching(true);
      const response = await axios.get(apiUrl, {
        params: {
          q: `${searchParams}`,
          language: 'ru',
          orderBy: `${sorting}`,
          key: `${apiKey}`,
        },
      });
      setBooks(response.data);
      // console.log('response', response.config.params);
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

  console.log('books',books.items)
  const mappedBooks = books.items ?  books.items?.map((item: any) => {
        console.log(`item.volumeInfo.authors ${item.volumeInfo.authors}`)
        const author = item.volumeInfo.authors ? item.volumeInfo.authors.reduce(
            (accumulator: any, currentValue: any) => accumulator + currentValue + '\n',
            '',
        ) : '';
        console.log(`author ${author}`)
        return <BookCard
            key={item.volumeInfo.title}
            img={item.volumeInfo.imageLinks !== undefined ? item.volumeInfo.imageLinks.smallThumbnail : SearchIcon}
            category={item.volumeInfo.categories}
            name={item.volumeInfo.title}
            author={author}
        />
      }
       ) : <div>Loading...</div>



  return (
    <>
      <SearchSection handleInput={handleInput} handleSubmit={handleSubmit} />
      <BooksSectionWrapper>
        <BooksSectionContainer>{mappedBooks}</BooksSectionContainer>
      </BooksSectionWrapper>
    </>
  );
}
