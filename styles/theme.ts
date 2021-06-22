import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    heading: "#F5F8FA",
    darkText: "#47585B",
    highlight: "#FFBA08",
    info: "#DADADA",
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F8FA",
        color: "#47585B",
      },
    },
  },
});
