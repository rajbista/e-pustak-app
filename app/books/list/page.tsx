"use client";
import useBook from "../../hooks/useBook";

import { Grid, Text } from "@radix-ui/themes";
import BookCard from "../BookCard";

interface Props {
  category: string;
}
const BookListPage = ({ category }: Props) => {
  const { data: books, error } = useBook();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid
        columns={{ initial: "2", xs: "3", sm: "4", md: "5", lg: "6", xl: "7" }}
        gapY="4"
      >
        {books.length > 0 &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </>
  );
};

export default BookListPage;
