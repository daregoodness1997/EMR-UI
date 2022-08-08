import React from 'react';
import ViewOne from '../../@views/ViewOne';

const Appointments = () => {
  const handleCreateAppointment = () => {};
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
