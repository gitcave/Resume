import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "1180px",
  md: "1536px",
  lg: "1536px",
  xl: "1536px",
  "2xl": "1536px",
};

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  breakpoints,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    button: "Poppins",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
        borderRadius: 16,
        _focus: { boxShadow: "none" },
      },
      variants: {
        menu: {
          height: ["40px", "48px"],
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: 600,
          alignItems: "center",
          gap: 1,
          padding: "10px 25px",
          borderRadius: ["4px"],
          backgroundColor: "transparent",
          _hover: {
            color: "blue.500",
            bgColor: "transparent",
            _disabled: {
              bgColor: "transparent",
            },
          },
          _active: {
            bgColor: "transparent",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#FCFCFC",
        color: "#181726",
      },
    },
  },
  colors: {
    background: "#181726",
    navbarBackground: "#F7F6FB",
    neutrals: {
      1: "#141416",
      2: "#23262F",
      3: "#353945",
      4: "#777E90",
      5: "#B1B5C3",
      6: "#E6E8EC",
    },
    darkLayer: {
      1: "#181726",
      2: "#212230",
      3: "#272838",
      4: "#37374D",
      5: "#42425C",
      6: "#505070",
    },
    // don't use generic names like 'blue' as that will override predefined color schemes
    discordBlue: "#5865F2",
    primaryBlue: "#73AAFF",
    simplerBlue: "#35AEFE",
    secondaryBlue: "#4C93FF",
    textWhite: "#FCFCFC",
    textGrey: "#9499AF",
    borderColor: "#505070",
    inputBackground: "#2B2C3E",
    textDarkGrey: "#718096",
    textLightBlack: "#425466",
    textBlack: "#181726",
    textWarning: "#FFBD3A",
    textDanger: "#FF433D",
    inputPlaceholder: "#BEBDCD",
    borderGrey: "#505070",
    successGreen: "#15B558",
    deleteRed: "#FFD9D8",
    textRed: "#E67373",
    textSuccess: "#5BCB8A",
    textYellow: "#FBED70",
    successBackground: "#B9E9CD",
    twitterIcon: "#00ACEE",
    bgWhite: "#1F1E2D",
    textBrown: "#D1672B",
    twitterBlue: "#40C1F2",
  },
});

export default theme;
