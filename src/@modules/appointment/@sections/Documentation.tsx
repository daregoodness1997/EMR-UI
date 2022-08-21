import { Box, TextField } from '@mui/material';
import React from 'react';
import { Accordion, Button } from '../../../components';
import FilterMenu from '../../../components/Menus/FilterMenu';

const Documentation = () => {
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
              width: { lg: '320px', xs: '220px' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
            }}
          />
          <FilterMenu />
        </Box>
        <Button sx={{ width: { xs: '100%', lg: 'auto' } }}>
          Add Documentation
        </Button>
      </Box>
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
      <Accordion title='Documentation added' />
    </Box>
  );
};

export default Documentation;
