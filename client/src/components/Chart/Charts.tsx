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
  charts: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
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
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Button color="primary" size="large" onClick={victimChange}>
          01. Victim
        </Button>
        <Button color="primary" size="large" onClick={offenderChange}>
          02. Offender
        </Button>
        <Button color="primary" size="large" onClick={countryChange}>
          03. Country
        </Button>
        <Button color="primary" size="large" onClick={cityChange}>
          04. City
        </Button>
        <Button color="primary" size="large" onClick={levelChange}>
          05. Level
        </Button>
        <Button color="primary" size="large">
          06. Time
        </Button>
      </Breadcrumbs>
      <div className={classes.charts}>
        {chartState === "victim-chart" && <VictimChart items={items} />}
        {chartState === "offender-chart" && <OffenderChart items={items} />}
        {chartState === "country-chart" && <CountryChart items={items} />}
        {chartState === "city-chart" && <CityChart items={items} />}
        {chartState === "level-chart" && <LevelChart items={items} />}
        {/*  TimeChart */}
      </div>
    </>
  );
}

export default Charts;
