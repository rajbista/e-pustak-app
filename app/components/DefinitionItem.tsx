import { Box, Text, Heading, DataList } from "@radix-ui/themes";

interface Props {
  data: { label: string; value: string }[];
}
const DefinitionItem = ({ data }: Props) => {
  return (
    <Box my="3">
      {data?.map((child: any) => (
        <DataList.Root key={child.label}>
          <DataList.Item>
            <DataList.Label>{child.label}</DataList.Label>
            <DataList.Value>{child.value}</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      ))}
      <DataList.Root></DataList.Root>
    </Box>
  );
};

export default DefinitionItem;
