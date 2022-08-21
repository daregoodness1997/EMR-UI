import { Box, TextField } from '@mui/material';
import React from 'react';
import { Accordion } from '../../../components';
import FilterMenu from '../../../components/Menus/FilterMenu';

const History = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: { xs: '10px 0', lg: '24px 0' },
            width: { xs: '100%' },
          }}
        >
          <TextField
            variant='outlined'
            size='small'
            sx={{
              width: { lg: '320px', xs: '320px' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
            }}
          />
          <FilterMenu />
        </Box>
      </Box>
      <Accordion title='History added' status='success' />
      <Accordion title='Prescription added' status='success' />
      <Accordion title='Prescription added' status='warning' />
      <Accordion title='Prescription added' status='unsuccesful' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
      <Accordion title='Prescription added' />
    </Box>
  );
};

export default History;
