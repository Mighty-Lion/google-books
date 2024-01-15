import { useCallback, useMemo } from 'react';
import SearchIcon from '@/assets/images/svg/search.svg';
import { LoadingSpinner } from '@/components/LoadingSpiner';

interface IBookDetailsImageProps {
  thumbnail?: string;
  smallThumbnail?: string;
}
export function BookDetailsImage({
  thumbnail,
  smallThumbnail,
}: IBookDetailsImageProps) {
  const selectImgSrc = useCallback(() => {
    if (thumbnail) {
      return thumbnail;
    }
    if (smallThumbnail) {
      return smallThumbnail;
    }
    return SearchIcon;
  }, [smallThumbnail, thumbnail]);

  const onLoadImage = () => {
    return <LoadingSpinner />;
  };

  return useMemo(() => {
    return <img src={selectImgSrc()} onLoad={onLoadImage} alt="img" />;
  }, [selectImgSrc]);
}
