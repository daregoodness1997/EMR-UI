import { Box, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../components';
import ProfileCard from '../components/Card/ProfileCard';
import EmptyData from '../components/Empty/EmptyData';
import { DashboardPageWrapper } from '../core-ui/styles';

const Dependants = () => {
  const [empty, setEmpty] = useState(false);

  return (
    <DashboardPageWrapper>
      <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
        Dependants
      </Typography>
      <TextField
        variant='outlined'
        size='small'
        sx={{
          width: { lg: '320px', xs: '100%' },
          // height: '40px',
          borderRadius: '4px',
          marginRight: '10px',
          mb: { xs: 1 },
          mt: 1,
        }}
      />
      <Box
        sx={{
          mt: 3,
          overflowY: 'auto',
          background: '#ECF3FF',
          borderRadius: '6px',
        }}
      >
        {empty ? (
          <EmptyData
            sx={{ width: { lg: '68%', xs: '100%' }, textAlign: 'center' }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                p: 2,
              }}
            >
              <Button
                sx={{
                  width: '52px',
                  height: '52px',
                  margin: 0,
                  background: '#fcfcfc',
                }}
              >
                + Add Person
              </Button>
            </Box>
          </EmptyData>
        ) : (
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: { lg: 'repeat(5, 1fr)', xs: '1fr' },
              gridGap: { lg: 10, xs: 18 },
              p: 4,
            }}
          >
            <ProfileCard isDependant={true} />
            <ProfileCard isDependant={true} />
            <ProfileCard isDependant={true} />
            <ProfileCard isDependant={true} />
            <ProfileCard isDependant={true} />

            <Box
              sx={{
                p: { lg: 10, xs: 4 },
                width: { lg: '240px', xs: '100%' },
                height: '100%',
              }}
            >
              <Button
                sx={{
                  width: '52px',
                  height: '52px',
                  margin: 0,
                  background: '#fcfcfc',
                }}
              >
                + Add Person
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </DashboardPageWrapper>
  );
};

export default Dependants;
