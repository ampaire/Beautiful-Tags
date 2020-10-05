/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { fetchProductsPending } from './Index';
import { inputValidation, loadingIcon, Api_url } from '../Constants/index';
import { CREATE_ITEM_PENDING } from './Types';

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
    fetch(`${Api_url}/items`, requestOptions)
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
