import {
  Box,
  Container,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      position="relative"
      w="100%"
      bgImage="url('/assets/background.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      py={{ base: "12", md: "20" }}
    >
      <Container maxW="container.lg">
        <Text
          as="p"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          fontWeight="medium"
          lineHeight="tall"
          color="heading"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="normal"
          lineHeight="6"
          color="info"
          mt={4}
        >
          Chegou a hora de tirar do papel a viagem que você
          <br />
          sempre sonhou.
        </Text>
      </Container>
      {isWideVersion && (
        <Box position="absolute" right={40} bottom={-10}>
          <Image src="/assets/Airplane.svg" alt="airplane" />
        </Box>
      )}
    </Box>
  );
}
