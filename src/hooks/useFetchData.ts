import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

export interface IFormDataProps {
  searchParams: string;
  category: string;
  sorting: string;
}

export interface IBookInfoProps {
  title?: string;
  subtitle?: string;
  authors?: string[];
  publishedDate?: string;
  industryIdentifiers?: [
    {
      type?: string;
      identifier?: string;
    }
  ];
  readingModes?: {
    text?: boolean;
    image?: boolean;
  };
  pageCount?: number;
  printType?: string;
  categories?: string[];
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles?: false;
    containsImageBubbles?: false;
  };
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface IBookProps {
  kind?: string;
  id: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: IBookInfoProps;
  saleInfo?: {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
  };
  accessInfo?: {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub?: {
      isAvailable?: boolean;
    };
    pdf?: {
      isAvailable?: boolean;
    };
    webReaderLink?: string;
    accessViewStatus?: string;
    quoteSharingAllowed?: string;
  };
}

export interface IDataProps {
  items: IBookProps[];
  kind: string;
  totalItems: number;
}

export function useFetchData({
  searchParams,
  category,
  sorting,
}: IFormDataProps) {
  const toastNotifications = useToastNotifications();
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [filters, setFilters] = useState({
    searchParams: '',
    category: 'all',
    sorting: 'relevance',
  });
  const [data, setData] = useState<IDataProps | undefined>(undefined);
  const [books, setBooks] = useState<IBookProps[]>([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [startId, setStartId] = useState(0);
  const limit = 30;

  useEffect(() => {
    if (
      searchParams !== filters.searchParams ||
      category !== filters.category ||
      sorting !== filters.sorting
    ) {
      setStartId(0);
      setFilters({ searchParams, category, sorting });
      setBooks([]);
    }
  }, [searchParams, category, sorting]);

  const handleUpdate = () => {
    setStartId((prev) => prev + limit);
  };

  const searchFilter = `${
    filters.searchParams !== '' ? `${filters.searchParams}+` : ''
  }subject:${filters.category === 'all' ? '' : filters.category}`;

  const params = {
    q: searchFilter,
    orderBy: `${filters.sorting}`,
    startIndex: startId,
    maxResults: limit,
    key: `${apiKey}`,
  };

  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await axios.get(apiUrl, { params });
      setData(response.data);

      if (
        response.data.items.length < limit &&
        response.data.totalItems >= limit
      ) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }

      if (!isLastPage) {
        response.data.items.map((item: IBookProps) =>
          setBooks((prev) => [...prev, item])
        );
      }
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toastNotifications.handleFailure(errorMessage);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [filters.searchParams, filters.category, filters.sorting, startId]);

  return { data, isLastPage, books, isFetching, handleUpdate, fetchData };
}
