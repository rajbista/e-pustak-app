import React from "react";
import Image from "next/image";
import { Card, Text, Heading, Box, Inset } from "@radix-ui/themes";
import { Book } from "../entities/Book";
import getCroppedImageUrl from "../services/image-url";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  book: Book;
}
const BookCard = ({ book }: Props) => {
  const router = useRouter();
  return (
    <Link href={"/books/" + book.slug}>
      <Box mr="4">
        <Card variant="classic">
          <Box>
            <Inset clip="border-box" side="top">
              <Image
                src={getCroppedImageUrl(book.background_image)}
                alt={book.name}
                width="256"
                height="164"
              />
            </Inset>
          </Box>
          <Box py="2">
            <Heading size="3" color="gray" align="left" trim="both" truncate>
              {book.name}
            </Heading>
            <Text>{book.slug}</Text>
          </Box>
        </Card>
      </Box>
    </Link>
  );
};

export default BookCard;
