import React from 'react';
import axios from 'axios';

// import {
//   connect
// } from 'react-redux';

import {
  Link
} from 'react-router-dom';

import MessageModal from '../components/SendMessageModal/MessageModal.js';
import ContributionModal from '../components/AddContributionModal/ContributionModal.js';

import {
  DEV_SERVER_URI
} from '../variables/connections.js';

const getUserPath = 'users/username/';
const followUserPath = 'users/followUser';
const getContributionsPath = 'contributions/read';

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

// const modalStyle = {
//   width: "100%",
//   height: "100%",
//   background: "rgba(0,0,0,0.3)",
//   display: "flex",
//   flexFlow: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   zIndex: "100",
//   position: "absolute",
//   left: "0",
//   top: '0'
// }
//
// const messageBoxStyle = {
//   width: "300px",
//   background: "darkgray",
//   display: "flex",
//   flexFlow: "column",
//   padding: "10px"
// }

class UserDetailsPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
      error: false,
      username: '',
      messageModal: false,
      contributionModal: false,
      contributions: [],
      message: ''
    }
  }

  componentDidMount() {
    this._getUser();
    this.getContributions();
  }

  handleRefreshButton() {
    this._getUser();
    this.getContributions();
  }

  getContributions() {
    const options = {
      options: {
        query: {
          toUsername: this.props.match.params.username
        }
      }
    }

    axios.post(DEV_SERVER_URI + getContributionsPath, options)
      .then((res) => {
        this.setState({
          contributions: res.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _getUser() {
    console.log('UserDetails _getUser()');

    const username = this.props.match.params.username;
    const obj = {
      token: this.props.token
    }

    axios.post(DEV_SERVER_URI + getUserPath + username, obj)
      .then((res) => {
        this.setState({
          user: res.data,
          username
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          error: true
        });
      });
  }

  getMyContributions() {
    const obj= {
      token: this.props.token
    }

    axios.post(DEV_SERVER_URI + getContributionsPath, obj)
    .then((res) => {
      this.setState({
        contributions: res.data
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  handleShowContributionModal() {
    this.setState({
      contributionModal: !this.state.contributionModal
    });
  }

  handleFollowButton() {
    const obj = {
      token: this.props.token,
      userID: this.state.user._id
    }

    axios.post(DEV_SERVER_URI + followUserPath, obj)
      .then((res) => {
        console.log("Success: Followed User");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _handleOpenModalButton() {
    this.setState({
      messageModal: true
    });
  }

  _handleCloseModalButton() {
    this.setState({
      messageModal: false
    });
  }

  _messageOnChange(event) {
    this.setState({
      message: event.target.value
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
    const skillsArr = this.state.user.skills.split(',').map((skill) => {
      return skill.trim();
    });
    return skillsArr.map((skill, index) => {
      return <p key={index} style={textStyle}>{skill}</p>;
    });
  }

  _mapProjects() {
    return this.state.user.projects.map((proj, index) => {
      return <Link style={textStyle} to={{pathname: `/project/${proj._id}`}}>{proj.title}</Link>;
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
      return <p style={textStyle}>({cont.confirmations.length.toString()}) <Link key={index} style={textStyle} to={`/contribution/${cont._id}`}>{cont.title}</Link></p>;
    });
  }

  conditionalModal() {
    const actions = {
      _handleCloseModalButton: this._handleCloseModalButton.bind(this)
    }
    if (this.state.messageModal) {
      return <MessageModal token={this.props.token} message={this.state.message} user={this.state.user} actions={actions}/>;
    }

    // if (this.state.messageModal) {
    //   return (
    //     <div style={modalStyle}>
    //       <button onClick={this._handleCloseModalButton.bind(this)}>close</button>
    //       <div style={messageBoxStyle}>
    //         <h3>Send Message</h3>
    //         <p>To: {this.state.username}</p>
    //         <textarea value={this.state.message} onChange={this._messageOnChange.bind(this)}></textarea>
    //         <button onClick={this._handleSubmitMessageButton.bind(this)}>Submit</button>
    //       </div>
    //     </div>
    //   );
    // }
  }

  conditionalContributionModal() {
    if (this.state.contributionModal) {
      const actions = {
        handleShowContributionModal: this.handleShowContributionModal.bind(this)
      };
      return <ContributionModal token={this.props.token} user={this.state.user} actions={actions}/>
    }
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
          <h2 style={textStyle}>User Details Page</h2>
          <div style={bottomContainer}>
            <div style={vertContainer}>
              <h3 style={headingStyle}>About</h3>
              <p style={textStyle}>{this.state.user.email}</p>
              <p style={textStyle}>{this.state.user.username}</p>
              <button onClick={this.handleFollowButton.bind(this)}>Follow</button>
              <button onClick={this.handleRefreshButton.bind(this)}>Refresh</button>
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
              <button onClick={this.handleShowContributionModal.bind(this)}>Add</button>
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
        <Link style={textStyle} to="/users/search">back</Link>
        {this.conditionalModal()}
        {this.conditionalContributionModal()}
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

export default UserDetailsPage;
