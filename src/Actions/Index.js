/* eslint-disable camelcase */
import {
  GET_USER,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  GET_ERRORS,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FAV,
  ADD_FAVORITE,
} from './Types';

export const BASE_URL = 'https://effie-api.herokuapp.com';

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

export const LOGIN_USER = playload => ({
  type: LOGIN_SUCCESS,
  playload,
});

export const LOGOUT_USER = () => ({
  type: LOGOUT_SUCCESS,
});

export const FetchUserDetails = playload => ({
  type: GET_USER,
  playload,
});
export const returnErrors = (msg, status = null, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchUsersError = playload => ({
  type: LOGIN_FAIL,
  playload,
});

export const AddFavorite = () => ({ type: ADD_FAVORITE });

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

export const fetchProductsPending = type => ({
  type,
});
