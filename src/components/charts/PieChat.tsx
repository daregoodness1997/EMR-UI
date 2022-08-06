import { Box } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
interface PieChartProps {
  type?:
    | 'area'
    | 'line'
    | 'donut'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | undefined;
}

const PieChart: React.FC<PieChartProps> = ({ type = 'donut' }) => {
  const state = {
    options: {
      plotOptions: {
        pie: {
          donut: {
            size: '45%',
          },
        },
      },
    },
    data: [44, 55, 41, 17, 15],
    labels: ['A', 'B', 'C', 'D', 'E'],
  };
  return (
    <Box>
      <Chart
        options={state.options}
        series={state.data}
        type={type}
        width='340'
      />
    </Box>
  );
};

export default PieChart;
