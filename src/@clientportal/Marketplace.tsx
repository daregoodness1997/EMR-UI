import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../components/Card/ProductCard';
import Select from '../components/Inputs/Select';
import { DashboardContainer, DashboardPageWrapper } from '../core-ui/styles';

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

      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ width: { lg: '60%', xs: '100%' } }}
        spacing={2}
      >
        <Select
          placeholder='Health Conditions'
          options={['Diabetics', 'Asthma', 'Health Conditions']}
          defaultValue='Health Conditions'
        />
        <Select
          placeholder='Popularity'
          options={['Popularity', 'High Popularity', 'Low Popularity']}
          defaultValue='Popularity'
        />
        <Select
          placeholder='Delivery Options'
          options={['Delivery Options', 'Home Delivery']}
          defaultValue='Delivery Options'
        />
        <Select
          placeholder='Cost'
          options={['Cost', 'High Cost', 'Low Cost']}
          defaultValue='Cost'
        />
      </Stack>

      <DashboardContainer>
        <Grid container spacing={{ lg: 2, xs: 0 }} sx={{ pt: 2 }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </DashboardContainer>
    </DashboardPageWrapper>
  );
};

export default Marketplace;
