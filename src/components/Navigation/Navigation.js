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

class Navigation extends React.Component {

  signOut(event) {
    event.preventDefault();
    this.props.logout(this.props.token);
  }

  conditionalButton() {
    if (this.props.token) {
      return (
        <button onClick={this.signOut.bind(this)}>Logout</button>
      );
    } else {
      return (
        <button>Login (Not working)</button>
      );
    }
  }

  conditionalRender() {
    if (this.props.token) {
      return (
        <div style={{width: "100%", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#18192F"}}>
          <h3 style={{color: "white", marginLeft: "20px"}}>MYM</h3>
          <div style={{display:"flex", alignItems: "center", marginRight: "20px"}}>
            {this.conditionalButton()}
            <NavLink style={{marginRight: "10px", color: "white"}} to="/welcome">Home</NavLink>
            <NavLink style={{marginRight: "10px", color: "white"}} to="/workbench">Workbench</NavLink>
            <NavLink style={{marginRight: "10px", color: "white"}} to="/projects/search">Projects</NavLink>
            <NavLink style={{marginRight: "10px", color: "white"}} to="/tech/search">Tech</NavLink>
            <NavLink style={{marginRight: "20px", color: "white"}} to="/discussions/search">Discussions</NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <p style={{color: "lightgray"}}>No Token, signed out</p>
      );
    }
  }

  render() {
    return (
      <div style={{width: "100%", height: "50px", background: "#18192F"}}>
        {this.conditionalRender()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state
  };
}

const mapActionsToDispatch = (dispatch) => {
  return bindActionCreators({
    login,
    logout
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToDispatch)(Navigation);
