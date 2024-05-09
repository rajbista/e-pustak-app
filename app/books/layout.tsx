import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const BookLayout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default BookLayout;
