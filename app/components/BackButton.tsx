import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
    const router = useRouter();
  return (
    <IconButton
      variant="soft"
      radius="full"
      highContrast
      onClick={() => router.back()}
    >
      <ChevronLeftIcon width="18" height="18" />
    </IconButton>
  );
};

export default BackButton;
