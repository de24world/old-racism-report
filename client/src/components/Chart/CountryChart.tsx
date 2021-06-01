import React from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles, Container } from "@material-ui/core/";

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

function CountryChart({ items }: Props) {
  const classes = useStyles();

  const countryData = items.map((item) => item.country);
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
        type: "bar",
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
    <div>
      <Container className={classes.cardGrid}>
        <Bar type="bar" data={BarData} options={options} />
      </Container>
    </div>
  );
}

export default CountryChart;
