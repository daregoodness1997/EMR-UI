import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ChartCard from './ChartCard';

interface HorizontalBarProps {
  stacked?: boolean;
}
const HorizontalBar: React.FC<HorizontalBarProps> = ({ stacked }) => {
  const state = {
    series: [
      {
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
      {
        name: 'Striking Calf',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
      {
        name: 'High Way',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        stacked: true,
      },
      // States
      states: {
        hover: {
          filter: {
            type: 'lighten',
            value: 0.04,
          },
        },
        active: {
          filter: {
            type: 'darken',
            value: 0.88,
          },
        },
      },
      // Fill
      fill: {
        opacity: 1,
        gradient: {
          type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100],
        },
      },

      // Datalabels
      dataLabels: { enabled: false },
      // Grid
      grid: {
        show: false,
      },
      // Xaxis
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      // Markers
      markers: {
        size: 0,
        strokeColors: 'white',
      },
      // Tooltip
      tooltip: {
        x: {
          show: false,
        },
      }, // plotOptions
      plotOptions: {
        // Bar
        bar: {
          columnWidth: '100%',
          rowWidth: '100%',
          borderRadius: 4,
          horizontal: true,
        },
      },
    },
  };
  return (
    <ChartCard>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='bar'
        height={500}
      />
    </ChartCard>
  );
};

export default HorizontalBar;
