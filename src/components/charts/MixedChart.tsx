import React from 'react';
import Chart from 'react-apexcharts';
import ChartCard from './ChartCard';

const MixedChart = () => {
  const state = {
    series: [
      {
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: 'TEAM B',
        type: 'area',
        data: [0, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        curve: 'smooth',
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
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
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
        y: {
          formatter: function (y: number) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' points';
            }
            return y;
          },
        },
      }, // plotOptions
      plotOptions: {
        // Bar
        bar: {
          columnWidth: '100%',
          rowWidth: '100%',
          borderRadius: 4,
        },
      },
      //   curve
    },
  };
  return (
    <ChartCard>
      <Chart
        options={state.options}
        series={state.series}
        type='line'
        height={500}
        width={450}
      />
    </ChartCard>
  );
};

export default MixedChart;
