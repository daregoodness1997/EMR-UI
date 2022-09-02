import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../styles';

const ProductCard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <img src='' alt='' />
      <Typography variant='h2' sx={{ textTransform: 'uppercase' }}>
        DABUR BRONCORID SYRUP
      </Typography>
      <Stack>
        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
          ₦49.50
        </Typography>
        <Box className='bi bi-star' />
        <Typography>(4.5)</Typography>
      </Stack>
      <Typography>Eligible for Shipping to anywhere within Nigeria</Typography>
      <Stack direction='row' alignItems='center'>
        <Button>Add to Cart</Button>
        <Box className='bi bi-heart' />
      </Stack>
    </Box>
  );
};

export default ProductCard;
