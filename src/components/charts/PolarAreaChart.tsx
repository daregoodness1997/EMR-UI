import React from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const PolarAreaChart = () => {
  const state = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      grid: { show: false },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
        },
      },
      labels: ['Cricket', 'Tommy'],
    },
  };
  return (
    <ChartCard>
      <Chart
        options={state.options}
        series={state.series}
        type='polarArea'
        height={350}
        width={450}
      />
    </ChartCard>
  );
};

export default PolarAreaChart;
