import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Container,
  Link,
  TextField,
} from "@material-ui/core";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const About = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.root}>This is About Page</section>
    </div>
  );
};

export default About;
