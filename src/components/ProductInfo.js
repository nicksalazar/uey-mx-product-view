// src/components/ProductInfo.js
import React from 'react';
import SimpleProductInfo from './SimpleProductInfo';
import RentableProductInfo from './RentableProductInfo';
import SpaceView from './SpaceView';

function ProductInfo({ product }) {
  return (
    <div className="product-info">
      <h2>{product.name}</h2>
      <p>Seller: {product.seller}</p>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      {product.__typename === 'SimpleProduct' && (
        <SimpleProductInfo product={product} />
      )}
      {product.__typename === 'RentableProduct' && (
        <RentableProductInfo product={product} />
      )}
      {product.__typename === 'Space' && (
        <SpaceView  product={product} />
      )}
    </div>
  );
}

export default ProductInfo;
