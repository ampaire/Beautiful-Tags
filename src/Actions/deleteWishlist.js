import { fetchProductsPending, fetchProductsError } from './index';
import { loadingIcon, apiUrl } from '../constants/index';
import { FETCH_PRODUCTS_PENDING } from './ActionTypes';

function addFavorite(token, id) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(FETCH_PRODUCTS_PENDING));
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`${apiUrl}/favorites/${id}`, requestOptions)
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
}
export default addFavorite;
