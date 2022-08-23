import { Box, TextField } from '@mui/material';
import React from 'react';
import { Accordion } from '../../../components';
import FilterMenu from '../../../components/Menus/FilterMenu';
import AddDocumentMenu from '../../../components/Menus/AddDocumentMenu';
export const list = [
  'Doctors Note',
  'Clinic Note',
  'Phamracy Note',
  'Test Result',
];
interface DocumentationProps {
  onAddDocument: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onAddDocument }) => {
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
            // flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <TextField
            variant='outlined'
            size='small'
            sx={{
              width: { lg: '320px', xs: '55%' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
              mb: { xs: 1 },
            }}
          />
          <FilterMenu />
        </Box>
        <AddDocumentMenu list={list} handleClick={onAddDocument} />
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
