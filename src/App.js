import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Switch yerine Route kullanın
import ProductList from './components/HomePage/ProductList';
import Cart from './components/TravelCard/Cart';
import Checkout from './components/Payment/Checkout';

const App = () => {
  return (
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        <hr /> */}
        <Routes>

        <Route path="/" element={<ProductList />} />
        <Route path="/cart" component={<Cart />} /> 
        <Route path="/checkout" component={<Checkout />} /> 
        </Routes>
      </div>
  );
};

export default App;

