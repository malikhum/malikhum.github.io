import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <BsPlus onClick={increase} />
      {quantity}
      <BsDash onClick={decrease} />
    </div>
  );
}

export default ProductQuantity;
