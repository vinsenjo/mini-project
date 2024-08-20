import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<<<<<<< HEAD

import Hamburger from '@/components/modal/navbarHamburger';
=======
>>>>>>> dc1c4df41cb7c02bd77a357a09f2326400321a00

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticketist',
  description: 'Discover events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
