import React from 'react';

import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  WeekView,
  Toolbar,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2018-11-01';
const schedulerData = [
  {
    startDate: '2018-11-01T09:45',
    endDate: '2018-11-01T11:00',
    title: 'Meeting',
  },
  {
    startDate: '2018-11-01T12:00',
    endDate: '2018-11-01T13:30',
    title: 'Go to a gym',
  },
];

const ScheduleCalendar = () => {
  return (
    <Paper>
      <Scheduler data={schedulerData} height={900}>
        <ViewState currentDate={currentDate} />
        <MonthView />
        <WeekView startDayHour={10} endDayHour={19} />
        <DayView startDayHour={9} endDayHour={14} />
        <Toolbar />
        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default ScheduleCalendar;
