/* eslint-disable import/prefer-default-export */
import { authConstants } from '../constants';

const initialState = {
  user_details: [],
  auth_error: '',
  close_modal_register: false,
  close_modal_login: false,
  loading: '',
  notifier: '',
};

export function authRedux(state = initialState, action) {
  switch (action.type) {
    // registering
    case authConstants.registering:
      return {
        ...state,
        loading: 'registering',
      };
      // register success
    case authConstants.register_user_success:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user_details: action.payload,
        close_modal_register: false,
        notifier: { type: 'success', sms: 'Registered successfully' },
        loading: '',
      };
      // register fail
    case authConstants.register_user_fail:
      return {
        ...state,
        auth_error: action.payload,
        close_modal_register: false,
        notifier: { type: 'error', sms: 'Registration failed' },
        loading: '',
      };

      // logging
    case authConstants.logging:
      return {
        ...state,
        loading: 'logging',
      };
      // login success
    case authConstants.login_user_success:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user_details: action.payload,
        close_modal_login: false,
        notifier: { type: 'success', sms: 'Login Successful' },
        loading: '',
      };
      // login fail
    case authConstants.login_user_fail:
      return {
        ...state,
        auth_error: action.payload,
        close_modal_login: false,
        notifier: { type: 'error', sms: 'Login failed' },
        loading: '',
      };
      // logout user
    case authConstants.logout_user:
      localStorage.removeItem('user');
      window.location.reload();
      return {
        ...state,
        user_details: [],
      };

      // open register
    case authConstants.open_register:
      return {
        ...state,
        close_modal_register: true,
      };
      // close register
    case authConstants.close_register:
      return {
        ...state,
        close_modal_register: false,
      };

      // open login
    case authConstants.open_login:
      return {
        ...state,
        close_modal_login: true,
      };
      // close login
    case authConstants.close_login:
      return {
        ...state,
        close_modal_login: false,
      };

    default:
      return state;
  }
}
