import React from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles } from "@material-ui/core/";

// Interface
import { IDataProps } from "../../interfaces/interfaces";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface VictimChartProps {
  items: IDataProps[];
}

const VictimChart = function({ items }: VictimChartProps): JSX.Element {
  const classes = useStyles();

  const victimData = items.map((item) => item.victim).sort();
  // console.log(victimData, "this is victimData. Must start from A-Z");

  const counts = {};
  victimData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const victimList = Object.keys(counts);

  const victimCount = Object.values(counts);

  const BarData = {
    labels: victimList,
    datasets: [
      {
        label: "Victim Count",
        data: victimCount,
        backgroundColor: [
          "rgb(255,62,47,0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgb(41,47,51,0.2)",
          "rgb(96,53,42,0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgb(255,62,47)",
          "rgba(255, 99, 132, 1)",
          "rgb(41,47,51)",
          "rgb(96,53,42)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    responsive: true,
  };

  return (
    <Bar type="bar" data={BarData} options={options} />
  );
}

export default VictimChart;
