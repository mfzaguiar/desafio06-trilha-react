import { Flex, Heading, Text, LinkBox } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { ContinentDataProps } from "../lib/interfaces";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface CarouselProps {
  continents: ContinentDataProps[];
}

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      w="100%"
      h={{ base: "350px", lg: "450px" }}
      maxW="1240px"
      mx="auto"
      mb={{ base: "5", lg: "10" }}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continent/${continent.id}`} passHref>
              <LinkBox as="a">
                <Flex
                  w="100%"
                  h="100%"
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage={`url('${continent.carrouselImage}')`}
                  bgPosition="100% 30%"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  textAlign="center"
                >
                  <Heading
                    fontSize={{ base: "3xl", lg: "3xl" }}
                    color="heading"
                    fontWeight="bold"
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="info"
                    fontSize={{ base: "lg", lg: "2xl" }}
                    mt={{ base: "2", lg: "4" }}
                  >
                    {continent.description}
                  </Text>
                </Flex>
              </LinkBox>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
