"use client";
import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import useBook from "../../hooks/useBook";

import { Grid, Text } from "@radix-ui/themes";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

const BookGrid = () => {
  const { books, isLoading, error } = useBook();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid gap="3" columns={{ xs: "1", sm: "2", md: "3", lg: "4", xl: "5" }}>
        {isLoading &&
          skeletons.map((skeleton) => <BookCardSkeleton key={skeleton} />)}
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Grid>
    </>
  );
};

export default BookGrid;
