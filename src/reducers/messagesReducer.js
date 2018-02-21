import * as types from '../variables/actionTypes.js';

const messages = (state = [], action) => {
  switch (action.type) {
  case types.ADD_MESSAGE:
  case types.MESSAGE_RECEIVED:
    return state.concat([{
      message: action.message,
      // author: action.author,
      author: action.author,
      id: action.id
    }]);
  case types.SET_MESSAGES:
    return action.messages;
  default:
    return state;
  }
};

export default messages;
