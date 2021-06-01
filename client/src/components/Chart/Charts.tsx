import React, { useState } from "react";

// Material UI
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core/";

// source
import CountryChart from "./CountryChart";
import CityChart from "./CityChart";
import LevelChart from "./LevelChart";
import OffenderChart from "./OffenderChart";
import VictimChart from "./VictimChart";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface Props {
  items: any;
}

function Charts({ items }: Props) {
  const classes = useStyles();
  const [chartState, setChartState] = useState("victim-chart");

  const victimChange = () => {
    setChartState("victim-chart");
  };

  const offenderChange = () => {
    setChartState("offender-chart");
  };

  const countryChange = () => {
    setChartState("country-chart");
  };

  const cityChange = () => {
    setChartState("city-chart");
  };

  const levelChange = () => {
    setChartState("level-chart");
  };

  return (
    <div>
      <Container>
        <Typography variant="h3">Charts</Typography>

        {chartState === "victim-chart" && <VictimChart items={items} />}
        {chartState === "offender-chart" && <OffenderChart items={items} />}
        {chartState === "country-chart" && <CountryChart items={items} />}
        {chartState === "city-chart" && <CityChart items={items} />}
        {chartState === "level-chart" && <LevelChart items={items} />}
        {/*  TimeChart */}

        <Grid container>
          <Grid item sm={2}>
            <Button variant="contained" color="primary" onClick={victimChange}>
              Victim
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={offenderChange}
            >
              Offender
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" color="primary" onClick={countryChange}>
              Country
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" color="primary" onClick={cityChange}>
              City
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" color="primary" onClick={levelChange}>
              Level
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" color="primary">
              Time
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Charts;
