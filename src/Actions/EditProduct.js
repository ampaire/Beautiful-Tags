/* eslint-disable camelcase */
import { fetchProductsPending } from './Index';
import { inputValidation, loadingIcon, Api_url } from '../Constants/index';
import { FETCH_SINGLE_PENDING } from './Types';

function editItem(data, token, id, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(FETCH_SINGLE_PENDING));
    const event = JSON.stringify(data);
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: event,
    };
    fetch(`${Api_url}/items/${id}`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id !== undefined) {
          callBack();
        } else {
          loadingIcon();
          inputValidation(res);
        }
        return res;
      })
      .catch(error => error);
  };
}

export default editItem;
