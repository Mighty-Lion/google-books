import { Dispatch, SetStateAction, useMemo } from 'react';
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
import SearchIcon from '@/assets/images/svg/search.svg';
import { LoadingSpinner } from '@/components/LoadingSpiner';

interface IBookDetailsProps {
  selectedBook: IBookProps;
  setSelectedBookId: Dispatch<SetStateAction<IBookProps | undefined>>;
}
export function BookDetails({
  selectedBook,
  setSelectedBookId,
}: IBookDetailsProps) {
  const { title, imageLinks, authors, categories, canonicalVolumeLink } =
    selectedBook.volumeInfo;

  const authorsString = useMemo(() => {
    return convertArrayToString(authors, ', ');
  }, [authors]);

  const categoriesString = useMemo(() => {
    return convertArrayToString(categories, ' / ');
  }, [categories]);

  return useMemo(() => {
    return (
      <BookDetailsWrapper>
        <BookDetailsContainer>
          <BookImgWrapper>
            <img
              src={
                imageLinks?.thumbnail ||
                imageLinks?.smallThumbnail ||
                SearchIcon
              }
              onLoad={() => {
                return <LoadingSpinner />;
              }}
              alt="img"
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
    authorsString,
    canonicalVolumeLink,
    categoriesString,
    imageLinks?.smallThumbnail,
    imageLinks?.thumbnail,
    setSelectedBookId,
    title,
  ]);
}
