import React from "react";

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
}));

const Footer = () => {
  const classes = useStyles();

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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
