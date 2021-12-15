import React from "react";

// Libarary
import { Line } from "react-chartjs-2";

// Material UI
import { makeStyles } from "@material-ui/core/";

// Interface
import { IDataProps } from "../../interfaces/interfaces";

interface DateChartProps {
  items: IDataProps[];
}

const DateChart = function({ items }: DateChartProps): JSX.Element {
  const timeData = items.map((item) => item.date).sort();
  // console.log(items, "this is items ");

  const counts = {};
  timeData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const timeList = Object.keys(counts);

  const timeCount = Object.values(counts);

  const TimeData = {
    labels: timeList,
    datasets: [
      {
        label: "Time",
        data: timeCount,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };

  return (
    <Line type="line" data={TimeData} options={options} />
  );
}

export default DateChart;
