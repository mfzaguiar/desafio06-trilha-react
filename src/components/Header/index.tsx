import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h={100} justify="center" align="center">
      <Image src="./logo.png" alt="worldtrip logo" />
    </Flex>
  );
}
