import React from 'react';

// components
import ProductList from 'src/components/_admin/products/productList';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'Products - Net to Plate',
  applicationName: 'Net to Plate',
  authors: 'Net to Plate'
};
export default async function AdminProducts() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Categories List"
        links={[
          {
            name: 'Dashboard',
            href: '/'
          },
          {
            name: 'Products'
          }
        ]}
        action={{
          href: `/vendor/products/add`,
          title: 'Add Product'
        }}
      />
      <ProductList isVendor />
    </>
  );
}
