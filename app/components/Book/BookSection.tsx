import { Book } from "@/app/hooks/useBook";
import Slider from "react-slick";
import BookCard from "./BookCard";
import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";
const settings = {
  className: "center",
  slidesToShow: 5.5,
  slidesToScroll: 5,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2,
      },
    },
  ],
};
interface Props {
  books: Book[];
  title: string;
}
const BookSection = ({ books, title }: Props) => {
  return (
    <Container py="1">
      <Flex justify="between" align="center" p="1">
        <Heading color="gray" size="7" weight="medium">
          {title}
        </Heading>
        <Button variant="ghost">Show all</Button>
      </Flex>

      <Box py="1">
        {books?.length > 0 && (
          <Slider {...settings}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </Slider>
        )}
      </Box>
    </Container>
  );
};

export default BookSection;
