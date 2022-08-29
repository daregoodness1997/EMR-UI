import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ClientStatCard from '../@sections/ClientStatCard';
import { DashboardPageWrapper } from '../core-ui/styles';

const ClientHome = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Box>
          <Typography variant='h2'>
            Hello <span>Alex John</span>👋
          </Typography>
          <Typography variant='body2'>
            Welcome to your Client Portal <span>@Your Company’s</span> Front
            Desk
          </Typography>
        </Box>

        <Grid container lg={9} xs={12} sm={12} spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={4}>
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Blood Pressure'
              stat='101/72'
              unit='mmHg'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Heart Rate'
              stat='98'
              unit='bpm'
              background='#FFE9E9'
              chartColor='#ED0423'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Blood Sugar'
              stat='80'
              unit='mg/dL'
              background='#FFF6A0'
              chartColor='#936A03'
            />
          </Grid>
        </Grid>
      </Box>
    </DashboardPageWrapper>
  );
};

export default ClientHome;
