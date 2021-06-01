import React, { useState } from "react";

// Material UI
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Breadcrumbs,
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
      <Typography variant="h3">Charts</Typography>

      {chartState === "victim-chart" && <VictimChart items={items} />}
      {chartState === "offender-chart" && <OffenderChart items={items} />}
      {chartState === "country-chart" && <CountryChart items={items} />}
      {chartState === "city-chart" && <CityChart items={items} />}
      {chartState === "level-chart" && <LevelChart items={items} />}
      {/*  TimeChart */}

      <Breadcrumbs aria-label="breadcrumb">
        <Button color="primary" onClick={victimChange}>
          Victim
        </Button>
        <Button color="primary" onClick={offenderChange}>
          Offender
        </Button>
        <Button color="primary" onClick={countryChange}>
          Country
        </Button>
        <Button color="primary" onClick={cityChange}>
          City
        </Button>
        <Button color="primary" onClick={levelChange}>
          Level
        </Button>
        <Button color="primary">Time</Button>
      </Breadcrumbs>
    </div>
  );
}

export default Charts;
