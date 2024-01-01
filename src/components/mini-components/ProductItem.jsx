import React from 'react';
import './ProductItem.css';

const ProductItem = ({  name, description, price, image }) => {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default ProductItem;
