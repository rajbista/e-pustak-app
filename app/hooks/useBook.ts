import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Category {
  id: number;
  name: string;
  slug: string;
}
export interface Book {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Category }[]
}
interface FetchBooksResponse {
  count: number;
  results: Book[];
}

const useBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchBooksResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setBooks(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })

    return () => controller.abort();
  }, []);
  return { books, isLoading, error };
};

export default useBook;
