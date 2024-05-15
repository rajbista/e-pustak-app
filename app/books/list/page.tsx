"use client";
import { Grid, Text } from "@radix-ui/themes";
import BookCard from "../BookCard";
import { useBooks } from "@/app/hooks/useBook";
import BackButton from "@/app/components/BackButton";

const BookListPage = () => {
  const { data } = useBooks();

  return (
    <>
      <BackButton />
      <Grid
        columns={{ initial: "2", xs: "3", sm: "4", md: "5", lg: "6", xl: "7" }}
        gapY="4"
      >
        {data?.map((book: any) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </>
  );
};

export default BookListPage;
