import { Flex, Box, Heading } from "@chakra-ui/react";

export function Separator() {
  return (
    <Flex flexDir="column" justify="center" align="center" pb={10}>
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        mb={"20"}
        color="darkText"
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
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
