import React from 'react';

// components
import Dashboard from 'src/components/_admin/dashboard';

// Meta information
export const metadata = {
  title: 'Net to Plate - Dashboard',
  description: 'Welcome to the Net to Plate Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'Net to Plate Dashboard',
  authors: 'Net to Plate',
  keywords: 'dashboard, e-commerce, management, Net to Plate',
  icons: {
    icon: '/favicon.png'
  }
};

export default function page() {
  return (
    <>
      <Dashboard isVendor />
    </>
  );
}
