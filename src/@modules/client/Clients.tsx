import { Box, Typography } from '@mui/material';
import React from 'react';
import ViewOne from '../../@views/ViewOne';
import {
  DashboardPageWrapper,
  PageHeaderMenu,
  PageWrapper,
} from '../../core-ui/styles';
import { clientsList } from '../../utils/data';
import { ClientMiniSchema } from '../../utils/schema';

interface ClientsProps {
  title?: string;
}

console.log(clientsList);

const Clients: React.FC<ClientsProps> = ({ title }) => {
  return (
    <>
      <ViewOne
        title='Clients'
        columns={ClientMiniSchema}
        data={clientsList}
        tableTitle='Clients'
      />
    </>
  );
};

export default Clients;
