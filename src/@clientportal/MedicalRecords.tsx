import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ClientStatCard from '../@sections/ClientStatCard';
import { DashboardPageWrapper } from '../core-ui/styles';

const MedicalRecords = () => {
  return (
    <DashboardPageWrapper>
      <Stack direction={{ lg: 'row', xs: 'column' }} gap={2}>
        <Box
          sx={{
            width: { lg: '26%', xs: '100%' },
            mt: 1.5,
            p: 1,
            background: '#ECF3FF',
            borderRadius: '10px',
            overflowY: 'auto',
            height: '100vh',
          }}
        ></Box>
        <Box
          sx={{
            width: { lg: '72%', xs: '100%' },
            mt: 1.5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', lg: 'row' },
            }}
          >
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Blood Pressure'
              stat='101/72'
              unit='mmHg'
            />
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Heart Rate'
              stat='98'
              unit='bpm'
              background='#FFE9E9'
              chartColor='#ED0423'
            />
            <ClientStatCard
              icon={'bi bi-calendar'}
              range={'month'}
              title='Blood Sugar'
              stat='80'
              unit='mg/dL'
              background='#FFF6A0'
              chartColor='#936A03'
            />
          </Box>
        </Box>
      </Stack>
    </DashboardPageWrapper>
  );
};

export default MedicalRecords;
