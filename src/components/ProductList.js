import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      sss
      <h2>Travel Carts</h2>
      <ul>
        <li>
         Roma - Florensa - Bologna <button onClick={() => handleAddToCart('Product 1')}>Add to Cart</button>
        </li>
        <li>
          Budapest - Vienna - Czhecia<button onClick={() => handleAddToCart('Product 2')}>Add to Cart</button>
        </li>
        {/* Add more products here */}
      </ul>
    </div>
  );
};

export default ProductList;
