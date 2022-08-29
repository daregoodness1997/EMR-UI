import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import AppointmentCard from '../@sections/AppointmentCard';
import ClientStatCard from '../@sections/ClientStatCard';
import NewsCard from '../@sections/NewsCard';
import MiniCalendar from '../components/Calender/MiniCalendar';
import { DashboardPageWrapper } from '../core-ui/styles';

const ClientHome = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Box>
          <Typography variant='h2'>
            Hello <span>Alex John</span>👋
          </Typography>
          <Typography variant='body2'>
            Welcome to your Client Portal <span>@Your Company’s</span> Front
            Desk
          </Typography>
        </Box>

        <Stack direction={{ lg: 'row', xs: 'column' }}>
          <Box
            sx={{
              width: { lg: '68%', xs: '100%' },
              mt: 1.5,
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', lg: 'row' },
              }}
            >
              {' '}
              <ClientStatCard
                icon={'bi bi-calendar'}
                range={'month'}
                title='Blood Pressure'
                stat='101/72'
                unit='mmHg'
              />
              <ClientStatCard
                icon={'bi bi-calendar'}
                range={'month'}
                title='Heart Rate'
                stat='98'
                unit='bpm'
                background='#FFE9E9'
                chartColor='#ED0423'
              />
              <ClientStatCard
                icon={'bi bi-calendar'}
                range={'month'}
                title='Blood Sugar'
                stat='80'
                unit='mg/dL'
                background='#FFF6A0'
                chartColor='#936A03'
              />
            </Box>

            <Box sx={{ height: '65vh', overflowY: 'auto' }}>
              <Grid
                container
                lg={12}
                xs={12}
                sm={12}
                spacing={2}
                sx={{ mt: 1 }}
              >
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      background: '#ECF3FF',
                      borderRadius: '10px',
                      overflowY: 'scroll',
                    }}
                  >
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      sx={{ p: 2 }}
                    >
                      <Typography variant='h4'>Messages</Typography>
                      <Typography>View All</Typography>
                    </Stack>
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box
                    sx={{ p: 2, background: '#ECF3FF', borderRadius: '10px' }}
                  >
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      sx={{ p: 2 }}
                    >
                      <Typography variant='h4'>Current Medications</Typography>
                      <Typography>View All</Typography>
                    </Stack>
                    <AppointmentCard />
                    <AppointmentCard />
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      background: '#ECF3FF',
                      borderRadius: '10px',
                      mt: 2,
                    }}
                  >
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                      sx={{ p: 2 }}
                    >
                      <Typography variant='h4'>Lab Results</Typography>
                      <Typography>View All</Typography>
                    </Stack>
                    <AppointmentCard />
                    <AppointmentCard />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ p: 2, mt: 2, borderRadius: '10px' }}>
                <Typography variant='h4'>Bills</Typography>
                <p>Client Table</p>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: { lg: '32%', xs: '100%' },
              mt: 1.5,
              p: 1,
              background: '#ECF3FF',
              borderRadius: '10px',
              overflowY: 'auto',
              height: '100vh',
            }}
          >
            {/* items */}
            <Box
              sx={{
                p: 2,
                background: '#ECF3FF',
                borderRadius: '10px',
                overflowY: 'scroll',
              }}
            >
              <MiniCalendar />
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ pt: 2, pb: 2 }}
              >
                <Typography variant='h4'>Last Appointment</Typography>
                <Typography>View All</Typography>
              </Stack>
              <AppointmentCard />
            </Box>
            <Box
              sx={{
                p: 2,
                background: '#ECF3FF',
                borderRadius: '10px',
                overflowY: 'scroll',
              }}
            >
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography variant='h4' sx={{ pt: 2, pb: 2 }}>
                  Health News
                </Typography>
                <Typography>View All</Typography>
              </Stack>
              <NewsCard />
              <NewsCard />
            </Box>
          </Box>
        </Stack>
      </Box>
    </DashboardPageWrapper>
  );
};

export default ClientHome;
