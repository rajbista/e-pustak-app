"use client";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";

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
    <form onSubmit={handleSubmit} className="relative w-full">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <BsSearch className="text-gray-400" />
      </span>
      <input
        ref={ref}
        type="text"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Search books..."
      />
    </form>
  );
};

export default SearchInput;
