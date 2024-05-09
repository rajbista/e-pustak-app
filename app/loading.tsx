import { Flex, Spinner } from "@radix-ui/themes";
import React from "react";

const loading = () => {
  return (
    <Flex align="center" gap="4">
      <Spinner size="3" />
    </Flex>
  );
};

export default loading;
