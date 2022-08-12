import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppointmentCard from '../../@sections/AppointmentCard';
import AppointmentGrid from '../../@sections/AppointmentGrid';
import StatCard from '../../@sections/StatCard';
import ViewCard from '../../@sections/ViewCard';
import { Button } from '../../components';
import AreaChart from '../../components/charts/AreaChart';
import BarChart from '../../components/charts/BarChart';
import BubbleChart from '../../components/charts/BubbleChart';
import CircleChart from '../../components/charts/CircleChart';
import ColumnChart from '../../components/charts/ColumnChart';
import HorizontalBar from '../../components/charts/HorizontalBar';
import LineChart from '../../components/charts/LineChart';
import MixedChart from '../../components/charts/MixedChart';
import PieChart from '../../components/charts/PieChat';
import PolarAreaChart from '../../components/charts/PolarAreaChart';
import TabPanel from '../../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../../components/Tabs/Tabs';
import StatusBatch from '../../core-ui/Grid/StatusBatch';
import {
  DashboardBox,
  DashboardContainer,
  DashboardPageWrapper,
  StartCardWapper,
} from '../../core-ui/styles';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ClientDashboard = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <DashboardPageWrapper>
      <Box>
        <Box>
          <Typography variant='h2'>
            Hello <span>Alex John</span>👋
          </Typography>
          <Typography variant='body1'>
            Welcome to your Client Module <span>@Your Company’s</span> Front
            Desk
          </Typography>
        </Box>

        <StartCardWapper>
          <ViewCard count={40} title='Total Clients' />
          <ViewCard count={16} title='Upcoming Appointments' />
          <ViewCard count={56} title='Total New Clients' />
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
              <Card sx={{ height: '300px', boxShadow: '0' }}>
                <AreaChart height={200} title='Trends' />
              </Card>
              <Card sx={{ height: '600px', boxShadow: '0' }}>
                <AreaChart height={200} title='New Clients' />
              </Card>
            </Box>
            <Box sx={{ width: '100%', p: 2 }}>
              <Card sx={{ height: '300px', boxShadow: '0' }}>
                <BarChart title='Payment Mode' />
              </Card>
              <Card sx={{ height: '300px', boxShadow: '0' }}>
                <BubbleChart />
              </Card>
            </Box>
            <Box sx={{ width: '100%', p: 2 }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '22px' }}>
                Gender
              </Typography>
              <Typography variant='body2'>Total Client by Gender</Typography>

              <Stack
                direction='row'
                spacing={0.4}
                sx={{ mt: 4, width: '100%' }}
                justifyContent='center'
              >
                <Button>Male</Button>
                <Button>Female</Button>
                <Button>Others</Button>
              </Stack>
              <CircleChart />
            </Box>
          </Box>
        </DashboardContainer>
      </Box>
    </DashboardPageWrapper>
  );
};

export default ClientDashboard;
