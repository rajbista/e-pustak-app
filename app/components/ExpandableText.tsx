"use client";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { IconButton, Text } from "@radix-ui/themes";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children?.length <= limit)
    return (
      <Text size="2" color="gray" className="text-justify">
        {children}
      </Text>
    );

  const summary = expanded ? children : children?.substring(0, limit) + "...";
  return (
    <Text size="2" color="gray" className="text-justify">
      {summary}

      {expanded ? (
        <IconButton
          variant="ghost"
          highContrast
          ml="2"
          onClick={() => setExpanded(!expanded)}
        >
          See less
          <TriangleUpIcon width="20" height="20" />
        </IconButton>
      ) : (
        <IconButton
          variant="ghost"
          highContrast
          ml="2"
          onClick={() => setExpanded(!expanded)}
        >
          See more
          <TriangleDownIcon width="20" height="20" />
        </IconButton>
      )}
    </Text>
  );
};

export default ExpandableText;
