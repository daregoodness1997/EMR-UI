import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

import ViewCard from '../../@sections/ViewCard';
import AreaChart from '../../components/charts/AreaChart';
import BubbleChart from '../../components/charts/BubbleChart';
import HorizontalBar from '../../components/charts/HorizontalBar';
import PieChart from '../../components/charts/PieChat';

import {
  DashboardContainer,
  DashboardPageWrapper,
  StartCardWapper,
} from '../../core-ui/styles';

const AdminDashboard = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Stack
          direction={{ lg: 'row', sm: 'row', xs: 'column' }}
          justifyContent='space-between'
          alignItems='flex-end'
        >
          <Box>
            <Typography variant='h2'>
              Hello <span>Alex John</span>👋
            </Typography>
            <Typography variant='body1'>
              Welcome to your Admin Module <span>@Your Company’s</span> Front
              Desk
            </Typography>
          </Box>

          <Stack direction='row' spacing={1}>
            <Chip label='Run Report' />
            <Chip label='Save' />
            <Chip label='Print' />
            <Chip label='Refresh' />
          </Stack>
        </Stack>

        <StartCardWapper>
          <ViewCard count={40} title='Total Bands' />
          <ViewCard count={16} title='Total Employees' />
          <ViewCard count={56} title='Total Location' />
        </StartCardWapper>

        <DashboardContainer>
          <Box
            sx={{
              display: 'grid',
              width: '100%',
              gridGap: '10px',
              gridTemplateColumns: { lg: 'repeat(3, 1fr)', xs: '1fr' },
            }}
          >
            <Box sx={{ width: '100%', p: 2 }}>
              <HorizontalBar title='Patient Distribution' />
              <Stack direction='row'>
                <ViewCard count={40} title='Out Patients' />
                <ViewCard count={16} title='In Patients' />
              </Stack>
            </Box>
            <Box sx={{ width: '100%', p: 2 }}>
              <AreaChart />
              <PieChart donutSize={0} />
            </Box>
            <Box sx={{ width: '100%', p: 2 }}>
              <BubbleChart />
            </Box>
          </Box>
        </DashboardContainer>
      </Box>
    </DashboardPageWrapper>
  );
};

export default AdminDashboard;
