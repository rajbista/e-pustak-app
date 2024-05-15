import { Flex } from "@radix-ui/themes";
import BookSection from "./books/BookSection";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/query-core";
import { getBooks } from "./hooks/useBook";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["hydrate-users"],
    queryFn: getBooks,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flex direction="column" gap="2">
        <BookSection title="Best seller" />
        <BookSection title="Popular" />
        <BookSection title="Newly Added" />
        <BookSection title="Trending" />
      </Flex>
    </HydrationBoundary>
  );
}
