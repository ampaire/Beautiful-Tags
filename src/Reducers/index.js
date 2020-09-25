import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authRedux } from './Auth';

export default history => combineReducers({
  router: connectRouter(history),
  Auth: authRedux,
  // Other reducers,
});
