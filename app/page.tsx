"use client";
import { Flex } from "@radix-ui/themes";
import useBook from "./hooks/useBook";
import BookSection from "./books/BookSection";

export default function Home() {
  const { data: books } = useBook();
  return (
    <Flex direction="column" gap="2">
      <BookSection title="Recommended" books={books} />
      <BookSection title="Popular" books={books} />
      <BookSection title="Newly Added" books={books} />
      <BookSection title="Trending" books={books} />
    </Flex>
  );
}
