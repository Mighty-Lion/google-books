import styled from '@emotion/styled';

export const BookCardContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 350px;

  background: var(--color-gray-200);
  border-radius: 5px;
`;

export const BookCardImageWrapper = styled.div`
  margin: 0 auto 15px auto;
  max-width: 200px;
  width: 100%;
	

  img {
    display: flex;
    width: 100%;
    object-fit: contain;
		max-height: 250px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 10px;
`;
