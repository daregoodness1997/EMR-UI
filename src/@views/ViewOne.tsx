import { Box, Input, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import FilterMenu from '../components/Menus/FilterMenu';
import Table from '../components/Table';
import { DashboardPageWrapper, PageHeaderMenu } from '../core-ui/styles';

interface ViewOneProps {
  title?: string;
  handleSearch?: () => void;
  handleCreate?: () => void;
  onRowClicked?: (row: any, event: any) => void;
  columns: any;
  data: any;
  tableTitle: string;
}

const ViewOne: React.FC<ViewOneProps> = ({
  title,
  columns,
  data,
  onRowClicked,
  tableTitle,
  handleCreate,
  handleSearch,
}) => {
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
        <Box sx={{ display: 'flex', margin: '24px 0' }}>
          <Box>
            <input
              style={{
                width: '320px',
                padding: '0.75rem 1.2rem',
                borderRadius: '4px',
                border: '1.5px solid #eee',
                marginRight: '10px',
              }}
            />
          </Box>
          <Box>
            <FilterMenu />
          </Box>
        </Box>
        <Button>Add {title}</Button>
      </Box>

      <Box sx={{ height: `calc(100vh - 90px)`, overflowY: 'scroll' }}>
        <Table title={tableTitle} columns={columns} data={data} />
      </Box>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
