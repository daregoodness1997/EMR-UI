import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../components';
import RadioButton from '../components/Inputs/RadioButton';
import Switch from '../components/Inputs/Switch';
import FilterMenu from '../components/Menus/FilterMenu';
import ScheduleCalendar from '../components/Schedule';
import BasicTable from '../components/Table/BasicTable';
import { DashboardPageWrapper } from '../core-ui/styles';
import { clientAppointmentList } from '../utils/data';
import { clientAppointmentSchema } from '../utils/schema';

const ClientAppointments = () => {
  const [value, setValue] = useState({ list: true, grid: false });

  return (
    <>
      <DashboardPageWrapper>
        <Typography variant='h1' sx={{ fontWeight: 'bold' }}>
          Appointments
        </Typography>{' '}
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
            <Switch>
              <RadioButton
                label='list'
                value={value.list}
                onChange={() => {
                  setValue({ list: true, grid: false });
                }}
              />
              <RadioButton
                label={'Grid'}
                value={value.grid}
                onChange={() => {
                  setValue({ list: false, grid: true });
                }}
              />
            </Switch>
          </Box>

          <Button sx={{ width: { xs: '100%', lg: 'auto' } }}>
            Create Appointment
          </Button>
        </Box>
        <Box sx={{ height: `calc(100vh - 90px)`, overflowY: 'scroll' }}>
          {value.list ? (
            <BasicTable
              columns={clientAppointmentSchema}
              data={clientAppointmentList}
            />
          ) : (
            <ScheduleCalendar />
          )}
        </Box>
      </DashboardPageWrapper>
    </>
  );
};

export default ClientAppointments;
