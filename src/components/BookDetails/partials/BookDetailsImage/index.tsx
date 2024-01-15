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
  const selectedImgSrc = useCallback(() => {
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
    return <img src={selectedImgSrc()} onLoad={onLoadImage} alt="img" />;
  }, [selectedImgSrc]);
}
