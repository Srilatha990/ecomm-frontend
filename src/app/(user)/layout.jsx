import React from 'react';

// mui
import { Toolbar } from '@mui/material';

// components
import Navbar from 'src/layout/_main/navbar';
import Footer from 'src/layout/_main/footer';
import Topbar from 'src/layout/_main/topbar';
import ActionBar from 'src/layout/_main/actionbar';

// Meta information
export const metadata = {
  title: 'ttt-clothing',
  description:
    'Log in to ttt-clothing for secure access to your account. Enjoy seamless shopping, personalized experiences, and hassle-free transactions. Your trusted portal to a world of convenience awaits. Login now!',
  applicationName: 'ttt-clothing',
  authors: 'ttt-clothing',
  keywords: 'ecommerce, ttt-clothing, Commerce, Login ttt-clothing, LoginFrom ttt-clothing',
  icons: {
    icon: '/icon.jpg'
  },
  openGraph: {
    images: 'https://nettoplate.vercel.app/opengraph-image.png?1c6a1fa20db2840f'
  }
};

export default async function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      <ActionBar />
      {children}
      <Toolbar sx={{ display: { xs: 'block', md: 'none' } }} />
      <Footer />
    </>
  );
}
