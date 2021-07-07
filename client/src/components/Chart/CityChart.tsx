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

interface CityChartProps {
  items: IDataProps[];
}

function CityChart({ items }: CityChartProps): JSX.Element {
  const classes = useStyles();

  const cityData = items.map((item) => item.city).sort();

  const counts = {};
  cityData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const cityList = Object.keys(counts);

  const cityCount = Object.values(counts);

  const BarData = {
    labels: cityList,
    datasets: [
      {
        label: "City Count",
        data: cityCount,
        backgroundColor: ["rgb(63,81,181,0.2)"],
        borderColor: ["rgb(63,81,181)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <Bar type="bar" data={BarData} options={options} />
    </>
  );
}

export default CityChart;
