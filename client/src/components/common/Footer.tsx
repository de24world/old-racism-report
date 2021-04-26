import React from "react";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 50,
  },
  emojiFlag: {
    cursor: "pointer",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="secondary"
      >
        <Toolbar>
          <Grid item container>
            <Grid item container xs={12} justify="center" spacing={2}>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href={""}
              >
                <FacebookIcon fontSize="large" />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href={""}
              >
                <InstagramIcon fontSize="large" />
              </Grid>
              <Grid
                item
                component={"a"}
                target="_blank"
                rel="noreferrer noopener"
                href={""}
              >
                <GitHubIcon fontSize="large" />
              </Grid>
            </Grid>

            <Grid item container xs={12} justify="center" spacing={2}>
              <Typography variant="caption"> &copy;HoSoo Lee </Typography>
            </Grid>
          </Grid>
          <Typography> de24world@gmail.com </Typography>

          <ReactCountryFlag
            className={classes.emojiFlag}
            countryCode="GB"
            title="영어"
            onClick={() => {
              router.push("", "", { locale: "en" });
            }}
          />
          <ReactCountryFlag
            className={classes.emojiFlag}
            countryCode="KR"
            title="한국어"
            onClick={() => {
              router.push("", "", { locale: "ko" });
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
