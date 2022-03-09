import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { makeStyles } from '@material-ui/core/';

import { IDataProps } from '../../interfaces/interfaces';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const useStyles = makeStyles((theme) => ({
  root: {},
}));

interface VictimChartProps {
  items: IDataProps[];
}

const VictimChart = function ({ items }: VictimChartProps): JSX.Element {
  const classes = useStyles();

  const victimData = items.map((item) => item.victim).sort();

  const counts = {};
  victimData.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const victimList = Object.keys(counts);

  const victimCount = Object.values(counts);

  const BarData = {
    labels: victimList,
    datasets: [
      {
        label: 'Victim Count',
        data: victimCount,
        backgroundColor: [
          'rgb(255,62,47,0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgb(41,47,51,0.2)',
          'rgb(96,53,42,0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: ['rgb(255,62,47)', 'rgba(255, 99, 132, 1)', 'rgb(41,47,51)', 'rgb(96,53,42)', 'rgba(255, 159, 64, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
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
        text: 'Victim Chart',
      },
    },
  };

  return <Bar data={BarData} options={options} />;
};

export default VictimChart;
