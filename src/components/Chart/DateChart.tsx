import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/';

import { IDataProps } from '../../interfaces/interfaces';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DateChartProps {
  items: IDataProps[];
}

const DateChart = function ({ items }: DateChartProps): JSX.Element {
  const timeData = items.map((item) => item.date).sort();

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
        label: 'Time',
        data: timeCount,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Date Chart',
      },
    },
  };

  return <Line data={TimeData} options={options} />;
};

export default DateChart;
