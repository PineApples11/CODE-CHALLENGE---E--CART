import React, { useState } from 'react';
import Product from './Product';

//add items into the cart

function Cart({ name, price }) {  // "products" to "product" based on your usage in JSX
  const [isInCart, setIsInCart] = useState(false);

  function handleCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span> {Product.name}
      <span> {price} </span>{Product.price}

      <button
        className={isInCart ? 'remove' : 'add'}
        onClick={handleCartClick}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>

      
    </li>
  );
}

export default Cart;
