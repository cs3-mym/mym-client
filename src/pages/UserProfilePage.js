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
const getMyContributionsPath = 'contributions/me';

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
  fontSize: "1em",
  lineHeight: 1,
  margin: "0"
}

const headingStyle = {
  color: "white",
  fontSize: "1.6em"
}

const pageStyle = {
  width: "100%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  minHeight: "100vh",
  background: "#212a49"
}

const bottomContainer = {
  display: "flex",
  height: "420px",
  width: "100%"
}

const vertContainer = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  flex: 1
}

const defaultUser = {
  username: 'unknown',
  email: 'n/a',
  projects: [],
  skills: '',
  interests: '',
  favoriteTech: [],
  follows: [],
  discussionFollows: [],
  projectFollows: [],
  discussionFollows:[]
}

class UserProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      error: false,
      userID: '',
      contributions: []
    }
  }

  componentDidMount() {
    const obj = {
      token: this.props.token
    }
    this._getMe(DEV_SERVER_URI + getMePath, obj);
    this.getContributions();
  }

  _getMe(path, o) {
    axios.post(path, o)
      .then((res) => {
        // console.log(res.data);
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

  getContributions() {
    const obj = {
      token: this.props.token
    }

    axios.post(DEV_SERVER_URI + getMyContributionsPath, obj)
      .then((res) => {
        this.setState({
          contributions: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  mapInterests() {
    const interestArr = this.state.user.interests.split(',').map((interest) => {
      return interest.trim();
    });
    return interestArr.map((interest, index) => {
      return <p key={index} style={textStyle}>{interest}</p>;
    });
  }

  mapSkills() {
    const skArr = this.state.user.skills.split(',').map((sk) => {
      return sk.trim();
    });
    return skArr.map((sk, index) => {
      return <p key={index} style={textStyle}>{sk}</p>;
    });
  }

  _mapProjects() {
    return this.state.user.projects.map((proj, index) => {
      return <Link key={index} style={textStyle} to={`/project/${proj._id}`}>{proj.title}</Link>;
    });
  }

  mapFollows() {
    return this.state.user.follows.map((user, index) => {
      return <Link key={index} style={textStyle} to={`/user/${user.username}`}>{user.username}</Link>;
    });
  }

  mapFavoriteTech() {
    return this.state.user.favoriteTech.map((tech, index) => {
      return <Link key={index} style={textStyle} to={`/tech/${tech._id}`}>{tech.name}</Link>;
    });
  }

  mapFollowedProjects() {
    return this.state.user.projectFollows.map((proj, index) => {
      return <Link key={index} style={textStyle} to={`/proj/${proj._id}`}>{proj.title}</Link>;
    });
  }

  mapFollowedDiscussions() {
    return this.state.user.discussionFollows.map((disc, index) => {
      return <Link key={index} style={textStyle} to={`/discussion/${disc._id}`}>{disc.title}</Link>;
    });
  }

  mapContributions() {
    return this.state.contributions.map((cont, index) => {
      return <p key={index} style={textStyle}>({cont.confirmations.length.toString()}) <Link style={textStyle} to={`/contribution/${cont._id}`}>{cont.title}</Link></p>;
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
          {/* <Link style={textStyle} to="/welcome">Projects</Link> */}          
          {/* <Link style={textStyle} to="/welcome">Contributions</Link> */}
          <div style={bottomContainer}>
            <div style={vertContainer}>
              <h3 style={headingStyle}>About</h3>
              <p style={textStyle}>{this.state.user.email}</p>
              <p style={textStyle}>{this.state.user.username}</p>
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Other</h3>
              <Link style={textStyle} to="/messages">Messages</Link>
              <Link style={textStyle} to="/invites">Invites</Link>
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Skills</h3>
              {this.mapSkills()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Interests</h3>
              {this.mapInterests()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Active Projects</h3>
              {this._mapProjects()}
            </div>
          </div>
          <div style={bottomContainer}>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Favorited Tech</h3>
              {this.mapFavoriteTech()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Followed Projects</h3>
              {this.mapFollowedProjects()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Contributions</h3>
              <p style={textStyle}>Total: {this.state.contributions.length.toString()}</p>
              {this.mapContributions()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Followed Users</h3>
              {this.mapFollows()}
            </div>
            <div style={vertContainer}>
              <h3 style={headingStyle}>Followed Discussions</h3>
              {this.mapFollowedDiscussions()}
            </div>
          </div>
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
