import {
  LOGIN,
  LOGOUT,
  REGISTER
} from '../actions/authActions.js';

const token = null;

function authReducer(state = token, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload.data;
    case LOGOUT:
      return null;
    case REGISTER:
      return action.payload.data;
    default:
      return state;
  }
}

export default authReducer;
