import React, { useEffect } from "react";

// Libarary
import { Bar } from "react-chartjs-2";

// Material UI
import { makeStyles, Container, Typography } from "@material-ui/core/";

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

function HorizontalBarChart({ items }: Props) {
  const classes = useStyles();

  const countrys = items
    .map((item) => item.country)
    .filter((value, index, self) => self.indexOf(value) === index);
  // console.log(countrys, "this is unique country");

  const usa = items.filter((obj) => obj.country === "USA").length;
  const germany = items.filter((obj) => obj.country === "Germany").length;
  // console.log(count, "this is count of countrys");

  const BarData = {
    labels: countrys,
    datasets: [
      {
        label: "# Number of occurrences",
        data: [usa, germany],
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
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Country Racism Report",
      },
    },
  };

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Typography>HorizontalBarChart</Typography>
        {/* <Bar data={BarData} options={options} /> */}
      </Container>
    </div>
  );
}

export default HorizontalBarChart;
