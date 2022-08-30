import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { DashboardPageWrapper } from '../core-ui/styles';

const Prescriptions = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Typography variant='h1' sx={{ fontWeight: 'bold' }}>
          Prescriptions
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography>Duration</Typography>
          <Stack direction='row' alignItems='center' gap={2}>
            <Typography>06/02/2022</Typography>
            <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
              20 Days
            </Typography>
            <Typography>26/02/2022</Typography>
          </Stack>
        </Box>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Prescriptions;
