import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface StatProps {
  title: string;
  range: string;
  icon: string;
  background?: string;
  chartColor?: string;
  stat: string;
  unit: string;
}

export const areaSeries = [
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

const ClientStatCard: React.FC<StatProps> = ({
  title,
  icon = 'bi bi-calendar',
  background = '#D7E3FC',
  chartColor = '#0364FF',
  stat,
  unit,
}) => {
  const state = {
    series: areaSeries,
    options: {
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        curve: 'smooth',
      },

      stroke: {
        show: false,
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
        colors: [chartColor],
        gradient: {
          type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100],
        },
      },

      // Datalabels
      dataLabels: { enabled: false },
      // Grid
      grid: {
        show: false,
        strokeDashArray: 3,
        borderColor: 'grey',
      },
      // Xaxis
      xaxis: {
        floating: true,
        show: false,
        label: false,
        axisBorder: {
          show: false,
        },
        axisTicks: { show: false },
      },
      // Yaxis
      yaxis: {
        show: false,
        label: false,
        axisBorder: {
          show: false,
        },
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
          columnWidth: '80%',
          borderRadius: 4,
        },
      },
    },
  };
  return (
    <Box
      sx={{
        p: 3,
        background: background,
        borderRadius: '10px',
        width: '100%',
        mb: 1,
        mr: { lg: 2, xs: 0 },
      }}
    >
      <Stack direction='row' alignItems='center'>
        {/* <Box></Box> */}
        <Box
          sx={{
            p: 2,
            background: '#fff',
            width: '56px',
            height: '56px',
            borderRadius: '10px',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Box className={icon}></Box>
        </Box>
        <Typography
          variant='h4'
          sx={{ fontWeight: 'bold', width: '80px', ml: 1 }}
        >
          {title}
        </Typography>
      </Stack>

      <Box>
        <Typography
          sx={{ fontWeight: 'semi-bold', fontSize: 28, mt: 1, mb: 1 }}
        >
          {stat}
          <Typography
            variant='subtitle1'
            sx={{
              fontWeight: 'medium',
              fontSize: 14,
              ml: '10px',
              display: 'inline-block',
            }}
          >
            {unit}
          </Typography>
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1,
          borderRadius: 1,
          background: '#fff',
          width: '100px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        Normal
      </Box>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='area'
        height='100px'
        width='100%'
      />
    </Box>
  );
};

export default ClientStatCard;
