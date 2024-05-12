"use client";
import Image from "next/image";
import DefinitionItem from "@/app/components/DefinitionItem";
import ExpandableText from "@/app/components/ExpandableText";
import Rating from "@/app/components/Rating";
import useBookDetail from "@/app/hooks/useBookDetail";
import { Share2Icon, ChevronLeftIcon } from "@radix-ui/react-icons";
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
  Strong,
  Text,
} from "@radix-ui/themes";
import getCroppedImageUrl from "@/app/services/image-url";
import { useRouter } from "next/navigation";

interface Props {
  params: { id: string };
}
const BookDetailContainer = ({ params: { id } }: Props) => {
  const { data: book }: { data: any } = useBookDetail(id);
  const router = useRouter();
  const details = [
    { label: "Published In", value: "Kathmandu, Nepal" },
    { label: "Publish Date", value: 2020 },
    { label: "Language", value: "Nepali" },
  ];

  const detail = [
    { label: "Format", value: "Paperback" },
    { label: "No of pages", value: 656 },
    { label: "Dimensions", value: "20 x 13 x 4.2" },
  ];

  const ids = [
    { label: "ISBN", value: "ISBN14535" },
    { label: "EPID", value: "EPID483727" },
  ];
  if (!book) return <p>Loading...</p>;
  else
    return (
      <Container>
        <Flex justify="between">
          <IconButton
            variant="soft"
            radius="full"
            highContrast
            onClick={() => router.back()}
          >
            <ChevronLeftIcon width="18" height="18" />
          </IconButton>
          <IconButton radius="full" variant="soft" highContrast>
            <Share2Icon width="18" height="18" />
          </IconButton>
        </Flex>

        <Grid columns={{ sm: "12" }} gap="3">
          <Flex
            className="col-span-4"
            direction="column"
            align="center"
            gap="2"
          >
            <Inset clip="border-box" side="top">
              <Image
                src={getCroppedImageUrl(book.background_image)}
                alt={book.name}
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
              <Heading size="7">{book?.name}</Heading>
              <Text>
                by <Strong>{book.slug}</Strong>
              </Text>
            </Flex>
            <ExpandableText>{book?.description_raw}</ExpandableText>
          </Box>

          <Flex
            className="col-span-4"
            direction="column"
            gap="3"
            justify="center"
          >
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

        <Card my="2">
          <Heading>Book Details</Heading>
          <Grid gap="5" columns={{ initial: "1", sm: "2", md: "3" }}>
            <DefinitionItem data={details} />
            <DefinitionItem data={detail} />
            <DefinitionItem data={ids} />
          </Grid>
        </Card>
      </Container>
    );
};

export default BookDetailContainer;
