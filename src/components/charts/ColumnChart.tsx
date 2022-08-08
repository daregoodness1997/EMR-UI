import Chart from 'react-apexcharts';
import { chartoptions } from '../../utils/chartoptions';
import ChartCard from './ChartCard';

const ColumnChart = () => {
  const state = {
    options: chartoptions,
    series: [
      {
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14],
      },
      {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8],
      },
    ],
  };
  return (
    <ChartCard>
      <Chart
        options={state.options}
        series={state.series}
        type='bar'
        height='340'
      />
    </ChartCard>
  );
};

export default ColumnChart;
