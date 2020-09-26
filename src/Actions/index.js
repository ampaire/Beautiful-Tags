/* eslint-disable camelcase */
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FAV,
  ADD_WISHLIST,
} from './ActionTypes';

const fetchProductsPending = type => ({
  type,
});

const saveToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

const saveDetails = details => {
  localStorage.setItem('details', JSON.stringify(details));
};

const getDetails = () => {
  const res = localStorage.getItem('details');
  return JSON.parse(res);
};

const getToken = () => {
  const res = localStorage.getItem('token');
  return JSON.parse(res);
};

const removeFav = playload => ({
  type: REMOVE_FAV,
  playload,
});

const fetchProductsSuccess = playload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  playload,
});

const fetchProductsError = playload => ({
  type: FETCH_PRODUCTS_ERROR,
  playload,
});

const fetchSingleItem = playload => ({
  type: FETCH_SINGLE_SUCCESS,
  playload,
});

const AddFavorite = () => ({ type: ADD_WISHLIST });

export {
  fetchProductsError,
  fetchProductsPending,
  fetchProductsSuccess,
  fetchSingleItem,
  saveToken,
  saveDetails,
  getDetails,
  removeFav,
  AddFavorite,
  getToken,
};
