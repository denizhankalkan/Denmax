import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Switch yerine Route kullanın
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
        <hr />
        <Route exact path="/" component={ProductList} /> {/* Switch yerine Route kullanın */}
        <Route path="/cart" component={Cart} /> {/* Switch yerine Route kullanın */}
        <Route path="/checkout" component={Checkout} /> {/* Switch yerine Route kullanın */}
      </div>
    </Router>
  );
};

export default App;