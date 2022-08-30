import PortalDashboard from './PortalDashboard';

const PatientOutlet = () => {
  const user = true;
  return user ? <PortalDashboard /> : <div>Access Denied</div>;
};

export default PatientOutlet;
