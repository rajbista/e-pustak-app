import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Box, Flex, IconButton } from "@radix-ui/themes";
import React from "react";

const Rating = ({ value }: { value: number }) => {
  const fullStars = Math.floor(value);
  const emptyStars = 5 - fullStars;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <IconButton size="1" variant="ghost" highContrast key={i}>
        <StarFilledIcon width="16" height="16" />
      </IconButton>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IconButton size="1" variant="ghost" highContrast key={i + 5}>
        <StarIcon width="16" height="16" />
      </IconButton>
    );
  }
  return <div>{stars}</div>;
};

export default Rating;
