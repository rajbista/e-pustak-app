import useData from "./useData";
import { Book } from "../entities/Book";

const useBook = () => useData<Book>('/games');

export default useBook;