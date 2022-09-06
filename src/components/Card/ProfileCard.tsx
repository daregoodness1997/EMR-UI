import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileCard = () => {
  return (
    <Box
      sx={{
        p: 3,
        background: 'white',
        borderRadius: '8px',
        width: { lg: '240px', xs: '100%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Avatar
        src=''
        alt='Profile Card'
        sx={{ width: '80px', height: '80px' }}
      />
      <Box
        sx={{
          background: 'orange',
          px: 2,
          py: 0.8,
          borderRadius: '20px',
          fontSize: '12px',
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        Primary
      </Box>

      <Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: '24px', my: 1 }}>
          Mr Jon Doe
        </Typography>
        <Stack direction='row' alignItems='center' spacing={2} sx={{ my: 1 }}>
          <Box>
            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', mb: 0.6 }}>
              D.O.B
            </Typography>
            <Chip label=' 22/05/72' />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '10px', fontWeight: 'bold', mb: 0.6 }}>
              ID
            </Typography>
            <Chip label=' 35DFE9902' />
          </Box>
        </Stack>

        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontSize: '10px', fontWeight: 'bold', mb: 0.6 }}>
            CIN
          </Typography>
          <Chip label='53637DGGD' />
        </Box>
        <Box>
          <Typography sx={{ fontSize: '10px', fontWeight: 'bold', mb: 0.6 }}>
            Tel
          </Typography>
          <Chip label='+23481930003' />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
