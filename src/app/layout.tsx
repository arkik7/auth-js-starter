import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const orbitron = Orbitron({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter template',
  description: 'Next.js Starter template with authentication, powered by Auth.js. Created by Archie.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
