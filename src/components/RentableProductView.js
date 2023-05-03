import React from 'react';
import styles from './ProductView.module.css';

const RentableProductView = ({ product }) => {
  return (
    <div className={styles.productView}>
      <h2>{product.productName}</h2>
      <p>Seller: {product.sellerName}</p>
      <img src={product.image} alt={product.productName} className={styles.productImage} />
      <p>Price: ${product.price} {product.rentalType === 'PER_HOUR' ? 'per hour' : 'per night'}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};
export default RentableProductView;
