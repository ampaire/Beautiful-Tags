/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { fetchProductsPending, BASE_URL } from './Index';
import { inputValidation } from '../Helpers/Index';
import { CREATE_ITEM_PENDING } from './Types';

export const createItem = (data, token, callBack) => dispatch => {
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
  fetch(`${BASE_URL}/products`, requestOptions)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      if (res.id === undefined) {
        inputValidation(res);
      } else {
        callBack();
      }
    })
    .catch(error => error);
};
