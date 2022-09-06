import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProfileCard from '../components/Card/ProfileCard';
import TabPanel from '../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../components/Tabs/Tabs';
import { DashboardPageWrapper } from '../core-ui/styles';

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Insurance = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <DashboardPageWrapper>
      <Typography variant='h1' sx={{ fontWeight: 'bold', color: '#03045E' }}>
        Health Insurance
      </Typography>

      <Box sx={{ p: 3, background: '#ECF3FF', mt: 2, borderRadius: '6px' }}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label='Personal Details' {...a11yProps(0)} />
          <StyledTab label='Payment History' {...a11yProps(1)} />
          <StyledTab label='Claims' {...a11yProps(2)} />
          <StyledTab label='Referrals' {...a11yProps(3)} />
        </StyledTabs>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              background: '#001c4b',
              color: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              p: 3,
              my: 2,
              borderRadius: '4px',
            }}
          >
            <Typography>
              Household ID: <Chip label='3364747' sx={{ background: '#fff' }} />
            </Typography>
            <Typography>
              Registered by:
              <Chip label='Lastma Health' sx={{ background: '#fff' }} />
            </Typography>
            <Typography>
              Program:
              <Chip label='  Formal Sector Plan' sx={{ background: '#fff' }} />
            </Typography>
            <Typography>
              Premium due:
              <Chip label=' 22/05/22' sx={{ background: '#fff' }} />
            </Typography>
          </Box>

          <Stack
            direction={{ lg: 'row', xs: 'column' }}
            justifyContent='space-between'
            sx={{ mt: 3 }}
          >
            <Box
              sx={{
                width: { lg: '68%', xs: '100%' },
                display: 'grid',
                gridTemplateColumns: { lg: 'repeat(4, 1fr)', xs: '1fr' },
                gridGap: { lg: 10, xs: 18 },
              }}
            >
              {/* <ProfileCard /> */}
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </Box>
            <Box
              sx={{
                width: { lg: '31%', xs: '100%' },
                background: 'white',
                borderRadius: '8px',
                p: 2,
                mt: { lg: 0, xs: 4 },
              }}
            >
              <Typography variant='h4'>Other Information</Typography>
            </Box>
          </Stack>
        </TabPanel>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Insurance;
