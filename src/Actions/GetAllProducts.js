import {
  fetchProductsPending, fetchProductsSuccess, fetchProductsError, BASE_URL,
} from './Index';

import { FETCH_PRODUCTS_PENDING } from './Types';

function fetchItems(token) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    fetch(`${BASE_URL}/products`, {
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
