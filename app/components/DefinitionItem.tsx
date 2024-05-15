import { Box, Text, Heading, DataList } from "@radix-ui/themes";

interface Props {
  label: string;
  value: string;
}
const DefinitionItem = ({ label, value }: Props) => {
  return (
    <Box my="3">
      <DataList.Root>
        <DataList.Item>
          <DataList.Label>{label}</DataList.Label>
          <DataList.Value>{value}</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Box>
  );
};

export default DefinitionItem;
