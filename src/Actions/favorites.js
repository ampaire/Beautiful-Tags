import {
  fetchProductsPending, fetchProductsError, AddFavorite, BASE_URL,
} from './Index';

import { FETCH_SINGLE_PENDING, FETCH_PRODUCTS_PENDING } from './Types';
import { loadingIcon } from '../Helpers/Index';

export const addFavorite = (token, id, method) => dispatch => {
  loadingIcon();
  dispatch(fetchProductsPending(FETCH_SINGLE_PENDING));
  const raw = JSON.stringify({ item_id: `${id}` });
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: raw,
  };
  fetch(`${BASE_URL}/favorites`, requestOptions)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      loadingIcon();
      dispatch(AddFavorite());
    })
    .catch(error => {
      dispatch(AddFavorite());
      dispatch(fetchProductsError(error));
    });
};

export const removeFavorite = (token, id) => dispatch => {
  dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  fetch(`${BASE_URL}/favorites/${id}`, requestOptions)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      loadingIcon();
      return res;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};
