import useBook from "@/app/hooks/useBook";
import { Flex } from "@radix-ui/themes";
import BookSection from "@/app/books/BookSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useCategory from "../hooks/useData";

const queryClient = new QueryClient();
const BookContainer = () => {
  // const { data: books } = useCategory();
  // console.log("_____________:", books);
  return (
    <h1>Main page</h1>
    // <QueryClientProvider client={queryClient}>
    //   <Flex direction="column" gap="2">
    //     {books.length > 0 && (
    //       <>
    //         <BookSection title="Recommended" books={books} />
    //         <BookSection title="Popular" books={books} />
    //         <BookSection title="Newly Added" books={books} />
    //         <BookSection title="Trending" books={books} />
    //       </>
    //     )}
    //   </Flex>
    //   <ReactQueryDevtools />
    // </QueryClientProvider>
  );
};

export default BookContainer;
