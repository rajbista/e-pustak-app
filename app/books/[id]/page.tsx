"use client";
import Image from "next/image";
import ExpandableText from "@/app/components/ExpandableText";
import Rating from "@/app/components/Rating";
import useBookDetail from "@/app/hooks/useBookDetail";
import { Share2Icon, TriangleDownIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Inset,
  RadioCards,
  Separator,
  Strong,
  Text,
} from "@radix-ui/themes";
import getCroppedImageUrl from "@/app/services/image-url";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import BookDetailPage from "./BookDetailPage";
import BookReview, { BookReviewProps } from "../BookReview";
import BookSection from "../BookSection";

const reviews: BookReviewProps[] = [
  {
    rating: 4.5,
    heading: "The best book I've ever read",
    review:
      "This book is a masterpiece. It is a fantasy with a familiar setting, with the addition of a few tweaks such as enchanted silver. The book begins in 1828 when Robin Swift, a young Chinese boy dying of cholera in China, is nursed back to health by Dr. Lowell, who arrives from England just in time. Dr. Lowell has been Robin's patron since he was born and has long range plans for him. He has paid for his upkeep and schooling in China, with an emphasis on languages. After Robin improves, he brings him to England to continue his education, particularly in linguistics. He plans for Robin to eventually attend Oxford and to study at Babel, a tower on the Oxford campus where the main study is language - every language, including dead ones. Silver plays a big role in this book. Enchanted silver has many uses, including aiding in deciphering the true meaning of words. Robin slowly realizes that more is at stake then the pure joy of being a scholar. There is a sinister use for this understanding of language - power and domination. The Hermes Society, another Oxford group, opposes Britain imperialism. Robin is also courted by that group. I learned a lot by reading this book, and began to look at history from a different angle. To the victor goes the spoils, and the victors also write the history books. I received a review copy of this book from the publisher Avon and Harper Voyager via NetGalley, and voluntarily read and reviewed this book.",
    reviewedBy: "Pam R.",
    reviewedDate: "September 4, 2022",
  },
  {
    rating: 5,
    heading: "Can't Stop Thinking About It",
    review:
      "This book is a masterpiece. It is a fantasy with a familiar setting, with the addition of a few tweaks such as enchanted silver. The book begins in 1828 when Robin Swift, a young Chinese boy dying of cholera in China, is nursed back to health by Dr. Lowell, who arrives from England just in time. Dr. Lowell has been Robin's patron since he was born and has long range plans for him. He has paid for his upkeep and schooling in China, with an emphasis on languages. After Robin improves, he brings him to England to continue his education, particularly in linguistics. He plans for Robin to eventually attend Oxford and to study at Babel, a tower on the Oxford campus where the main study is language - every language, including dead ones. Silver plays a big role in this book. Enchanted silver has many uses, including aiding in deciphering the true meaning of words. Robin slowly realizes that more is at stake then the pure joy of being a scholar. There is a sinister use for this understanding of language - power and domination. The Hermes Society, another Oxford group, opposes Britain imperialism. Robin is also courted by that group. I learned a lot by reading this book, and began to look at history from a different angle. To the victor goes the spoils, and the victors also write the history books. I received a review copy of this book from the publisher Avon and Harper Voyager via NetGalley, and voluntarily read and reviewed this book.",
    reviewedBy: "Karin",
    reviewedDate: "September 4, 2022",
  },
  {
    rating: 5,
    heading: "Stunning",
    review:
      "It is the second week of January and I would bet half my mortgage that this will be in the top three of the 60 odd books I'll read this year.",
    reviewedBy: "N. R. Febres",
    reviewedDate: "January 10, 2023",
  },
];
interface Props {
  params: { id: string };
}
const BookDetailContainer = ({ params: { id } }: Props) => {
  const { data } = useBookDetail(id);
  const router = useRouter();

  if (!data) return null;
  else
    return (
      <Container>
        <BackButton />
        <Grid columns={{ sm: "12" }} gap="3">
          <Flex
            className="col-span-4"
            direction="column"
            align="center"
            gap="2"
          >
            <Inset clip="border-box" side="top">
              <Image
                src={getCroppedImageUrl(data?.background_image)}
                alt={data.name}
                width="256"
                height="154"
              />
            </Inset>
            <Flex justify="center" gap="2">
              <Button variant="surface" radius="full">
                Wishlist
              </Button>
              <Button
                variant="surface"
                radius="full"
                onClick={() => router.push("/reader")}
              >
                Sample
              </Button>
            </Flex>
            <Rating value={4.5} />
          </Flex>

          <Box className="col-span-4">
            <Flex direction="column" mb="3">
              <Flex justify="between" align="center">
                <Heading size="7">{data?.name}</Heading>
                <IconButton radius="full" variant="soft" highContrast>
                  <Share2Icon width="18" height="18" />
                </IconButton>
              </Flex>
              <Text>
                by <Strong>{data?.slug}</Strong>
              </Text>
            </Flex>
            <ExpandableText>{data?.description_raw}</ExpandableText>
          </Box>

          <Flex className="col-span-4" direction="column" gap="3">
            <RadioCards.Root defaultValue="1">
              <Grid columns="2">
                <RadioCards.Item value="1">
                  <Flex direction="column">
                    <Text weight="bold">eBook</Text>
                    <Text weight="bold">$4.99</Text>
                  </Flex>
                </RadioCards.Item>
                <RadioCards.Item value="2">
                  <Flex direction="column">
                    <Text weight="bold">Audiobook</Text>
                    <Text weight="bold">$9.99</Text>
                  </Flex>
                </RadioCards.Item>
              </Grid>
            </RadioCards.Root>
            <Button variant="surface" radius="full">
              Add to cart
            </Button>
            <Button radius="full" onClick={() => router.push("/reader")}>
              Read for $4.99
            </Button>
          </Flex>
        </Grid>

        <BookDetailPage />

        <BookSection title="More by James" />
        <BookSection title={`Related to ${data?.slug}`} />

        <Flex direction="column" justify="center">
          <Heading mb="3">Ratings and Reviews</Heading>
          {reviews.map((review) => (
            <Box key={review.heading}>
              <BookReview {...review} />
              <Separator orientation="horizontal" size="4" my="3" />
            </Box>
          ))}
          <Button variant="surface" radius="full" size="2">
            <Flex direction="row" align="center">
              Load more
              <TriangleDownIcon width="20" height="20" />
            </Flex>
          </Button>
        </Flex>
      </Container>
    );
};

export default BookDetailContainer;
