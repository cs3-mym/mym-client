import * as types from '../variables/actionTypes.js';

const users = (state = [], action) => {
  switch (action.type) {
  case types.ADD_USER:
    return state.concat([{
      ...action.user
    }]);
  case types.USERS_LIST:
    return action.users;
  default:
    return state;
  }
}

export default users;
