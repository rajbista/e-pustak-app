"use client";
import {
  Button,
  Flex,
  Text,
  Switch,
  IconButton,
  Separator,
} from "@radix-ui/themes";
import BackButton from "../components/BackButton";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../hooks/useTheme";

const Account = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <BackButton />
      <Flex direction="column" justify="start" gap="4">
        <Button variant="ghost" size="4">
          Login
        </Button>
        <Button variant="ghost" size="4">
          Sign up
        </Button>
        <Separator size="4" orientation="horizontal" my="4" />
        <Flex direction="column" gap="4">
          <Text>
            Dark Theme
            <Switch
              defaultChecked
              size="2"
              ml="4"
              radius="full"
              onClick={toggleTheme}
            />
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Account;
