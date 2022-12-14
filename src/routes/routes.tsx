import { Route, Routes } from 'react-router-dom';
import ClientAppointments from '../@clientportal/Appointments';
import Articles from '../@clientportal/Articles';
import Bills from '../@clientportal/Bills';
import BuyInsurance from '../@clientportal/BuyInsurance';
import ClientHome from '../@clientportal/ClientHome';
import Dependants from '../@clientportal/Dependants';
import Diagnostic from '../@clientportal/Diagnostic';
import HealthProfile from '../@clientportal/HealthProfile';
import Insurance from '../@clientportal/Insurance';
import Marketplace from '../@clientportal/Marketplace';
import MedicalRecords from '../@clientportal/MedicalRecords';
import Prescriptions from '../@clientportal/Prescriptions';
import AdminDashboard from '../@modules/admin/AdminDashboard';
import Bands from '../@modules/admin/bands';
import BandDetails from '../@modules/admin/bands/BandDetails';
import CreateBand from '../@modules/admin/bands/CreateBand';
import Employees from '../@modules/admin/employees';
import CreateEmployee from '../@modules/admin/employees/CreateEmployee';
import EmployeeDetails from '../@modules/admin/employees/EmployeeDetails';
import Locations from '../@modules/admin/locations';
import CreateLocation from '../@modules/admin/locations/CreateLocation';
import LocationDetails from '../@modules/admin/locations/LocationDetails';
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
import PatientOutlet from '../pages/app/PatientOutlet';
import PrivateOutlet from '../pages/app/PrivateOutlet';
import CreatePassword from '../pages/auth/CreatePassword';
import ForgotPassword from '../pages/auth/ForgotPassword';
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
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-password' element={<CreatePassword />} />
        <Route path='/app' element={<PrivateOutlet />}>
          <Route index element={<Overview />} />
          <Route path='/app/clients' element={<Clients />} />
          <Route path='/app/clients/appointments' element={<Appointments />} />
          <Route path='/app/clinic/appointments' element={<Appointments />} />
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
          <Route path='/app/admin' element={<AdminDashboard />} />

          <Route path='/app/admin/bands' element={<Bands />} />
          <Route path='/app/admin/bands/create' element={<CreateBand />} />
          <Route path='/app/admin/bands/:id' element={<BandDetails />} />
          <Route path='/app/admin/employees' element={<Employees />} />
          <Route
            path='/app/admin/employees/create'
            element={<CreateEmployee />}
          />
          <Route
            path='/app/admin/employees/:id'
            element={<EmployeeDetails />}
          />
          <Route path='/app/admin/locations' element={<Locations />} />
          <Route
            path='/app/admin/locations/create'
            element={<CreateLocation />}
          />
          <Route
            path='/app/admin/locations/:id'
            element={<LocationDetails />}
          />
        </Route>

        <Route path='/portal' element={<PatientOutlet />}>
          <Route index element={<ClientHome />} />
          <Route path='/portal/profile' element={<HealthProfile />} />
          <Route path='/portal/profile/records' element={<MedicalRecords />} />
          <Route
            path='/portal/profile/prescriptions'
            element={<Prescriptions />}
          />
          <Route path='/portal/profile/diagnostic' element={<Diagnostic />} />
          <Route
            path='/portal/profile/appointments'
            element={<ClientAppointments />}
          />
          <Route path='/portal/profile/insurance' element={<Insurance />} />
          <Route path='/portal/profile/dependants' element={<Dependants />} />
          <Route path='/portal/marketplace' element={<Marketplace />} />
          <Route path='/portal/marketplace/bills' element={<Bills />} />
          <Route
            path='/portal/marketplace/insurances'
            element={<BuyInsurance />}
          />
          <Route path='/portal/read' element={<Articles />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
