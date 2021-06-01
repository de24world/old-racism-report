import React from "react";

// Libarary
import { Pie } from "react-chartjs-2";

// Material UI
import { makeStyles, Container } from "@material-ui/core/";
import LevelStep from "../LevelStep";

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

function LevelChart({ items }: Props) {
  const classes = useStyles();

  const levelData = items.map((item) => item.level);

  const counts = {};
  levelData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const levelList = Object.keys(counts);

  const levelCount = Object.values(counts);

  const PieData = {
    labels: levelList,
    datasets: [
      {
        label: "City Count",
        data: levelCount,
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

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Pie type="pie" data={PieData} />
        <LevelStep />
      </Container>
    </div>
  );
}

export default LevelChart;
