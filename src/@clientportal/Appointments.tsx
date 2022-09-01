import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ViewOne from '../@views/ViewOne';
import { Button } from '../components';
import FilterMenu from '../components/Menus/FilterMenu';
import BasicTable from '../components/Table/BasicTable';
import { DashboardPageWrapper } from '../core-ui/styles';
import { clientAppointmentList } from '../utils/data';
import { clientAppointmentSchema } from '../utils/schema';

const ClientAppointments = () => {
  let navigate = useNavigate();

  const handleCreateAppointment = () => {
    navigate('/app/clients/appointments/create-appointment');
  };
  const handleRowClicked = (row: any, event: any) => {
    navigate(`/app/clients/appointments/${row.id}`);
  };
  return (
    <>
      <DashboardPageWrapper>
        <Typography variant='h2'>Appointment</Typography>
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
                width: { lg: '320px', xs: '40%' },
                // height: '40px',
                borderRadius: '4px',
                marginRight: '10px',
                mb: { xs: 1 },
              }}
            />
            <FilterMenu />
            {/* {hasGridView && (
            <Groups buttons={buttons} onClick={() => console.log('clicked')} />
          )} */}
          </Box>

          <Button sx={{ width: { xs: '100%', lg: 'auto' } }}>
            Create Appointment
          </Button>
        </Box>

        <Box sx={{ height: `calc(100vh - 90px)`, overflowY: 'scroll' }}>
          <BasicTable
            columns={clientAppointmentSchema}
            data={clientAppointmentList}
          />
        </Box>
      </DashboardPageWrapper>
    </>
  );
};

export default ClientAppointments;
