"use client";
import Link from "next/link";
import React from "react";
import SearchInput from "./components/SearchInput";
import Image from "next/image";
import { useTheme } from "./hooks/useTheme";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex gap-2 m-1 p-1">
      {/* <Image src="next.svg" width="100" height="80" alt="ePustak" /> */}
      <Link href="/" className="mr-5">
        ePustak
      </Link>
      <SearchInput />
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
};

export default NavBar;
