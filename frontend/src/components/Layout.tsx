import React from 'react';

import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

<<<<<<< HEAD
const Layout = (props): JSX.Element => {
=======
const Layout = function(props): JSX.Element {
>>>>>>> f1866bbe5b615fa6e0e06bff7984854fa56d41b8
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
