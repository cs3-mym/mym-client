import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import MessagesList from './MessagesList.js';
import MessageInput from './MessageInput.js';
import UsersList from './UsersList.js';

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  addMessage,
  addUser,
  populateUsersList,
  populateMessages
} from '../../actions/chatActions.js';

import {
  USER_CONNECTED,
  USER_DISCONNECTED,
  MESSAGE_SENT,
  MESSAGE_RECEIVED,
  // TYPING,
  // COMMUNITY_CHAT
} from '../../events.js';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const getMePath = 'users/me';

const chatContainer = {
  // position: "fixed",
  // left: "10px",
  // bottom: "60px",
  height: "220px",
  width: "420px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  background: "rgba(160, 160, 160, 0.5)",
  zIndex: "100",
  padding: "10px"
}

const defaultActiveChat = {
  id: '123456',
  messages: [],
  typingUsers: []
}

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: {
        username: "n/a"
      },
      // chats: [],
      // messages: [],
      activeChat: defaultActiveChat,
      status: '',
      connected: false,
    }
  }

  componentDidMount() {
    const obj = {
      token: this.props.token
    }
    this._getMe(DEV_SERVER_URI + getMePath, obj);
  }
  
  componentWillMount() {
    this.initSocket();
  }

  // componentDidMount() {
  // do an axios call, to get user from token.
  // axios.post('http://localhost:5000/users/me')
  //   .then((res) => {
  //     this.props.addUser(res.data);
  //     this.setState({
  //       user: res.data
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   })

  // this.props.addUser(this.state.user);
  // if (this.state.socket && this.state.user) {
  //   console.log("USER_CONNECTED");
  //   this.state.socket.emit(USER_CONNECTED, this.state.user.username);
  // }
  // }

  // componentDidMount() {
  //   const {
  //     socket
  //   } = this.state;
  //   if (socket) {
  //     socket.emit(COMMUNITY_CHAT, this.resetChat);
  //   }
  // }
  componentWillUnmount() {
    // this.state.socket.emit('disconnect', this.state.user.username);
    this.state.socket.emit(USER_DISCONNECTED, this.state.user.username);
    this.state.socket.emit('disconnect', this.state.user.username);
    this.props.populateMessages([]);
    this.props.populateUsersList([]);
  }

  initSocket() {
    const socket = io(DEV_SERVER_URI);
    socket.on('connect', (messages) => {
      console.log("Client connected");
      this.setState({
        //status: 'socket connected'; // + DEV_SERVER_URI + socket.id,
        status: 'Socket connected',
        socket
      });
    });

    socket.on(MESSAGE_SENT, (data) => {
      this.props.addMessage(data.message, {
        username: data.username
      });
    });

    socket.on('disconnect', (users) => {
      // this.props.populateUsersList(users);
      if (!users.includes(this.state.user.username)) {
        console.log("disconnecting");
        this.props.populateMessages([]);
        this.props.populateUsersList([]);
        this.setState({
          connected: false,
          status: 'Socket disconnected'
        });
      } else {
        this.props.populateUsersList(users);
      }
    });

    socket.on(USER_CONNECTED, (data) => {
      console.log("new user connected");
      if (data.users.includes(this.state.user.username)) {
        this.props.populateUsersList(data.users);
        if (data.messages) {
          this.props.populateMessages(data.messages);
        }
        this.setState({
          connected: true,
          status: 'You have joined the chat'
        });
      } else {
        this.props.populateMessages([]);
        this.props.populateUsersList([]);
        this.setState({
          connected: false
        });
      }
    });

    socket.on(USER_DISCONNECTED, (users) => {
      // console.log(users);
      if (!users.includes(this.state.user.username)) {
        console.log("disconnecting");
        this.props.populateMessages([]);
        this.props.populateUsersList([]);
        this.setState({
          connected: false,
          status: 'You have left chat'
        });
      } else {
        this.props.populateUsersList(users);
      }
    });
  }

  addMessage(message) {
    this.props.addMessage(message, this.state.user);
    this.state.socket.emit('MESSAGE_SENT', {
      message,
      username: this.state.user.username
    });
  }

  handleJoinButton() {
    if (this.state.socket && this.state.user) {
      console.log("USER_CONNECTED");
      this.state.socket.emit(USER_CONNECTED, this.state.user.username);
    }
  }

  _getMe(path, o) {
    axios.post(path, o)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          user: res.data,
          status: 'You are logged in as ' + res.data.username
          // userID: res.data._id
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          status: 'Unable to load user data'
        });
      });
  }

  // resetChat = (chat) => {
  //   return this.addChat(chat, true);
  // }

  // addChat = (chat, reset) => {
  //   const {
  //     socket,
  //     chats
  //   } = this.state;
  //
  //   const newChats = reset ? [chat] : [...chats, chat];
  //
  //   this.setState({
  //     chats: newChats
  //   });
  //
  //   const messageEvent = `${MESSAGE_RECEIVED}-${chat.id}`;
  //   const typingEvent = `${TYPING}-${chat.id}`;
  //
  //   socket.on(typingEvent);
  //   socket.on(messageEvent, this.addMessageToChat(chat.id));
  // }

  // addMessageToChat = (chatId) => {
  //   return message => {
  //     const {
  //       chats
  //     } = this.state;
  //     // TODO: Why is this a map method. This seems like it could be done better.
  //     let newChats = chats.map((chat) => {
  //       if (chat.id === chatId) {
  //         chat.messages.push(message);
  //       }
  //       return chat;
  //     });
  //     this.setState({
  //       chats: newChats
  //     });
  //   }
  // }

  // updateTypingInChat = (chatId) => {
  //
  // }

  // setChatUser = (user) => {
  //   this.state.socket.emit(USER_CONNECTED, user);
  //   this.setState({
  //     user
  //   });
  // }

  // leaveChat = () => {
  //   this.state.socket.emit(LOGOUT);
  //   this.setState({
  //     user: null
  //   });
  // }

  // sendMessage = (chatId, message) => {
  //   const {
  //     socket
  //   } = this.state;
  //   socket.emit(MESSAGE_SENT, {
  //     chatId,
  //     message
  //   });
  // }
  //
  // sendIsTyping = (chatId, isTyping) => {
  //   const {
  //     socket
  //   } = this.state;
  //   socket.emit(TYPING, {
  //     chatId,
  //     isTyping
  //   });
  // }

  handleLeaveButton() {
    this.props.populateMessages([]);
    this.props.populateUsersList([]);
    this.state.socket.emit(USER_DISCONNECTED, this.state.user.username);
    this.setState({
      connected: false
    });
  }

  conditionalConnected() {

    const {
      activeChat,
      user,
      status
    } = this.state;

    if (!this.state.connected) {
      return <p>Status: **{status}** <button onClick={this.handleJoinButton.bind(this)}>Join</button></p>;
    } else {
      return (
        <div style={{width: "100%"}}>
          <button onClick={this.handleLeaveButton.bind(this)}>Leave</button>
          <p>Status: **{status}** </p>
          {/* <p>**{status}**</p> */}

          <UsersList users={this.props.users}/>
          <MessagesList messages={this.props.messages} user={user}/>
          <MessageInput
            // sendMessage={(message) => {
            //   this.sendMessage(activeChat.id, message);
            // }}
            // sendIsTyping={(isTyping) => {
            //   this.sendIsTyping(activeChat.id, isTyping);
            // }}
            addMessage={this.addMessage.bind(this)}
            connected={this.state.connected}
          />
        </div>
      );
    }
  }

  render() {


    const tempStyle = {
      // height: "220px",
      width: "420px",
      maxHeight: "600px",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      background: this.props.uiColor,
      zIndex: "100",
      padding: "10px",
      marginBottom: "10px",
      overflow: "auto"
    }

    // console.log(this.props.users);

    return (
      <div style={tempStyle}>
        <h3>Global Chat</h3>
        {this.conditionalConnected()}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    messages: state.messages,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMessage,
    addUser,
    populateUsersList,
    populateMessages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
// export default Chat;
