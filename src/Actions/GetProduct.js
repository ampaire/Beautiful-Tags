/* eslint-disable camelcase */
import {
  fetchProductsPending, fetchSingleItem, fetchProductsError,
} from './Index';
import { FETCH_SINGLE_PENDING } from './Types';
import { Api_url } from '../Constants/index';

function fetchSingle(token, id, method) {
  return dispatch => {
    dispatch(fetchProductsPending(FETCH_SINGLE_PENDING));
    const requestOptions = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    fetch(`${Api_url}/items/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchSingleItem(res));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default fetchSingle;
