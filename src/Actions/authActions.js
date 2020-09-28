/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import {
  LOGIN_USER, fetchProductsError, fetchProductsPending, FetchUserDetails,
} from './index';
import {
  authConstants, inputValidation, loadingIcon, apiUrl,
} from '../constants';
import { LOGIN_USER_PENDING } from './ActionTypes';

// Regsister User
export const SignUp = data => dispatch => {
  loadingIcon();
  const event = new FormData();
  for (const name in data) {
    event.append(name, data[name]);
  }
  fetch(`${apiUrl}/users`,
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
        loadingIcon();
        inputValidation(res);
      }
      return res;
    })
    .catch(error => error);
};

// logging in user
export const loginUser = data => dispatch => {
  dispatch(fetchProductsPending(LOGIN_USER_PENDING));
  loadingIcon();
  fetch(`${apiUrl}/auth/login`,
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
      loadingIcon();
      if (res.auth_token !== undefined) {
        dispatch(LOGIN_USER(res));
      }
      return res;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

// Logout User
export const logout = () => ({
  type: authConstants.logout_user,
});

// Get user Info
export const fetchUser = token => dispatch => {
  dispatch(fetchProductsPending(LOGIN_USER_PENDING));
  fetch(`${apiUrl}/profile`, {
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
      dispatch(fetchProductsError(error));
    });
};

// Edit user info
export const editProfile = (data, token, callBack) => dispatch => {
  loadingIcon();
  dispatch(fetchProductsPending(LOGIN_USER_PENDING));
  const event = JSON.stringify(data);
  const requestOptions = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: event,
  };
  fetch(`${apiUrl}/edit-profile`, requestOptions)
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

// Open Registration modal
export const open_registration = () => ({
  type: authConstants.open_register,
});

// Close Registration modal
export const close_registration = () => ({
  type: authConstants.close_register,
});

// Open login modal
export const open_login = () => ({
  type: authConstants.open_login,
});

// Close login modal
export const close_login = () => ({
  type: authConstants.close_login,
});
