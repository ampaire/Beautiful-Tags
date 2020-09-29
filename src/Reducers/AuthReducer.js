import {
  getToken, saveToken, saveDetails, getDetails,
} from '../Actions/Index';

import {
  LOGIN_SUCCESS, LOGOUT_SUCCESS, GET_USER, LOGIN_USER_PENDING,
} from '../Actions/Types';

const initialState = {
  loged_in: false,
  auth_token: getToken() !== null ? getToken() : '',
  details: getDetails() !== null ? getDetails() : {
    details: {},
  },
  pending: false,
  error: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      saveToken(action.playload.auth_token);
      return {
        ...state,
        loged_in: true,
        auth_token: getToken(),
        pending: false,
      };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        loged_in: false,
        auth_token: '',
        details: getDetails(),
        token: getToken(),
      };
    case GET_USER:
      saveDetails(action.playload);
      return {
        ...state,
        pending: false,
        details: getDetails(),
      };
    case LOGIN_USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}

export default userReducer;
