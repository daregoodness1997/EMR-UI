import { Route, Routes } from 'react-router-dom';
import AppointmentDetail from '../@modules/appointment/AppointmentDetail';
import Appointments from '../@modules/appointment/Appointments';
import AttendToClient from '../@modules/appointment/AttendToClient';
import CreateAppointment from '../@modules/appointment/CreateAppointment';
import ClientDashboard from '../@modules/client/ClientDashboard';
import ClientDetails from '../@modules/client/ClientDetails';
import ClientQuickForm from '../@modules/client/ClientQuickForm';
import Clients from '../@modules/client/Clients';
import ClinicDashboard from '../@modules/clinic/ClinicDashboard';
import Overview from '../pages/app/Overview';
import PrivateOutlet from '../pages/app/PrivateOutlet';
import IndividualSignup from '../pages/auth/IndividualSignup';
import Login from '../pages/auth/Login';
import OrganizationSignup from '../pages/auth/OrganizationSignup';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<IndividualSignup />} />
        <Route path='/organization-signup' element={<OrganizationSignup />} />
        <Route path='/app' element={<PrivateOutlet />}>
          <Route index element={<Overview />} />
          <Route path='/app/clients' element={<Clients />} />
          <Route path='/app/clients/appointments' element={<Appointments />} />
          <Route path='/app/clients/dashboard' element={<ClientDashboard />} />
          <Route
            path='/app/clients/create-client'
            element={<ClientQuickForm />}
          />
          <Route
            path='/app/clients/appointments/create-appointment'
            element={<CreateAppointment />}
          />
          <Route
            path='/app/clients/appointments/:id'
            element={<AppointmentDetail />}
          />
          <Route
            path='/app/clients/appointments/:id/attend-to-client'
            element={<AttendToClient />}
          />
          <Route path='/app/clients/:id' element={<ClientDetails />} />
          <Route path='/app/clinic' element={<ClinicDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
