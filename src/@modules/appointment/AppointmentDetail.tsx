import React from 'react';
import DetailView from '../../@views/DetailView';

import { useParams } from 'react-router-dom';

const AppointmentDetail = () => {
  const { id } = useParams();

  return <DetailView title='Appointment Detail'>AppointmentDetail</DetailView>;
};

export default AppointmentDetail;
