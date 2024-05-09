"use client";
import useBook from "@/app/hooks/useBook";
import { Flex } from "@radix-ui/themes";
import BookSection from "@/app/books/BookSection";

const BookContainer = () => {
  const { books } = useBook();
  return (
    <Flex direction="column" gap="2">
      <BookSection title="Recommended" books={books} />
      <BookSection title="Popular" books={books} />
      <BookSection title="Newly Added" books={books} />
      <BookSection title="Trending" books={books} />
    </Flex>
  );
};

export default BookContainer;
