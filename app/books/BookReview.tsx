import { Card, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import React from "react";
import Rating from "../components/Rating";
import ExpandableText from "../components/ExpandableText";

export interface BookReviewProps {
  rating: number;
  heading: string;
  review: string;
  reviewedBy: string;
  reviewedDate: string;
}
const BookReview = ({
  rating,
  heading,
  review,
  reviewedBy,
  reviewedDate,
}: BookReviewProps) => {
  return (
    <Flex direction="column" gap="2">
      <Rating value={rating} />
      <Heading color="gray" size="5">
        {heading}
      </Heading>
      <ExpandableText>{review}</ExpandableText>
      <Text size="3">
        by <Strong>{reviewedBy}</Strong> on {reviewedDate}
      </Text>
    </Flex>
  );
};

export default BookReview;
