import React from 'react';
import Chart from 'react-apexcharts';
import { pieChartSeries } from '../../utils/mock_chart_data';
import ChartCard from './ChartCard';
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
  title?: string;
  series?: { data: any[]; labels: any[] };
}

const PieChart: React.FC<PieChartProps> = ({
  type = 'donut',
  title,
  series = pieChartSeries,
}) => {
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
    data: series.data,
    labels: series.labels,
  };
  return (
    <ChartCard title={title}>
      <Chart
        options={state.options}
        series={state.data}
        type={type}
        width={340}
      />
    </ChartCard>
  );
};

export default PieChart;
