import React from 'react';
import styles from './ProductView.module.css';

const SimpleProductView = ({ product }) => {
  return (
    <div className={styles.productView}>
      <h2>{product.productName}</h2>
      <p>Seller: {product.sellerName}</p>
      <img src={product.image} alt={product.productName} className={styles.productImage} />
      <p>Price: ${product.price}</p>
      <p>Inventory: {product.inventory}</p>
    </div>
  );
};
export default SimpleProductView;
