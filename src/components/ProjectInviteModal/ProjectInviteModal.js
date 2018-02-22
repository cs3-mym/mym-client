import React from 'react';
import axios from 'axios';

import {
  Link
} from 'react-router-dom';

// import {
//   connect
// } from 'react-redux';

import {
  DEV_SERVER_URI
} from '../../variables/connections.js';

const invitePath = 'invitations/create';
const getUsersPath = 'users/find';

const itemStyle = {
  width: "100%",
  background: "white"
}

const listStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center"
}

const inputStyle = {
  background: "#18192F",
  border: "0px solid",
  outline: "none",
  color: "white"
}

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

// const textStyle = {
//   color: "white"
// }

const layoutStyle = {
  width: "100%",
  height: "100%"
}
const contentContainer = {
  width: "300px",
  height: "640px",
  background: "darkgray",
  display: "flex",
  flexFlow: "column",
  padding: "10px",
  overflow: "auto"
}

const textStyle = {
  lineHeight: 1,
  fontSize: "1em"
}

const headerStyle = {
  fontSize: "1.6em"
}

class InviteModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      error: false,
      submitted: false,
      inviteError: false,
      input: '',
      invite: ''
    }
  }

  componentDidMount() {
    this._getUsers();
  }

  _getUsers() {
    const options = {
      options: {
        select: 'username skills interests'
      }
    };

    axios.post(DEV_SERVER_URI + getUsersPath, options)
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data,
          error: false
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
    this._getUsers();
  }

  _handleInviteAnotherButton() {
    this.setState({
      submitted: false,
      inviteError: false
    });
  }

  _handleInviteButton(id) {
    // Post to the invite creation path.
    // post object should include token, projectid, and to.

    const post = {
      token: this.props.token,
      to: id,
      project: this.props.project._id
    };

    axios.post(DEV_SERVER_URI + invitePath, post)
      .then((res) => {
        this.setState({
          invite: res.data,
          inviteError: false,
          submitted: true
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          inviteError: true,
          submitted: true
        });
      });
  }

  _inputOnChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  _filterUsers() {
    if (this.state.input) {
      return this.state.users.filter((user) => {
        if (user.username.toLowerCase().includes(this.state.input) || user.skills.toLowerCase().includes(this.state.input) || user.interests.toLowerCase().includes(this.state.input)) {
          return true;
        }
        return false;
      });
    } else {
      return this.state.users;
    }
  }

  mapUsers() {
    return this._filterUsers().map((user, index) => {
      return (
        <div key={index} style={itemStyle}>
          <p><Link to={{pathname: `/user/${user.username}`}}>{user.username}</Link> <button onClick={() => this._handleInviteButton(user._id)}>Invite</button></p>
          <p style={textStyle}>Skills: {user.skills}</p>
          <p style={textStyle}>Interests: {user.interests}</p>
        </div>
      );
    });
  }

  conditionalRender() {
    if (this.state.submitted) {
      if (this.state.error) {
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._closeInviteModal()}>close</button>
            <div style={contentContainer}>
              <h3>Error</h3>
              <p>Unable to get data</p>
              <button onClick={this._handleRetryButton.bind(this)}>Retry</button>
            </div>
          </div>
        );
      } else {
        return (
          <div style={modalStyle}>
            <button onClick={() => this.props.actions._closeInviteModal()}>close</button>
            <div style={contentContainer}>
              <h3>Success</h3>
              <p>Your invite was sent.</p>
              <Link to={{pathname: `/invite/${this.state.invite._id}`}}>details</Link>
              <button onClick={this._handleInviteAnotherButton.bind(this)}>Invite Another</button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div style={modalStyle}>
          <button onClick={() => this.props.actions._closeInviteModal()}>close</button>
          <div style={contentContainer}>
            <div style={listStyle}>
              <h3>Send Invite</h3>
              <input onChange={this._inputOnChange.bind(this)} value={this.state.input}></input>
              {this.mapUsers()}
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={layoutStyle}>
        {this.conditionalRender()}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state
//   };
// };

export default InviteModal;
