import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';

const UserProfile = () => {
  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      <Box
        sx={{
          width: { lg: '20%', xs: '100%' },
          background: '#f7f7f7',
          p: 3,
          borderRadius: 2,
        }}
      >
        <Box>
          <Avatar
            src='h
        ttps://via.placeholder.com/150'
            alt='AT'
          />

          <Box>
            <Typography variant='h2'>Jon Doe</Typography>
          </Box>

          <Box>
            <Typography variant='body2' sx={{ mt: 1 }}>
              Payment Mode : Cash
            </Typography>
            <Typography variant='body2' sx={{ mt: 0.5 }}>
              HMO : Axzard HMO
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant='body2'>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam, optio, impedit reiciendis ab aliquam ad non rem fugit
            earum quidem enim ex neque illum, delectus excepturi distinctio
            commodi suscipit! Facilis?
          </Typography>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ mt: 1.5 }}
          >
            <Stack direction='row' alignItems='center'>
              <Typography variant='h5' sx={{ mr: 1 }}>
                Gender:
              </Typography>
              <Chip label='Male' />
            </Stack>
            <Stack direction='row' alignItems='center'>
              <Typography variant='h5' sx={{ mr: 1 }}>
                Age:
              </Typography>
              <Chip label='24' />
            </Stack>
          </Stack>
          <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ mt: 1.5 }}
          >
            <Stack direction='row' alignItems='center'>
              <Typography variant='h5' sx={{ mr: 1 }}>
                Religion:
              </Typography>
              <Chip label='Christianity' />
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <Typography variant='h5' sx={{ mr: 1 }}>
              Genetype:
            </Typography>
            <Chip label='AA' />
          </Stack>

          <Stack direction='row' alignItems='center'>
            <Typography variant='h5' sx={{ mr: 1 }}>
              Blood Group:
            </Typography>
            <Chip label='A+' />
          </Stack>
          <Stack direction='row' alignItems='center'>
            <Typography variant='h5' sx={{ mr: 1 }}>
              Phone:
            </Typography>
            <Chip label='(234) 823 567 8893' />
          </Stack>
          <Stack direction='row' alignItems='center' sx={{ mts: 1 }}>
            <Typography variant='h5'>Email:</Typography>
            <Chip label='john@mail.com' />
          </Stack>

          <Box>
            <Typography variant='body2'>
              Client Tags:
              <Box>
                <Chip label='Tag 1' sx={{ ml: 0.5 }} />
                <Chip label='Tag 2' sx={{ ml: 0.5 }} />
                <Chip label='Tag 3' sx={{ ml: 0.5 }} />
                <Chip label='Tag 4' sx={{ ml: 0.5 }} />
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: { lg: '20%', xs: '100%' },
          background: '#f7f7f7',
          p: 3,
          borderRadius: 2,
          mt: 3,
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Typography variant='h4'>Specific Information</Typography>
          <Box sx={{ mt: 1.2 }}>
            <Chip label='Tag 1' sx={{}} />
            <Chip label='Tag 2' sx={{ ml: 0.5 }} />
            <Chip label='Tag 3' sx={{ ml: 0.5 }} />
            <Chip label='Tag 4' sx={{ ml: 0.5 }} />
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant='h4'>Allergies</Typography>
          <Box sx={{ mt: 1.2 }}>
            <Chip label='Tag 1' sx={{}} />
            <Chip label='Tag 2' sx={{ ml: 0.5 }} />
            <Chip label='Tag 3' sx={{ ml: 0.5 }} />
            <Chip label='Tag 4' sx={{ ml: 0.5 }} />
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant='h4'>Morbidities</Typography>
          <Box sx={{ mt: 1.2 }}>
            <Chip label='Tag 1' sx={{}} />
            <Chip label='Tag 2' sx={{ ml: 0.5 }} />
            <Chip label='Tag 3' sx={{ ml: 0.5 }} />
            <Chip label='Tag 4' sx={{ ml: 0.5 }} />
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant='h4'>Disabilities</Typography>
          <Box sx={{ mt: 1.2 }}>
            <Chip label='Tag 1' sx={{}} />
            <Chip label='Tag 2' sx={{ ml: 0.5 }} />
            <Chip label='Tag 3' sx={{ ml: 0.5 }} />
            <Chip label='Tag 4' sx={{ ml: 0.5 }} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: { lg: '20%', xs: '100%' },
          background: '#f7f7f7',
          p: 3,
          borderRadius: 2,
          mt: 3,
        }}
      >
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Visit History
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Drug Tolerance
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Medications
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Problem List
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          Task
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 2,
            borderRadius: 1,
            mt: 0.6,
            cursor: 'pointer',
            '&:hover': {
              background: '#fff',
            },
          }}
        >
          History
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
