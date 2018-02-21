import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

// import {
//   Link
// } from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

import MessagesList from '../components/MessagesList/MessagesList.js';

const getMyMessagesPath = 'messages/find';

const cardStyle = {
  width: "46%",
  display: "flex",
  flexFlow: "column",
  background: "#313e6d",
  color: "white",
  marginBottom: "10px",
  // boxShadow: "3px 3px #48578e",
  boxShadow: "0px 0px 5px 2px #18192F",
  border: "2px solid #48578e",
  padding: "20px"
}

const textStyle = {
  color: "white",
}

const pageStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  minHeight: "100vh",
  background: "#212a49"
}

class MessagesPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      error: false,
    }
  }

  componentDidMount() {
    this._getMessages();
  }

  _getMessages() {
    const obj = {
      token: this.props.token
    }
    axios.post(DEV_SERVER_URI + getMyMessagesPath, obj)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          messages: res.data
        });
      })
      .catch((err) => {
        console.log(err.messages);
        this.setState({
          error: true
        });
      });
  }

  _handleRetryButton() {
    this._getMessages();
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>Error Loading Messages List</h3>
          <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={{width: "46%", padding: "20px"}}>
          <h2 style={textStyle}>Messages <button onClick={this._handleRetryButton.bind(this)}>Refresh</button></h2>
          <MessagesList messages={this.state.messages}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={pageStyle}>
        {this.conditionalRender()}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.token
//   };
// };
//
// export default connect(mapStateToProps, null)(MessagesPage);
export default MessagesPage;
