export type ContinentDataProps = {
  id: number;
  slug: number;
  name: string;
  description: string;
  carrouselImage: string;
};

interface CountriesData {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}

export interface ContinentData {
  name: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCity: number;
  bannerImage: string;
  countries: CountriesData[];
}

export interface HomeProps {
  continents: ContinentDataProps[];
}
