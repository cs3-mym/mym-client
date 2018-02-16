import React from 'react';
import axios from 'axios';

import UsersList from '../components/UsersList/UsersList.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const findUsersPath = 'users/find';

const errorContainer = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  border: "1px dotted white"
};
const textStyle = {
  color: "white"
};
const pageStyle = {
  width: "100%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  minHeight: "100vh"
};
const searchLabelStyle = {
  background: "#DFAE3B",
  color: "#18192F",
  padding: "5px"
};
const recentSearchContainer = {
  display: "flex",
  flexFlow: "row",
  width: "100%",
  justifyContent: "space-between"
};
const usersContainer = {
  width: "46%",
  background: "#212a49",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px"
};

class UserDepot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      input: '',
      error: false
    }
  }

  componentDidMount() {
    console.log("UsersDepot componentDidMount()");
    const options = {
      options: {}
    };
    this._getUsers(DEV_SERVER_URI + findUsersPath, options);
  }

  _setError(e) {
    console.log(e.message);
    this.setState({
      error: true
    });
  }

  _getUsers(path, o) {
    console.log('UsersDepot getUsers()');
    axios.post(path, o)
      .then((res) => {
        this.setState({
          users: res.data,
          error: false
        });
      })
      .catch((err) => {
        this._setError(err);
      })
  }

  filterUsers() {
    if (this.state.input) {
      return this.state.users.filter((user) => {
        if (user.username.toLowerCase().includes(this.state.input)) {
          return true;
        }
        return false;
      });
    } else {
      return this.state.users;
    }
  }

  handleChange(event) {
    // event.preventDefault();
    // console.log("UsersDepot handleChange()");
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit() {
    console.log("UsersDepot handleSubmit()");
    this._getUsers(DEV_SERVER_URI + findUsersPath);
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={errorContainer}>
          <h3 style={textStyle}>Error Loading Users List</h3>
          <button onClick={this.handleSubmit.bind(this)}>Retry</button>
        </div>
      );
    } else {
      return (
        <div style={usersContainer}>
          <h2 style={textStyle}>User Search</h2>
          <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} style={{background: "#18192F", border: "0px solid", outline: "none", color: "white"}}/>
          <div style={recentSearchContainer}>
            <p style={searchLabelStyle}>email:jon@me.com</p>
            {/* <p style={searchLabelStyle}>email:steve@me.com</p> */}
            <p style={searchLabelStyle}>tech:nodejs</p>
            <p style={searchLabelStyle}>skill:frontend</p>
            <p style={searchLabelStyle}>interest:backend</p>
          </div>
          <UsersList users={this.filterUsers()}/>
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

export default UserDepot;
