import { Typography } from '@mui/material';
import React from 'react';
import { DashboardPageWrapper, TableMenu } from '../core-ui/styles';

interface ViewOneProps {
  title?: string;
  handleSearch: () => void;
  handleCreate: () => void;
  onRowClicked?: (row: any, event: any) => void;
}

const ViewOne: React.FC<ViewOneProps> = ({ title }) => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h2'>{title}</Typography>

      <TableMenu></TableMenu>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
