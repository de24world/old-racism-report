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

interface CountryChartProps {
  items: IDataProps[];
}

const CountryChart = function({ items }: CountryChartProps): JSX.Element {
  const classes = useStyles();

  const countryData = items.map((item) => item.country).sort();
  // console.log(
  //   countryData,
  //   "this is countryData. Must be [usa, usa, germany, usa...]"
  // );

  const counts = {};
  countryData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  // console.log(
  //   counts,
  //   "this is country counts object. Must be {USA: 8, Germany: 2}"
  // );

  const countryList = Object.keys(counts);
  // console.log(countryList, "this is countryList without Duplicate. Must be [usa, germany ...]");

  const countryCount = Object.values(counts);
  // console.log(countryCount, "this is countryList. Must be [8, 2 ...]");

  const BarData = {
    labels: countryList,
    datasets: [
      {
        label: "Country Count",
        data: countryCount,
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
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <Bar type="bar" data={BarData} options={options} />
  );
}

export default CountryChart;
