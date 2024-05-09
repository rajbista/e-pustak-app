import { notFound, useRouter } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}
const BookDetailPage = ({ params: { id } }: Props) => {
  if (id > 1100000) notFound();
  return <div>Bookd ID: {id}</div>;
};

export default BookDetailPage;
