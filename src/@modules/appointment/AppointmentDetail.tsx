import React from 'react';
import DetailView from '../../@views/DetailView';

import { useParams } from 'react-router-dom';
import { appointmentList } from '../../utils/data';
import { Box, Typography } from '@mui/material';
import BottomButtons from './BottomButtons';
import { Link, useNavigate } from 'react-router-dom';

const AppointmentDetail = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const details: any = appointmentList.filter((appointment, index) => {
    return appointment.id === id;
  });

  let keys = Object.keys(details[0]);

  const renderLabel = (key: any) => {
    if (key === 'id') return 'ID';
    if (key === 'firstname') return 'First Name';
    if (key === 'middlename') return 'Middle Name';
    if (key === 'lastname') return 'Last Name';
    if (key === 'practitionername') return 'Practitioner Name';
    if (key === 'location') return 'Location';
    if (key === 'employee') return 'Employee';
    if (key === 'start_time') return 'Start Time';
    if (key === 'appointmentClass') return 'Appointment Class';
    if (key === 'appointment_type') return 'Appointment Type';
    if (key === 'appointment_status') return 'Appointment Status';
    if (key === 'appointmentReason') return 'Appointment Reason';
  };

  const handleAttendtoClientClick = () => {
    navigate('/app/clients/appointments/:id/attend-to-client');
  };
  return (
    <DetailView
      title='Appointment Detail'
      hasBottomNavigation={true}
      bottomNavChildren={
        <BottomButtons onAttendToClick={handleAttendtoClientClick} />
      }
    >
      {keys.map((key, idx) => {
        return (
          <Box>
            <label>{renderLabel(key)}</label>
            <Typography variant='body2'>{`${details[0][key]}`}</Typography>
          </Box>
        );
      })}
    </DetailView>
  );
};

export default AppointmentDetail;
