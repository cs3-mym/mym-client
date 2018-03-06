import React from 'react';
import axios from 'axios';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

import {
  connect
} from 'react-redux';

import {
  Link
} from 'react-router-dom';

// const removeMessagePath = 'messages/remove';
const archiveMessagePath = 'messages/archive';
const unarchiveMessagePath = 'messages/unarchive';

const textStyle = {
  color: "white"
};

const archivedTextStyle = {
  color: "darkgray"
};

const basicConatiner = {
  width: "100%"
};
const pageContainer = {
  width: "100%",
  marginBottom: "10px",
  background: "#18192F",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

class MessageItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      removedMessage: ''
    }
  }

  // _handleDeleteButton() {
  //   const obj = {
  //     token: this.props.token,
  //     messageID: this.props.message._id
  //   }
  //   axios.post(DEV_SERVER_URI + removeMessagePath, obj)
  //     .then((res) => {
  //       this.setState({
  //         removedMessage: res.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }

  _handleArchiveButton() {
    const obj = {
      token: this.props.token,
      messageID: this.props.message._id
    }
    axios.post(DEV_SERVER_URI + archiveMessagePath, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _handleUnarchiveButton() {
    const obj = {
      token: this.props.token,
      messageID: this.props.message._id
    }
    axios.post(DEV_SERVER_URI + unarchiveMessagePath, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  conditionalRender() {
    if (this.removedMessage) {
      return (
        <div style={basicConatiner}>
          <p style={archivedTextStyle}>** This message has been deleted **</p>
          <p style={archivedTextStyle}>{this.props.message.text}</p>
        </div>
      );
    } else {
      if (this.props.message.status === 'archived') {
        return (
          <div style={basicConatiner}>
            <p style={archivedTextStyle}>** Archived **</p>
            <p style={archivedTextStyle}>{this.props.message.text}</p>
            <Link style={textStyle} to={{pathname: `/message/${this.props.message._id}`}}>more</Link>
            <button onClick={this._handleUnarchiveButton.bind(this)}>Unread / Unrchive</button>
          </div>
        );
      } else {
        return (
          <div style={basicConatiner}>
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <p style={textStyle}>From: {this.props.message.from.username} <button onClick={this._handleArchiveButton.bind(this)}>Read / Archive</button></p>
              <Link style={textStyle} to={{pathname: `/message/${this.props.message._id}`}}>more</Link>
            </div>
            <p style={textStyle}>{this.props.message.text}</p>
            
            {/* <button onClick={this._handleDeleteButton.bind(this)}>delete</button> */}
            
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div style={pageContainer}>
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
};

export default connect(mapStateToProps, null)(MessageItem);
