import { extendTheme } from "native-base";

export const theme = extendTheme({
  components: {
    ActionsheetItem: {
      baseStyle: {
        _text: {
          color: "text.900",
          fontSize: "sm",
          fontWeight: "normal",
        },
        _pressed: {
          bg: "gray.200",
        },
      },
    },
  },
  fontConfig: {
    Montserrat: {
      100: {
        normal: "Thin",
      },
      200: {
        normal: "ExtraLight",
      },
      300: {
        normal: "Light",
      },
      400: {
        normal: "Regular",
      },
      500: {
        normal: "Medium",
      },
      600: {
        normal: "SemiBold",
      },
      700: {
        normal: "Bold",
      },
      800: {
        normal: "ExtraBold",
      },
      900: {
        normal: "Black",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },
});
