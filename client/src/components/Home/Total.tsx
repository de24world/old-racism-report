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
  data: IDataProps;
}

function Total({ data }: Props): ReactElement {
  const classes = useStyles();
  const totalNumber = Object.keys(data).length;
  // console.log(totalNumber, "totalNumber in Total");

  return (
    <>
      {/* https://coronaboard.kr/ */}
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h4" color="primary" gutterBottom>
          Total Report
        </Typography>

        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" gutterBottom>
                {totalNumber}
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
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Total;
