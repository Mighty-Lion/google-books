import { useState } from 'react';
import SearchIcon from '@/assets/images/svg/search.svg';
import {
  HeadingWrapper,
  SearchForm,
  SearchFormContainer,
  SearchFormWrapper,
  SearchInputWrapper,
} from '@/components/SearchSection/index.styles';
import { Heading } from '@/components/Heading';

export function SearchSection() {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SearchFormWrapper>
      <SearchFormContainer>
        <HeadingWrapper>
          <Heading>Search for books</Heading>
        </HeadingWrapper>
        <SearchForm>
          <SearchInputWrapper isFocused={isFocused} isHovered={isHovered}>
            <input
              id="search"
              placeholder="Введите поисковой запрос"
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <label htmlFor="search" />
            <button type="submit">
              <img src={SearchIcon} alt="search icon" />
            </button>
          </SearchInputWrapper>
        </SearchForm>
      </SearchFormContainer>
    </SearchFormWrapper>
  );
}
