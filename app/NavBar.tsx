"use client";
import Link from "next/link";
import React from "react";
import SearchInput from "./components/SearchInput";
import Image from "next/image";

// import { useTheme } from "./hooks/useTheme";

const NavBar = () => {
  // const { setTheme } = useTheme();
  return (
    <nav className="flex bg-slate-200 gap-2 m-1 p-1">
      <Image src="next.svg" width="100" height="80" alt="ePustak" />
      {/* <Link href="/" className="mr-5">
        ePustak
      </Link> */}
      <SearchInput />
      {/* <button onClick={setTheme}>Toggle Theme</button> */}
    </nav>
  );
};

export default NavBar;
