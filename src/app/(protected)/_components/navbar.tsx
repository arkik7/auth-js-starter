import Logo from '@/components/shared/logo';
import NavbarWrapper, { RouteProps } from '@/components/shared/navbar-wrapper';
import UserMenu from '@/components/users/user-menu';
import React from 'react';

const routeList: RouteProps[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/server',
    label: 'Server',
  },
  {
    href: '/client',
    label: 'Client',
  },
  {
    href: '/admin',
    label: 'Admin',
  },
];

const Navbar = () => {
  return <NavbarWrapper logo={<Logo isLink />} routeList={routeList} buttons={<UserMenu />} />;
};

export default Navbar;
