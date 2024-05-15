"use client"
import { Box, Grid } from "@radix-ui/themes";
import BookCard from "../BookCard";
import { useBooks } from "@/app/hooks/useBook";
import BackButton from "@/app/components/BackButton";

const BookListPage = () => {
  const { data } = useBooks();

  return (
    <Box>
      <BackButton />
      <Grid
        columns={{ initial: "2", xs: "3", sm: "4", md: "5", lg: "6", xl: "7" }}
        gapY="4"
      >
        {data?.map((book: any) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </Box>
  );
};

export default BookListPage;
