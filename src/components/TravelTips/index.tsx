import { Container, Flex, Image, Text } from "@chakra-ui/react";

export function TravelTips() {
  return (
    <Container maxW="container.lg">
      <Flex py="28" flexDir="row" align="center" justify="space-between">
        <Flex flexDir="column" align="center" justify="center">
          <Image
            w={85}
            h={85}
            src="./assets/travel/cocktail.svg"
            alt="cocktail"
          />
          <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
            vida noturna
          </Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Image w={85} h={85} src="./assets/travel/surf.svg" alt="surf" />
          <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
            praia
          </Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Image
            w={85}
            h={85}
            src="./assets/travel/building.svg"
            alt="building"
          />
          <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
            moderno
          </Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Image w={85} h={85} src="./assets/travel/museum.svg" alt="museum" />
          <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
            clássico
          </Text>
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          <Image w={85} h={85} src="./assets/travel/earth.svg" alt="earth" />
          <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
