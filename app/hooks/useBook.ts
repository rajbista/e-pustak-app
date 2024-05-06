import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Book {
  id: string;
  name: string;
}
interface FetchBooksResponse {
  count: number;
  results: Book[];
}

const useBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchBooksResponse>("/games", { signal: controller.signal })
      .then((res) => setBooks(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { books, error };
};

export default useBook;
