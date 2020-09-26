import {
  fetchProductsPending, fetchProductsSuccess, fetchProductsError,
} from './index';
import apiUrl from '../constants/index';

import { FETCH_PRODUCTS_PENDING } from './ActionTypes';

function fetchItems(token) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    fetch(`${apiUrl}/items`, {
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
