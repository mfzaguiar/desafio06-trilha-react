import {
  Container,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";

export function TravelTips() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Container maxW="container.lg">
      <Flex
        py={{ base: "14", md: "28" }}
        flexDir="row"
        align="center"
        justify="space-between"
      >
        <Flex align="center" justify="center">
          {isWideVersion ? (
            <VStack>
              <Image
                w={85}
                h={85}
                src="./assets/travel/cocktail.svg"
                alt="cocktail"
              />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                praia
              </Text>
            </VStack>
          ) : (
            <HStack>
              <Circle size="2" bg="highlight" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                vida noturna
              </Text>
            </HStack>
          )}
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          {isWideVersion ? (
            <VStack>
              <Image w={85} h={85} src="./assets/travel/surf.svg" alt="praia" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                praia
              </Text>
            </VStack>
          ) : (
            <HStack>
              <Circle size="2" bg="highlight" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                praia
              </Text>
            </HStack>
          )}
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          {isWideVersion ? (
            <VStack>
              <Image
                w={85}
                h={85}
                src="./assets/travel/building.svg"
                alt="moderno"
              />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                moderno
              </Text>
            </VStack>
          ) : (
            <HStack>
              <Circle size="2" bg="highlight" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                moderno
              </Text>
            </HStack>
          )}
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          {isWideVersion ? (
            <VStack>
              <Image
                w={85}
                h={85}
                src="./assets/travel/museum.svg"
                alt="clássico"
              />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                clássico
              </Text>
            </VStack>
          ) : (
            <HStack>
              <Circle size="2" bg="highlight" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                clássico
              </Text>
            </HStack>
          )}
        </Flex>
        <Flex flexDir="column" align="center" justify="center">
          {isWideVersion ? (
            <VStack>
              <Image
                w={85}
                h={85}
                src="./assets/travel/earth.svg"
                alt="e mais"
              />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                e mais...
              </Text>
            </VStack>
          ) : (
            <HStack>
              <Circle size="2" bg="highlight" />
              <Text mt={4} fontWeight="600" color="darkText" fontSize="medium">
                e mais...
              </Text>
            </HStack>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
