/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { fetchProductsPending } from './index';
import { inputValidation, loadingIcon, apiUrl } from '../constants/index';
import { CREATE_ITEM_PENDING } from './ActionTypes';

function createItem(data, token, callBack) {
  return dispatch => {
    loadingIcon();
    dispatch(fetchProductsPending(CREATE_ITEM_PENDING));
    const event = new FormData();
    for (const name in data) {
      event.append(name, data[name]);
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: event,
    };
    fetch(`${apiUrl}/items`, requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.id === undefined) {
          inputValidation(res);
          loadingIcon();
        } else {
          callBack();
        }
      })
      .catch(error => error);
  };
}

export default createItem;
