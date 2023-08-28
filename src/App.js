import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Switch yerine Route kullanın
import ProductList from './components/HomePage/ProductList';
import Cart from './components/TravelCard/Cart';
import Checkout from './components/Payment/Checkout';
import NewPage from './components/PlanPage/plan';

const App = () => {
  return (
      <div>
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" component={<Cart />} /> 
        <Route path="/checkout" component={<Checkout />} /> 
        <Route path="/new-page" component={NewPage} />
        </Routes>
      </div>
  );
};

export default App;

