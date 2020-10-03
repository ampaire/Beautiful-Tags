import { fetchProductsPending, BASE_URL } from './Index';
import { inputValidation, loadingIcon } from '../Constants/index';
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
    fetch(`${BASE_URL}/items/${id}`, requestOptions)
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
