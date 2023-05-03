// components/ProductView.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS } from '../graphql/queries';
import ProductInfo from './ProductInfo';

function ProductView({ productId }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <ProductInfo product={data.product} />;
}

export default ProductView;
