"use client";
import Slider from "react-slick";
import BookCard from "./BookCard";
import { Container, Flex, Grid, Heading, IconButton } from "@radix-ui/themes";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useBooks } from "../hooks/useBook";
const settings = {
  className: "center",
  slidesToShow: 5.25,
  slidesToScroll: 5,
  infinite: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.25,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.25,
        slidesToScroll: 2,
      },
    },
  ],
};
interface Props {
  title: string;
}
const BookSection = ({ title }: Props) => {
  const router = useRouter();
  const { data } = useBooks();
  if (!data?.length) return null;
  return (
    <Container py="1">
      <Flex
        justify="between"
        align="center"
        p="1"
        onClick={() => router.push("/books/list")}
      >
        <Heading size="5" weight="bold">
          {title}
        </Heading>
        <IconButton variant="ghost" highContrast>
          <ChevronRightIcon width="18" height="18" />
        </IconButton>
      </Flex>

      <Grid gap="2">
        {
          <Slider {...settings}>
            {data?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </Slider>
        }
      </Grid>
    </Container>
  );
};

export default BookSection;
