import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AccountGeneral from 'src/components/_main/profile/edit/accountGeneral';

// Meta information
export const metadata = {
  title: 'Setting - Net to Plate',
  applicationName: 'Net to Plate',
  authors: 'Net to Plate'
};
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: 'Dashboard',
            href: '/'
          },
          {
            name: 'Settings'
          }
        ]}
        action={{
          href: `/vendor/settings/shop`,
          title: 'Shop Setting'
        }}
      />
      <AccountGeneral />
    </div>
  );
}
