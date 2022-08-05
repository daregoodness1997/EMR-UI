import { Route, Routes } from 'react-router-dom';
import ClientDetails from '../@modules/client/ClientDashboard';
import Clients from '../@modules/client/Clients';
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
          <Route path='/app/clients/:id' element={<ClientDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
