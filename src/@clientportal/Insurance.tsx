import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
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
      </Box>
    </DashboardPageWrapper>
  );
};

export default Insurance;
