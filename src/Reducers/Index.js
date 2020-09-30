import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './AuthReducer';
import productsReducer from './productsReducer';

const finalReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
