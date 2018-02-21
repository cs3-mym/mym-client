import {
  combineReducers
} from 'redux';
import messages from './messagesReducer.js';
import users from './usersReducer.js';
import token from './authReducer.js';

const appReducer = combineReducers({
  messages,
  users,
  token
});

export default appReducer;
