import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import Groups from '../components/Buttons/Groups';
import FilterMenu from '../components/Menus/FilterMenu';
import Table from '../components/Table';
import { DashboardPageWrapper } from '../core-ui/styles';

interface ViewOneProps {
  title?: string;
  handleSearch?: () => void;
  handleCreate?: () => void;
  onRowClicked?: (row: any, event: any) => void;
  columns: any;
  data: any;
  tableTitle: string;
  hasCreate?: boolean;
  hasGridView?: boolean;
}

const buttons = [
  {
    key: 'list',
    value: 'list',
    label: 'List',
  },
  {
    key: 'grid',
    value: 'grid',
    label: 'Grid',
  },
];

const ViewOne: React.FC<ViewOneProps> = ({
  title,
  columns,
  data,
  onRowClicked,
  tableTitle,
  handleCreate,
  handleSearch,
  hasCreate = true,
  hasGridView = false,
}) => {
  return (
    <DashboardPageWrapper>
      <Typography variant='h2'>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { lg: 'row', sm: 'row', xs: 'column' },
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: { xs: '10px 0', lg: '24px 0' },
            width: { xs: '100%' },
            // flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <TextField
            variant='outlined'
            size='small'
            sx={{
              width: { lg: '320px', xs: '40%' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
              mb: { xs: 1 },
            }}
          />
          <FilterMenu />
          {/* {hasGridView && (
            <Groups buttons={buttons} onClick={() => console.log('clicked')} />
          )} */}
        </Box>
        {hasCreate && (
          <Button
            sx={{ width: { xs: '100%', lg: 'auto' } }}
            onClick={handleCreate}
          >
            Add {title}
          </Button>
        )}
      </Box>

      <Box sx={{ height: `calc(100vh - 90px)`, overflowY: 'scroll' }}>
        <Table columns={columns} data={data} onRowClicked={onRowClicked} />
      </Box>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
