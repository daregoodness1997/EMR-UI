import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../components/Card/ProductCard';
import ReactSelect from '../components/ReactSelect/ReactSelect';
import { DashboardContainer, DashboardPageWrapper } from '../core-ui/styles';

const options = [
  { value: 'Diabetics', label: 'Diabetics' },
  { value: 'Asthma', label: 'Asthma' },
  { value: 'Ulcer', label: 'Ulcer' },
];
const options2 = [
  { value: 'Very Popular', label: 'Very Popular' },
  { value: 'Low Popularity', label: 'Low Popularity' },
  { value: 'Medium Popularity', label: 'Medium Popularity' },
];
const options3 = [
  { value: 'Delivery Options', label: 'Delivery Options' },
  { value: 'Cash', label: 'Cash' },
  { value: 'Pickup', label: 'Pickup' },
];
const options4 = [
  { value: 'Cost', label: 'Cost' },
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];
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
            width: { lg: '320px', xs: '100%' },
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
        sx={{ width: { lg: '36%', xs: '100%' } }}
        spacing={1}
      >
        <ReactSelect options={options} />
        <ReactSelect options={options2} />
        <ReactSelect options={options3} />
        <ReactSelect options={options4} />
      </Stack>

      <DashboardContainer>
        <Grid
          container
          spacing={{ lg: 2, xs: 0 }}
          justifyContent='space-between'
          sx={{ pt: 2, width: '100%' }}
        >
          {[...Array(20)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </Grid>
      </DashboardContainer>
    </DashboardPageWrapper>
  );
};

export default Marketplace;
