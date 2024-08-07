import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Navbar />
      <main className="flex my-20 w-full justify-center">{children}</main>
      <Footer />
    </SessionProvider>
  );
};

export default ProtectedLayout;
