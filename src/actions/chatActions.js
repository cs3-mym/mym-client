import * as types from '../variables/actionTypes.js';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => {
  return {
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  };
};

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    id: nextUserId++,
    user
  };
};

export const messageReceived = (message, author) => {
  return {
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
  };
};

export const populateUsersList = (users) => {
  let u = [];

  if (users && Array.isArray(users)) {
    u = users.map((username) => {
      return {
        username
      };
    });
  }
  return {
    type: types.USERS_LIST,
    users: u
  };
};

export const populateMessages = (messages) => {
  const m = messages.map(({
    message,
    username
  }) => {
    return {
      message,
      author: {
        username
      }
    };
  });
  return {
    type: types.SET_MESSAGES,
    messages: m
  };
}
