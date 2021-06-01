import React, { useState } from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles, Container, Typography, Button } from "@material-ui/core/";

// source
import CountryChart from "./CountryChart";
import CityChart from "./CityChart";

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
  const [chartState, setChartState] = useState("country-chart");

  const countryChange = () => {
    setChartState("country-chart");
  };

  const cityChange = () => {
    setChartState("city-chart");
  };

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Typography variant="h3">Charts</Typography>

        {chartState === "country-chart" && <CountryChart items={items} />}
        {chartState === "city-chart" && <CityChart items={items} />}

        {/* LevelChart(Pie), RaceChart(Multiple : victim, offender), TimeChart */}

        <Button variant="contained" color="primary" onClick={countryChange}>
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
