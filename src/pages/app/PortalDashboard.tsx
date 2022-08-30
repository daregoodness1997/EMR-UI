import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutContent, LayoutWrapper } from '../../components/styles';
import DashboardSideMenu from '../../core-ui/DashboardSideMenu';
import DashboardTopMenu from '../../core-ui/DashboardTopMenu';

export const menuItems = [
  {
    name: 'Home',
    exact: true,
    to: '/portal',
    iconClassName: 'bi bi-house-door',
  },
  {
    name: 'Profile',
    exact: true,
    to: '/portal/profile',
    iconClassName: 'bi bi-person',
    subMenus: [
      { name: 'Health Profile', to: '/portal/profile/health' },
      { name: 'Medical Records', to: '/portal/profile/records' },
      { name: 'Prescriptions', to: '/portal/profile/prescriptions' },
      { name: 'Diagnostics Reports', to: '/portal/profile/diagnostic' },
      { name: 'Appointments', to: '/portal/profile/appointments' },
      { name: 'Health Insurance', to: '/portal/profile/insurance' },
      { name: 'Dependants', to: '/portal/profile/dependants' },
    ],
  },
  {
    name: 'Buy',
    exact: true,
    to: '/portal/buy',
    iconClassName: 'bi bi-bag-fill',
    subMenus: [
      { name: 'Wallet', to: '/portal/buy/wallet' },
      { name: 'Bill', to: '/portal/buy/bill' },
      { name: 'Health Insurance', to: '/portal/buy/insurance' },
    ],
  },
  {
    name: 'Chat',
    exact: true,
    to: '/portal/chat',
    iconClassName: 'bi bi-chat-fill',
    subMenus: [
      { name: 'Forum', to: '/portal/chat' },
      { name: 'Healthstack Assistant', to: '/portal/chat/assistant' },
    ],
  },
  {
    name: 'Read',
    exact: true,
    to: '/portal/read',
    iconClassName: 'bi bi-book-fill',
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
interface DashboardProps {
  children?: React.ReactNode;
}

const PortalDashboard: React.FC<DashboardProps> = ({ children }) => {
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

export default PortalDashboard;
