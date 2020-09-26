import {
  fetchProductsPending, fetchProductsError, AddFavorite,
} from './index';

import { FETCH_SINGLE_PENDING } from './ActionTypes';
import { loadingIcon, apiUrl } from '../constants/index';

function addFavorite(token, id, method) {
  return dispatch => {
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
    fetch(`${apiUrl}/wishlist`, requestOptions)
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
}
export default addFavorite;
