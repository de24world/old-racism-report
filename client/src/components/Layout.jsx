import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
};

Layout.propTypes = {};

export default Layout;
