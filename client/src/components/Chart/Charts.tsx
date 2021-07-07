import React, { useState } from "react";

// Material UI
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Breadcrumbs,
} from "@material-ui/core/";

// Interface
import { IDataProps } from "../../interfaces/interfaces";

// source
import CountryChart from "./CountryChart";
import CityChart from "./CityChart";
import LevelChart from "./LevelChart";
import OffenderChart from "./OffenderChart";
import VictimChart from "./VictimChart";
import TimeChart from "./TimeChart";

const useStyles = makeStyles((theme) => ({
  root: {},
  charts: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
}));

interface ChartProps {
  items: IDataProps[];
}

function Charts({ items }: ChartProps): JSX.Element {
  const classes = useStyles();
  const [chartState, setChartState] = useState("victim-chart");

  const victimChartChange = () => {
    setChartState("victim-chart");
  };

  const offenderChartChange = () => {
    setChartState("offender-chart");
  };

  const countryChartChange = () => {
    setChartState("country-chart");
  };

  const cityChartChange = () => {
    setChartState("city-chart");
  };

  const levelChartChange = () => {
    setChartState("level-chart");
  };

  const timeChartChange = () => {
    setChartState("time-chart");
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Button color="primary" size="large" onClick={victimChartChange}>
          01. Victim
        </Button>
        <Button color="primary" size="large" onClick={offenderChartChange}>
          02. Offender
        </Button>
        <Button color="primary" size="large" onClick={countryChartChange}>
          03. Country
        </Button>
        <Button color="primary" size="large" onClick={cityChartChange}>
          04. City
        </Button>
        <Button color="primary" size="large" onClick={levelChartChange}>
          05. Level
        </Button>
        <Button color="primary" size="large" onClick={timeChartChange}>
          06. Time
        </Button>
      </Breadcrumbs>
      <div className={classes.charts}>
        {chartState === "victim-chart" && <VictimChart items={items} />}
        {chartState === "offender-chart" && <OffenderChart items={items} />}
        {chartState === "country-chart" && <CountryChart items={items} />}
        {chartState === "city-chart" && <CityChart items={items} />}
        {chartState === "level-chart" && <LevelChart items={items} />}
        {chartState === "time-chart" && <TimeChart items={items} />}
      </div>
    </>
  );
}

export default Charts;
