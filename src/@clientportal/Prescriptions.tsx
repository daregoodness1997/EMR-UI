import { Box, Typography } from '@mui/material';
import React from 'react';
import { DashboardPageWrapper } from '../core-ui/styles';

const Prescriptions = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Typography variant="h1">Prescriptions</Typography>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Prescriptions;
