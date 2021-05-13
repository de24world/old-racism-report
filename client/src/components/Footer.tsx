import React from "react";

// Library
import ReactCountryFlag from "react-country-flag";

// Next Module
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

// Material UI
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  Link,
  Button,
  Tooltip,
} from "@material-ui/core";

// Material Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

// Source Component
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
    height: 0,
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
              <Link href="/chart">
                <Button>{t("Chart")}</Button>
              </Link>
              <Link href="/contact">
                <Button>{t("Report")}</Button>
              </Link>
            </Grid>

            <Grid item xs={12} md={4}>
              <Grid
                container
                direction="column"
                className={classes.iconsWrapper}
                spacing={2}
              >
                <Grid item className={classes.icons}>
                  <a href="https://material-ui.com/" className={classes.icon}>
                    <FacebookIcon />
                  </a>

                  <a href="" className={classes.icon}>
                    <InstagramIcon />
                  </a>

                  <Tooltip title="de24world@gmail.com">
                    <a
                      href="mailto:de24world@gmail.com"
                      className={classes.icon}
                    >
                      <EmailIcon />
                    </a>
                  </Tooltip>
                </Grid>
                {/* <Grid item>
                  {"© "} Puscha
                  <Link color="inherit" href="https://material-ui.com/">
                    <EmailIcon />
                    de24world@gmail.com
                  </Link>{" "}
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </>
  );
};

export default Footer;
