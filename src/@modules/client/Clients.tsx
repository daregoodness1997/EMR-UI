import { Box, Typography } from '@mui/material';
import React from 'react';
import ViewOne from '../../@views/ViewOne';
import {
  DashboardPageWrapper,
  PageHeaderMenu,
  PageWrapper,
} from '../../core-ui/styles';

interface ClientsProps {
  title?: string;
}

const Clients: React.FC<ClientsProps> = ({ title }) => {
  return (
    <>
      <ViewOne title='Client' />
    </>
  );
};

export default Clients;
