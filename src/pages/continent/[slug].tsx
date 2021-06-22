import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Flex,
  Container,
  SimpleGrid,
  Text,
  HStack,
  Heading,
  Tooltip,
  Icon,
  Stack,
  Image,
} from "@chakra-ui/react";

import { ContinentData } from "../../components/lib/interfaces";
import { Header } from "../../components/Header";

import api from "../../services/api";
import { FiInfo } from "react-icons/fi";

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header hasReturnLink />
      <Box
        position="relative"
        w="100%"
        h={500}
        bgImage={`url(${continent.bannerImage})`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Text
          position="absolute"
          fontSize="5xl"
          fontWeight="semibold"
          color="heading"
          left="32"
          bottom="16"
        >
          {continent.name}
        </Text>
      </Box>
      <Container w="100%" maxWidth={1200}>
        <SimpleGrid
          align="center"
          justify="center"
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py="20"
        >
          <Text
            color="darkText"
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="justify"
          >
            {continent.text}
          </Text>
          <Flex align="center" justify="center">
            <HStack spacing={{ base: "14", md: "10" }}>
              <Flex flexDir="column" align="center" justify="center">
                <Heading
                  fontSize={{ base: "4xl", xl: "5xl" }}
                  fontWeight="semibold"
                  color="highlight"
                >
                  {continent.numberOfCountries}
                </Heading>
                <Text
                  fontSize={{ base: "xl", xl: "2xl" }}
                  fontWeight="semibold"
                  color="darkText"
                >
                  países
                </Text>
              </Flex>

              <Flex flexDir="column" align="center" justify="center">
                <Heading
                  fontSize={{ base: "4xl", xl: "5xl" }}
                  fontWeight="semibold"
                  color="highlight"
                >
                  {continent.numberOfLanguages}
                </Heading>
                <Text
                  fontSize={{ base: "xl", xl: "2xl" }}
                  fontWeight="semibold"
                  color="darkText"
                >
                  línguas
                </Text>
              </Flex>

              <Flex flexDir="column" align="center" justify="center">
                <Heading
                  fontSize={{ base: "4xl", xl: "5xl" }}
                  fontWeight="semibold"
                  color="highlight"
                >
                  {continent.numberOfCity}
                </Heading>
                <Flex align="center" justify="center">
                  <Text
                    fontSize={{ base: "xl", xl: "2xl" }}
                    fontWeight="semibold"
                    color="darkText"
                  >
                    cidades +100
                  </Text>
                  <Tooltip
                    label="+ 100 ótimas opções"
                    bg="gray.800"
                    borderRadius="4"
                    placement="bottom-start"
                    fontSize="md"
                  >
                    <span>
                      <Icon
                        as={FiInfo}
                        h={["3", "4"]}
                        w={["2", "4"]}
                        ml="1"
                        color="rgba(153,153,153,0.5)"
                      />
                    </span>
                  </Tooltip>
                </Flex>
              </Flex>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Container>

      <Box
        w="100%"
        maxWidth={1160}
        mx="auto"
        mb="9"
        px={{ base: "4", xl: "0" }}
      >
        <Heading
          fontSize={{ base: "3xl", xl: "4xl" }}
          fontWeight="medium"
          color="darkText"
          mb={{ base: "5", xl: "10" }}
        >
          Cidades +{continent.countries.length}
        </Heading>
        <SimpleGrid justifyItems="center" spacing="10" minChildWidth="260px">
          {continent.countries &&
            continent.countries.map((country) => (
              <Box
                key={country.id}
                w="fit-content"
                bg="white"
                borderRadius="4"
                borderWidth="1px"
                borderColor="rgba(255,186,8,0.5)"
              >
                <Image
                  w="256px"
                  h="173px"
                  objectFit="cover"
                  objectPosition="center"
                  src={country.image}
                  borderTopRadius="4"
                  alt={country.capital}
                />
                <Flex
                  align="center"
                  justify="space-between"
                  mt="5"
                  mb="6"
                  mx="6"
                >
                  <Stack spacing="3">
                    <Text fontSize="xl" fontWeight="semibold" color="darkText">
                      {country.capital}
                    </Text>
                    <Text fontSize="md" fontWeight="medium" color="gray.500">
                      {country.name}
                    </Text>
                  </Stack>
                  <Image
                    h="30px"
                    w="30px"
                    src={country.flag}
                    borderRadius="50%"
                    alt={country.name}
                  />
                </Flex>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const response = await api.get(`/continents/${slug}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 5,
  };
};
