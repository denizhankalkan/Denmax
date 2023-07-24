import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';

// Kök azaltıcı oluşturma (root reducer)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Store'u oluşturma
const store = createStore(rootReducer);

export default store;