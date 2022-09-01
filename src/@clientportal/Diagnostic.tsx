import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import FilterMenu from '../components/Menus/FilterMenu';
import BasicTable from '../components/Table/BasicTable';
import { DashboardPageWrapper } from '../core-ui/styles';
import { diagnosticList } from '../utils/data';
import { diagnosticsSchema } from '../utils/schema';

const Diagnostic = () => {
  return (
    <DashboardPageWrapper>
      <Box sx={{ mb: 4 }}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            variant='h1'
            sx={{ fontWeight: 'bold', color: '#03045E' }}
          >
            Diagnostic Report
          </Typography>

          <Button>Download Report</Button>
        </Stack>

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
          />
          <FilterMenu />
        </Box>
      </Box>

      {/* <DataTable /> */}
      {/* <ClientTable /> */}
      <BasicTable columns={diagnosticsSchema} data={diagnosticList} />
    </DashboardPageWrapper>
  );
};

export default Diagnostic;
