"use client";
import DefinitionItem from "@/app/components/DefinitionItem";
import { Card, Grid, Heading } from "@radix-ui/themes";
import React from "react";

const BookDetailPage = () => {
  const details = [
    { label: "Published In", value: "Kathmandu, Nepal" },
    { label: "Publish Date", value: "2020" },
    { label: "Language", value: "Nepali" },
  ];

  const detail = [
    { label: "Format", value: "Paperback" },
    { label: "No of pages", value: "656" },
    { label: "Dimensions", value: "20 x 13 x 4.2" },
  ];

  const ids = [
    { label: "ISBN", value: "ISBN14535" },
    { label: "EPID", value: "EPID483727" },
  ];
  return (
    <Card my="2">
      <Heading>Book Details</Heading>
      <Grid gap="5" columns={{ initial: "1", sm: "2", md: "3" }}>
        {details.map((d, i) => (
          <DefinitionItem key={i} {...d} />
        ))}

        {detail.map((d, i) => (
          <DefinitionItem key={i} {...d} />
        ))}

        {ids.map((d, i) => (
          <DefinitionItem key={i} {...d} />
        ))}
      </Grid>
    </Card>
  );
};

export default BookDetailPage;
