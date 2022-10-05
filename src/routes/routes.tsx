import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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

const ClientAppointments = lazy(() => import('../@clientportal/Appointments'));
const Articles = lazy(() => import('../@clientportal/Articles'));

// Auth Components
const Login = lazy(() => import('../pages/auth/Login'));
const OrganizationSignup = lazy(
  () => import('../pages/auth/OrganizationSignup')
);
const IndividualSignup = lazy(() => import('../pages/auth/IndividualSignup'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'));
const CreatePassword = lazy(() => import('../pages/auth/CreatePassword'));

// App Components
const PrivateOutlet = lazy(() => import('../pages/app/PrivateOutlet'));
const PatientOutlet = lazy(() => import('../pages/app/PatientOutlet'));
const Overview = lazy(() => import('../pages/app/Overview'));
const ClinicDashboard = lazy(
  () => import('../@modules/clinic/ClinicDashboard')
);
const Clients = lazy(() => import('../@modules/client/Clients'));
const ClientQuickForm = lazy(
  () => import('../@modules/client/ClientQuickForm')
);
const ClientDetails = lazy(() => import('../@modules/client/ClientDetails'));
const ClientDashboard = lazy(
  () => import('../@modules/client/ClientDashboard')
);
const CreateAppointment = lazy(
  () => import('../@modules/appointment/CreateAppointment')
);
const AttendToClient = lazy(
  () => import('../@modules/appointment/AttendToClient')
);
const Appointments = lazy(() => import('../@modules/appointment/Appointments'));
const AppointmentDetail = lazy(
  () => import('../@modules/appointment/AppointmentDetail')
);
const LocationDetails = lazy(
  () => import('../@modules/admin/locations/LocationDetails')
);
const CreateLocation = lazy(
  () => import('../@modules/admin/locations/CreateLocation')
);
const Locations = lazy(() => import('../@modules/admin/locations'));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path='/signup'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <IndividualSignup />
            </Suspense>
          }
        />

        <Route
          path='/organization-signup'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OrganizationSignup />{' '}
            </Suspense>
          }
        />

        <Route
          path='/forgot-password'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route path='/create-password' element={<CreatePassword />} />

        <Route
          path='/app'
          element={
            <Suspense>
              <PrivateOutlet />
            </Suspense>
          }
        >
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
