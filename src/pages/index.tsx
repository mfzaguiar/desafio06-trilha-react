import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTips } from "../components/TravelTips";
import { Separator } from "../components/Separator";
import { Carousel } from "../components/Carousel";

import api from "../services/api";
import { HomeProps } from "../components/lib/interfaces";

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTips />
      <Separator />
      <Carousel continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/continents");

  return {
    props: {
      continents: data,
    },
  };
};
