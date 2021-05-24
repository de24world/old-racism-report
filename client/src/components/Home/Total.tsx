import React, { ReactElement } from "react";

// interface
import { IDataProps } from "../../interfaces/interfaces";

// Material UI
import {
  makeStyles,
  Container,
  Typography,
  Paper,
  Grid,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

interface Props {
  data: IDataProps[];
  isLoading: boolean;
}

function Total({ data, isLoading }: Props): ReactElement {
  const classes = useStyles();
  const totalOccur = Object.keys(data).length;
  const countryUSA = data.filter((item) => item.country === "USA").length;

  // 피해자 종류
  const victimAsianGuy = data.filter(
    (item) => item.victim === "Asian guy"
  ).length;
  const victimAsianWomen = data.filter(
    (item) => item.victim === "Asian women"
  ).length;
  const victimBlackguy = data.filter(
    (item) => item.victim === "Black guy"
  ).length;
  const victimBlackwomen = data.filter(
    (item) => item.victim === "Black women"
  ).length;
  const victimWhiteguy = data.filter(
    (item) => item.victim === "White guy"
  ).length;
  const victimWhitewomen = data.filter(
    (item) => item.victim === "White women"
  ).length;

  // console.log(countryUSA, "count USA");

  return (
    <>
      {/* https://coronaboard.kr/ */}
      {isLoading ? (
        <CircularProgress className="progressbar" />
      ) : (
        <Container maxWidth="lg" className={classes.root}>
          <Typography variant="h4" color="primary" gutterBottom>
            Total Report
          </Typography>

          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h5" color="primary" gutterBottom>
                  {totalOccur}
                </Typography>
                총 사건 발생 수
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h5" gutterBottom>
                  sample 5
                </Typography>
                최대 발생 국가
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h5" gutterBottom>
                  sample 1
                </Typography>
                최대 도시 국가
              </Grid>

              {/* 도시 */}
              <Grid item xs={3}>
                <Typography variant="h5" gutterBottom>
                  {countryUSA}
                </Typography>
                미국
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h5" gutterBottom>
                  sample 1
                </Typography>
                최대 도시 국가
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h5" gutterBottom>
                  sample 1
                </Typography>
                최대 도시 국가
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h5" gutterBottom>
                  sample 1
                </Typography>
                최대 도시 국가
              </Grid>

              {/* 인종 */}
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  피해자 인종
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimAsianGuy}
                </Typography>
                👦🏻Asian guy
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimAsianWomen}
                </Typography>
                👩🏻Asian women
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimBlackguy}
                </Typography>
                👦🏿Black guy
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimBlackwomen}
                </Typography>
                👩🏿‍🦱Black women
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimWhiteguy}
                </Typography>
                👦🏼White guy
              </Grid>

              <Grid item xs={2}>
                <Typography variant="h5" gutterBottom>
                  {victimWhitewomen}
                </Typography>
                👩🏼White women
              </Grid>
            </Grid>
          </Paper>
        </Container>
      )}
    </>
  );
}

export default Total;
