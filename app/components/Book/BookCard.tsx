import React from "react";
import Image from "next/image";
import { Card, Text, Heading, Flex, Box, Inset } from "@radix-ui/themes";
import { Book } from "../../hooks/useBook";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  book: Book;
}
const BookCard = ({ book }: Props) => {
  return (
    <Card>
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={getCroppedImageUrl(book.background_image)}
          alt={book.name}
          width="600"
          height="400"
        />
      </Inset>
      <Flex gap="1" direction="column">
        <Heading size="5" weight="bold" align="center">
          {book.name}
        </Heading>
        <Flex gap="2" direction="row" justify="start">
          {book.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default BookCard;
