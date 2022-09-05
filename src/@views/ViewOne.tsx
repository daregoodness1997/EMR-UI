import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Button } from '../components';
import RadioButton from '../components/Inputs/RadioButton';
import Switch from '../components/Inputs/Switch';
import FilterMenu from '../components/Menus/FilterMenu';
import ScheduleCalendar from '../components/Schedule';
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
  const [list, setList] = useState(true);
  const [grid, setGrid] = useState(false);
  const items = [
    {
      label: 'List',
      selected: true,
    },
    {
      label: 'Grid',
      selected: false,
    },
  ];
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
              width: { lg: '320px', xs: '70%' },
              // height: '40px',
              borderRadius: '4px',
              marginRight: '10px',
              mb: { xs: 1 },
            }}
          />
          <FilterMenu />
          {hasGridView && (
            <Switch>
              <RadioButton
                label='list'
                value={list}
                onChange={() => {
                  setList(true);
                  setGrid(false);
                }}
              />
              <RadioButton
                label={'Grid'}
                value={grid}
                onChange={() => {
                  setGrid(true);
                  setList(false);
                }}
              />
            </Switch>
          )}
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
        {list && (
          <Table columns={columns} data={data} onRowClicked={onRowClicked} />
        )}

        {grid && <ScheduleCalendar />}
      </Box>
    </DashboardPageWrapper>
  );
};

export default ViewOne;
