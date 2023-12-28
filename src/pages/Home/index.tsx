import { SearchSection } from '@/components/SearchSection';
import { useFormData } from '@/hooks/useFormData';
import { useFetchData } from '@/hooks/useFetchData';
import { BooksSection } from '@/components/BooksSection';

export default function Home() {
  const { values, handleInput, handleSubmit } = useFormData();
  const { data, isFetching, handleFetching } = useFetchData(values);

  return (
    <>
      <SearchSection handleChange={handleInput} handleSubmit={handleSubmit} />
      <BooksSection
        key={data?.items[0]?.volumeInfo?.title}
        data={data}
        isFetching={isFetching}
        handleFetching={handleFetching}
      />
    </>
  );
}
