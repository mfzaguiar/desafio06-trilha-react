import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTips } from "../components/TravelTips";
import { Separator } from "../components/Separator";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTips />
      <Separator />
      <Carousel />
    </Flex>
  );
}
