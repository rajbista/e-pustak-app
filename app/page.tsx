"use client";
import { Flex } from "@radix-ui/themes";
import BookSection from "./books/BookSection";
import useBook from "./hooks/useBook";
export default function Home() {
  const { books, isLoading, error } = useBook();

  return (
    <Flex direction="column" gap="2">
      <BookSection title="Recommended" books={books} />
      <BookSection title="Popular" books={books} />
      <BookSection title="Newly Added" books={books} />
      <BookSection title="Trending" books={books} />
    </Flex>
  );
}
