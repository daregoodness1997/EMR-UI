import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../components/Card/ProductCard';
import { DashboardPageWrapper } from '../core-ui/styles';

const BuyInsurance = () => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
        HealthStack Insurance Marketplace
      </Typography>
      <Typography sx={{ mt: 0.5, color: '#03045E' }}>
        Welcome to your one-stop shop for all your medical needs
      </Typography>
      <TextField
        variant='outlined'
        size='small'
        sx={{
          width: { lg: '320px', xs: '100%' },
          // height: '40px',
          borderRadius: '4px',
          marginRight: '10px',
          mb: { xs: 1 },
        }}
        placeholder='Search for medications, doctors, etc...'
      />
      <Box sx={{ height: '100vh', overflowY: 'auto' }}>
        <Grid container spacing={{ lg: 2, xs: 0 }} sx={{ pt: 2 }}>
          {[...Array(20)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </Grid>
      </Box>
    </DashboardPageWrapper>
  );
};

export default BuyInsurance;
