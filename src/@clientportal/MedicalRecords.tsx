import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import ClientStatCard from '../@sections/ClientStatCard';
import { Button } from '../components';
import PrescriptionTable from '../components/Table/PrescriptonTable';
import { DashboardPageWrapper } from '../core-ui/styles';

const MedicalRecords = () => {
  return (
    <DashboardPageWrapper>
      <Stack direction={{ lg: 'row', xs: 'column' }} gap={2}>
        <Box
          sx={{
            width: { lg: '26%', xs: '100%' },
            mt: 1.5,
            overflowY: 'auto',
            height: { lg: '100vh', xs: 'auto' },
          }}
        >
          <Box
            sx={{
              background: '#ECF3FF',
              p: 4,
              borderRadius: '10px',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Avatar
              src='h
        ttps://via.placeholder.com/150'
              alt='AT'
              sx={{ bgcolor: 'orange', width: '120px', height: '120px' }}
            />
            <Typography
              sx={{
                fontSize: '20px',
                width: '100%',
                textAlign: 'center',
                fontWeight: 'bold',
                mt: 2,
              }}
            >
              Bukola Ibirogba
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Age: 20
            </Typography>
          </Box>

          <Box
            sx={{
              background: '#ECF3FF',
              p: 4,
              pt: 2,
              borderRadius: '10px',
              mt: 2,
            }}
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
              Information
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Gender: Male
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Blood Type: O+
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Allergies: Milk, Peninclin
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Diseases: Diabeties
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Height: 176cm / 5.9 inches
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Weight: 70 Kg
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Hospital: Redinting Hospital
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '100%',
                mt: 1,
                color: '#03045E',
              }}
            >
              Last Visit: 25th January 2022
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: { lg: '72%', xs: '100%' },
            mt: 1.5,
            height: { lg: '100vh', overflowY: 'auto' },
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

          <Box
            sx={{
              background: '#ECF3FF',
              p: 4,
              pt: 2,
              borderRadius: '10px',
              mt: 2,
            }}
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
              Diagnostic Reports
            </Typography>
            <Stack
              direction={{ lg: 'row', xs: 'column' }}
              alignItems='center'
              justifyContent='space-between'
              sx={{ mt: 2, mb: 2 }}
            >
              <Stack
                direction={{ lg: 'row', xs: 'column' }}
                alignItems='center'
                sx={{ width: '100%', mb: 2 }}
              >
                <Box
                  sx={{
                    p: 2,
                    background: '#fff',
                    width: { lg: '56px', xs: '56px' },
                    height: '56px',
                    borderRadius: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    mb: { lg: 0, xs: 3 },
                  }}
                >
                  <Box className='icon'></Box>
                </Box>
                <Box sx={{ ml: 2, color: '#03045E' }}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    CT-Scan Full Body
                  </Typography>
                  <Typography variant='body2'>29th January, 2022</Typography>
                </Box>
              </Stack>
              <Stack
                direction={{ lg: 'row', xs: 'column' }}
                alignItems='center'
                sx={{ width: '100%', mb: 2 }}
              >
                <Box
                  sx={{
                    p: 2,
                    background: '#fff',
                    width: { lg: '56px', xs: '56px' },
                    height: '56px',
                    borderRadius: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    mb: { lg: 0, xs: 3 },
                  }}
                >
                  <Box className='icon'></Box>
                </Box>
                <Box sx={{ ml: 2, color: '#03045E' }}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Creatine Kinase T
                  </Typography>
                  <Typography variant='body2'>29th January, 2022</Typography>
                </Box>
              </Stack>
              <Stack
                direction={{ lg: 'row', xs: 'column' }}
                alignItems='center'
                sx={{ width: '100%', mb: 2 }}
              >
                <Box
                  sx={{
                    p: 2,
                    background: '#fff',
                    width: { lg: '56px', xs: '56px' },
                    height: '56px',
                    borderRadius: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    mb: { lg: 0, xs: 3 },
                  }}
                >
                  <Box className='icon'></Box>
                </Box>
                <Box sx={{ ml: 2, color: '#03045E' }}>
                  <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Blood Count
                  </Typography>
                  <Typography variant='body2'>29th January, 2022</Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>

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
      </Stack>
    </DashboardPageWrapper>
  );
};

export default MedicalRecords;
