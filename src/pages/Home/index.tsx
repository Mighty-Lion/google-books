import { useState } from 'react';
import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { IBookProps, useFetchData } from '@/hooks/useFetchData';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { HomeContainer } from '@/pages/Home/index.styles';
import { MainContent } from '@/components/BookDetails/partials/MainContent';

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
      <MainContent
        setScrollPosition={setScrollPosition}
        totalItems={totalItems}
        setSelectedBook={setSelectedBook}
        selectedBook={selectedBook}
        books={books}
        isLastPage={isLastPage}
        isFetching={isFetching}
        handleUpdate={handleUpdate}
        key="145236977"
      />
    </HomeContainer>
  );
}
