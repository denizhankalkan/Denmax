import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Header from './Header';
import TravelCart from './TravelCart';
import Footer from './Footer';

const ProductList = () => {
 // const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    //dispatch(addToCart(product));
  };

  return (
    <div>
    <Header/>
      <h2>Travel Carts</h2>
      <div className="App" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        
      <TravelCart
        imageUrl="../assets/hungary.jpg"
        buttonText="Hungary"
        title="hungary"
      />
      <TravelCart
        imageUrl="../assets/italy.jpg"
        buttonText="Italy"
        title="italy"
      />
      <TravelCart
        imageUrl="../assets/france.jpg"
        buttonText="France"
        title="france"
      />
    </div>
      <ul>
        {/* <li>
         Roma - Florensa - Bologna <button onClick={() => handleAddToCart('Product 1')}>Add to Cart</button>
        </li>
        <li>
          Budapest - Vienna - Czhecia<button onClick={() => handleAddToCart('Product 2')}>Add to Cart</button>
        </li> */}
        {/* Add more products here */}
      </ul>
      <Footer/>
    </div>
    
  );
};

export default ProductList;
