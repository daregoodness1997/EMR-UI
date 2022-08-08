import React from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const BubbleChart = () => {
  const state = {
    series: [
      {
        name: 'Bubble1',
        data: [31, 40, 28, 51, 42, 60, 10, 48, 49, 53, 39],
      },
      {
        name: 'Bubble2',
        data: [13, 34, 56, 40, 28, 51, 42, 109, 100, 78],
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      grid: { show: false },
    },
  };
  return (
    <ChartCard>
      <Chart
        options={state.options}
        series={state.series}
        type='bubble'
        height={350}
      />
    </ChartCard>
  );
};

export default BubbleChart;
