import React from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface Props {
  items: any;
}

function OffenderChart({ items }: Props) {
  const classes = useStyles();

  const offenderData = items.map((item) => item.offender);

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
        label: "Country Count",
        data: offenderCount,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Number of occurrences",
      },
    },
  };

  return (
    <>
      <Bar type="bar" data={BarData} options={options} />
    </>
  );
}

export default OffenderChart;
