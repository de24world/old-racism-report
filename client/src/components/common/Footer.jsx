import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">©2020</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
