import { Box, Typography } from '@mui/material';
import React from 'react';
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
      <PageHeaderMenu>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FilterMenu />
        </Box>
      </PageHeaderMenu>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
