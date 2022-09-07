import { Box, Chip, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../components';
import InsuranceCard from '../components/Card/InsuranceCard';
import ProfileCard from '../components/Card/ProfileCard';
import EmptyData from '../components/Empty/EmptyData';
import BasicTable from '../components/Table/BasicTable';
import TabPanel from '../components/Tabs/TabPanel';
import { StyledTab, StyledTabs } from '../components/Tabs/Tabs';
import { DashboardPageWrapper } from '../core-ui/styles';
import { paymentList } from '../utils/data';
import { claimSchema, paymentSchema, referralSchema } from '../utils/schema';

export const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const Insurance = () => {
  const [value, setValue] = useState(0);
  const [empty, setEmpty] = useState(false);
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
              flexDirection: { xs: 'column', lg: 'row' },
              p: 3,
              my: 2,
              borderRadius: '4px',
            }}
          >
            <Typography sx={{ py: 1 }}>
              Household ID: <Chip label='3364747' sx={{ background: '#fff' }} />
            </Typography>
            <Typography sx={{ py: 1 }}>
              Registered by:
              <Chip label='Lastma Health' sx={{ background: '#fff' }} />
            </Typography>
            <Typography sx={{ py: 1 }}>
              Program:
              <Chip label='  Formal Sector Plan' sx={{ background: '#fff' }} />
            </Typography>
            <Typography sx={{ py: 1 }}>
              Premium due:
              <Chip label=' 22/05/22' sx={{ background: '#fff' }} />
            </Typography>
          </Box>
          <Box sx={{ height: '80vh', overflowY: 'auto' }}>
            <Stack
              direction={{ lg: 'row', xs: 'column' }}
              justifyContent='space-between'
              sx={{ mt: 3, overflowY: 'auto' }}
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
                    width: { lg: '68%', xs: '100%' },
                    display: 'grid',
                    gridTemplateColumns: { lg: 'repeat(4, 1fr)', xs: '1fr' },
                    gridGap: { lg: 10, xs: 18 },
                    pb: { lg: 24, xs: 0 },
                  }}
                >
                  {/* <ProfileCard /> */}
                  <ProfileCard />
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
                <InsuranceCard title='Employeer' />
                <InsuranceCard title='Primary Healthcare Provider' />
                <InsuranceCard title='Health Insurance Agent' />
              </Box>
            </Stack>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{ py: 2 }}>
            <BasicTable columns={paymentSchema} data={paymentList} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box sx={{ py: 2 }}>
            <BasicTable columns={claimSchema} data={paymentList} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box sx={{ py: 2 }}>
            <BasicTable columns={referralSchema} data={paymentList} />
          </Box>
        </TabPanel>
      </Box>
    </DashboardPageWrapper>
  );
};

export default Insurance;
