import { Box } from '@mui/material';
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  const state = {
    options: {
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
        },
      },
    },
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
    <Box>
      <Chart
        options={state.options}
        series={state.series}
        type='bar'
        width='340'
      />
    </Box>
  );
};

export default ColumnChart;
