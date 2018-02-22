import React from 'react';
import axios from 'axios';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const createMessagePath = 'messages/create';

const modalStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.3)",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100",
  position: "absolute",
  left: "0",
  top: '0'
}

const messageBoxStyle = {
  width: "300px",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  padding: "10px"
}

class SendMessageModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageObj: '',
      submitted: false,
      error: false
    }
  }

  _messageOnChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  _handleSubmitMessageButton() {
    const obj = {
      token: this.props.token,
      user: this.props.user,
      text: this.state.message
    }
    axios.post(DEV_SERVER_URI + createMessagePath, obj)
      .then((res) => {
        this.setState({
          submitted: true,
          messageObj: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  _handleRetryButton() {
    this.setState({
      error: false,
      submitted: false,
      message: '', 
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (this.state.error && !this.state.messageObj) {
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._handleCloseModalButton()}>close</button>
            <div style={messageBoxStyle}>
              <h3>Error</h3>
              <p>Unable to send message to {this.props.user.username}</p>
              <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
            </div>
          </div>
        );
      } else {
        // this is where the confirmation is shown. and a link to that message object
        // Link /message/:messageID
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._handleCloseModalButton()}>close</button>
            <div style={messageBoxStyle}>
              <h3>Success</h3>
              <p>Your message has been sent to {this.props.user.username}</p>
              <Link to={{pathname: `/message/${this.state.messageObj._id}`}}>details</Link>
              <button onClick={this._handleRetryButton.bind(this)}>Submit Another</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div style={modalStyle}>
          <button onClick={() => this.props.actions._handleCloseModalButton()}>close</button>
          <div style={messageBoxStyle}>
            <h3>Send Message</h3>
            <p>To: {this.props.username}</p>
            <textarea value={this.state.message} onChange={this._messageOnChange.bind(this)}></textarea>
            <button onClick={this._handleSubmitMessageButton.bind(this)}>Submit</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default SendMessageModal;
