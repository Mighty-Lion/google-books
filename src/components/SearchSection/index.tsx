import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import {
  HeadingWrapper,
  SearchForm,
  SearchFormContainer,
  SearchFormWrapper,
} from '@/components/SearchSection/index.styles';
import { Heading } from '@/components/Heading';
import { CustomSelect } from '@/components/CustomSelect';
import { SearchInput } from '../SearchInput';
import {debounce} from "@/functions/debounce";

export interface ISearchSectionProps {
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  handleInput: (e: any) => void;
}
export function SearchSection({
  handleSubmit,
  handleInput,
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
        <SearchForm>
          <SearchInput name="input" onChange={debounce(handleInput, 2000)} />
          <CustomSelect
            gridArea="categories-select"
            options={categoryOptions}
            selectLabel="Categories"
            name="category"
            onChange={handleInput}
          />
          <CustomSelect
            gridArea="sorting-select"
            options={sortingOptions}
            selectLabel="Sorting by"
            name="sorting"
            onChange={handleInput}
          />
        </SearchForm>
      </SearchFormContainer>
    </SearchFormWrapper>
  );
}
