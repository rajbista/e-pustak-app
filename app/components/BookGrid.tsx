"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useBook from "../hooks/useBook";

const BookGrid = () => {
  const { books, error } = useBook();

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
