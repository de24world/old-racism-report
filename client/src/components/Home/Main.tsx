import React from "react";

// Next Libarary
import Link from "next/link";
import { useTranslation } from "next-i18next";

// Material UI
import { makeStyles, Grid, Typography, Button } from "@material-ui/core/";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {},
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function Main(props: Props): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <div className="main __block">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {t("No Racism !")}
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Our App will report Racism. Where, who, how did Racism.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link href="/list">
              <Button variant="contained" color="primary">
                Go to List
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/chart">
              <Button variant="outlined" color="primary">
                Go to Chart
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Main;
