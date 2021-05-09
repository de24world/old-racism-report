import React from "react";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "next-i18next";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Container,
  Link,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageSwitch from "./LanguageSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.warning.light,
    marginTop: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const router = useRouter();
  const { t } = useTranslation("common");

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
          <Grid container>
            <Grid item xs={6} md={2}>
              <LanguageSwitch />
            </Grid>

            <Grid item xs={6} md={6}>
              <Link href="/">
                <Button>{t("Home")}</Button>
              </Link>
              <Link href="/list">
                <Button>{t("List")}</Button>
              </Link>
              <Link href="/video">
                <Button>{t("Video")}</Button>
              </Link>
              <Link href="/statistics">
                <Button>{t("Static")}</Button>
              </Link>
              <Link href="/contact">
                <Button>{t("Report")}</Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={4}>
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
                    de24world@gmail.com
                  </Link>{" "}
                  {new Date().getFullYear()}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </>
  );
};

export default Footer;
