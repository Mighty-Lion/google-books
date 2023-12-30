import { FormEvent } from 'react';
import {
  HeadingWrapper,
  SearchForm,
  SearchFormContainer,
  SearchFormWrapper,
} from '@/components/SearchSection/index.styles';
import { Heading } from '@/components/Heading';
import { CustomSelect } from '@/components/CustomSelect';
import { SearchInput } from '../SearchInput';

export interface ISearchSectionProps {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}
export function SearchSection({
  handleChange,
  handleSubmit,
}: ISearchSectionProps) {
  const categoryOptions = [
    { optionValue: 'all', optionLabel: 'All' },
    { optionValue: 'art', optionLabel: 'Art' },
    { optionValue: 'biography', optionLabel: 'Biography' },
    { optionValue: 'computers', optionLabel: 'Computers' },
    { optionValue: 'history', optionLabel: 'History' },
    { optionValue: 'medical', optionLabel: 'Medical' },
    { optionValue: 'poetry', optionLabel: 'Poetry' },
  ];

  const sortingOptions = [
    { optionValue: 'relevance', optionLabel: 'Relevance' },
    { optionValue: 'newest', optionLabel: 'Newest' },
  ];

  return (
    <SearchFormWrapper>
      <SearchFormContainer>
        <HeadingWrapper>
          <Heading>Search for books</Heading>
        </HeadingWrapper>
        <SearchForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <SearchInput
            name="searchParams"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleChange(e);
              }
            }}
          />
          <CustomSelect
            gridArea="categories-select"
            options={categoryOptions}
            selectLabel="Categories"
            name="category"
            onChange={handleChange}
            onClick={handleSubmit}
          />
          <CustomSelect
            gridArea="sorting-select"
            options={sortingOptions}
            selectLabel="Sorting by"
            name="sorting"
            onChange={handleChange}
            onClick={handleSubmit}
          />
        </SearchForm>
      </SearchFormContainer>
    </SearchFormWrapper>
  );
}
