'use client';
// react
import React from 'react';
import PropTypes from 'prop-types';
// mui
import { Typography } from '@mui/material';
// components
import ProductsCarousel from 'src/components/carousels/gridSlider';
// styles
import RootStyled from './styled';
// api
import * as api from 'src/services';
import { useQuery } from 'react-query';

RelatedProducts.propTypes = {
  id: PropTypes.string.isRequired
};

export default function RelatedProducts({ ...props }) {
  const { id } = props;
  const { data, isLoading } = useQuery(['related-products'], () => api.getRelatedProducts(id));
  if (!isLoading && !Boolean(data?.data?.length)) {
    return null;
  }
  return (
    <RootStyled>
      <Typography variant="h2" color="text.primary" className="heading">
        Related Products
      </Typography>
      <Typography variant="body1" color="text.secondary" className="description">
        Craving the taste of the ocean without leaving your home? Look no further! At Net to Plate, we bring the finest, freshest seafood straight to your door.
      </Typography>
      <ProductsCarousel data={data?.data} isLoading={isLoading} />
    </RootStyled>
  );
}
