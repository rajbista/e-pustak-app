"use client";
import Link from "next/link";
import React from "react";
import SearchInput from "./components/SearchInput";
import Image from "next/image";
import { useTheme } from "./hooks/useTheme";
import { Box, Card, Flex, IconButton } from "@radix-ui/themes";
import {
  BellIcon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box my="3" mx="2">
      <Flex justify="between" align="center">
        {/* <Image src="next.svg" width="100" height="80" alt="ePustak" /> */}
        <Link href="/" className="mr-5">
          ePustak
        </Link>
        <IconButton variant="surface" highContrast>
          <MagnifyingGlassIcon width="18" height="18" />
        </IconButton>
        {/* <SearchInput /> */}
        <Flex align="center" gapX="2">
          <IconButton variant="ghost" highContrast>
            <BellIcon width="18" height="18" />
          </IconButton>

          <IconButton variant="ghost" highContrast onClick={toggleTheme}>
            {theme === "dark" ? (
              <SunIcon width="18" height="18" />
            ) : (
              <MoonIcon width="18" height="18" />
            )}
          </IconButton>
          <IconButton variant="ghost" highContrast>
            <HamburgerMenuIcon width="24" height="24" />
          </IconButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
