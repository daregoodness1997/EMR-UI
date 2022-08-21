import { Box } from '@mui/material';
import React from 'react';
import { Accordion } from '../../../components';

const History = () => {
  return (
    <Box>
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
