import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContent, LayoutWrapper } from '../../components/styles';
import DashboardSideMenu from '../../core-ui/DashboardSideMenu';
import DashboardTopMenu from '../../core-ui/DashboardTopMenu';
interface DashboardProps {
  children?: React.ReactNode;
}

export const menuItems = [
  {
    name: 'Overview',
    exact: true,
    to: '/app',
    iconClassName: 'bi bi-house-door',
  },
  {
    name: 'Admin',
    exact: true,
    to: '/app/admin',
    iconClassName: 'bi bi-person',
    subMenus: [
      { name: 'Dashboard', to: '/app/admin' },
      { name: 'Bands', to: '/app/admin/bands' },
      { name: 'Employees', to: '/app/admin/employees' },
      { name: 'Locations', to: '/app/admin/locations' },
    ],
  },
  {
    name: 'Clients',
    exact: true,
    to: '/app/clients',
    iconClassName: 'bi bi-people',
    subMenus: [
      { name: 'Dashboard', to: '/app/clients/dashboard' },
      { name: 'Client', to: '/app/clients' },
      { name: 'Appointment', to: '/app/clients/appointments' },
    ],
  },
  {
    name: 'Clinic',
    exact: true,
    to: '/app/clinic',
    iconClassName: 'bi bi-file-medical',
    subMenus: [
      { name: 'Dashboard', to: '/app/clinic' },
      { name: 'Appointment', to: '/app/clinic/appointments' },
    ],
  },
  {
    name: 'Pharmacy',
    exact: true,
    to: '/app/pharmacy',
    iconClassName: 'bi bi-file-medical',
    subMenus: [
      { name: 'Dashboard', to: '/app/pharmacy' },
      { name: 'Bill client', to: '/app/pharmacy/billclient' },
      { name: 'Bill Prescription Sent', to: '/app/pharmacy/billsent' },
      { name: 'Payment', to: '/app/pharmacy/payment' },
      { name: 'dispensory', to: '/app/pharmacy/dispensory' },
      { name: 'Store Inventory', to: '/app/pharmacy/inventory' },
      { name: 'Product Entry', to: '/app/pharmacy/productentry' },
      { name: 'POS', to: '/app/pharmacy/pos' },
    ],
  },
  {
    name: 'Laboratory',
    exact: true,
    to: '/app/laboratory',
    iconClassName: 'bi bi-binoculars',
    subMenus: [
      { name: 'Dashboard', to: '/app/laboratory' },
      { name: 'Bill client', to: '/app/laboratory/billclient' },
      { name: 'Bill Lab Orders Sent', to: '/app/laboratory/billlabsent' },
      { name: 'Payment', to: '/app/laboratory/payment' },
      { name: 'Lab Result', to: '/app/laboratory/result' },
    ],
  },
  {
    name: 'Managed Care',
    exact: true,
    to: '/app/managedCare',
    iconClassName: 'bi bi-alarm',
    subMenus: [
      { name: 'Dashboard', to: '/app/managedCare' },
      { name: 'Claim Payment', to: '/app/managedCare/claimpayment' },
      { name: 'Claims', to: '/app/managedCare/claims' },
      { name: 'Referrals', to: '/app/managedCare/referrals' },
      { name: 'Check In', to: '/app/managedCare/checkin' },
      { name: 'Preauthorization', to: '/app/managedCare/preauthorization' },
      { name: 'Beneficiaries', to: '/app/managedCare/beneficiaries' },
      { name: 'Organizations', to: '/app/managedCare/organization' },
      { name: 'Tarrif', to: '/app/managedCare/tarrif' },
    ],
  },
  {
    name: 'Finance',
    exact: true,
    to: '/app/finance',
    iconClassName: 'bi bi-cash',
    subMenus: [
      { name: 'Dashboard', to: '/app/finance' },
      { name: 'Bill Services', to: '/app/finance/billservices' },
      { name: 'Payment', to: '/app/finance/payment' },
      { name: 'Revenue', to: '/app/finance/revenue' },
      { name: 'Collections', to: '/app/finance/collections' },
      { name: 'Services', to: '/app/finance/services' },
      { name: 'HMO Authorization', to: '/app/finance/hmoauthorization' },
    ],
  },
  {
    name: 'Epidemiology',
    exact: true,
    to: '/',
    iconClassName: 'bi bi-bezier',
    subMenus: [
      { name: 'Dashboard', to: '/' },
      { name: 'Case Definition', to: '/app/epidemiology/case-definition' },
      { name: 'Signals', to: '/app/epidemiology/signal' },
    ],
  },

  {
    name: 'Communication',
    exact: true,
    to: '/app/communication',
    iconClassName: 'bi bi-rss',
    subMenus: [
      { name: 'Dashboard', to: '/app/communication' },
      { name: 'Channel', to: '/app/communication/channel' },
      { name: 'Questionnaires', to: '/app/communication/questionnaires' },
      { name: 'Configuration', to: '/app/communication/configuration' },
      { name: 'Submissions', to: '/app/communication/submissions' },
    ],
  },
  {
    name: 'Logout',
    exact: true,
    to: '/',
    action: () => {
      localStorage.setItem('user', '');
    },
    iconClassName: 'bi bi-box-arrow-right',
  },
];

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - Dashboard';
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <LayoutWrapper>
      <DashboardSideMenu isOpen={isOpen} menuItems={menuItems} />
      <LayoutContent>
        <DashboardTopMenu
          isOpen={isOpen}
          handleClick={() => setIsOpen(!isOpen)}
        />
        <Box className='layout__content-main'>
          {children}
          <Outlet />
        </Box>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Dashboard;
