import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  breakpoints: {
    values: {
      smallPhone: 320,
      phone: 375,
      phoneLarge: 414,
      tablet: 768,
      tabletLandscape: 1024,
      content: 1260,
      desktop: 1440,
    },
  },
});

export default theme;
