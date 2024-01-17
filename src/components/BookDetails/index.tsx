import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  BookButtonWrapper,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImgWrapper,
  BookInformation,
  BookLink,
  BookText,
} from '@/components/BookDetails/index.styles';
import { IBookProps } from '@/hooks/useFetchData';
import { Button } from '@/components/Button/index.styles';
import { convertArrayToString } from '@/functions/convertArrayToString';
import { BookDetailsImage } from '@/components/BookDetails/partials/BookDetailsImage';

interface IBookDetailsProps {
  selectedBook: IBookProps | undefined;
  setSelectedBookId: Dispatch<SetStateAction<string | undefined>>;
}
export function BookDetails({
  selectedBook,
  setSelectedBookId,
}: IBookDetailsProps) {
  console.log('selectedBook', selectedBook);
  const title = selectedBook?.volumeInfo?.title;
  const imageLinks = selectedBook?.volumeInfo.imageLinks;
  const authorsArray = selectedBook?.volumeInfo?.authors;
  const categoriesArray = selectedBook?.volumeInfo?.categories;
  const canonicalVolumeLink = selectedBook?.volumeInfo.canonicalVolumeLink;

  const authorsString = useCallback(() => {
    convertArrayToString(authorsArray, ', ');
  }, [authorsArray]);

  const categoriesString = useCallback(() => {
    convertArrayToString(categoriesArray, ' / ');
  }, [categoriesArray]);

  return useMemo(() => {
    return (
      <BookDetailsWrapper>
        <BookDetailsContainer>
          <BookImgWrapper>
            <BookDetailsImage
              thumbnail={imageLinks?.thumbnail}
              smallThumbnail={imageLinks?.smallThumbnail}
            />
          </BookImgWrapper>
          <BookInformation>
            <BookText color="var(--color-gray-500)" fontSize="16px">
              {categoriesString}
            </BookText>
            <BookText fontSize="2rem">{title}</BookText>
            <BookText textDecoration="underline">{authorsString}</BookText>
            <BookLink href={canonicalVolumeLink}>Canonical VolumeLink</BookLink>
            <BookButtonWrapper>
              <Button
                type="button"
                onClick={() => setSelectedBookId(undefined)}
              >
                Back
              </Button>
            </BookButtonWrapper>
          </BookInformation>
        </BookDetailsContainer>
      </BookDetailsWrapper>
    );
  }, [
    BookDetailsImage,
    authorsString,
    canonicalVolumeLink,
    categoriesString,
    setSelectedBookId,
    title,
  ]);
}
