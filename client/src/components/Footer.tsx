import React from "react";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Container,
  Link,
  TextField,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageSwitch from "./LanguageSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const router = useRouter();

  const LANGUAGES = [
    {
      code: "en-US",
      name: "English",
    },
    {
      code: "fr-FR",
      name: "Français",
    },
  ];

  return (
    <>
      <Typography component="footer" className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction="column"
                justify="flex-end"
                className={classes.iconsWrapper}
                spacing={2}
              >
                <Grid item className={classes.icons}>
                  <a href="https://material-ui.com/" className={classes.icon}>
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://twitter.com/MaterialUI"
                    className={classes.icon}
                  >
                    <InstagramIcon />
                  </a>
                </Grid>
                <Grid item>
                  {"© "}
                  <Link color="inherit" href="https://material-ui.com/">
                    HoSoo Lee
                  </Link>{" "}
                  {new Date().getFullYear()}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography variant="h6">Legal</Typography>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={8} md={4}>
              {/* <Typography variant="h6">Language</Typography> */}
              <LanguageSwitch />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {"Icons made by "}
                <Link
                  href="https://www.freepik.com"
                  rel="sponsored"
                  title="Freepik"
                >
                  Freepik
                </Link>
                {" from "}
                <Link
                  href="https://www.flaticon.com"
                  rel="sponsored"
                  title="Flaticon"
                >
                  www.flaticon.com
                </Link>
                {" is licensed by "}
                <Link
                  href="https://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC 3.0 BY
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </>
  );
};

export default Footer;
