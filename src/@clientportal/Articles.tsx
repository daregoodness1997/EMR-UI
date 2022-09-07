import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import NewsCard from '../@sections/NewsCard';
import { DashboardPageWrapper } from '../core-ui/styles';

const Articles = () => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
        HealthStack Articles
      </Typography>
      <Typography sx={{ mt: 0.5, color: '#03045E' }}>
        You can read health articles here
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
            <Box
              key={index}
              sx={{
                p: 2,
                width: { lg: '300px', xs: '100%' },
                borderRadius: 4,
                '&:hover': {
                  backgroundColor: '#fcfcfc',
                },
              }}
            >
              {' '}
              <NewsCard />
            </Box>
          ))}
        </Grid>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Articles;
