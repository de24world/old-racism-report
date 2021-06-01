import React, { useEffect } from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles, Container, Typography, Button } from "@material-ui/core/";

// source
import CountryChart from "./CountryChart";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

interface Props {
  items: any;
}

function Charts({ items }: Props) {
  const classes = useStyles();
  const cityChange = () => {
    console.log("change City");
  };

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Typography variant="h3">Charts</Typography>
        <CountryChart items={items} />
        <Button variant="contained" color="primary" onClick={cityChange}>
          Country Chart
        </Button>
        <Button variant="contained" color="primary" onClick={cityChange}>
          City Chart
        </Button>
      </Container>
    </div>
  );
}

export default Charts;
