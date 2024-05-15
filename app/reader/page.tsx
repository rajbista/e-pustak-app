"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";
interface Props {
  title: string;
}
const Reader = () => {
  const [location, setLocation] = useState<string | number>(0);
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        url="https://react-reader.metabits.no/files/alice.epub"
        location={location}
        swipeable={true}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  );
};

export default Reader;
