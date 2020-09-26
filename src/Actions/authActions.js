/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
import api from '../api';
import { authConstants } from '../constants';
// Regsister User
const load_register = () => ({
  type: authConstants.registering,
});
export const register_user_request = user_data => {
  const data = {
    name: user_data.userName,
    email: user_data.email,
    password: user_data.password,
  };
  return (dispatch => {
    // dispatch registering
    dispatch(load_register());

    // register api
    return api.registerUser(data)
      .then(response => {
        dispatch({
          type: authConstants.register_user_success,
          payload: response.data,
        });
      }).catch(error => {
        dispatch({
          type: authConstants.register_user_fail,
          payload: error,
        });
      });
  });
};

// logging in user
const load_login = () => ({
  type: authConstants.logging,
});
// Logout User
export const logout = () => ({
  type: authConstants.logout_user,
});
// Login User
export const login_user_request = login_details => (dispatch => {
  // dispatch logging
  dispatch(load_login());

  // login api
  return api.loginUser(login_details)
    .then(response => {
      (response.data.data.errors === 'Invalid Credentials')
        ? dispatch({
          type: authConstants.login_user_fail,
          payload: response.data.data.errors,
        })
        : dispatch({
          type: authConstants.login_user_success,
          payload: response.data,
        });
    }).catch(error => {
      dispatch({
        type: authConstants.login_user_fail,
        payload: error,
      });
    });
});

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
