import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getMePath = 'users/me';

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

const defaultUser = {
  username: 'unknown',
  email: 'n/a',
  projects: [],
  skills: [],
  interests: []
}

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      error: false,
      userID: ''
    }
  }

  componentDidMount() {
    const obj = {
      token: this.props.token
    }
    this._getMe(DEV_SERVER_URI + getMePath, obj);
  }

  _getMe(path, o) {
    axios.post(path, o)
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
          userID: res.data._id
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  _mapProjects() {
    return this.state.user.projects.map((proj, index) => {
      return <p key={index} style={textStyle}>{proj.title} <Link style={textStyle} to={`project/${proj._id}`}>more</Link></p>
    });
  }

  conditionalRender() {
    if (this.state.error) {
      return (
        <div style={cardStyle}>
          <h3 style={textStyle}>Unable to load item</h3>
        </div>
      );
    } else {
      return (
        <div style={pageStyle}>
          <h2 style={textStyle}>User Profile Page</h2>
          <p style={textStyle}>{this.state.user.email}</p>
          <p style={textStyle}>{this.state.user.username}</p>
          <Link style={textStyle} to="/messages">Messages</Link>
          <Link style={textStyle} to="/welcome">Projects</Link>
          <Link style={textStyle} to="/invites">Invites</Link>
          <Link style={textStyle} to="/welcome">Contributions</Link>
          <h3 style={textStyle}>Projects</h3>
          {this._mapProjects()}
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

// export default connect(mapStateToProps, null)(UserProfilePage);

export default UserProfilePage;
