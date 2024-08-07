import { ReactNode } from 'react';
import { RouteProps } from './navbar-wrapper';
import Link from 'next/link';

interface Props {
  logo: ReactNode;
  routeList: RouteProps[];
  button: ReactNode;
  copyRight?: ReactNode;
  children?: ReactNode;
}

const FooterWrapper = ({ logo, routeList, button, copyRight, children }: Props) => {
  return (
    <footer id="footer">
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 border-t border-accent-foreground">
        <div className="col-span-full xl:col-span-2">
          {logo}
          <p>
            Special thanks to{' '}
            <Link
              href={'https://shadcn-ui-blocks.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Shadcn/ui blocks
            </Link>{' '}
            where you can find over 10+ fully responsive UI blocks for your Shadcn UI projects.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Links</h3>
          {routeList.map((r) => (
            <Link key={r.label} rel="noreferrer noopener" href={r.href} className="opacity-60 hover:opacity-100">
              {r.label}
            </Link>
          ))}
        </div>
        {children}
      </section>
      <section className="container pb-14 text-center">{button}</section>
      <section className="container pb-14 text-center">{copyRight}</section>
    </footer>
  );
};

export default FooterWrapper;
