import { Book } from "../entities/Book";
import useData from "./useData";

export interface BookDetail {
    id: string;
    name: string;
    description: string;
}

const useBook = (slug: string) => useData<Book>(`/games/${slug}`);

export default useBook;

