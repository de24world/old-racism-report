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

interface OffenderChartProps {
  items: IDataProps[];
}

function OffenderChart({ items }: OffenderChartProps): JSX.Element {
  const classes = useStyles();

  const offenderData = items.map((item) => item.offender).sort();

  const counts = {};
  offenderData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const offenderList = Object.keys(counts);

  const offenderCount = Object.values(counts);

  const BarData = {
    labels: offenderList,
    datasets: [
      {
        label: "Offender Count",
        data: offenderCount,
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
    <>
      <Bar type="bar" data={BarData} options={options} />
    </>
  );
}

export default OffenderChart;
