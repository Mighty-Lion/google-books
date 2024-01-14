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
import SearchIcon from '@/assets/images/svg/search.svg';
import { Button } from '@/components/Button/index.styles';
import { convertArrayToString } from '@/functions/convertArrayToString';
import { LoadingSpinner } from '@/components/LoadingSpiner';

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
  const canonicalVolumeLink = selectedBook?.volumeInfo.canonicalVolumeLink;

  const [imgScr, setImgSrc] = useState('');

  const selectedImgSrc = useCallback(() => {
    if (imageLinks?.thumbnail) {
      return setImgSrc(imageLinks?.thumbnail);
    }
    if (imageLinks?.smallThumbnail) {
      return setImgSrc(imageLinks?.smallThumbnail);
    }
  }, [imageLinks?.smallThumbnail, imageLinks?.thumbnail]);

  useEffect(() => {
    selectedImgSrc();
  }, [selectedImgSrc]);

  const Image = useCallback(() => {
    if (imgScr) return <img src={imgScr || SearchIcon} alt="img" />;
    return <LoadingSpinner />;
  }, [imgScr]);

  const authorsString = convertArrayToString(authorsArray, ', ');

  const categoriesString = convertArrayToString(categoriesArray, ' / ');

  const cachedValue = useMemo(() => {
    return (
      <BookDetailsWrapper>
        <BookDetailsContainer>
          <BookImgWrapper>
            <Image />
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
    Image,
    authorsString,
    canonicalVolumeLink,
    categoriesString,
    setSelectedBookId,
    title,
  ]);

  return cachedValue;
}
