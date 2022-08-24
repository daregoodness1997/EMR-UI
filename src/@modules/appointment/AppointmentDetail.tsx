import React, { useState } from 'react';
import DetailView from '../../@views/DetailView';

import { useParams } from 'react-router-dom';
import { appointmentList } from '../../utils/data';
import { Box, Typography } from '@mui/material';
import BottomButtons from './BottomButtons';
import { useNavigate } from 'react-router-dom';
import { AppointmentSchema } from '../../utils/schema';
import DynamicInput from '../../components/Inputs/DynamicInput';

const AppointmentDetail = () => {
  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const details: any = appointmentList.filter((appointment, index) => {
    return appointment.id === id;
  });

  const handleAttendtoClientClick = () => {
    navigate(`/app/clients/appointments/${id}/attend-to-client`);
  };
  const handleBackClick = () => {
    navigate(`/app/clients/appointments/`);
  };
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  return (
    <DetailView
      title='Appointment Detail'
      hasBottomNavigation={true}
      backClick={handleBackClick}
      onEdit={handleEditClick}
      bottomNavChildren={
        <BottomButtons onAttendToClick={handleAttendtoClientClick} />
      }
    >
      {AppointmentSchema.map(({ inputType, key, name }) => {
        return (
          <>
            {isEditing ? (
              <DynamicInput
                key={key}
                label={name}
                name={key}
                value={details[0][key]}
                inputType={inputType}
              />
            ) : (
              <Box key={key}>
                <label>{name}</label>
                <Typography variant='body2'>{`${details[0][key]}`}</Typography>
              </Box>
            )}
          </>
        );
      })}
    </DetailView>
  );
};

export default AppointmentDetail;
