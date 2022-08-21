import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import UserProfile from '../../@views/UserProfile';
import { Button } from '../../components';
import TabPanel from '../../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../../components/Tabs/Tabs';
import { DashboardPageWrapper } from '../../core-ui/styles';
import { a11yProps } from '../../pages/app/Overview';
import Documentation from './@sections/Documentation';
import History from './@sections/History';
import LabOrder from './@sections/LabOrder';
import Prescription from './@sections/Prescription';
import Radiology from './@sections/Radiology';

const AttendToClient = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <DashboardPageWrapper>
      <Stack direction={{ lg: 'row', xs: 'column' }} spacing={2}>
        <Box
          sx={{
            width: { lg: '20%', xs: '100%' },
            borderRadius: 2,
          }}
        >
          <UserProfile />
        </Box>
        <Box
          sx={{
            width: { lg: '80%', xs: '100%' },
            height: '88vh',
            background: '#fbfbfb',
            borderRadius: 2,
            p: 2,
            overflow: 'auto',
            postion: { xs: 'sticky', lg: 'static' },
            top: { xs: '40px' },
          }}
        >
          <Stack direction='row' alignItems='center' justifyContent='end'>
            <Button background={'#ffd0d0'} color={'#ff4545'}>
              End Encounter
            </Button>
            <Button>New Document</Button>
          </Stack>

          <Stack direction='row' spacing={2} sx={{ width: '100%' }}>
            {/* Left */}

            <Box sx={{ width: '100%' }}>
              <Box sx={{ pt: 2, width: '100%' }}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  sx={{ overflowX: 'scroll' }}
                >
                  <StyledTab label='History' {...a11yProps(0)} />
                  <StyledTab label='Lab Orders' {...a11yProps(1)} />
                  <StyledTab label='Prescriptions' {...a11yProps(2)} />
                  <StyledTab label='Radiology' {...a11yProps(3)} />
                  <StyledTab label='Documentation' {...a11yProps(4)} />
                </StyledTabs>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  background: 'white',
                  p: 1,
                  mt: 2,
                  borderRadius: 2,
                }}
              >
                <TabPanel value={value} index={0}>
                  <History />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <LabOrder />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Prescription />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Radiology />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Documentation />
                </TabPanel>
              </Box>
            </Box>

            {/* Right */}
            {/* <Box
              sx={{
                width: '100%',
                height: '100%',
                background: 'white',
                borderRadius: 2,
                p: 2,
              }}
            >
              <h1>Hello</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                dolore asperiores deserunt quasi assumenda hic beatae excepturi
                recusandae amet soluta?
              </p>
            </Box> */}
          </Stack>
        </Box>
      </Stack>
    </DashboardPageWrapper>
  );
};

export default AttendToClient;
