import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
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
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleClick: MouseEventHandler<HTMLSelectElement>;
  handleEnter: KeyboardEventHandler<HTMLInputElement>;
}
export function SearchSection({
  handleChange,
  handleSubmit,
  handleClick,
  handleEnter,
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
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="searchParams"
            onChange={handleChange}
            onKeyDown={handleEnter}
          />
          <CustomSelect
            gridArea="categories-select"
            options={categoryOptions}
            selectLabel="Categories"
            name="category"
            onChange={handleChange}
            onClick={handleClick}
          />
          <CustomSelect
            gridArea="sorting-select"
            options={sortingOptions}
            selectLabel="Sorting by"
            name="sorting"
            onChange={handleChange}
            onClick={handleClick}
          />
        </SearchForm>
      </SearchFormContainer>
    </SearchFormWrapper>
  );
}
