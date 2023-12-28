import { useEffect, useState } from 'react';
import axios from 'axios';
import { useToastNotifications } from '@/components/ToastMessage/useToastNotifications';

interface IFetchDataProps {
  searchParams: string;
  category: string;
  sorting: string;
}

export interface IBookProps {
  kind?: string;
  id?: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: {
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
    readingModes: {
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
  };
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
}: IFetchDataProps) {
  const toastNotifications = useToastNotifications();
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  const apiKey = 'AIzaSyBWdD2QpIiQ_AbBmwLNeBHSTE2rY1zu-Uw';

  const [filters, setFilters] = useState({
    searchParams: '',
    category: 'all',
    sorting: 'relevance',
  });
  const [data, setData] = useState<IDataProps | undefined>(undefined);
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
    }
  }, [searchParams, category, sorting]);

  const handleFetching = () => {
    console.log('handleFetching');
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

  const [books, setBooks] = useState<IBookProps[]>([]);

  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await axios.get(apiUrl, { params });
      setData(response.data);
      setBooks((prev) => [...prev, response.data.items]);
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

  console.log('books', books);
  useEffect(() => {
    fetchData();
  }, [filters.searchParams, filters.category, filters.sorting]);

  return { data, isFetching, handleFetching };
}
