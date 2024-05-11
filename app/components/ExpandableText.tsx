"use client";
import { Button, Text } from "@radix-ui/themes";
import { useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children?.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children?.substring(0, limit) + "...";
  return (
    <div className="text-justify">
      {summary}
      <Button
        color="yellow"
        variant="ghost"
        size="3"
        ml="2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpandableText;
