import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import React from "react";

const Rating = ({ value }: { value: number }) => {
  const fullStars = Math.floor(value);
  const emptyStars = 5 - fullStars;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <IconButton variant="ghost" color="yellow" highContrast>
        <StarFilledIcon width="18" height="18" />
      </IconButton>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <IconButton variant="ghost" color="yellow" highContrast>
        <StarIcon width="18" height="18" />
      </IconButton>
    );
  }
  return <div>{stars}</div>;
};

export default Rating;
