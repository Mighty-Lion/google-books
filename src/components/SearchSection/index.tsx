import SearchIcon from '@/assets/images/svg/search.svg';
import {
  SearchForm,
  SearchFormContainer,
  SearchFormWrapper,
  SearchInputWrapper,
} from '@/components/SearchSection/index.styles';

export function SearchSection() {
  return (
    <SearchFormWrapper>
      <SearchFormContainer>
        <SearchForm>
          <SearchInputWrapper>
            <input id="search" placeholder="Введите поисковой запрос" />
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
