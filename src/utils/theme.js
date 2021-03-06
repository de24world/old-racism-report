import { createTheme } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white"
        }
      }
    }
  },
  palette: {
    // primary: {
    //   main: "#556cd6",
    // },
    // secondary: {
    //   main: "#19857b",
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: "#fff",
    // },
    // color: {
    //   white: "#fff",
    // },
  }
});

// https://material-ui.com/customization/default-theme/

// default breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

// Media Query Sample
// in Total.tsx
// [theme.breakpoints.down("sm")]: {
//   padding: theme.spacing(2),
// }

export default theme;
