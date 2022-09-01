import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { DashboardPageWrapper } from '../core-ui/styles';

const Marketplace = () => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
        HealthStack Marketplace
      </Typography>
      <Typography sx={{ mt: 0.5, color: '#03045E' }}>
        Welcome to your one-stop shop for all your medical needs
      </Typography>

      <Box
        sx={{
          display: 'flex',
          margin: { xs: '10px 0', lg: '24px 0' },
          width: { xs: '100%' },
          // flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <TextField
          variant='outlined'
          size='small'
          sx={{
            width: { lg: '320px', xs: '40%' },
            // height: '40px',
            borderRadius: '4px',
            marginRight: '10px',
            mb: { xs: 1 },
          }}
          placeholder='Search for medications, doctors, etc...'
        />
      </Box>

      <Stack></Stack>
    </DashboardPageWrapper>
  );
};

export default Marketplace;
