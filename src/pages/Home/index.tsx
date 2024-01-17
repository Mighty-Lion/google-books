import { useState } from 'react';
import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { IBookProps, useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';
import { BookDetails } from '@/components/BookDetails';
import { getRandomArbitrary } from '@/functions/getRandomArbitrary';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { HomeContainer } from '@/pages/Home/index.styles';

export default function Home() {
  const {
    filters,
    handleChange,
    handleSubmit,
    handleEnter,
    handleChangeSelect,
  } = useFormData();
  const { books, isLastPage, isFetching, handleUpdate, totalItems } =
    useFetchData(filters);
  const [selectedBook, setSelectedBook] = useState<IBookProps | undefined>(
    undefined
  );

  const { setScrollPosition } = useScrollPosition(selectedBook);

  return (
    <HomeContainer>
      <SearchSection
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEnter={handleEnter}
        handleChangeSelect={handleChangeSelect}
      />
      {selectedBook ? (
        <BookDetails
          selectedBook={selectedBook}
          setSelectedBookId={setSelectedBook}
        />
      ) : (
        <BooksSection
          key={getRandomArbitrary(0, 1000)}
          books={books}
          isLastPage={isLastPage}
          isFetching={isFetching}
          handleUpdate={handleUpdate}
          setSelectedBook={setSelectedBook}
          setScrollPosition={setScrollPosition}
          totalItems={totalItems}
        />
      )}
    </HomeContainer>
  );
}
