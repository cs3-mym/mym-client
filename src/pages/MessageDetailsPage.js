import React from 'react';
import axios from 'axios';

import {
  connect
} from 'react-redux';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

import UnableToLoad from '../components/UnableToLoad/UnableToLoad.js';

const getMessagePath = 'messages/one';

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

const defaultMessage = {
  from: {
    username: "n/a"
  },
  to: {
    username: "n/a"
  },
  text: 'n/a',
  priority: '1'
}

class MessageDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: defaultMessage,
      error: false
    }
  }

  componentDidMount() {
    this._getMessage();
  }

  _getMessage() {
    const mID = this.props.match.params.messageID;
    const obj = {
      token: this.props.token,
      messageID: mID
    }
    axios.post(DEV_SERVER_URI + getMessagePath, obj)
      .then((res) => {
        this.setState({
          message: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  conditionalRender() {
    if (this.state.error) {
      return <UnableToLoad/>;
    } else {
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>From: {this.state.message.from.username}</h3>
          <p style={textStyle}>Priority</p>
          <p style={textStyle}>{this.state.message.text}</p>
          <button>Edit (n/a)</button>
          <button>Archive (n/a)</button>
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

const mapStateToProps = (state) => {
  return {
    token: state
  }
}

export default connect(mapStateToProps, null)(MessageDetailsPage);
