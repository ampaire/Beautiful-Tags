import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './AuthReducer';
import productsReducer from './productsReducer';
import SingleProductReducer from './SingleProduct';

const finalReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  product: SingleProductReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
