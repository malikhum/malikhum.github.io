import React from 'react';
import ProductQuantity from './ProductQuantity';

function ProductRow({ product }) {
  const { company, product: productName, price } = product;

  return (
    <tr>
      <td>{company}</td>
      <td>{productName}</td>
      <td>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
      <td>
        <ProductQuantity />
      </td>
    </tr>
  );
}

export default ProductRow;