import {
  BooksSectionContainer,
  BooksSectionWrapper,
} from '@/components/BooksSection/index.styles';
import { BookCard } from '@/components/BooksSection/partials/BookCard';

export interface IBooksSectionProps {
  books: any;
}
export function BooksSection({ books }: IBooksSectionProps) {
  console.log('items', books.items);
  const { items } = books;
  const mappedBooks = items.map((item: any) => (
    <BookCard
      key={
        item.volumeInfo.category +
        item.volumeInfo.title +
        item.volumeInfo.imageLinks.smallThumbnail
      }
      img={item.volumeInfo.imageLinks.smallThumbnail}
      category={item.volumeInfo.category}
      name={item.volumeInfo.title}
      author={item.volumeInfo.authors}
    />
  ));
  return (
    <BooksSectionWrapper>
      <BooksSectionContainer>{mappedBooks}</BooksSectionContainer>
    </BooksSectionWrapper>
  );
}
