import { Box, Container, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      position="relative"
      W="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/assets/background.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      py="20"
    >
      <Container maxW="container.lg">
        <Text
          as="p"
          fontSize="4xl"
          fontWeight="medium"
          lineHeight="tall"
          color="heading"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          as="p"
          fontSize="lg"
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
      <Box position="absolute" right={40} bottom={-10}>
        <Image src="./assets/Airplane.svg" alt="airplane" />
      </Box>
    </Box>
  );
}
