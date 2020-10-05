/* eslint-disable camelcase */
import {
  fetchProductsPending, fetchProductsSuccess, fetchProductsError,
} from './Index';

import { FETCH_PRODUCTS_PENDING } from './Types';
import { Api_url } from '../Constants/index';

function fetchItems(token) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    fetch(`${Api_url}/items`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default fetchItems;
