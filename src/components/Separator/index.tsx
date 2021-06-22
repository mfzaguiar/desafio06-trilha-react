import { Flex, Box, Heading } from "@chakra-ui/react";

export function Separator() {
  return (
    <Flex flexDir="column" justify="center" align="center" pb={10}>
      <Box
        w={{ base: "60px", lg: "90px" }}
        mx="auto"
        h="2px"
        bg="gray.700"
        mb={{ base: "10", lg: "20" }}
        color="darkText"
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
        color="darkText"
        lineHeight="tall"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
    </Flex>
  );
}
