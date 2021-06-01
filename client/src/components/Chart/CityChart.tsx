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

function CityChart({ items }: Props) {
  const classes = useStyles();

  const cityData = items.map((item) => item.city);

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
        type: "bar",
        label: "City Count",
        data: cityCount,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
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

export default CityChart;
