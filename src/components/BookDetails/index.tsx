import { Dispatch, SetStateAction } from 'react';
import {
  BookButtonWrapper,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImgWrapper,
  BookInformation,
  BookText,
} from '@/components/BookDetails/index.styles';
import { IBookProps } from '@/hooks/useFetchData';
import SearchIcon from '@/assets/images/svg/search.svg';
import { Button } from '@/components/Button/index.styles';
import { convertArrayToString } from '@/functions/convertArrayToString';

interface IBookDetailsProps {
  selectedBook: IBookProps | undefined;
  setSelectedBookId: Dispatch<SetStateAction<string | undefined>>;
}
export function BookDetails({
  selectedBook,
  setSelectedBookId,
}: IBookDetailsProps) {
  const title = selectedBook?.volumeInfo?.title;
  const imageLinks = selectedBook?.volumeInfo?.imageLinks;
  const authorsArray = selectedBook?.volumeInfo?.authors;
  const categoriesArray = selectedBook?.volumeInfo?.categories;

  const imgSmallThumbnail =
    imageLinks?.smallThumbnail !== undefined
      ? imageLinks.smallThumbnail
      : SearchIcon;
  const imgSrc =
    imageLinks?.thumbnail !== undefined
      ? imageLinks.thumbnail
      : imgSmallThumbnail;

  const authorsString = convertArrayToString(authorsArray, ', ');

  const categoriesString = convertArrayToString(categoriesArray, ' / ');

  return (
    <BookDetailsWrapper>
      <BookDetailsContainer>
        <BookImgWrapper>
          <img src={imgSrc} alt="img" />
        </BookImgWrapper>
        <BookInformation>
          <BookText color="var(--color-gray-500)" fontSize="16px">
            {categoriesString}
          </BookText>
          <BookText fontSize="2rem">{title}</BookText>
          <BookText textDecoration="underline">{authorsString}</BookText>
          <BookButtonWrapper>
            <Button type="button" onClick={() => setSelectedBookId(undefined)}>
              Back
            </Button>
          </BookButtonWrapper>
        </BookInformation>
      </BookDetailsContainer>
    </BookDetailsWrapper>
  );
}
