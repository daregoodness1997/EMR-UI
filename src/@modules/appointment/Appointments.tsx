import React from 'react';
import ViewOne from '../../@views/ViewOne';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  let navigate = useNavigate();

  const handleCreateAppointment = () => {
    navigate('/app/clients/appointments/create-appointment');
  };
  const handleRowClicked = () => {};
  return (
    <>
      <ViewOne
        title='Appointments'
        columns={[]}
        data={[]}
        tableTitle=''
        handleCreate={handleCreateAppointment}
        onRowClicked={handleRowClicked}
      />
    </>
  );
};

export default Appointments;
