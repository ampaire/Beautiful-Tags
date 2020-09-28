/* eslint-disable camelcase */
import {
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_USER_DETAILS,
  REMOVE_FAV,
  LOGIN,
  LOGOUT,
  ADD_FAVORITE,
} from './ActionTypes';

export const fetchProductsPending = type => ({
  type,
});

export const saveToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const saveDetails = details => {
  localStorage.setItem('details', JSON.stringify(details));
};

export const getDetails = () => {
  const res = localStorage.getItem('details');
  return JSON.parse(res);
};

export const getToken = () => {
  const res = localStorage.getItem('token');
  return JSON.parse(res);
};

export const removeFav = playload => ({
  type: REMOVE_FAV,
  playload,
});

export const fetchProductsSuccess = playload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  playload,
});

export const fetchProductsError = playload => ({
  type: FETCH_PRODUCTS_ERROR,
  playload,
});

export const fetchSingleItem = playload => ({
  type: FETCH_SINGLE_SUCCESS,
  playload,
});

export const LOGIN_USER = playload => ({
  type: LOGIN,
  playload,
});

export const LOGOUT_USER = () => ({
  type: LOGOUT,
});

export const FetchUserDetails = playload => ({
  type: FETCH_USER_DETAILS,
  playload,
});

export const AddFavorite = () => ({ type: ADD_FAVORITE });
