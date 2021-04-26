import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Button } from "@material-ui/core/";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Main = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          No Racism !
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Our App will report Racism. Where, who, how did Racism.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Go to Static
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Go to Report
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Main;
