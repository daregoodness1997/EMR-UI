import React from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const CircleChart = () => {
  const state = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
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
        type='donut'
        height={350}
      />
    </ChartCard>
  );
};

export default CircleChart;
