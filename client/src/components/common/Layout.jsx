import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "yellow",
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>{props.children}</Container>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
