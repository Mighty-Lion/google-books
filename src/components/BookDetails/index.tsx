import { Dispatch, SetStateAction } from 'react';
import { log } from 'util';
import {
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImgWrapper,
  BookInformation,
  BookText,
} from '@/components/BookDetails/index.styles';
import { IBookProps } from '@/hooks/useFetchData';
import SearchIcon from '@/assets/images/svg/search.svg';
import { Button } from '@/components/Button/index.styles';

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
  const authors = selectedBook?.volumeInfo?.authors;
  const categories = selectedBook?.volumeInfo?.categories;

  const imgSmallThumbnail =
    imageLinks?.smallThumbnail !== undefined
      ? imageLinks.smallThumbnail
      : SearchIcon;
  const imgSrc =
    imageLinks?.thumbnail !== undefined
      ? imageLinks.thumbnail
      : imgSmallThumbnail;

  function convertArrayToString(arr: string[] | undefined, delimiter: string) {
    const valueString = arr
      ? arr.reduce(
          (accumulator: string, currentValue: string) =>
            `${accumulator + currentValue}${delimiter}`,
          ''
        )
      : '';


    return valueString.slice(0, -delimiter.length);
  }
''
  console.log('convertAuthorsToString', convertArrayToString(authors, ', '));
  const authorsString = convertArrayToString(authors, ', ')

  const categoriesString = convertArrayToString(categories, '/')

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
          <BookText fontSize="30px">{title}</BookText>
          <BookText textDecoration="underline">{authorsString}</BookText>
          <Button type="button" onClick={() => setSelectedBookId(undefined)}>
            Back
          </Button>
        </BookInformation>
      </BookDetailsContainer>
    </BookDetailsWrapper>
  );
}
