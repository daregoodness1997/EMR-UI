import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import PrescriptionTable from '../components/Table/PrescriptonTable';
import { DashboardPageWrapper } from '../core-ui/styles';

const Prescriptions = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
          Prescriptions
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
            mt: 1,
          }}
        />

        <Box sx={{ mt: 3 }}>
          <Box
            sx={{
              background: '#ECF3FF',
              p: 4,
              pt: 2,
              borderRadius: '10px',
              mt: 2,
            }}
          >
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{ mb: 2 }}
            >
              <Typography
                sx={{
                  fontSize: '20px',
                  width: '100%',
                  fontWeight: 'bold',
                  mt: 2,
                  color: '#03045E',
                }}
              >
                Prescriptions
              </Typography>

              <Button background='#03045E'>Add Prescriptions</Button>
            </Stack>
            <PrescriptionTable />
          </Box>
        </Box>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Prescriptions;
