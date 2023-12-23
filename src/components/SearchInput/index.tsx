import { ChangeEventHandler, useState } from 'react';
import SearchIcon from '@/assets/images/svg/search.svg';
import { SearchInputWrapper } from '@/components/SearchInput/index.styles';

export interface ICustomInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
}
export function SearchInput({ onChange, name }: ICustomInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SearchInputWrapper isFocused={isFocused} isHovered={isHovered}>
      <input
        id="search"
        type="text"
        name={name}
        onChange={onChange}
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
  );
}
