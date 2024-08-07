import Logo from '@/components/shared/logo';
import NavbarWrapper, { RouteProps } from '@/components/shared/navbar-wrapper';
import UserMenu from '@/components/users/user-menu';
import React from 'react';

const routeList: RouteProps[] = [
  {
    href: '#features',
    label: 'Features',
  },
  {
    href: '#pricing',
    label: 'Pricing',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

const Navbar = () => {
  return <NavbarWrapper logo={<Logo isLink />} routeList={routeList} buttons={<UserMenu />} />;
};

export default Navbar;
