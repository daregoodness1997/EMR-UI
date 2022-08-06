import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button, Input } from '../components';
import FilterMenu from '../components/Menus/FilterMenu';
import { DashboardPageWrapper, PageHeaderMenu } from '../core-ui/styles';

interface ViewOneProps {
  title?: string;
  handleSearch?: () => void;
  handleCreate?: () => void;
  onRowClicked?: (row: any, event: any) => void;
}

const ViewOne: React.FC<ViewOneProps> = ({ title }) => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h2'>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack>
          <Input sx={{ width: '320px' }} />
          <FilterMenu />
        </Stack>
        <Button>Add {title}</Button>
      </Box>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
