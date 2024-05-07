import { Card, Text, Skeleton, Box, Heading } from "@radix-ui/themes";

const BookCardSkeleton = () => {
  return (
    <Card size="5">
      <Box>
        <Skeleton width="600" height="400" />
      </Box>
      <Heading>
        <Skeleton />
      </Heading>
      <Text>
        <Skeleton />
      </Text>
    </Card>
  );
};

export default BookCardSkeleton;
