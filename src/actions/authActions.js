import axios from 'axios';

import { DEV_SERVER_URI } from '../variables/connections.js';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

let serverUri = DEV_SERVER_URI;

const createPath = 'users/create';
const loginPath = 'users/login';
const removeTokenPath = 'users/me/token';

export const login = (userInfo) => {
  const promise = axios.post(serverUri + loginPath, userInfo);

  const action = {
    type: LOGIN,
    payload: promise
  }
  return action;
}

export const logout = (token) => {
  const promise = axios.delete(serverUri + removeTokenPath, token);

  const action = {
    type: LOGOUT,
    payload: promise
  }
  return action;
}

export const register = (userInfo) => {
  const promise = axios.post(serverUri + createPath, userInfo);

  const action = {
    type: REGISTER,
    payload: promise
  }
  return action;
}
