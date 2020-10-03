import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import itemsReducer from './productsReducer';
import userReducer from './AuthReducer';
import singleItemReducer from './SingleProduct';

const finalReducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
  single: singleItemReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
