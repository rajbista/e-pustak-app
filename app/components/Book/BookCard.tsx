import React from "react";
import Image from "next/image";
import { Card, Text, Heading, Box, Inset } from "@radix-ui/themes";
import { Book } from "../../hooks/useBook";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  book: Book;
}
const BookCard = ({ book }: Props) => {
  return (
    <Box maxWidth="164px" maxHeight="164" pr="1">
      <Card>
        <Box>
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              src={getCroppedImageUrl(book.background_image)}
              alt={book.name}
              width="164"
              height="134"
            />
          </Inset>
        </Box>
        <Box py="2">
          <Heading size="3" color="gray" align="left" trim="both" truncate>
            {book.name}
          </Heading>
          <Text>{book.id}</Text>
        </Box>
      </Card>
    </Box>
  );
};

export default BookCard;
