import useData from "./useData";
import { Category } from "./useCategory";

export interface Book {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Category }[]
}

const useBook = () => useData<Book>('/games');

export default useBook;