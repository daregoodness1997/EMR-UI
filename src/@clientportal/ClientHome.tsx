import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import AppointmentCard from '../@sections/AppointmentCard';
import ClientStatCard from '../@sections/ClientStatCard';
import NewsCard from '../@sections/NewsCard';
import MiniCalendar from '../components/Calender/MiniCalendar';
import ClientTable from '../components/Table/ClientTable';
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
              width: { lg: '62%', xs: '100%' },
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
              <Box
                sx={{
                  py: 2,
                  pr: { lg: 2, xs: 0 },
                  mt: 2,
                  borderRadius: '10px',
                }}
              >
                <Typography variant='h4' sx={{ mb: 2 }}>
                  Bills
                </Typography>
                <ClientTable />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: { lg: '38%', xs: '100%' },
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
              <Stack direction={{ lg: 'row', xs: 'column' }}>
                <Box
                  sx={{
                    minWidth: { lg: '160px', xs: '100%' },
                    p: 3,
                    minHeight: { lg: '100%', xs: '40px' },
                    background: '#0E214D',
                    color: 'white',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: { lg: '8px', xs: 0 },
                    borderTopRightRadius: { lg: '0', xs: '8px' },
                    pt: 8,
                  }}
                >
                  <Typography>2022</Typography>
                  <Typography variant='h1' sx={{ fontWeight: 'bold' }}>
                    Thurs, Mar. 20
                  </Typography>
                </Box>
                <MiniCalendar />
              </Stack>
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
