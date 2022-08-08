import Chart from 'react-apexcharts';
import React from 'react';
import ChartCard from './ChartCard';
import { chartoptions } from '../../utils/chartoptions';
interface LineChartProps {
  title?: string;
  subheader?: string;
  series?: { name: string; data: [] }[];
}

const LineChart: React.FC<LineChartProps> = ({
  title = 'Line Chart',
  subheader = 'Sample Line Chart',
  series,
}) => {
  const state = {
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: chartoptions,
  };
  return (
    <ChartCard>
      <Chart
        options={state.options}
        series={state.series}
        type='line'
        height={350}
      />
    </ChartCard>
  );
};

export default LineChart;
