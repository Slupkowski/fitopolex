declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    teal: Palette["secondary"];
    black: Palette["secondary"];
    blue: Palette["secondary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
    teal: PaletteOptions["secondary"];
    black: PaletteOptions["secondary"];
    blue: PaletteOptions["secondary"];
  }
}

export const createPalette = () => {
  return {
    //dupa
    dupa: {
      "50": "5fa8d3",
      "100": "cae9ff",
      "150": "1b4965",
      "200": "62b6cb",
      "250": "bee9e8",
    },
    // NEUTRAL
    neutral: {
      "50": "#FFFFFF",
      "100": "#F9FCFC",
      "200": "#EEF6F7",
      "300": "#E5EFF0",
      "400": "#CDDBDE",
      "500": "#ACC0C4",
      "600": "#82939A",
      "700": "#5D6D78",
      "800": "#46535E",
      "900": "#262836",
    },
    blue: {
      "100": "#EAF7F9",
    },
    // TEAL
    teal: {
      "50": "#F6FCFD",
      "100": "#CEF6EE",
      "200": "#7ED5D8",
      "300": "#29B0C3",
      "400": "#1593A5",
      "500": "#007585",
      "600": "#01586D",
      "700": "#003C55",
      "800": "#002C3B",
      "900": "#001B1F",
    },
    black: {
      "50": "#262836",
    },
    signatureRed: {
      "1": "#FBCCD1",
      "2": "#EB0017",
      "3": "#881520",
    },
    // SEMANTIC
    feedback: {
      infoDark: "#003B75",
      infoBase: "#0055A8",
      infoLight: "#CCEAF5",
      cautionDark: "#B37400",
      cautionBase: "#FFA600",
      cautionLight: "#FFF6E5",
      successDark: "#0D725E",
      successLight: "#EDFBF8",
      success: {
        "2": "#49CAAF",
        "3": "#12A884",
      },
      error: {
        "0": "#FEEEEE",
        "1": "#FF9AA1",
        "2": "#EA2238",
        "3": "#CA110F",
        "4": "#A40B1B",
      },
    },
  };
};
