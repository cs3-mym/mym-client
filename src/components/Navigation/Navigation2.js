import React from 'react';

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import {
  login,
  logout
} from '../../actions/authActions.js';

import {
  NavLink
} from 'react-router-dom';

const navContainer = {
  width: "100%",
  height: "50px",
  background: "#18192F"
};
const navTextContainer = {
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#18192F"
};
const logoTextStyle = {
  color: "white",
  marginLeft: "20px"
};
const navLinkStyle = {
  marginRight: "10px",
  color: "white"
};
const navLinkEdgeStyle = {
  marginRight: "20px",
  color: "white"
};
const linksContainer = {
  display: "flex",
  alignItems: "center",
  marginRight: "20px"
};


class Navigation extends React.Component {

  signOut(event) {
    event.preventDefault();
    this.props.logout(this.props.token);
  }

  conditionalButton() {
    if (this.props.token) {
      return (
        // <button onClick={this.signOut.bind(this)}>Logout</button>
        <NavLink style={navLinkEdgeStyle} to="/">Log Out</NavLink>
      );
    } else {
      return (
        <button>Login (Not working)</button>
      );
    }
  }

  render() {
    return (
      <div style={navContainer}>
        <div style={navTextContainer}>
          <h3 style={logoTextStyle}>MYM</h3>
          <div style={linksContainer}>
            <NavLink style={navLinkStyle} to="/welcome">Home</NavLink>

            <NavLink style={navLinkStyle} to="/workbench">Workbench</NavLink>

            <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
            <NavLink style={navLinkStyle} to="/users/search">Users</NavLink>
            <NavLink style={navLinkStyle} to="/requests/search">Requests</NavLink>
            {/* <NavLink style={navLinkStyle} to="/requests/search">Messages</NavLink> */}
            <NavLink style={navLinkStyle} to="/projects/search">Projects</NavLink>
            <NavLink style={navLinkStyle} to="/technology/search">Tech</NavLink>
            <NavLink style={navLinkStyle} to="/discussions/search">Discussions</NavLink>
            {this.conditionalButton()}
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToDispatch = (dispatch) => {
  return bindActionCreators({
    login,
    logout
  }, dispatch);
}

export default connect(null, mapActionsToDispatch)(Navigation);
