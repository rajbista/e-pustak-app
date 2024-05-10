"use client";
import useBookDetail from "@/app/hooks/useBookDetail";
import { Box, Heading, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  params: { id: string };
}
const BookDetailPage = ({ params: { id } }: Props) => {
  const { data: book }: { data: any } = useBookDetail(id);
  return (
    <Box p="5">
      <Heading>{book?.name}</Heading>
      <Text>{book?.description_raw}</Text>
    </Box>
  );
};

export default BookDetailPage;
