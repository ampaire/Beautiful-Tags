/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import {
  FetchUserDetails,
  fetchUsersError,
  fetchProductsError,
  fetchProductsPending,
  LOGIN_USER,
  BASE_URL,
} from './Index';

import { USER_LOADING } from './Types';

import { inputValidation } from '../Constants/index';

export const loginUser = data => dispatch => {
  dispatch(fetchProductsPending(USER_LOADING));
  fetch(`${BASE_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      if (res.auth_token !== undefined) {
        dispatch(LOGIN_USER(res));
      }
      return res;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

export const createUser = data => dispatch => {
  const event = new FormData();
  for (const name in data) {
    event.append(name, data[name]);
  }
  fetch(`${BASE_URL}/signup`,
    {
      method: 'POST',
      body: event,
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      if (res.auth_token !== undefined) {
        dispatch(LOGIN_USER(res));
      } else {
        inputValidation(res);
      }
      return res;
    })
    .catch(error => error);
};

export const fetchUser = token => dispatch => {
  dispatch(fetchProductsPending(USER_LOADING));
  fetch(`${BASE_URL}/profile`, {
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
      dispatch(FetchUserDetails(res));
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    });
};

export const editProfile = (data, token, callBack) => dispatch => {
  dispatch(fetchProductsPending(USER_LOADING));
  const event = JSON.stringify(data);
  const requestOptions = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: event,
  };
  fetch(`${BASE_URL}/edit-profile`, requestOptions)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error;
      }
      if (res.id !== undefined) {
        callBack();
      } else {
        inputValidation(res);
      }
      return res;
    })
    .catch(error => error);
};
