import styled from '@emotion/styled';

export const SearchFormWrapper = styled.section`
  width: 100vw;
  background: var(--color-black-700);
`;
export const SearchFormContainer = styled.div`
  grid-template-areas:
    'input input'
    'categoties-select sorting-select';
  margin: 100px auto;
  width: 100%;
  max-width: 50%;
`;
