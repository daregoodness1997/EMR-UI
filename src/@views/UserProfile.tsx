import { Avatar, Box, Chip, Typography } from '@mui/material';
import React from 'react';

const UserProfile = () => {
  return (
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
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam, optio, impedit reiciendis ab aliquam ad non rem fugit earum
          quidem enim ex neque illum, delectus excepturi distinctio commodi
          suscipit! Facilis?
        </Typography>
        <Typography variant='body2'>Gender: Male</Typography>
        <Typography variant='body2'>Age: 24</Typography>
        <Typography variant='body2'>Religion: Christainity</Typography>
        <Typography variant='body2'>Geneotype: AA</Typography>
        <Typography variant='body2'>Blood Group: A+</Typography>
        <Typography variant='body2'>
          Phone Number: (234) 823 567 8893
        </Typography>
        <Typography variant='body2'>Email: john@mail.com</Typography>
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
  );
};

export default UserProfile;
