"use client";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { Box, IconButton, TextField } from "@radix-ui/themes";
import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  //   const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const searchText = ref.current?.value;
    // router.push({
    //   pathname: "/",
    //   query: { searchText },
    // });
  };
  return (
    <Box width={{ sm: "800px" }} onSubmit={handleSubmit}>
      <TextField.Root
        radius="full"
        placeholder="Search books…"
        size={{ initial: "2", sm: "3" }}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  );
};

export default SearchInput;
