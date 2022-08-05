import { Box } from '@mui/material';
import React from 'react';
import StatCard from '../../@sections/StatCard';
import { DashboardPageWrapper, StartCardWapper } from '../../core-ui/styles';

const Overview = () => {
  return (
    <DashboardPageWrapper>
      <Box>
        <Box>
          <h2>
            Hello <span>Alex John</span>👋
          </h2>
          <p>
            Welcome to your Client Module <span>@Your Company’s</span> Front
            Desk
          </p>
        </Box>

        <StartCardWapper>
          <StatCard
            count={14}
            name={'Appointments'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
          <StatCard
            count={14}
            name={'New Clients'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
          <StatCard
            count={14}
            name={'Total Number of Clients'}
            icon={'bi bi-calendar'}
            range={'month'}
          />
        </StartCardWapper>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Overview;
