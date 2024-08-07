import FooterWrapper from '@/components/shared/footer-wrapper';
import Logo from '@/components/shared/logo';
import { RouteProps } from '@/components/shared/navbar-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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

const Footer = () => {
  return (
    <FooterWrapper
      logo={<Logo isLink />}
      routeList={routeList}
      button={<Button>Call to Action</Button>}
      copyRight={
        <h3>
          &copy; 2024 created by{' '}
          <Link
            rel="noreferrer noopener"
            target="_blank"
            href="https://arkikod.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            ArKiKod
          </Link>
        </h3>
      }
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">More Links</h3>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">More Links</h3>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">More Links</h3>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
        <Link rel="noreferrer noopener" href="#" className="opacity-60 hover:opacity-100">
          Link
        </Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
