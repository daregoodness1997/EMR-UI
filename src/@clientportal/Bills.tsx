import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import ClientTable from '../components/Table/ClientTable';
import { DashboardPageWrapper } from '../core-ui/styles';

const Bills = () => {
  return (
    <DashboardPageWrapper>
      <Box sx={{ mb: 4, px: 2 }}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={{ lg: 2, xs: 30 }}
        >
          <Typography
            variant='h1'
            sx={{ fontWeight: 'bold', color: '#03045E' }}
          >
            Bills
          </Typography>

          <Button background='#03045E'>Create Bill </Button>
        </Stack>
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
      <Box sx={{ p: 2, mt: 2, borderRadius: '10px' }}>
        <ClientTable />
      </Box>
    </DashboardPageWrapper>
  );
};

export default Bills;
