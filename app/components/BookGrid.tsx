"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Book {
  id: string;
  name: string;
}
interface FetchBooksResponse {
  count: number;
  results: Book[];
}
const BookGrid = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchBooksResponse>("/games")
      .then((res) => setBooks(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <span>{error}</span>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
};

export default BookGrid;
