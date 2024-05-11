// "use client";
// import DefinitionItem from "@/app/components/DefinitionItem";
// import ExpandableText from "@/app/components/ExpandableText";
// import Rating from "@/app/components/Rating";
// import useBookDetail from "@/app/hooks/useBookDetail";
// import { Share2Icon } from "@radix-ui/react-icons";
// import {
//   Box,
//   Card,
//   DataList,
//   Flex,
//   Heading,
//   IconButton,
//   Strong,
//   Text,
// } from "@radix-ui/themes";
// import React from "react";

// interface Props {
//   params: { id: string };
// }
// const BookDetailPage = ({ params: { id } }: Props) => {
//   const { data: book }: { data: any } = useBookDetail(id);
//   const details = [{ "Published in": "kathmandu, Nepal" }, "2024"];
//   if (!book) return <p>Loading...</p>;
//   else
//     return (
//       <Box m="2">
//         <Flex direction="column" gap="2">
//           <Heading size="7">{book?.name}</Heading>
//           <Flex justify="between" align="center">
//             <Text>
//               by <Strong>{book.slug}</Strong>
//             </Text>
//             <IconButton variant="ghost" highContrast>
//               <Share2Icon width="18" height="18" />
//             </IconButton>
//           </Flex>
//           <Rating value={4.5}></Rating>
//         </Flex>

//         <ExpandableText>{book?.description_raw}</ExpandableText>

//         <Card my="2">
//           <Heading>Book Details</Heading>
//           <DataList.Root>
//             <DataList.Item>Published in</DataList.Item>
//             <DataList.Value>Kathmandu, Nepal</DataList.Value>
//           </DataList.Root>
//         </Card>

//         {/* <DefinitionItem term="Platforms">
//           {book.parent_platforms?.map(({ platform }) => (
//             <Text key={platform.id}>{platform}</Text>
//           ))}
//         </DefinitionItem> */}
//       </Box>
//     );
// };

// export default BookDetailPage;
