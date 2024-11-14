import React from 'react';

// components
import Dashboard from 'src/components/_admin/dashboard';

// Meta information
export const metadata = {
  title: 'ttt-clothing - Dashboard',
  description: 'Welcome to the ttt-clothing Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'ttt-clothing Dashboard',
  authors: 'ttt-clothing',
  keywords: 'dashboard, e-commerce, management, ttt-clothing',
  icons: {
    icon: '/icon.png'
  }
};

export default function page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
