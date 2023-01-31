
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';
import { getAllPizzaReducer,getAllBurgerReducer } from './reducers/pizzaReducer';
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';
import { placeOrderReducer,getUserOrdersReducer  } from './reducers/orderReducer';
const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer:registerUserReducer,
  loginUserReducer:loginUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  getAllBurgerReducer: getAllBurgerReducer,

});

const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) :[];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
  cartReducer: {
    cartItems : cartItems,
    
  },

  loginUserReducer:{
    currentUser:currentUser
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;