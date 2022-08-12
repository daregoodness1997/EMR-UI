import React from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

interface CircleChartProps {
  title?: string;
}

const CircleChart: React.FC<CircleChartProps> = ({ title }) => {
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
    <ChartCard title={title}>
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
