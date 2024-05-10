"use client";
import { Flex, Grid } from "@radix-ui/themes";
import CategoryList from "./category/CategoryList";
import useBook from "./hooks/useBook";
import BookSection from "./books/BookSection";

export default function Home() {
  const { data: books } = useBook();
  return (
    <Grid columns={{ md: "12" }} gap="1">
      <aside className="md:col-span-2">{/* <CategoryList /> */}</aside>
      <Flex direction="column" gap="2">
        <BookSection title="Recommended" books={books} />
        <BookSection title="Popular" books={books} />
        <BookSection title="Newly Added" books={books} />
        <BookSection title="Trending" books={books} />
      </Flex>
    </Grid>
  );
}
